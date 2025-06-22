import { useTheme } from '@/components/theme-provider.tsx';
import { Button } from '@/components/ui/button.tsx';
import { Moon, Sun } from 'lucide-react';
import { useCallback, useRef } from 'react';

export function ModeToggle() {
  const { setTheme, theme } = useTheme();
  const isDark = theme === 'dark';
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleToggle = useCallback(() => {
    // Clear any existing timeout to prevent rapid switching
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    // Debounce the theme change slightly to prevent rapid switching
    timeoutRef.current = setTimeout(() => {
      setTheme(isDark ? 'light' : 'dark');
    }, 10);
  }, [isDark, setTheme]);

  return (
    <Button
      aria-label="Toggle dark mode"
      onClick={handleToggle}
      size="icon"
      variant="outline"
    >
      {isDark ? <Moon className="h-4 w-4" /> : <Sun className="h-4 w-4" />}
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
