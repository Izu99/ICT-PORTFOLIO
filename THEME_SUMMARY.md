# Frontend Theme Summary

This document summarizes the styling, animation, and overall visual theme of the provided frontend project.

## 1. Styling Principles

*   **Tailwind CSS with `class-variance-authority` (cva):** The project heavily uses Tailwind CSS for utility-first styling. The `cva` library is employed to create reusable and customizable component variants, ensuring consistency and reducing redundant CSS.
*   **CSS Variables for Theming:** A comprehensive set of CSS variables (e.g., `--background`, `--foreground`, `--primary`, `--accent`, `--radius`) are defined in `src/index.css`. This enables easy theme switching (primarily dark mode) and centralized control over the visual palette.
*   **Glassmorphism:** The `glass-card` and `glass-container` classes, combined with `backdrop-filter: blur()`, create a modern glassmorphism effect, giving elements a translucent, frosted appearance.
*   **Gradients:** Extensive use of linear and radial gradients is observed for backgrounds (`bg-gradient-to-b`, `radial-gradient`), text (`text-gradient`, `-webkit-background-clip: text`), and button hover effects.
*   **Responsive Design:** Media queries in `src/App.css` and `src/index.css`, along with Tailwind's responsive prefixes (e.g., `md:`, `lg:`), adjust layouts, padding, and font sizes for various screen sizes.
*   **Subtle Borders and Shadows:** Elements frequently incorporate subtle borders (`border`, `border-input`) and shadows (`shadow-sm`, `shadow-xl`) to add depth and visual separation.

## 2. Typography

*   **Font Family:** The "Inter" font is consistently used for both sans-serif and display text, as configured in `tailwind.config.ts` and linked in `index.html`.
*   **Font Sizing and Weight:** Tailwind's default font sizing is utilized, with responsive adjustments for headings and paragraphs on smaller screens. Font weights like `font-bold`, `font-medium`, and `font-semibold` are used for emphasis.
*   **Text Gradients:** The `text-gradient` class applies a linear gradient to text, creating a visually striking effect.

## 3. Buttons

*   **`src/components/ui/button.tsx`:** This component defines various button `variants` (default, destructive, outline, secondary, ghost, link) and `sizes` (default, sm, lg, icon).
*   **Hover Effects:** Buttons feature smooth `transition-colors` and `hover:bg-primary/90` (or similar) for interactive feedback.
*   **Advanced Button Animations (observed in `src/components/Hero.tsx`):**
    *   **"Start Learning Now" Button:** Incorporates a complex hover effect with a `group` class, `overflow-hidden`, and an `absolute inset-0` `span` that slides a green gradient from left to right on hover, creating a "shine" or "slide-in" effect. It also includes `transform hover:scale-105` and `hover:shadow-2xl` for a subtle lift and shadow on hover.
    *   **"View Gallery" Button:** Uses `variant="outline"` with custom border and background styles, and a similar `hover:scale-105` and `hover:shadow-xl` effect, along with a subtle gradient overlay on hover.

## 4. Animations

*   **Defined in `tailwind.config.ts` and `src/index.css`:**
    *   `accordion-down`, `accordion-up`: For collapsible content.
    *   `fadeIn`: A general fade-in and slide-up animation, extensively used in `Hero.tsx` for staggered content loading.
    *   `shine`: Used for background position animation, likely for a shimmering effect.
    *   `float`: A vertical floating animation, applied to background orbs and particles in `Hero.tsx`. Variants like `animate-float-slow` and `animate-float-fast` are also defined.
    *   `glassMorph`: A subtle scaling and rotation animation for glassmorphic elements.
    *   `dotPulse`: A pulsing animation for small dot elements.
    *   `rotateGlow`: A continuous rotation animation.
    *   `gradient-x`: A custom keyframe animation in `Hero.tsx` for horizontal gradient movement, applied to the main heading.
    *   `tilt`: A custom keyframe animation in `Hero.tsx` for a subtle tilting effect on the animated badge.
    *   `spin-slow`: A custom keyframe animation in `Hero.tsx` for a slow rotation of background elements.
*   **Implementation:** Animations are applied using Tailwind's `animate-` utility classes (e.g., `animate-float`, `animate-fadeIn`) and custom CSS classes. `animation-delay` is used for staggered animations, particularly for text and button entrances in `Hero.tsx`.
*   **Mouse Interaction (`src/components/Hero.tsx`):** The `Hero` component features a dynamic background that reacts to mouse movement, creating a `radial-gradient` effect that follows the cursor.

## 5. Backgrounds

*   **Dynamic Backgrounds (`src/components/Hero.tsx`):** The `Hero.tsx` component showcases a complex background with:
    *   A `radial-gradient` that follows the mouse position.
    *   An enhanced grid pattern (`bg-[linear-gradient(...)]`) with a `mask-image` for a fading effect.
    *   Floating orbs with `animate-float` and varying sizes, positions, and animation durations.
    *   Animated background elements (`animate-spin-slow`) with gradient blurs.
*   **Grid Patterns:** The `bg-grid` class in `src/index.css` creates a subtle grid overlay using `linear-gradient`.
*   **Gradient Backgrounds:** `bg-blue-gradient` and `bg-purple-gradient` classes provide pre-defined linear gradients.

## 6. Interactive Elements (beyond buttons)

*   **Navbar Scroll Effect (`src/components/Navbar.tsx`):** The `Navbar.tsx` changes its background and adds a shadow when the page is scrolled, creating a "sticky" effect.
*   **Navigation Link Hover (`src/components/Navbar.tsx`):** Navigation links have a `hover:text-primary` effect and a `span` that expands from left to right on hover, creating an underline animation.
*   **Image Hover (`src/components/Hero.tsx`):** The main image in the Hero section has `group-hover:scale-110` and `group-hover:brightness-110` for a subtle zoom and brightening effect on hover.
*   **Dot Interactive (`src/index.css`):** The `dot-interactive` class defines advanced hover and active states for dot elements, including scaling, rotation, and box shadows.

## 7. Overall Theme

The overall theme is modern, dynamic, and visually engaging, characterized by:

*   **Dark Mode Preference:** While light mode variables are present, the `src/App.css` explicitly removes light and system code, indicating a strong preference for a dark theme. The color palette leans towards deep purples, blues, and greens, with subtle accents.
*   **Subtle Interactivity:** Many elements react to user interaction (hover, scroll, mouse movement) with smooth transitions and animations, creating a lively user experience without being overwhelming.
*   **Depth and Dimension:** Glassmorphism, shadows, and layered backgrounds contribute to a sense of depth.
*   **Professional and Polished:** The use of consistent typography, well-defined component styles, and thoughtful animations gives the site a professional and polished feel.
