// Converts scripts/source/arturo.jpg into a character grid (src/data/portrait.json).
// Run: npm run portrait
import sharp from 'sharp';
import { writeFileSync } from 'node:fs';

const SRC = 'scripts/source/arturo.jpg';
const CROP = { left: 500, top: 100, width: 700, height: 900 };
const COLS = 110;
const CELL_ASPECT = 0.5; // glyph width / line height
const ROWS = Math.round(COLS * (CROP.height / CROP.width) * CELL_ASPECT);
// light -> dark
const RAMP = ' .,:;-=+*#%@';
const EYES = { // centres in source pixels
  left: { x: 752, y: 544 },
  right: { x: 958, y: 530 },
};

const base = () => sharp(SRC).rotate().extract(CROP).grayscale();
const grid = (img) => img
  .resize(COLS, ROWS, { fit: 'fill', kernel: 'lanczos3' })
  .raw().toBuffer({ resolveWithObject: true });
// mask comes from the untouched photo (skin and hair are darker than the wall);
// tone comes from a local-contrast pass so features survive inside the mask
const { data: raw, info } = await grid(base().blur(2.5));
const { data: tone } = await grid(base().sharpen({ sigma: 2, m1: 1.5, m2: 2 }).blur(0.6));

const FG = 0.70; // original luminance below this is "subject"
const LIGHT = 0.72, DARK = 0.02; // tone window, after local contrast
const GAMMA = 1.35;
const HAIR = 0.22; // original luminance below this is hair: kept mid-dense so it reads as texture, not a block
const eyeCell = (e) => ({
  col: ((e.x - CROP.left) / CROP.width) * COLS,
  row: ((e.y - CROP.top) / CROP.height) * ROWS,
});
const eyes = { left: eyeCell(EYES.left), right: eyeCell(EYES.right) };

const lines = [];
for (let r = 0; r < ROWS; r++) {
  let line = '';
  for (let c = 0; c < COLS; c++) {
    const m = raw[r * info.width + c] / 255;
    const v = tone[r * info.width + c] / 255;
    // blank the iris so the live pupil is the only dark mark there
    let blank = false;
    for (const e of Object.values(eyes)) {
      const dx = (c + 0.5 - e.col) / 3.6;
      const dy = (r + 0.5 - e.row) / 2.0;
      if (dx * dx + dy * dy < 1) blank = true;
    }
    const u = (c + 0.5) / COLS, w = (r + 0.5) / ROWS;
    // soft egg around the head so the wall's cast shadow dissolves instead of being cut
    const rho = ((u - 0.5) / 0.47) ** 2 + ((w - 0.46) / 0.5) ** 2;
    const neck = ((u - 0.5) / 0.24) ** 2 + ((w - 0.85) / 0.3) ** 2;
    const reach = Math.min(rho, w > 0.6 ? neck : Infinity);
    const fade = reach < 0.7 ? 1 : Math.max(0, 1 - (reach - 0.7) / 0.3);
    if (blank || m > FG || fade <= 0) { line += ' '; continue; }
    let t = Math.min(1, Math.max(0, Math.pow(Math.max(0, (LIGHT - v) / (LIGHT - DARK)), GAMMA)));
    if (m < HAIR) t = 0.42 + 0.34 * t; // hair: '+'..'%' band, strands come from the tone variation
    t *= fade;
    line += RAMP[Math.min(RAMP.length - 1, Math.floor(t * RAMP.length))];
  }
  lines.push(line.replace(/\s+$/, ''));
}

writeFileSync('src/data/portrait.json', JSON.stringify({
  cols: COLS, rows: ROWS, text: lines.join('\n'),
  eyes: {
    left: { col: +eyes.left.col.toFixed(2), row: +eyes.left.row.toFixed(2) },
    right: { col: +eyes.right.col.toFixed(2), row: +eyes.right.row.toFixed(2) },
  },
}, null, 1));
console.log(`portrait ${COLS}x${ROWS}`, eyes);

// preview PNG for visual checking
const esc = (s) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;');
const fs = 10, cw = fs * 0.6;
const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${COLS * cw}" height="${ROWS * fs}" viewBox="0 0 ${COLS * cw} ${ROWS * fs}"><rect width="100%" height="100%" fill="#f3efe6"/>${lines.map((l, i) => `<text x="0" y="${(i + 0.8) * fs}" font-family="Courier New, monospace" font-size="${fs}" xml:space="preserve" fill="#16140f" textLength="${l.length * cw}">${esc(l)}</text>`).join('')}</svg>`;
await sharp(Buffer.from(svg)).png().toFile(process.env.PREVIEW || 'scripts/portrait-preview.png');
