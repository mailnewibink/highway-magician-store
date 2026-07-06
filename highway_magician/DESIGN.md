---
name: Highway Magician
colors:
  surface: '#131313'
  surface-dim: '#131313'
  surface-bright: '#393939'
  surface-container-lowest: '#0e0e0e'
  surface-container-low: '#1c1b1b'
  surface-container: '#201f1f'
  surface-container-high: '#2a2a2a'
  surface-container-highest: '#353534'
  on-surface: '#e5e2e1'
  on-surface-variant: '#e6beb2'
  inverse-surface: '#e5e2e1'
  inverse-on-surface: '#313030'
  outline: '#ac897e'
  outline-variant: '#5c4037'
  surface-tint: '#ffb59e'
  primary: '#ffb59e'
  on-primary: '#5e1700'
  primary-container: '#ff5719'
  on-primary-container: '#521300'
  inverse-primary: '#ad3200'
  secondary: '#46eaed'
  on-secondary: '#003738'
  secondary-container: '#00cdd0'
  on-secondary-container: '#005253'
  tertiary: '#c6c6c6'
  on-tertiary: '#2f3131'
  tertiary-container: '#909191'
  on-tertiary-container: '#282a2a'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#ffdbd0'
  primary-fixed-dim: '#ffb59e'
  on-primary-fixed: '#3a0b00'
  on-primary-fixed-variant: '#852400'
  secondary-fixed: '#5af8fb'
  secondary-fixed-dim: '#2ddbde'
  on-secondary-fixed: '#002020'
  on-secondary-fixed-variant: '#004f51'
  tertiary-fixed: '#e2e2e2'
  tertiary-fixed-dim: '#c6c6c6'
  on-tertiary-fixed: '#1a1c1c'
  on-tertiary-fixed-variant: '#454747'
  background: '#131313'
  on-background: '#e5e2e1'
  surface-variant: '#353534'
typography:
  display-lg:
    fontFamily: Bebas Neue
    fontSize: 80px
    fontWeight: '400'
    lineHeight: 72px
    letterSpacing: 0.02em
  display-md:
    fontFamily: Bebas Neue
    fontSize: 48px
    fontWeight: '400'
    lineHeight: 44px
    letterSpacing: 0.02em
  headline-lg:
    fontFamily: Bebas Neue
    fontSize: 32px
    fontWeight: '400'
    lineHeight: 32px
    letterSpacing: 0.05em
  headline-lg-mobile:
    fontFamily: Bebas Neue
    fontSize: 28px
    fontWeight: '400'
    lineHeight: 28px
    letterSpacing: 0.05em
  body-lg:
    fontFamily: Space Grotesk
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Space Grotesk
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-lg:
    fontFamily: Space Grotesk
    fontSize: 14px
    fontWeight: '700'
    lineHeight: 16px
    letterSpacing: 0.1em
  label-sm:
    fontFamily: Space Grotesk
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 14px
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  unit: 8px
  gutter: 24px
  margin-desktop: 64px
  margin-mobile: 24px
  stack-sm: 8px
  stack-md: 16px
  stack-lg: 32px
  stack-xl: 64px
---

## Brand & Style

The design system embodies the raw, high-octane energy of custom car culture and early 2000s streetwear. It targets a rebellious, style-conscious audience that values authenticity and "garage-built" aesthetics. 

The visual language is a fusion of **Brutalism** and **Tactile Retro**. It utilizes heavy borders, high-contrast intersections, and distressed visual elements to create a UI that feels like a physical object—a vintage mechanic’s manual updated for the digital age. The experience should feel fast, loud, and unapologetically premium.

## Colors

The palette is rooted in a "Gritty Dark" mode. **Hot Rod Orange** serves as the primary call-to-action color, demanding immediate attention. **Chrome Teal** acts as a secondary accent for interactive highlights and status indicators.

- **Primary:** #FF4E00 (Safety/Hot Rod Orange)
- **Secondary:** #00CED1 (Electric Teal/Chrome)
- **Neutral High:** #F5F5F5 (Off-white for typography)
- **Neutral Low:** #121212 (Charcoal base)

Surface colors should prioritize deep blacks and dark grays to allow the vibrant accents to "pop" like neon against asphalt.

## Typography

Typography is the engine of this design system. It utilizes a high-contrast pairing of **Bebas Neue** for dramatic, condensed headlines and **Space Grotesk** for technical, readable body copy.

- **Headlines:** Always uppercase. Use tight tracking and leading to create a "blocked" look reminiscent of vintage race posters.
- **Body:** Maintains a geometric, slightly futuristic feel.
- **Labels:** Heavily tracked (letter-spaced) and uppercase to mimic industrial parts labeling.

## Layout & Spacing

This design system uses a **Fluid Grid** with a strict 8px base increment. The layout philosophy is inspired by magazine editorial spreads and "zine" culture.

- **Desktop:** 12-column grid with generous 64px outer margins to frame the content like a canvas.
- **Mobile:** 4-column grid with 24px margins.
- **Visual Rhythm:** Elements should often "break" the grid slightly—overlapping images or text—to reinforce the rebellious brand nature. Gutters are kept wide (24px) to ensure breathing room between high-impact visual blocks.

## Elevation & Depth

Depth in this design system is achieved through **Hard Shadows** and **Thick Outlines** rather than soft blurs. This mimics the look of vinyl stickers and patches.

- **The "Sticker" Effect:** Primary cards and buttons use a 2px solid border (#F5F5F5) with a 4px offset hard shadow in the primary orange color.
- **Tonal Layering:** Use different shades of charcoal (#121212 vs #1A1A1A) to separate navigation from content. 
- **Interactive States:** When hovered or pressed, elements should shift their shadow offset (e.g., from 4px to 1px) to simulate being physically "pushed" into the surface.

## Shapes

The shape language is primarily sharp and industrial. **Soft (0.25rem)** roundedness is used sparingly to prevent the UI from feeling too "default" or "system-like," providing just enough refinement to feel premium. 

Large containers and cards should use sharp 90-degree corners to maintain the brutalist edge, while buttons and input fields utilize the soft roundedness for better touch-target affordance.

## Components

### Buttons
Buttons are high-impact. The "Primary Action" button features a solid Hot Rod Orange fill, black text (Bebas Neue), and a heavy 2px black border. On hover, the button should invert colors or shift its hard shadow.

### Cards
Cards use a "distressed" approach. Use subtle grain textures in the background. Borders are 2px thick and often slightly offset from the background container to create a "misprinted" aesthetic.

### Input Fields
Inputs are outlined in Chrome Teal (#00CED1) when active. Use monospaced-style labels (Space Grotesk) positioned above the field, reminiscent of technical spec sheets.

### Chips & Tags
These should look like industrial labels or price tags. Use a high-contrast background (Primary Orange or Secondary Teal) with condensed black text.

### Navigation
The navigation bar is a heavy block at the top or side, using a solid charcoal background with a thick bottom border. Navigation links use `label-lg` typography with an underline effect on hover.