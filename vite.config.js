
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: "Netflix-March2025", // ✅ MUST match your repo name
})

