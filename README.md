# 🌌 Cosmic Tales

**A mini solar system, built almost entirely with CSS.**

[![Live Demo](https://img.shields.io/badge/demo-live-7c3aed?style=flat-square)](https://brittgalloway.github.io/cosmic-tales/)
![Gatsby](https://img.shields.io/badge/Gatsby-5-663399?style=flat-square&logo=gatsby&logoColor=white)
![React](https://img.shields.io/badge/React-18-61DAFB?style=flat-square&logo=react&logoColor=black)
![Sass](https://img.shields.io/badge/Sass-CC6699?style=flat-square&logo=sass&logoColor=white)
![Accessibility](https://img.shields.io/badge/a11y-keyboard%20%2B%20popover-2b9e6c?style=flat-square)

Nine planets, a sun, an asteroid belt, and a few thousand stars — orbiting, rotating, and twinkling, almost entirely in Sass. No physics engine, no canvas, no `requestAnimationFrame`. Just `@keyframes`, CSS custom properties, and a healthy curiosity about how far the platform can be pushed.

---

## ✨ See it in motion

![Cosmic Tales preview — the solar system scene with orbiting planets and a starfield background](https://github.com/brittgalloway/cosmic-tales/assets/50898741/f616b0ab-7d66-437f-9d5e-e1b2eea9ef76)
![Cosmic Tales preview — a closer view of the planets and their relative sizes](https://github.com/brittgalloway/cosmic-tales/assets/50898741/b46a5902-99e9-4201-bc20-56264efb92bf)

**[→ Try it live](https://brittgalloway.github.io/cosmic-tales/)**

---

## 🪐 What's actually happening here

| Feature | How |
|---|---|
| **Orbits** | A single `@keyframes orbit` animation, reused by every planet — only `--size` (orbit radius) and `animation-duration` differ per planet |
| **Relative scale & speed** | Earth completes an orbit in 60 seconds (to represent 1 year); everything else is scaled proportionally — Mercury in 14.5s (about 88 days), Pluto in just over 4 hours (248 years) |
| **The starfield** | Procedurally generated with a Sass `@function`, no images — thousands of stars as `box-shadow` values on a single `1px` element |
| **Keyboard navigation** | Every planet is a real `<button>`, reachable by Tab, operable with Enter/Space |
| **Tooltips** | Native HTML popovers (`popover="auto"`), anchored to each planet with CSS anchor positioning — Esc and click-outside dismiss them for free |
| **Mobile** | A "rotate your device" prompt in narrow portrait views; in landscape, the page scrolls so you can explore the outer planets |

---

## 🧠 Project Origin

Cosmic Tales started as a simple question: **how much of a solar system could be built using only CSS?**

The original challenge was self-imposed and a little arbitrary — Earth orbits the Sun in exactly 1 minute, and every other planet's orbit speed is scaled relative to that, so Mercury whips around in 14.5 seconds while Pluto takes its sweet time at just over 4 hours. It was originally built with Gatsby, with loose plans to eventually add per-planet stories or facts — but the CSS challenge ended up being the interesting part, and that's where the project's heart stayed.

## 🛠️ Built With

- **[Sass](https://sass-lang.com/)** — mixins and CSS custom properties drive every planet's size, position, and motion from a small set of shared rules
- **[Gatsby](https://www.gatsbyjs.com/)** + **React** — page scaffolding and component structure
- Native **CSS anchor positioning** and the **Popover API** — for accessible, dependency-free tooltips

## 💡 Key Takeaways

- **CSS variables go a long way.** Every planet shares one `circle` mixin; only a handful of custom-property values differ between Mercury and Jupiter.
- **A Sass function can generate an entire starfield.** Building on prior CodePen work by [johnbgarcia](https://codepen.io/johnbgarcia/pen/qqdgGp) and [dannyrb](https://codepen.io/dannyrb/pen/ORqvey), thousands of stars are generated as `box-shadow` coordinates — no images, no JS.
- **The platform has caught up to a lot of old JS patterns.** Click-to-toggle tooltips and manual focus-trapping used to require real JavaScript; native popovers and anchor positioning now do most of that for free.

## ♿ Accessibility & Platform Notes

The original build was hover/click-only with no keyboard support. Since then:

- **Keyboard navigation** — planets are real `<button>` elements with a visible focus ring; a planet's orbit pauses on focus or while its popover is open, so its tooltip doesn't drift away mid-read.
- **Popovers, not custom dropdowns** — tooltips use the native Popover API (`popover="auto"`, anchored via `popovertarget`), which gives Esc-to-close and click-outside dismissal without any JS state.
  - React doesn't recognize `popover`/`popovertarget` as JSX props (a known upstream issue), so they're set via a `ref` callback in `src/components/tooltip.js` instead.
- **Smooth hover *and* focus transitions** — size and glow changes ease in both directions for mouse and keyboard alike, instead of snapping instantly.
- **Mobile-friendly** — a "rotate your device" prompt appears in narrow portrait views, since the orbit layout needs landscape width to be legible; in landscape, the page scrolls so the outer planets (Pluto's orbit alone needs ~1300px) can be explored rather than squeezed to fit.
- **Modern Sass** — the legacy global `random()`/`unquote()` calls were replaced with their namespaced `math.random()` / `string.unquote()` equivalents.
- **Up to date** — running on Gatsby 5 and React 18, with unused dependencies (`gatsby-plugin-mdx`, `styled-components`) removed.

---

*Feel free to explore, fork, or suggest improvements — there's plenty more solar system left to build.*