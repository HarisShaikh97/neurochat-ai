import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  ...(process.env.NODE_ENV === 'development'
    ? {
      define: {
        global: {},
      },
    }
    : {}),
  plugins: [react()],
  build: {
    assetsInlineLimit: 0, // This ensures that assets are not inlined
    rollupOptions: {
      output: {
        assetFileNames: 'assets/[name].[ext]', // Preserves folder structure in dist/assets
      },
    },
  },
  css: {
    modules: true // If using CSS modules
  }
});
