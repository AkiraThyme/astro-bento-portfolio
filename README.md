# Astro Bento Portfolio

A dark-themed personal portfolio built with Astro, featuring bento-style cards, animated sections, a blog, and a dedicated websites/projects showcase.

![Project preview](public/preview.png)

## Highlights

- Bento-style responsive layout for landing page content
- Dedicated Websites page with project cards and visual highlights
- Blog support with RSS feed
- Animated UI interactions using Motion
- Built with Astro and UnoCSS for performance-focused rendering

## Tech Stack

- [Astro](https://astro.build/)
- [UnoCSS](https://unocss.dev/)
- [Motion](https://motion.dev/)
- [D3](https://d3js.org/)

## Getting Started

### 1) Clone the repository

```bash
git clone https://github.com/Ladvace/astro-bento-portfolio.git
cd astro-bento-portfolio
```

### 2) Install dependencies (recommended)

To avoid lockfile merge/version mismatch issues, use:

```bash
pnpm install --frozen-lockfile
```

### 3) Start development server

```bash
pnpm run dev
```

Open `http://localhost:4321` in your browser.

## Available Scripts

```bash
pnpm run dev      # start local dev server
pnpm run build    # build for production
pnpm run preview  # preview production build
```

## Configuration Notes

- Update site metadata in `astro.config.mjs`.
- Update personal/project content in:
  - `src/pages/index.astro`
  - `src/pages/websites.astro`
  - `src/lib/websites.ts`

## Deployment

You can deploy easily on Netlify or any platform that supports static Astro builds.

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/Ladvace/astro-bento-portfolio)

## Credits

- Original template author: [Gianmarco (Ladvace)](https://github.com/Ladvace)
- Customized portfolio implementation: Jerold Arranzado
