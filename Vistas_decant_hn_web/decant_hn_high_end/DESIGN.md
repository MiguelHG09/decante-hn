---
name: Decanté HN High-End
colors:
  surface: '#fcf9f8'
  surface-dim: '#dcd9d9'
  surface-bright: '#fcf9f8'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f6f3f2'
  surface-container: '#f0eded'
  surface-container-high: '#eae7e7'
  surface-container-highest: '#e5e2e1'
  on-surface: '#1c1b1b'
  on-surface-variant: '#42493f'
  inverse-surface: '#313030'
  inverse-on-surface: '#f3f0ef'
  outline: '#72796e'
  outline-variant: '#c2c9bc'
  surface-tint: '#3d6838'
  primary: '#001501'
  on-primary: '#ffffff'
  primary-container: '#002d04'
  on-primary-container: '#6a9862'
  inverse-primary: '#a2d398'
  secondary: '#5d5f5d'
  on-secondary: '#ffffff'
  secondary-container: '#e2e3e1'
  on-secondary-container: '#636563'
  tertiary: '#0f110e'
  on-tertiary: '#ffffff'
  tertiary-container: '#242623'
  on-tertiary-container: '#8c8d89'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#bdf0b2'
  primary-fixed-dim: '#a2d398'
  on-primary-fixed: '#002202'
  on-primary-fixed-variant: '#255022'
  secondary-fixed: '#e2e3e1'
  secondary-fixed-dim: '#c6c7c5'
  on-secondary-fixed: '#1a1c1b'
  on-secondary-fixed-variant: '#454746'
  tertiary-fixed: '#e3e3de'
  tertiary-fixed-dim: '#c6c7c2'
  on-tertiary-fixed: '#1a1c19'
  on-tertiary-fixed-variant: '#464744'
  background: '#fcf9f8'
  on-background: '#1c1b1b'
  surface-variant: '#e5e2e1'
typography:
  display-lg:
    fontFamily: Playfair Display
    fontSize: 64px
    fontWeight: '700'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Playfair Display
    fontSize: 48px
    fontWeight: '600'
    lineHeight: '1.2'
  headline-lg-mobile:
    fontFamily: Playfair Display
    fontSize: 32px
    fontWeight: '600'
    lineHeight: '1.2'
  headline-md:
    fontFamily: Playfair Display
    fontSize: 32px
    fontWeight: '500'
    lineHeight: '1.3'
  body-lg:
    fontFamily: Montserrat
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Montserrat
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.5'
  label-md:
    fontFamily: Montserrat
    fontSize: 14px
    fontWeight: '600'
    lineHeight: '1'
    letterSpacing: 0.1em
  price-display:
    fontFamily: Montserrat
    fontSize: 20px
    fontWeight: '500'
    lineHeight: '1'
    letterSpacing: -0.01em
spacing:
  unit: 8px
  container-max: 1280px
  gutter: 24px
  margin-mobile: 20px
  margin-desktop: 64px
  section-gap: 120px
---

## Brand & Style

The design system is centered on the concept of "Quiet Luxury"—an aesthetic that prioritizes restraint, premium materiality, and deliberate negative space. It targets a sophisticated audience that values heritage, craftsmanship, and exclusivity. 

The visual style is **Minimalist** with **Editorial** influences. It utilizes a monochromatic foundation to allow product imagery and the deep primary color to command attention. The interface should feel like a high-end digital atelier: spacious, balanced, and uncompromising in its clarity. 

Key attributes include:
- **Atmospheric Depth:** Large areas of white and soft off-white to create a gallery-like feel.
- **Precision:** High-contrast typography and razor-sharp alignment.
- **Intentionality:** Every element serves a purpose; decorative flourishes are replaced by structural elegance.

## Colors

The palette is anchored by **Dark Forest Green**, used exclusively for high-priority calls to action and brand signatures. This deep green evokes stability, growth, and traditional luxury.

- **Primary (#002D04):** Reserved for primary buttons, active states, and the brand mark. It should be used sparingly to maintain its impact.
- **Secondary / Surface (#F9F9F7):** A warm, "gallery white" used for page backgrounds to reduce eye strain and feel more premium than pure #FFFFFF.
- **Neutral / Text (#1A1A1A):** A soft black used for body copy and headings to ensure high legibility without the harshness of absolute black.
- **Accent Gray (#E5E5E0):** Used for subtle borders, dividers, and disabled states.

## Typography

This design system employs a classic Serif/Sans-serif pairing to establish a clear hierarchy.

- **Playfair Display:** Used for logos, headings, and product titles. Its high contrast and elegant serifs communicate heritage and authority.
- **Montserrat:** Used for all functional UI elements, including body text, labels, and buttons. Its geometric clarity provides a modern, legible counterpoint to the serif headings.
- **Formatting Note:** Labels and small UI triggers should utilize uppercase styling with increased letter spacing (0.1em) to enhance the luxury "label" aesthetic.

## Layout & Spacing

The layout follows a **Fixed Grid** philosophy on desktop to maintain a controlled, editorial composition, transitioning to a fluid model on mobile.

- **Grid:** A 12-column grid with generous 24px gutters.
- **Negative Space:** Use "Section Gaps" (120px+) liberally between major content blocks to allow the design to breathe.
- **Margins:** Desktop margins are intentionally wide (64px) to center the focus on the content, mimicking the layout of a premium magazine.
- **Mobile:** Scale margins down to 20px and stack elements vertically, maintaining the serif-to-sans-serif hierarchy.

## Elevation & Depth

This system avoids heavy shadows in favor of **Tonal Layers** and **Low-Contrast Outlines**.

- **Surfaces:** Use subtle shifts between the primary background (#F9F9F7) and slightly darker containers (#E5E5E0) to indicate depth.
- **Borders:** Hairline borders (1px) in #E5E5E0 are used to define card boundaries and input fields.
- **Interaction:** On hover, elements may lift slightly using a very soft, high-diffusion shadow (0px 12px 24px rgba(0,0,0,0.04)) or simply transition in color. 
- **Overlays:** Modals and menus should use a soft backdrop blur (8px) with a semi-transparent white overlay to maintain the "glass" elegance without looking overly digital.

## Shapes

The shape language is strictly **Sharp (0)**. 

Every UI element—from buttons and input fields to product cards and images—uses 90-degree corners. Sharp corners convey precision, architectural structure, and a premium "un-default" feel that differentiates the interface from standard consumer apps. 

Avoid all rounded corners or pill shapes to maintain the high-fashion editorial aesthetic.

## Components

- **Buttons:** 
  - **Primary:** Dark Forest Green background (#002D04) with white Montserrat text. Sharp corners. No shadows.
  - **Secondary:** Transparent background with a 1px Dark Forest Green border.
- **Input Fields:** Bottom-border only or thin 1px outline. Use Montserrat for placeholder text in a light gray.
- **Cards:** No border or shadow by default. Use typography and whitespace to define the product area. Images should take up 100% of the card width.
- **Lists:** Clean dividers using 1px #E5E5E0. High vertical padding between items (24px+).
- **Product Tiles:** Focus on high-quality photography. The product title (Playfair Display) should be significantly larger than the price (Montserrat).
- **Navigation:** Simple text-based links in uppercase Montserrat. Use a "hairline" underline for the active state.