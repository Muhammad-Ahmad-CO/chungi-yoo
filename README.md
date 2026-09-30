# Chungi Yoo — Art Director & Illustrator Portfolio

> A bold, editorial-style creative portfolio for **Chungi Yoo**, a Germany-based art director and illustrator. The website turns a personal design practice into an immersive visual story through expressive typography, colourful artwork, playful motion, and a clear path to collaboration.

[![Live Website](https://img.shields.io/badge/Live%20Website-chungi--yoo.lovable.app-18181b?style=for-the-badge)](https://chungi-yoo.lovable.app)
[![Built with React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=white)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.8-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Powered by Lovable](https://img.shields.io/badge/Powered%20by-Lovable-ff5f8f?style=for-the-badge)](https://lovable.dev)

## Overview

Chungi Yoo is designed as a digital playground rather than a conventional résumé site. The single-page experience introduces the artist with an oversized typographic hero, presents selected creative projects as interactive artwork cards, shares a personal point of view, and finishes with a direct collaboration invitation.

The visual language is intentionally warm and expressive: cream and sand surfaces provide a gallery-like canvas, while sun-yellow, blush, and rouge accents bring energy to the page. Editorial typography, curved shapes, rotating details, scroll reveals, parallax movement, and hover interactions make the portfolio feel tactile without distracting from the work.

**Live app:** [chungi-yoo.lovable.app](https://chungi-yoo.lovable.app)

## Highlights

- **Story-first landing page** — Hero, introduction, biography, creative philosophy, selected work, contact, and footer sections flow as one visual narrative.
- **Selected works gallery** — Five featured projects are represented through reusable `WorkCard` components and locally stored artwork, including Illustrations, Bangs, Liberty in North Korea, Cube, and Chungi Yoo branding.
- **Interactive artwork previews** — Project images separate, tilt, scale, and move on hover using Motion for React, creating a layered editorial-card effect.
- **Motion with accessibility in mind** — `useReveal` adds one-time scroll-triggered reveals, while `useReducedMotion` and touch checks prevent unnecessary pointer animation for users who prefer less motion or use mobile devices.
- **Playful brand details** — A rotating studio badge, animated marquee, custom arrow illustrations, slow-spinning asterisk, oversized display type, and organic colour blocks reinforce the studio identity.
- **Responsive navigation** — A fixed wordmark and animated full-screen menu provide quick access to About, Works, Illustrations, and Contact sections on desktop and mobile.
- **Direct conversion path** — The contact section links directly to `hello@chungiyoo.com`, making it easy for potential collaborators to start a conversation.
- **Metadata and sharing support** — TanStack route metadata includes page titles, descriptions, Open Graph fields, Twitter card configuration, viewport settings, author information, and a favicon.
- **Resilient runtime** — TanStack Start middleware provides CSRF protection for server functions and a server-side error response, while the root route includes 404 and recoverable error screens.

## Featured projects

| Project | Creative direction |
| --- | --- |
| **Illustrations** | Commercial and personal stories told through colourful, art-led visuals. |
| **Bangs** | A playful hypothetical hair salon built around bright colours and memorable characters. |
| **Liberty in North Korea** | An editorial visual series that looks beyond the repeated media debate between world leaders. |
| **Cube** | A concept exploring movement, everyday activity, and the possibility of turning human motion into energy. |
| **Chungi Yoo** | Personal branding for the artist and the challenge of creating an identity for yourself. |

## Design system

The portfolio’s visual system is defined in [`src/styles.css`](src/styles.css):

- **Palette:** `cream`, `ink`, `sun`, `blush`, `rouge`, and `sand`, expressed with modern OKLCH colour values.
- **Typography:** `Bodoni Moda` for expressive display headings and `Jost` for readable body copy and uppercase eyebrow labels.
- **Motion:** marquee, floating, slow-spin, parallax, pointer tilt, and scroll-reveal effects are composed through Tailwind utilities, CSS keyframes, React hooks, and Motion.
- **Layout:** large editorial headings, generous whitespace, rounded image treatments, arch-shaped backdrops, and fluid viewport-based type create a gallery-inspired composition.

## Technology stack

- **React 19** with **TypeScript 5.8**
- **TanStack Start** for the application runtime and server integration
- **TanStack Router** for file-based routing and route metadata
- **Vite** for local development and production builds
- **Tailwind CSS 4** with `tw-animate-css` for styling and animation utilities
- **Motion for React** for interactive project-card transitions
- **TanStack Query** for router context and application data infrastructure
- **Radix UI**, `lucide-react`, and supporting UI utilities available for accessible interface primitives
- **Bun lockfile** for reproducible dependency resolution

## Project structure

```text
.
├── public/                      Static public files, favicon, and robots.txt
├── src/
│   ├── assets/                  Portrait and featured project artwork
│   ├── components/
│   │   ├── site/                Portfolio-specific navigation, marquee, cards, and badges
│   │   └── ui/                  Reusable Radix-based interface primitives
│   ├── hooks/                   Scroll-reveal and scroll-position hooks
│   ├── lib/                     Error handling, Lovable reporting, and shared utilities
│   ├── routes/                  TanStack file-based routes and the home page composition
│   ├── router.tsx               Router creation with QueryClient context
│   ├── server.ts                Server entry used by the TanStack Start build
│   ├── start.ts                 CSRF and error-handling middleware
│   └── styles.css               Tailwind imports and the Chungi Yoo design system
├── vite.config.ts               Lovable TanStack/Vite configuration
├── package.json                 Scripts and dependencies
└── bun.lock                     Locked dependency graph
```

### How the page works

The root route in [`src/routes/__root.tsx`](src/routes/__root.tsx) establishes the HTML shell, global metadata, font loading, error UI, and `QueryClientProvider`. The `/` route in [`src/routes/index.tsx`](src/routes/index.tsx) assembles the page from `SiteNav`, `Hero`, `Intro`, `About`, `Marquee`, `Quote`, reusable `WorkCard` sections, `Contact`, and `Footer`.

Each work entry is defined as data in the `WORKS` array and rendered through [`src/components/site/work-card.tsx`](src/components/site/work-card.tsx). This keeps project content separate from presentation while allowing every card to share the same responsive layout, reveal transition, image layering, reduced-motion behaviour, and contact CTA.

## Getting started

### Prerequisites

- Node.js and npm, or Bun
- A modern browser with support for Intersection Observer and CSS animations

### Installation

```sh
git clone https://github.com/Muhammad-Ahmad-CO/chungi-yoo.git
cd chungi-yoo
npm install
```

You can also use Bun with the included lockfile:

```sh
bun install
```

### Run locally

```sh
npm run dev
```

The Vite development server will print the local URL in your terminal.

### Production build and preview

```sh
npm run build
npm run preview
```

### Quality checks

```sh
npm run lint
npm run format
```

## Available scripts

| Command | Purpose |
| --- | --- |
| `npm run dev` | Start the Vite development server. |
| `npm run build` | Create a production build. |
| `npm run build:dev` | Create a development-mode build. |
| `npm run preview` | Preview the production build locally. |
| `npm run lint` | Run ESLint across the project. |
| `npm run format` | Format project files with Prettier. |

## Customization guide

- **Change featured projects:** Update the `WORKS` array in [`src/routes/index.tsx`](src/routes/index.tsx) and add or replace images in `src/assets/`.
- **Update personal details:** Edit the copy, email address, social links, and metadata in [`src/routes/index.tsx`](src/routes/index.tsx) and [`src/routes/__root.tsx`](src/routes/__root.tsx).
- **Adjust the visual identity:** Modify the Chungi Yoo colour tokens, fonts, keyframes, and utility classes in [`src/styles.css`](src/styles.css).
- **Add another route:** Follow the file-based routing conventions documented in [`src/routes/README.md`](src/routes/README.md). The generated `src/routeTree.gen.ts` should not be edited manually.
- **Extend motion:** Reuse `useReveal`, `useScrollY`, and Motion variants from the site components while respecting reduced-motion preferences.

## Lovable workflow

This project is connected to [Lovable](https://lovable.dev). Changes made in the Lovable editor are committed back to this repository, and commits pushed to the connected branch sync back into Lovable.

To continue development in Lovable, open the [Chungi Yoo project](https://lovable.dev/projects/db83bdaf-41e0-4eac-bcd7-5525aa05b98e).

> **Important:** Avoid force-pushing, rebasing, amending, or squashing commits that are already published. Keeping the connected branch history intact helps preserve the project history in Lovable.

## License

No license file is currently included. If you plan to distribute, reuse, or accept contributions to this project, add a license that matches your intended usage.
