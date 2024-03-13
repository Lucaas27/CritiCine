import path from 'path'
import react from '@vitejs/plugin-react-swc'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      // '@components': path.resolve(__dirname, './src/components'),
      '@components': path.resolve(__dirname, './src/components'),
    },
  },
  server: {
    port: 3000,
    strictPort: true,
    host: true,
  },
  build: {
    sourcemap: true,
    emptyOutDir: true,
    // rollupOptions: {},
  },
})
