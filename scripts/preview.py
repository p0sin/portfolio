import json,sys
from PIL import Image, ImageDraw, ImageFont
d=json.load(open('src/data/portrait.json'))
f=ImageFont.truetype('/System/Library/Fonts/Menlo.ttc',11)
cw=f.getlength('M'); lh=13
img=Image.new('RGB',(int(cw*d['cols'])+4,lh*d['rows']+4),'#f3efe6')
dr=ImageDraw.Draw(img)
for i,l in enumerate(d['text'].split('\n')): dr.text((2,2+i*lh),l,font=f,fill='#16140f')
for e in d['eyes'].values():
    x=2+e['col']*cw; y=2+e['row']*lh
    dr.ellipse((x-3,y-3,x+3,y+3),fill='#bf2e16')
img.save(sys.argv[1])
