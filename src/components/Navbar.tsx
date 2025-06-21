import { useTheme } from '@/components/theme-provider';

export default function Navbar() {
  const { theme, setTheme } = useTheme();

  return (
    <nav className="border-border bg-card/70 mx-auto mt-4 flex w-8/12 items-center justify-between rounded-sm border px-4 py-2 shadow-md backdrop-blur">
      {/* Site title / logo */}
      <a href="/" className="text-foreground text-lg font-semibold">
        jaldevik.com
      </a>

      {/* Dark / light mode toggle */}
      <button
        onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
        className="border-border bg-background hover:bg-secondary hover:text-secondary-foreground rounded-md border px-2 py-1 text-sm shadow"
        aria-label="Toggle dark mode"
      >
        {theme === 'dark' ? '🌙' : '☀️'}
      </button>
    </nav>
  );
}
