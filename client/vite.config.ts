import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/', // Убедитесь, что путь корректен
  build: {
    outDir: 'dist', // Папка для сборки
  },
})
