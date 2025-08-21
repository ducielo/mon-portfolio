import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Note: base: './' = assets relatifs => OK sur GitHub Pages (sous-chemin) et Hostinger
export default defineConfig({
  plugins: [react()],
  base: './',
  server: { port: 5173, open: true },
  build: { outDir: 'dist', sourcemap: false }
})
