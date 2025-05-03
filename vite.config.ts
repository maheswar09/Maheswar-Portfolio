import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Correct base path for GitHub pages
export default defineConfig({
  base: '/Sree-Venkat-Portfolio/',  // IMPORTANT --> leading and trailing slash
  plugins: [react()],
})
