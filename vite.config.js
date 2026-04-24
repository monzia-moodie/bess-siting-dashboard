import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
 
export default defineConfig({
  plugins: [react()],
  base: '/bess-siting-dashboard/',
  // base must match your GitHub repository name exactly, including both slashes
})
