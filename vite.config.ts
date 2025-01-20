import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  base: '/', // Aseguramos que la base path esté correctamente configurada
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: true,
  },
});