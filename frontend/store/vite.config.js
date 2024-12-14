import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/api": "https://baia-jir6.onrender.com",
      "/uploads": "https://baia-jir6.onrender.com",
    }
  }
})
