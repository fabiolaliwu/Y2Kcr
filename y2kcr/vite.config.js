import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    host: true,          // listen on all addresses
    port: process.env.PORT || 4173,
    strictPort: true,
    // allow your Render domain:
    // either specify exact hostnames here or disable host check by setting origin:false
    // to allow all origins, set:
    origin: false
  },
  preview: {
    host: true,
    port: process.env.PORT || 4173,
    origin: false,  // disable host check on preview too
  }
})
