import { useTheme } from '@/components/theme-provider';

export default function Navbar() {
  const { theme, setTheme } = useTheme();

  return (
    <nav className="mx-auto mt-4 flex w-8/12 items-center justify-between rounded-sm border border-gray-200 bg-white/60 px-4 py-2 shadow-md backdrop-blur dark:border-neutral-600 dark:bg-neutral-800/60 dark:shadow-none">
      {/* Site title / logo */}
      <a
        href="/"
        className="text-lg font-semibold text-gray-900 dark:text-gray-100"
      >
        jaldevik.com
      </a>

      {/* Dark / light mode toggle */}
      <button
        onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
        className="rounded-md border border-gray-300 bg-white px-2 py-1 text-sm shadow hover:bg-gray-50 dark:border-neutral-600 dark:bg-neutral-700 dark:text-gray-100 dark:hover:bg-neutral-600"
        aria-label="Toggle dark mode"
      >
        {theme === 'dark' ? '🌙' : '☀️'}
      </button>
    </nav>
  );
}
