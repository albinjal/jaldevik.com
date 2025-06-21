Here’s a high-level development plan for adding a full-featured blog with a polished light/dark design. It’s broken into small, self-contained milestones so we can tackle them one or two at a time and keep commits atomic.

──────────────────────────────────

1. Enable Light / Dark mode support
   • Tailwind: switch `tailwind.config.js` to `darkMode: "class"`.
   • Create a `ThemeProvider` context that:
   – Reads the user’s OS preference on first load
   – Persists choice in `localStorage`
   – Exposes `toggleTheme()` for a UI button.
   • Add a small moon / sun toggle button in the header.

2. Blog content pipeline
   • Install blog deps
   – `@mdx-js/react`, `@mdx-js/rollup` (via `vite-plugin-mdx`)
   – `gray-matter` for YAML front-matter parsing.
   • Place MDX files in `src/posts`.
   • Create a simple `scripts/generatePostIndex.ts` that runs at build time to scan `src/posts`, read front-matter, and emit `src/generated/posts.ts` (typed array of post meta).
   • This lets us avoid dynamic FS reads at runtime and keeps everything static.

3. Routing
   • Add `react-router-dom` (already a direct Vite peer).
   • Define routes:
   `/` → Home / latest posts
   `/blog` → List view (`BlogIndexPage`)
   `/blog/:slug` → Single post (`PostPage`)

4. Blog UI components
   • `BlogLayout` – shared wrapper, sets `<article>` typography classes.
   • `PostCard` – card used in list/grid view.
   • `TableOfContents` – generated from MDX headings.
   • `CodeBlock` / syntax highlight with `prismjs` or `shiki`.
   • Responsive typography via Tailwind’s `prose` and `dark:prose-invert`.

5. Global design polish
   • Use shadcn/ui primitives for buttons, cards, dialogs.
   • Ensure all components have both light & dark states (`bg-white` ↔ `bg-neutral-900`, etc).
   • Add subtle animations (e.g. `transition-colors`, staggered list reveal with `@tailwindcss/animate`).

6. Accessibility & SEO
   • Automatic `<title>` + meta via `react-helmet-async`.
   • Accessible colour contrast (run tailwind-colors and `axe`).
   • Generate RSS feed during build (`rss` package).

7. Deployment & CI
   • Add a GitHub Actions workflow: lint → test → build → upload artifact.
   • Optionally, preview deploys on Vercel or Netlify.

──────────────────────────────────
Suggested first coding milestone
• Step 1 (dark / light mode)
• Step 2 (add MDX pipeline - generate static index)

If that sounds good I’ll start writing the code for milestone 1 (dark / light mode) and commit it with a tidy message.

Note that the website should only have two types of pages so far. The home/landing page with some infromation about me / contacts etc as well as links to blog posts. the second type of page so far is the actual blog posts, there should also be a way to return home.
