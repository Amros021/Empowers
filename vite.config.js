import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  build: {
    // Schakel automatisch leegmaken uit — .DS_Store op macOS-volumes geeft EPERM
    // Handmatige cleanup (zonder .DS_Store) wordt gedaan via clean-dist.mjs
    emptyOutDir: false,
  },
})
