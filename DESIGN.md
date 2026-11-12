---
name: Coffee-Inspired Dark Mode
colors:
  surface: '#17130d'
  surface-dim: '#17130d'
  surface-bright: '#3e3831'
  surface-container-lowest: '#110e08'
  surface-container-low: '#1f1b14'
  surface-container: '#231f18'
  surface-container-high: '#2e2922'
  surface-container-highest: '#39342d'
  on-surface: '#ebe1d6'
  on-surface-variant: '#d4c4b7'
  inverse-surface: '#ebe1d6'
  inverse-on-surface: '#353028'
  outline: '#9c8e82'
  outline-variant: '#50453b'
  surface-tint: '#f0bd8b'
  primary: '#f2be8c'
  on-primary: '#482904'
  primary-container: '#d4a373'
  on-primary-container: '#5b3912'
  inverse-primary: '#7d562d'
  secondary: '#dcc2a9'
  on-secondary: '#3d2d1c'
  secondary-container: '#554430'
  on-secondary-container: '#cab198'
  tertiary: '#d3c5c0'
  on-tertiary: '#372f2b'
  tertiary-container: '#b7aaa5'
  on-tertiary-container: '#483f3b'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#ffdcbd'
  primary-fixed-dim: '#f0bd8b'
  on-primary-fixed: '#2c1600'
  on-primary-fixed-variant: '#623f18'
  secondary-fixed: '#f9dec3'
  secondary-fixed-dim: '#dcc2a9'
  on-secondary-fixed: '#261909'
  on-secondary-fixed-variant: '#554430'
  tertiary-fixed: '#eedfda'
  tertiary-fixed-dim: '#d2c4be'
  on-tertiary-fixed: '#211a17'
  on-tertiary-fixed-variant: '#4e4541'
  background: '#17130d'
  on-background: '#ebe1d6'
  surface-variant: '#39342d'
typography:
  headline-xl:
    fontFamily: Noto Serif
    fontSize: 40px
    fontWeight: '700'
    lineHeight: 48px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Noto Serif
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 40px
  headline-lg-mobile:
    fontFamily: Noto Serif
    fontSize: 28px
    fontWeight: '600'
    lineHeight: 34px
  headline-md:
    fontFamily: Noto Serif
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  body-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  body-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
  label-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 16px
    letterSpacing: 0.05em
  label-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 14px
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  base: 8px
  xs: 4px
  sm: 12px
  md: 24px
  lg: 40px
  xl: 64px
  gutter: 16px
  margin-mobile: 20px
  margin-desktop: auto
---

## Brand & Style
The design system is built upon the sensory experience of a high-end specialty coffee house. It targets urban food enthusiasts who value comfort, quality, and a sophisticated aesthetic. The emotional goal is to evoke "hygge"—a sense of warmth, coziness, and indulgence—even through a digital interface.

The design style is a blend of **Minimalism** and **Glassmorphism**. We lean into heavy whitespace (or "dark-space") to let imagery of food and beverages breathe, while utilizing translucent, frosted-glass layers to mimic the steam and depth of a freshly poured latte. By avoiding pure blacks and harsh whites, we maintain a soft, low-fatigue visual environment that feels premium and organic.

## Colors
This design system utilizes a monochromatic palette of roasted earth tones. 

- **Primary (Latte):** Used for call-to-action buttons, active states, and highlighting key brand moments.
- **Secondary (Crema):** Used for decorative elements, subtle accents, and secondary buttons.
- **Backgrounds:** The foundation is **Deep Espresso**, with **Charcoal** used for surface containers and cards to create depth without relying on pure black.
- **Typography:** **Cream** serves as the primary text color to ensure high legibility while maintaining the warm, low-contrast "coffee" aesthetic.
- **Semantic Colors:** Success, error, and warning states should be desaturated to fit the warm palette (e.g., a "burnt orange" for warnings instead of bright yellow).

## Typography
The typography system pairs a timeless serif with a modern, friendly sans-serif to balance heritage and usability.

- **Headlines:** `notoSerif` provides a literary, authoritative, and premium feel. It should be used for restaurant titles, section headers, and promotional banners.
- **Body & UI:** `plusJakartaSans` is used for all functional text. Its soft, rounded terminals complement the "crema" aesthetic and ensure maximum readability at small sizes on mobile devices.
- **Hierarchy:** Use tight letter-spacing on large headlines to create a customized, editorial look. Use generous line-heights for body text to maintain the relaxed, airy feel of the brand.

## Layout & Spacing
The layout follows a **Fluid Grid** model based on an 8px rhythmic scale. 

- **Mobile:** A 4-column layout with 20px side margins. Elements reflow vertically to prioritize large, high-quality food photography.
- **Desktop:** A 12-column centered layout with a maximum content width of 1200px.
- **Spacing Philosophy:** This design system prioritizes "negative space." Generous padding within cards (24px+) is encouraged to evoke a sense of luxury and calm. Gutters remain consistent at 16px to maintain a tight relationship between related grid items.

## Elevation & Depth
Depth is created through **Tonal Layers** and **Glassmorphism**, rather than traditional high-contrast shadows.

- **Level 0 (Base):** Deep Espresso (#1B1411).
- **Level 1 (Cards):** Charcoal (#25201E) with a very soft, 10% opacity Latte-tinted shadow.
- **Level 2 (Modals/Overlays):** A semi-transparent Charcoal surface with a `backdrop-filter: blur(12px)`. This creates a "steamy glass" effect that allows the underlying colors to bleed through subtly.
- **Outlines:** Use a low-contrast 1px border (#D4A373 at 15% opacity) on interactive elements to define edges without breaking the dark-mode immersion.

## Shapes
The shape language is defined by organic, friendly curves. 

- **Primary Radius:** 0.5rem (8px) for small components like inputs and checkboxes.
- **Large Radius (rounded-lg):** 1rem (16px) for standard product cards.
- **Extra Large Radius (rounded-xl):** 1.5rem (24px) for major containers, bottom sheets, and hero imagery. 
- **Buttons:** Use fully pill-shaped (999px) buttons to emphasize their "touchable," soft nature and differentiate them from structural containers.

## Components
- **Buttons:** The primary button is Latte (#D4A373) with Deep Espresso text. Secondary buttons are ghost-styled with a Crema outline.
- **Input Fields:** Use a Charcoal background with a soft cream border. The active state should transition to a Latte border with a subtle inner glow.
- **Chips:** Small, pill-shaped tags for food categories (e.g., "Vegan," "Breakfast"). Use Crema background at 10% opacity with Crema text.
- **Cards:** Product cards must feature edge-to-edge photography at the top with a 1.5rem radius. The bottom content area uses the Charcoal surface.
- **Selection Controls:** Checkboxes and radios use the Latte primary color for the "on" state, maintaining a soft, rounded appearance.
- **Bottom Sheets:** Essential for the mobile experience; these should use a heavy backdrop blur and a 1.5rem top-corner radius to slide over the main content like a menu at a café table.