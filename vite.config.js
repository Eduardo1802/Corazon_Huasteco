import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // server: {
  //   host: '192.168.3.2',
  //   port: 5173,
  // },
  server: {
    host: '192.168.62.56',
    port: 5173,
  },
})
