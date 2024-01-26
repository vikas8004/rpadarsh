import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  server:{
    proxy:{
      '/api':'rpaic-backend.vercel.app:1200'
    }
  },
  plugins: [react()],
})
