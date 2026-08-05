# Brand assets

Every image path referenced in `lib/content.ts` and the components is present —
the site currently renders with no broken images. Use this file as the map when
replacing an asset or adding a new one.

In Figma: select the layer → right panel → Export → PNG (2x) or SVG → Export.

## Root — logo, home cards, testimonial avatars

| File            | What it is                                | Format |
|-----------------|-------------------------------------------|--------|
| logo.png        | Fane logo (nav bar, dark version)         | PNG 2x |
| logo-white.png  | Fane logo (footer, white). 546×254 = 2x of the 273×127 footer size | PNG 2x |
| work-1.png      | Selected Works card 1 (Moderno)           | PNG 2x |
| work-2.png      | Selected Works card 2 (Zenvoy)            | PNG 2x |
| work-3.png      | Selected Works card 3 (Laferay)           | PNG 2x |
| work-4.png      | Selected Works card 4 (Visual identity)   | PNG 2x |
| avatar-1.png    | Home testimonial — Marian, Food Rush & Treats  | PNG 2x |
| avatar-2.png    | Home testimonial — Julius T, Healthco          | PNG 2x |
| avatar-3.png    | Home testimonial — Mo Lauren, Moderno Furnitures | PNG 2x |
| avatar-4.png    | Home testimonial — Daniel Ace, AcePlayHouse    | PNG 2x |

The avatars are circle-cropped for the home testimonial strip. The service detail
pages use uncropped portraits of the same people in a rectangular frame — those
live at `services/<slug>/testimonial.png`, not here. Keep filenames free of
spaces and colons: a colon is illegal on Windows and breaks clones there.

## Service gallery images (expandable Services section)

Each service row expands to show 3 images, in `gallery/`:

| Service                  | Files                                                            |
|--------------------------|------------------------------------------------------------------|
| Brand / Graphic Design   | brand-design-1.png, brand-design-2.png, brand-design-3.png       |
| Product & UI/UX Design   | product-design-1.png, product-design-2.png, product-design-3.png |
| Web Design & Development | web-1.png, web-2.png, web-3.png                                  |
| Mobile Application       | mobile-1.png, mobile-2.png, mobile-3.png                         |

**AI Video Creation and Custom Software have no gallery on purpose.** Their
`gallery` key was removed from `lib/content.ts`, and both render sites guard on
it (`{s.gallery && …}`), so those two rows expand straight to the REQUEST SERVICE
button with no placeholder tiles. To give either one imagery later, drop three
files in `gallery/` and add the `gallery` array back to that service — the guards
pick it up automatically.

## Service detail pages (Dive Deeper)

Four pages, each with a related-work trio + one testimonial portrait, in
`services/<slug>/` as work-1/2/3.png + testimonial.png. All populated:

| Slug           | work-1      | work-2       | work-3   | testimonial (portrait)        |
|----------------|-------------|--------------|----------|-------------------------------|
| brand-design   | Yumee_Treetz | Fame Laundry | PinPoint | Ernest Daviva, PinPoint Kitchen & Lounge |
| web            | Laferay     | Portfolio    | Ectinum  | Daniel Ace, AcePlayHouse      |
| product-design | Fame Laundry | Food Rush   | Zenvoy   | Marian Ade, Food Rush & Treats |
| mobile         | Moderno     | Bankie       | Fame Laundry | Mo Lauren, Moderno Furnitures |

The testimonial frame is 212×262 (portrait), not a circle — use an upright crop.

## Portfolio images (Works index)

`/works` pulls one image per project from `projects/`: fame-laundry.png,
laferay.png, zenvoy.png, moderno.png, healthco.png, ectinum.png, food-rush.png,
bankie.png, aceplayhouse.png, portfolio.png

## Case-study images (`/works/<slug>`)

Per-project imagery in `works/<slug>/`. All 10 case studies are built and
populated. Each folder holds a hero.png plus the section images named in
`lib/content.ts`:

- fame-laundry/ : hero, branding, end-to-end, mobile
- laferay/      : hero, website, digital, mockup
- zenvoy/       : hero, app, digital, showcase
- moderno/      : hero, landing, mobile-showcase, mobile
- healthco/     : hero, website, digital, showcase
- ectinum/      : hero, platform, digital, showcase
- food-rush/    : hero, app, digital, showcase
- bankie/       : hero, app, digital, showcase
- aceplayhouse/ : hero, website, digital, showcase
- portfolio/    : hero, website, digital, showcase

## Checking your work

After adding or replacing assets, this reports any path the code references but
that is missing from disk:

```sh
for p in $(grep -rhoE '"/assets/[^"]*\.(png|jpg|jpeg|webp|svg)"' app components lib \
  | tr -d '"' | sort -u); do [ -f "public$p" ] || echo "MISSING $p"; done
```
