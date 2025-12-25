import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    // Разрешаем доступ через ngrok и другие туннели
    allowedHosts: ['.ngrok-free.dev']
  }
})
