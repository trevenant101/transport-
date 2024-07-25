import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    sourcemap: true, // Enable source maps if you still want them
    rollupOptions: {
      onwarn(warning, warn) {
        // Ignore specific warnings
        if (warning.code === 'SOURCEMAP_ERROR') return;
        // Use default for everything else
        warn(warning);
      },
    },
  },
});
