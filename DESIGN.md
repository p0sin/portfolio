---
name: Arturo Pulido Portfolio
description: A lab notebook in ink on warm paper, where ASCII art is the visual language and one vermilion stamp marks what matters.
colors:
  warm-paper: "#f1ece0"
  paper-shade: "#e8e2d3"
  lab-ink: "#16140f"
  soft-ink: "#4d483d"
  stamp-vermilion: "#b82b14"
typography:
  display:
    fontFamily: "Instrument Serif, Times New Roman, serif"
    fontSize: "clamp(3.4rem, 8.4vw, 6rem)"
    fontWeight: 400
    lineHeight: 0.95
    letterSpacing: "-0.02em"
  headline:
    fontFamily: "Instrument Serif, Times New Roman, serif"
    fontSize: "clamp(2.1rem, 4.4vw, 3.4rem)"
    fontWeight: 400
    lineHeight: 1.05
    letterSpacing: "-0.01em"
  title:
    fontFamily: "Instrument Serif, Times New Roman, serif"
    fontSize: "clamp(1.9rem, 3.4vw, 2.6rem)"
    fontWeight: 400
    lineHeight: 1.05
    letterSpacing: "-0.01em"
  statement:
    fontFamily: "Instrument Serif, Times New Roman, serif"
    fontSize: "clamp(1.5rem, 2.6vw, 2.1rem)"
    fontWeight: 400
    lineHeight: 1.2
  body:
    fontFamily: "Fragment Mono, ui-monospace, SF Mono, Menlo, monospace"
    fontSize: "0.9375rem"
    fontWeight: 400
    lineHeight: 1.65
  label:
    fontFamily: "Fragment Mono, ui-monospace, SF Mono, Menlo, monospace"
    fontSize: "0.8125rem"
    fontWeight: 400
    lineHeight: 1.5
rounded:
  none: "0px"
spacing:
  gutter: "clamp(1rem, 4vw, 2.5rem)"
  section: "clamp(3.5rem, 8vw, 7rem)"
  case-gap: "clamp(3.5rem, 7vw, 6rem)"
components:
  button-solid:
    backgroundColor: "{colors.lab-ink}"
    textColor: "{colors.warm-paper}"
    rounded: "{rounded.none}"
    padding: "0.7rem 1.1rem 0.65rem"
  button-solid-hover:
    backgroundColor: "{colors.stamp-vermilion}"
    textColor: "{colors.warm-paper}"
  button-outline:
    backgroundColor: "transparent"
    textColor: "{colors.lab-ink}"
    rounded: "{rounded.none}"
    padding: "0.7rem 1.1rem 0.65rem"
  button-outline-hover:
    backgroundColor: "{colors.lab-ink}"
    textColor: "{colors.warm-paper}"
  diagram-panel:
    backgroundColor: "{colors.paper-shade}"
    textColor: "{colors.lab-ink}"
    rounded: "{rounded.none}"
    padding: "1.5rem"
---

# Design System: Arturo Pulido Portfolio

## Overview

**Creative North Star: "The Lab Notebook"**

The site reads like a printed engineering notebook: warm paper, near-black ink, and every diagram drawn in plain ASCII characters because that is how an engineer sketches a pipeline. Nothing glows, nothing floats. Hierarchy comes from type scale, ruled lines made of dashes, and the occasional vermilion stamp.

The ASCII is functional, not decorative. The hero portrait is Arturo's own photo converted to characters, with two live `@` pupils that follow the cursor. Architecture diagrams are the proof of work, so they sit beside the prose as the evidence, not as illustrations.

The visual anti-reference is the dark, neon red-and-blue AI-portfolio look. No glow, no gradient, no glass.

**Key Characteristics:**
- Ink on warm paper, with one vermilion accent used sparingly.
- Monospace for the system, a condensed serif for voice.
- Pure ASCII for rules, arrows and diagrams (`+`, `-`, `|`, `>`, `v`).
- Square, flat, bracketed controls: `[ Download CV ]`.
- One authored motion: the portrait types in, then the eyes appear.

## Colors

A restrained two-ink palette on paper: near-black does the work, vermilion marks.

