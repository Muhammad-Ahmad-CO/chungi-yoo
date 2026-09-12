# Works Picture Motion Effect

## Goal
Works section ki overlapping pictures ko video jaisa interactive banana, taa-ke cursor le jaane par woh naturally upar uthain, thori zoom hon, aur layered cards alag directions mein move karein.

## Changes
- Motion animation library add karna.
- Har Works image pair ko spring-based hover interaction dena.
- Front picture ko zyada lift/zoom aur back picture ko opposite side movement dena, taa-ke popup/layered depth feel aaye.
- Cursor position ke mutabiq halka tilt add karna, lekin touch devices par layout stable rakhna.
- Reduced-motion preference walay visitors ke liye effect minimal rakhna.
- Desktop aur mobile preview mein pictures, spacing, and interactions verify karna.

## Technical details
- `motion/react` components and spring transitions use honge.
- Animation sirf transform properties (`x`, `y`, `scale`, `rotate`) use karegi for smooth performance.
- Existing artwork, colors, content, and section structure unchanged rahenge.
