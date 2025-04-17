import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import autoprefixer from 'autoprefixer';

export default defineConfig({
  base: '/p2/',
  plugins: [react()],
   // Make sure this is correct for your GitHub Pages setup
  css: {
    postcss: {
      plugins: [autoprefixer], // Using autoprefixer directly
    },
  },
});