### Primary
- **Stamp Vermilion** (#b82b14): the only accent. Used for the pupils, list ticks (`>`), the flow arrows (`--->`), link hover and the hover state of the solid button. Its rarity is the point.

### Neutral
- **Warm Paper** (#f1ece0): page background, with a faint fractal-noise grain at about 35% opacity over it.
- **Paper Shade** (#e8e2d3): the diagram panels, one step darker than the page.
- **Lab Ink** (#16140f): body text, headlines, borders, rules and the solid button fill.
- **Soft Ink** (#4d483d): secondary text such as ledes, stack lines and metadata. About 8:1 on paper.

### Named Rules
**The One Stamp Rule.** Vermilion appears as a mark, never as a surface. No vermilion backgrounds behind text blocks, no vermilion headlines.

**The Tinted Neutrals Rule.** There is no pure black or white. Every neutral carries the warm paper hue.

## Typography

**Display Font:** Instrument Serif (with Times New Roman, serif)
**Body Font:** Fragment Mono (with ui-monospace, SF Mono, Menlo)

**Character:** A tall, narrow serif speaks in headlines and the hero statement; a light monospace carries everything that is data, label, code or running text. The contrast between the two is the whole type system.

### Hierarchy
- **Display** (400, clamp(3.4rem, 8.4vw, 6rem), 0.95): the name in the hero only.
- **Headline** (400, clamp(2.1rem, 4.4vw, 3.4rem), 1.05): section titles, max 22ch, balanced.
- **Title** (400, clamp(1.9rem, 3.4vw, 2.6rem), 1.05): case-study names.
- **Statement** (400 italic, clamp(1.5rem, 2.6vw, 2.1rem), 1.2): the hero line, max 34ch.
- **Body** (400, 0.9375rem, 1.65): running text in Fragment Mono, lists capped near 56ch.
- **Label** (400, 0.8125rem): nav, stack lines, metadata, footer.

### Named Rules
**The Mono Is Data Rule.** Monospace carries prose only because the whole world is a notebook of data; it is never used as a costume on a different layout.

**The No Ligature Rule.** Ligatures and contextual alternates are off (`font-variant-ligatures: none`), so `->` and `==` stay literal characters and ASCII diagrams stay aligned.

## Layout

A single page in a 76rem max-width wrap with a fluid gutter (`clamp(1rem, 4vw, 2.5rem)`). Every section opens with a dashed ASCII rule (`+----…`), then a serif headline, then content.

The hero is a two-column split (copy 1.05fr, portrait 1fr). Case studies are two-column pairs (prose and diagram) that alternate sides on even rows. At 62rem everything collapses to one column; at 40rem the nav stacks and the diagram font steps down so the diagrams still fit. Section rhythm is generous (`clamp(3.5rem, 8vw, 7rem)`) with tight internal groups.

## Elevation & Depth

Flat. There are no shadows. Depth is conveyed by a tonal step (Paper Shade panels on Warm Paper) and 1px Lab Ink borders. The paper grain is the only atmosphere.

### Named Rules
**The Flat Paper Rule.** Nothing lifts. State changes are inversions of ink and paper, not elevation.

## Shapes

Square. Radius is 0 everywhere. Frames are 1px solid Lab Ink; secondary dividers are 1px at 28% ink. Controls are bracketed with literal characters (`[ ` and ` ]`) added through pseudo-elements, so screen readers do not read them.

## Components

### Buttons
- **Shape:** square, 1px Lab Ink border, bracketed label.
- **Solid:** Lab Ink fill, Warm Paper text, padding 0.7rem 1.1rem 0.65rem. Hover turns Stamp Vermilion.
- **Outline:** transparent, Lab Ink text. Hover inverts to Lab Ink fill.
- **Focus:** 2px Stamp Vermilion outline, 3px offset. Transitions are 180ms, exponential ease-out.

### Links
- Lab Ink with a 1px underline offset 0.28em; hover turns Stamp Vermilion. Nav links are underlined only on hover.

### Diagram Panel
- Paper Shade fill, 1px Lab Ink border, 0.8125rem monospace at 1.35 line-height, padding up to 1.5rem. Horizontally scrollable and keyboard focusable. Carries a full text `aria-label` describing the diagram.

### Skills Table
- A definition list with a Lab Ink top rule and 28% ink row dividers; group names in Lab Ink. Items are Soft Ink and separated by vermilion `/` marks. Background reuses the same rows (label, title, metadata).

### ASCII Portrait (signature component)
- A 110×71 character grid built at build time from the photo, sized from its container so it scales with the column. Hair is kept in a mid-dense band so it reads as texture; the face keeps local contrast. Two `@` pupils in Stamp Vermilion at 1.9em sit in blanked eye sockets and track the cursor from their own sockets, with easing; they wander slowly when no pointer is present and hold still under `prefers-reduced-motion`. It reveals top to bottom once on load.

## Do's and Don'ts

### Do:
- **Do** draw rules, arrows and diagrams with plain ASCII characters.
- **Do** keep vermilion to marks: pupils, ticks, arrows, hover.
- **Do** invert ink and paper for emphasis and hover.
- **Do** keep every claim traceable to the CV; diagrams show only what it states.
- **Do** give every ASCII figure a real text alternative.

### Don't:
- **Don't** use gradients, glow, glass, neon or a dark neon-on-black treatment.
- **Don't** add shadows or radii.
- **Don't** put vermilion behind blocks of text.
- **Don't** use eyebrows above headings, section numbers, or same-size icon cards.
- **Don't** enable font ligatures: they corrupt the ASCII.
