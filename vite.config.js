// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

export default defineConfig({
  plugins: [react()],
  server: {
    open: true, // ← добавь эту строку
    host: true, // или '0.0.0.0'
    port: 5173, // можно указать свой
  }
})
