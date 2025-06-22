import nkzw from '@nkzw/eslint-config';

export default [
  ...nkzw,
  {
    ignores: ['dist/', 'vite.config.ts.timestamp-*'],
  },
  {
    files: ['scripts/**/*.ts'],
    rules: {
      // Allow console statements in build scripts
      'no-console': 'off',
      // Allow promise chains in build scripts (top-level await might not work in all contexts)
      'unicorn/prefer-top-level-await': 'off',
    },
  },
  {
    files: ['src/**/*.tsx', 'src/**/*.ts'],
    rules: {
      // Allow any type in certain contexts (can be overly restrictive for React components)
      '@typescript-eslint/no-explicit-any': 'warn',
      // Allow missing display names for components (React DevTools can infer them)
      'react/display-name': 'off',
      // Allow unescaped entities in JSX (common in React applications)
      'react/no-unescaped-entities': 'off',
      // Allow functions to be defined inside components when they depend on props/state
      'unicorn/consistent-function-scoping': 'off',
      // Allow missing dependencies in useEffect when intentional (developer knows the dependency)
      'react-hooks/exhaustive-deps': 'warn',
    },
  },
];
