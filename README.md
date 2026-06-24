# Cosmic Tales

Cosmic Tales is a fun and experimental project in CSS, created with Sass and Gatsby. The aim was to explore the power of CSS and see how much of a mini solar system could be crafted without using any JavaScript. Each planet in the solar system is accurately scaled in relative size and speed.

## Project Overview
### Motivation
The motivation behind Cosmic Tales was a deep appreciation for our solar system. The project was born out of curiosity: "How much of a solar system could I replicate using only CSS?" The challenge was to create a mini solar system where Earth orbits the sun in 1 minute, and all other planets move at relative speeds. For example, Mercury orbits in just 14 seconds, while Pluto takes over 2 hours for one orbit.

### Technology Used
- Sass: The project relies heavily on Sass, utilizing mixins and CSS variables to create and customize each planet's appearance and motion.
- Gatsby: Originally, this project was built with Gatsby, with plans to share stories about each planet or include more planetary facts. However, the focus shifted to the CSS experiment.
## Key Takeaways
- CSS Variables: Cosmic Tales highlights the power of CSS variables. With only a few variable differences between the planets, the project demonstrates how CSS variables can be effectively used for more than just text color.
- Sass Functions: The project features a Sass function to create stars. Thanks to the work of contributors like [johnbgarcia](https://codepen.io/johnbgarcia/pen/qqdgGp) and  [dannyrb](https://codepen.io/dannyrb/pen/ORqvey), an all-CSS method for creating stars was achieved.
- Click Interaction: While the project originally had plans for more interactive features, the focus shifted to the CSS experiment. If further development were to occur, enhancing the "click on a planet" aspect or finding ways to educate visitors about planet speeds could be considered.
## Project Preview
Cosmic Tales Preview
![image](https://github.com/brittgalloway/cosmic-tales/assets/50898741/f616b0ab-7d66-437f-9d5e-e1b2eea9ef76)
![image](https://github.com/brittgalloway/cosmic-tales/assets/50898741/b46a5902-99e9-4201-bc20-56264efb92bf)
Cosmic Tales was an exciting CSS experiment that brings the solar system to life. If you have a passion for astronomy and a fascination with the power of CSS, this project is a testament to what can be achieved with creativity and a bit of code.

Enjoy exploring the mini solar system, and feel free to make improvements or modifications to further enhance the project.

## Accessibility & Platform Updates

The original CSS-only build relied on hover/click with no keyboard support. This pass added real interactivity without touching the visual design:

- **Keyboard navigation:** Every planet is now a `<button>` instead of a plain `<span>`, so the whole solar system is reachable by Tab and operable with Enter/Space. Each button gets a visible focus ring (`:focus-visible`), and a planet's orbit pauses while it has focus or its popover is open, so the tooltip doesn't drift away mid-read.
- **Tooltips → native popovers:** The old click-toggled `<div>` tooltip is now a real popover (`popover="auto"` + `aria-label`, wired to its planet via `popovertarget`), giving Esc-to-close and click-outside dismissal for free, with no JS state. It's anchored to its planet with CSS anchor positioning (`position-anchor` / `position-area`) instead of manual offsets, and fades/scales in with `@starting-style` transitions.
  - Note: React doesn't recognize the `popover`/`popovertarget` HTML attributes as JSX props (a known upstream issue), so these are set via a `ref` callback in `src/components/tooltip.js` rather than as direct props.
- **Hover/focus transitions:** Planet size and glow changes on hover now also fire on `:focus-visible` and ease smoothly in both directions, instead of snapping instantly.
- **Mobile landscape support:** Below 900px wide, the layout scales down (`transform: scale(0.55)` on `<main>`) so Pluto's ~1300px-wide orbit fits on a phone screen. In portrait at that size, a "rotate your device" prompt replaces the scene entirely, since the orbit layout isn't usable in a narrow portrait viewport.
- **Sass modernization:** Replaced the deprecated global `random()`/`unquote()` calls in the starfield generator with their namespaced equivalents (`math.random()`, `string.unquote()`) to clear Dart Sass's legacy-API deprecation warnings.
- **Dependency upgrade:** Moved from Gatsby 4 / React 17 to Gatsby 5 / React 18 (Gatsby 5's minimum supported React version), and dropped a few unused dependencies (`gatsby-plugin-mdx`, `gatsby-plugin-styled-components`, `styled-components`) that weren't referenced anywhere in `src/`.