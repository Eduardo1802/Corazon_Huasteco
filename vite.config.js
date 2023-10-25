import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({ 
      registerType: 'autoUpdate',
      workbox: {
        cleanupOutdatedCaches: true,
        globPatterns: ['**/*.{js,css,html,ico,png,svg}']
      },
      devOptions: {
        enabled: true,
        navigateFallbackAllowlist: [/^index.html$/]
      },
      includeAssets: ['favicon.ico', 'robots.txt', 'apple-touch-icon.png'],
      manifest: {
        name: 'Corazón Huasteco',
        short_name: 'Corazón Huasteco',
        description: 'Un sitio web que te lleva a un viaje a través de la historia, la tradición y la naturaleza de la Huasteca. Descubre el encanto de esta región a través de sus tradiciones, sus costumbres y su gastronomía. explora articulos de la ciudad de Huejutla de Reyes Hidalgo',
        start_url: "/",
        display: "standalone",
        background_color: '#581859',
        theme_color: '#581859',
        icons: [
          {
            src: '/pwa-192x192.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: '/pwa-192x192.png',
            sizes: '192x192',
            type: 'image/png',
            purpose: 'any'
          },
          {
            src: '/pwa-192x192.png',
            sizes: '192x192',
            type: 'image/png',
            purpose: 'maskable'
          },
          {
            src: '/pwa-512x512.png',
            sizes: '512x512',
            type: 'image/png'
          },
          {
            src: '/pwa-512x512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'any'
          },
          {
            src: '/pwa-512x512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'maskable'
          }
        ],
        screenshots: [
          {
            src: "screenshot-desktop.png",
            sizes: "1280x800",
            type: "image/png",
            platform: "web",
            form_factor: "wide" 
          },
          {
            src: "screenshot-mobile.png",
            sizes: "800x1280",
            type: "image/png",
            platform: "web",
            form_factor: "not set"
          }
        ]
      }
    })
  ],
  base:"/Corazon_Huasteco/",
  //TELCEL-HUAWEI-B311-2F0A
  // server: {
  //   host: '192.168.137.63', 
  //   port: 5173,
  // },

  //EL SIGUIENTE CONTENIDO ES SOLO PAR LOS TESTS,
  //COMENTAR ANTES DE COMPILAR O SUBIR A PRODUCCIÓN
      /* test: {
        environment: 'jsdom',
        globals: true
      },
      server: {
        fs: {
          // Incluir archivos de prueba con extensión .test.js para que se procesen con JSX
          allow: ['../*']
        }
      } */
  //HASTA AQUÍ TERMINA LO QUE SE DEBE DE COMENTAR
})
