---
name: Skybound Travel
colors:
  surface: '#fcf9f8'
  surface-dim: '#dcd9d9'
  surface-bright: '#fcf9f8'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f6f3f2'
  surface-container: '#f0edec'
  surface-container-high: '#ebe7e7'
  surface-container-highest: '#e5e2e1'
  on-surface: '#1c1b1b'
  on-surface-variant: '#3e4850'
  inverse-surface: '#313030'
  inverse-on-surface: '#f3f0ef'
  outline: '#6e7881'
  outline-variant: '#bdc8d1'
  surface-tint: '#00658d'
  primary: '#00658d'
  on-primary: '#ffffff'
  primary-container: '#00aeef'
  on-primary-container: '#003e58'
  inverse-primary: '#82cfff'
  secondary: '#3a637c'
  on-secondary: '#ffffff'
  secondary-container: '#b9e2ff'
  on-secondary-container: '#3d657e'
  tertiary: '#8d4f00'
  on-tertiary: '#ffffff'
  tertiary-container: '#ea8c21'
  on-tertiary-container: '#572f00'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#c6e7ff'
  primary-fixed-dim: '#82cfff'
  on-primary-fixed: '#001e2d'
  on-primary-fixed-variant: '#004c6b'
  secondary-fixed: '#c6e7ff'
  secondary-fixed-dim: '#a3cce8'
  on-secondary-fixed: '#001e2d'
  on-secondary-fixed-variant: '#204b63'
  tertiary-fixed: '#ffdcc0'
  tertiary-fixed-dim: '#ffb876'
  on-tertiary-fixed: '#2d1600'
  on-tertiary-fixed-variant: '#6b3b00'
  background: '#fcf9f8'
  on-background: '#1c1b1b'
  surface-variant: '#e5e2e1'
typography:
  display-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 32px
    fontWeight: '700'
    lineHeight: '1.2'
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 24px
    fontWeight: '600'
    lineHeight: '1.3'
    letterSpacing: -0.01em
  title-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 18px
    fontWeight: '600'
    lineHeight: '1.4'
  body-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 14px
    fontWeight: '400'
    lineHeight: '1.5'
  body-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 13px
    fontWeight: '400'
    lineHeight: '1.4'
  label-caps:
    fontFamily: Plus Jakarta Sans
    fontSize: 11px
    fontWeight: '700'
    lineHeight: '1'
    letterSpacing: 0.05em
  numeric-data:
    fontFamily: Plus Jakarta Sans
    fontSize: 16px
    fontWeight: '500'
    lineHeight: '1'
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  unit: 4px
  xs: 4px
  sm: 8px
  md: 12px
  lg: 16px
  xl: 24px
  container-margin: 16px
  gutter: 12px
---

## Brand & Style
This design system is built on a **Utility-First Modernist** aesthetic. It prioritizes information density and functional clarity over decorative flair, catering to the frequent traveler who values efficiency and precision. The brand personality is professional and dependable, evoking the feeling of a high-end aeronautics instrument panel rather than a casual social app.

Key visual principles:
- **No Decoration:** Eliminate all gradients, illustrations, and non-functional embellishments.
- **Precision:** Use strict alignment and consistent 1px borders to define structure.
- **Utility-First:** Visual weight is assigned based on the importance of data, using the crisp accent color only for primary actions and critical status indicators.

## Colors
The palette is a high-contrast monochromatic scale punctuated by a single functional accent. 

- **Primary (#00aeef):** Reserved strictly for interactive elements (buttons, active toggles) and progress indicators. 
- **Neutrals:** A range of greys from Zinc-50 to Zinc-950. 
    - Use `bg_base` for the primary canvas.
    - Use `bg_subtle` for grouping content or secondary containers.
    - Use `text_primary` for headlines and main data points to ensure maximum legibility.
- **Functional States:** Use standard high-visibility red (#ef4444) for errors and green (#22c55e) for success, but keep these icons small and stroke-based.

## Typography
Plus Jakarta Sans provides a clean, modern geometric structure that remains legible at high densities. 

- **Hierarchy:** Use font weight (SemiBold/Bold) rather than size increases to differentiate information headers.
- **Tabular Figures:** For flight numbers, times, and prices, always enable tabular lining figures to ensure vertical alignment in lists and tables.
- **Micro-copy:** Use `label-caps` for section headers and metadata categories to create clear visual separation without requiring large margins.

## Layout & Spacing
The layout follows a **Tight Grid** philosophy to maximize information density, essential for travel itineraries and booking flows.

- **Grid:** Use a 12-column grid for desktop/tablet and a 4-column grid for mobile.
- **Density:** Standard padding for list items and cards is set to `md` (12px). 
- **Touch Targets:** While margins are tight, ensure all interactive elements maintain a minimum hit area of 44x44px, using invisible padding if necessary.
- **Content Grouping:** Use subtle 1px borders (`border_subtle`) rather than large gaps of whitespace to separate distinct modules.

## Elevation & Depth
This system avoids heavy shadows and floating effects to maintain a professional, flat UI.

- **Stacking:** Depth is conveyed through 1px borders and slight tonal shifts in background color.
- **Shadows:** Use a single "Soft Lift" shadow for modals and primary menus only: `0px 2px 4px rgba(0, 0, 0, 0.05), 0px 1px 2px rgba(0, 0, 0, 0.05)`.
- **Interaction:** On hover or press, buttons should not lift; instead, they should shift color (e.g., darken by 10%) to signal reactivity.

## Shapes
Shapes are disciplined and architectural. Use a base radius of **4px** for most components (buttons, input fields, small cards) and **6px** for larger container modules.

- **Consistency:** Avoid pill-shaped buttons; stick to the 4px radius to reinforce the professional, utility-first vibe.
- **Strictness:** Icons should be contained within square or slightly rounded bounding boxes to maintain the grid's integrity.

## Components
- **Buttons:** Primary buttons use #00aeef with white text. Secondary buttons use a 1px border (#e4e4e7) with #09090b text. No gradients.
- **Input Fields:** 1px border (#e4e4e7), 4px radius. Use a 2px #00aeef border for the `focus` state. Labels should be `label-caps`.
- **Cards:** White background, 1px border (#e4e4e7), 6px radius. No shadow unless the card is actionable/draggable.
- **Chips/Status:** Use a light grey fill (#f4f4f5) with dark text for neutral states. Use a light blue tint for active filters.
- **Data Tables:** Horizontal dividers only (1px #e4e4e7). Use `numeric-data` for all flight times and pricing to ensure clean scanning.
- **Segmented Control:** A flat, 1px bordered container where the active segment is indicated by a solid #121212 fill or a high-contrast underline.