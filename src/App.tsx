import { AnchorHTMLAttributes } from 'react';
import { useTheme } from './ThemeProvider';

const Link = (props: AnchorHTMLAttributes<HTMLAnchorElement>) => (
  <a
    className="text-orange-web dark:text-orange-web underline hover:no-underline"
    {...props}
  />
);

export default function App() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="mx-auto my-8 mt-10 w-8/12 rounded-sm border border-gray-200 p-4 shadow-md dark:border-neutral-600 dark:bg-neutral-800 dark:shadow-none">
      <button
        onClick={toggleTheme}
        className="ml-auto block rounded-md border border-gray-300 bg-white px-2 py-1 text-sm shadow hover:bg-gray-50 dark:border-neutral-600 dark:bg-neutral-700 dark:text-gray-100 dark:hover:bg-neutral-600"
        aria-label="Toggle dark mode"
      >
        {theme === 'dark' ? '🌙' : '☀️'}
      </button>
      <h1 className="mb-4 text-4xl">Welcome</h1>
      <p className="my-4">
        <em>Minimal, fast, sensible defaults.</em>
      </p>
      <p className="my-4">
        Using <Link href="https://vitejs.dev/">Vite</Link>,{' '}
        <Link href="https://reactjs.org/">React</Link>,{' '}
        <Link href="https://www.typescriptlang.org/">TypeScript</Link> and{' '}
        <Link href="https://tailwindcss.com/">Tailwind</Link>.
      </p>
      <p className="my-4">
        Change{' '}
        <code className="2py-1 rounded-sm border border-1 border-pink-500 bg-neutral-100 px-1 font-mono text-pink-500 dark:border-pink-400 dark:bg-neutral-700 dark:text-pink-400">
          src/App.tsx
        </code>{' '}
        for live updates.
      </p>
    </div>
  );
}
