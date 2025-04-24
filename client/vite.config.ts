// client/vite.config.ts
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  assetsInclude: ['**/*.svg'], // Poprawne umiejscowienie
  server: {
    // Tutaj inne opcje serwera
  }
})