import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: [],
    entries: ['./src/**/*.{js,jsx,ts,tsx}'],
    holdUntilCrawlEnd: true,
  },
  build: {
    outDir: 'dist',
  },
  ssr: {
    noExternal: ['react-helmet-async'],
  },
  server: {
    port: 3000,
    host: '::',
    strictPort: true,
    hmr: false,
    watch: false,
    cors: {
      origin: '*',
      credentials: true,
    },
    allowedHosts: ['.modal.host', 'localhost', '127.0.0.1'],
  },
})
