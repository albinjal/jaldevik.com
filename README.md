# jaldevik.com – Personal Website of [Albin Jaldevik](https://jaldevik.com)

## Overview

A minimal, content-focused website and blog built with modern front-end tooling. Everything is statically generated so the site can be deployed on any CDN with near-instant load times.

## Key Features

- ⚡ **Fully static** & CDN-ready – no servers or cold-starts
- 📝 **Markdown-powered blog** posts located in `src/posts`
- 🎨 **Accessible, minimal design** using Tailwind CSS & shadcn/ui
- 📱 **Responsive layout** that looks great on all screen sizes
- 🔗 **Quick contact links**: LinkedIn, GitHub & email
- 📷 **Optimised images** via Vite's asset pipeline
- 💡 **Zero-bloat** – only ship what the user needs

## Tech Stack

- [React](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vitejs.dev/) for lightning-fast dev/build
- [Tailwind CSS](https://tailwindcss.com/) for styling
- [shadcn/ui](https://ui.shadcn.com/) component library
- [pnpm](https://pnpm.io/) for dependency management
- ESLint & Prettier for code quality and consistency

## Getting Started

Clone the repo and install dependencies:

```bash
pnpm install
```

Start the development server (hot-reload enabled):

```bash
pnpm dev
```

Open http://localhost:5173 in your browser.

## Building for Production

```bash
pnpm build  # Outputs static files to dist/
```

Deploy the contents of `dist/` to any static host (e.g. Netlify, Vercel, Cloudflare Pages).

## Directory Structure (excerpt)

```
src/
  App.tsx         # Root React component
  lib/            # Shared utilities
  posts/          # Markdown/MDX blog posts
public/           # Static assets copied as-is
```

## Contributing

Pull requests are welcome! If you find a bug or have an idea for an improvement, please open an issue first to discuss the change.

## License

[MIT](LICENSE)
