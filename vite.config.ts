import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  base: process.env.VITE_BASE_PATH || "/TLO-react-vite",
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'), // Allows "@/assets/..." etc.
    },
  },
});
