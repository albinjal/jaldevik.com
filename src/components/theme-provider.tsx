import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from 'react';

/**
 * Theme values supported by the app.
 */
export type Theme = 'dark' | 'light' | 'system';

export type ThemeProviderProps = {
  children: ReactNode;
  /** The theme to fall back to when nothing is stored in localStorage. */
  defaultTheme?: Theme;
  /** The localStorage key used to persist the theme. */
  storageKey?: string;
};

export type ThemeProviderState = {
  /**
   * Update the current theme and persist it to localStorage.
   */
  setTheme: (theme: Theme) => void;
  theme: Theme;
};

const initialState: ThemeProviderState = {
  setTheme: () => {},
  theme: 'system',
};

const ThemeProviderContext = createContext<ThemeProviderState>(initialState);

export function ThemeProvider({
  children,
  defaultTheme = 'system',
  storageKey = 'vite-ui-theme',
  ...props
}: ThemeProviderProps) {
  const [theme, setThemeState] = useState<Theme>(() => {
    if (typeof window === 'undefined') {
      return defaultTheme;
    }
    return (localStorage.getItem(storageKey) as Theme) || defaultTheme;
  });

  useEffect(() => {
    const root = window.document.documentElement;

    // Temporarily disable transitions to prevent bouncing
    root.classList.add('theme-transition-disable');

    root.classList.remove('light', 'dark');

    if (theme === 'system') {
      const systemTheme = window.matchMedia('(prefers-color-scheme: dark)')
        .matches
        ? 'dark'
        : 'light';
      root.classList.add(systemTheme);
    } else {
      root.classList.add(theme);
    }

    // Re-enable transitions after a brief delay to allow the theme change to complete
    const timeoutId = setTimeout(() => {
      root.classList.remove('theme-transition-disable');
    }, 50);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [theme]);

  const setTheme: ThemeProviderState['setTheme'] = (newTheme) => {
    localStorage.setItem(storageKey, newTheme);
    setThemeState(newTheme);
  };

  const value: ThemeProviderState = {
    setTheme,
    theme,
  };

  return (
    <ThemeProviderContext.Provider value={value} {...props}>
      {children}
    </ThemeProviderContext.Provider>
  );
}

export const useTheme = () => {
  const context = useContext(ThemeProviderContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
