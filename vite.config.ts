import { resolve } from 'path';
import mdx from '@mdx-js/rollup';
import react from '@vitejs/plugin-react';
import reactCompiler from 'babel-plugin-react-compiler';
import { defineConfig } from 'vite';

export default defineConfig({
  // Use the repository name as base when building for production so that
  // absolute asset URLs resolve correctly on GitHub Pages (served at /jaldevik.com/).
  // In dev mode Vite serves at root so we keep "/".
  base: process.env.NODE_ENV === 'production' ? '/jaldevik.com/' : '/',
  plugins: [
    react({
      babel: {
        plugins: [reactCompiler],
      },
    }),
    mdx(),
  ],
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
    },
  },
});
