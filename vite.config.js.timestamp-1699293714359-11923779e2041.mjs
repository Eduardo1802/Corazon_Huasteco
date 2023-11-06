// vite.config.js
import { defineConfig } from "file:///C:/Users/meyer/OneDrive/Escritorio/corazon-huasteco/node_modules/vite/dist/node/index.js";
import react from "file:///C:/Users/meyer/OneDrive/Escritorio/corazon-huasteco/node_modules/@vitejs/plugin-react/dist/index.mjs";
import { VitePWA } from "file:///C:/Users/meyer/OneDrive/Escritorio/corazon-huasteco/node_modules/vite-plugin-pwa/dist/index.js";
var vite_config_default = defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: "autoUpdate",
      workbox: {
        cleanupOutdatedCaches: true,
        globPatterns: ["**/*.{js,css,html,ico,png,svg}"]
      },
      devOptions: {
        enabled: true,
        navigateFallbackAllowlist: [/^index.html$/]
      },
      includeAssets: ["favicon.ico", "robots.txt", "apple-touch-icon.png"],
      manifest: {
        name: "Coraz\xF3n Huasteco",
        short_name: "Coraz\xF3n Huasteco",
        description: "Un sitio web que te lleva a un viaje a trav\xE9s de la historia, la tradici\xF3n y la naturaleza de la Huasteca. Descubre el encanto de esta regi\xF3n a trav\xE9s de sus tradiciones, sus costumbres y su gastronom\xEDa. explora articulos de la ciudad de Huejutla de Reyes Hidalgo",
        start_url: "/",
        display: "standalone",
        background_color: "#581859",
        theme_color: "#581859",
        icons: [
          {
            src: "/pwa-192x192.png",
            sizes: "192x192",
            type: "image/png"
          },
          {
            src: "/pwa-192x192.png",
            sizes: "192x192",
            type: "image/png",
            purpose: "any"
          },
          {
            src: "/pwa-192x192.png",
            sizes: "192x192",
            type: "image/png",
            purpose: "maskable"
          },
          {
            src: "/pwa-512x512.png",
            sizes: "512x512",
            type: "image/png"
          },
          {
            src: "/pwa-512x512.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "any"
          },
          {
            src: "/pwa-512x512.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "maskable"
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
  preview: {
    host: true,
    port: 8080
  }
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
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFxtZXllclxcXFxPbmVEcml2ZVxcXFxFc2NyaXRvcmlvXFxcXGNvcmF6b24taHVhc3RlY29cIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkM6XFxcXFVzZXJzXFxcXG1leWVyXFxcXE9uZURyaXZlXFxcXEVzY3JpdG9yaW9cXFxcY29yYXpvbi1odWFzdGVjb1xcXFx2aXRlLmNvbmZpZy5qc1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vQzovVXNlcnMvbWV5ZXIvT25lRHJpdmUvRXNjcml0b3Jpby9jb3Jhem9uLWh1YXN0ZWNvL3ZpdGUuY29uZmlnLmpzXCI7aW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSAndml0ZSdcclxuaW1wb3J0IHJlYWN0IGZyb20gJ0B2aXRlanMvcGx1Z2luLXJlYWN0J1xyXG5pbXBvcnQgeyBWaXRlUFdBIH0gZnJvbSAndml0ZS1wbHVnaW4tcHdhJ1xyXG5cclxuLy8gaHR0cHM6Ly92aXRlanMuZGV2L2NvbmZpZy9cclxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKHtcclxuICBwbHVnaW5zOiBbXHJcbiAgICByZWFjdCgpLFxyXG4gICAgVml0ZVBXQSh7IFxyXG4gICAgICByZWdpc3RlclR5cGU6ICdhdXRvVXBkYXRlJyxcclxuICAgICAgd29ya2JveDoge1xyXG4gICAgICAgIGNsZWFudXBPdXRkYXRlZENhY2hlczogdHJ1ZSxcclxuICAgICAgICBnbG9iUGF0dGVybnM6IFsnKiovKi57anMsY3NzLGh0bWwsaWNvLHBuZyxzdmd9J11cclxuICAgICAgfSxcclxuICAgICAgZGV2T3B0aW9uczoge1xyXG4gICAgICAgIGVuYWJsZWQ6IHRydWUsXHJcbiAgICAgICAgbmF2aWdhdGVGYWxsYmFja0FsbG93bGlzdDogWy9eaW5kZXguaHRtbCQvXVxyXG4gICAgICB9LFxyXG4gICAgICBpbmNsdWRlQXNzZXRzOiBbJ2Zhdmljb24uaWNvJywgJ3JvYm90cy50eHQnLCAnYXBwbGUtdG91Y2gtaWNvbi5wbmcnXSxcclxuICAgICAgbWFuaWZlc3Q6IHtcclxuICAgICAgICBuYW1lOiAnQ29yYXpcdTAwRjNuIEh1YXN0ZWNvJyxcclxuICAgICAgICBzaG9ydF9uYW1lOiAnQ29yYXpcdTAwRjNuIEh1YXN0ZWNvJyxcclxuICAgICAgICBkZXNjcmlwdGlvbjogJ1VuIHNpdGlvIHdlYiBxdWUgdGUgbGxldmEgYSB1biB2aWFqZSBhIHRyYXZcdTAwRTlzIGRlIGxhIGhpc3RvcmlhLCBsYSB0cmFkaWNpXHUwMEYzbiB5IGxhIG5hdHVyYWxlemEgZGUgbGEgSHVhc3RlY2EuIERlc2N1YnJlIGVsIGVuY2FudG8gZGUgZXN0YSByZWdpXHUwMEYzbiBhIHRyYXZcdTAwRTlzIGRlIHN1cyB0cmFkaWNpb25lcywgc3VzIGNvc3R1bWJyZXMgeSBzdSBnYXN0cm9ub21cdTAwRURhLiBleHBsb3JhIGFydGljdWxvcyBkZSBsYSBjaXVkYWQgZGUgSHVlanV0bGEgZGUgUmV5ZXMgSGlkYWxnbycsXHJcbiAgICAgICAgc3RhcnRfdXJsOiBcIi9cIixcclxuICAgICAgICBkaXNwbGF5OiBcInN0YW5kYWxvbmVcIixcclxuICAgICAgICBiYWNrZ3JvdW5kX2NvbG9yOiAnIzU4MTg1OScsXHJcbiAgICAgICAgdGhlbWVfY29sb3I6ICcjNTgxODU5JyxcclxuICAgICAgICBpY29uczogW1xyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBzcmM6ICcvcHdhLTE5MngxOTIucG5nJyxcclxuICAgICAgICAgICAgc2l6ZXM6ICcxOTJ4MTkyJyxcclxuICAgICAgICAgICAgdHlwZTogJ2ltYWdlL3BuZydcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIHNyYzogJy9wd2EtMTkyeDE5Mi5wbmcnLFxyXG4gICAgICAgICAgICBzaXplczogJzE5MngxOTInLFxyXG4gICAgICAgICAgICB0eXBlOiAnaW1hZ2UvcG5nJyxcclxuICAgICAgICAgICAgcHVycG9zZTogJ2FueSdcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIHNyYzogJy9wd2EtMTkyeDE5Mi5wbmcnLFxyXG4gICAgICAgICAgICBzaXplczogJzE5MngxOTInLFxyXG4gICAgICAgICAgICB0eXBlOiAnaW1hZ2UvcG5nJyxcclxuICAgICAgICAgICAgcHVycG9zZTogJ21hc2thYmxlJ1xyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgc3JjOiAnL3B3YS01MTJ4NTEyLnBuZycsXHJcbiAgICAgICAgICAgIHNpemVzOiAnNTEyeDUxMicsXHJcbiAgICAgICAgICAgIHR5cGU6ICdpbWFnZS9wbmcnXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBzcmM6ICcvcHdhLTUxMng1MTIucG5nJyxcclxuICAgICAgICAgICAgc2l6ZXM6ICc1MTJ4NTEyJyxcclxuICAgICAgICAgICAgdHlwZTogJ2ltYWdlL3BuZycsXHJcbiAgICAgICAgICAgIHB1cnBvc2U6ICdhbnknXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBzcmM6ICcvcHdhLTUxMng1MTIucG5nJyxcclxuICAgICAgICAgICAgc2l6ZXM6ICc1MTJ4NTEyJyxcclxuICAgICAgICAgICAgdHlwZTogJ2ltYWdlL3BuZycsXHJcbiAgICAgICAgICAgIHB1cnBvc2U6ICdtYXNrYWJsZSdcclxuICAgICAgICAgIH1cclxuICAgICAgICBdLFxyXG4gICAgICAgIHNjcmVlbnNob3RzOiBbXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIHNyYzogXCJzY3JlZW5zaG90LWRlc2t0b3AucG5nXCIsXHJcbiAgICAgICAgICAgIHNpemVzOiBcIjEyODB4ODAwXCIsXHJcbiAgICAgICAgICAgIHR5cGU6IFwiaW1hZ2UvcG5nXCIsXHJcbiAgICAgICAgICAgIHBsYXRmb3JtOiBcIndlYlwiLFxyXG4gICAgICAgICAgICBmb3JtX2ZhY3RvcjogXCJ3aWRlXCIgXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBzcmM6IFwic2NyZWVuc2hvdC1tb2JpbGUucG5nXCIsXHJcbiAgICAgICAgICAgIHNpemVzOiBcIjgwMHgxMjgwXCIsXHJcbiAgICAgICAgICAgIHR5cGU6IFwiaW1hZ2UvcG5nXCIsXHJcbiAgICAgICAgICAgIHBsYXRmb3JtOiBcIndlYlwiLFxyXG4gICAgICAgICAgICBmb3JtX2ZhY3RvcjogXCJub3Qgc2V0XCJcclxuICAgICAgICAgIH1cclxuICAgICAgICBdXHJcbiAgICAgIH1cclxuICAgIH0pXHJcbiAgXSxcclxuICBwcmV2aWV3OntcclxuICAgIGhvc3Q6dHJ1ZSxcclxuICAgIHBvcnQ6ODA4MFxyXG4gIH1cclxuICAvL1RFTENFTC1IVUFXRUktQjMxMS0yRjBBXHJcbiAgLy8gc2VydmVyOiB7XHJcbiAgLy8gICBob3N0OiAnMTkyLjE2OC4xMzcuNjMnLCBcclxuICAvLyAgIHBvcnQ6IDUxNzMsXHJcbiAgLy8gfSxcclxuXHJcbiAgLy9FTCBTSUdVSUVOVEUgQ09OVEVOSURPIEVTIFNPTE8gUEFSIExPUyBURVNUUyxcclxuICAvL0NPTUVOVEFSIEFOVEVTIERFIENPTVBJTEFSIE8gU1VCSVIgQSBQUk9EVUNDSVx1MDBEM05cclxuICAgICAgLyogdGVzdDoge1xyXG4gICAgICAgIGVudmlyb25tZW50OiAnanNkb20nLFxyXG4gICAgICAgIGdsb2JhbHM6IHRydWVcclxuICAgICAgfSxcclxuICAgICAgc2VydmVyOiB7XHJcbiAgICAgICAgZnM6IHtcclxuICAgICAgICAgIC8vIEluY2x1aXIgYXJjaGl2b3MgZGUgcHJ1ZWJhIGNvbiBleHRlbnNpXHUwMEYzbiAudGVzdC5qcyBwYXJhIHF1ZSBzZSBwcm9jZXNlbiBjb24gSlNYXHJcbiAgICAgICAgICBhbGxvdzogWycuLi8qJ11cclxuICAgICAgICB9XHJcbiAgICAgIH0gKi9cclxuICAvL0hBU1RBIEFRVVx1MDBDRCBURVJNSU5BIExPIFFVRSBTRSBERUJFIERFIENPTUVOVEFSXHJcbn0pXHJcbiJdLAogICJtYXBwaW5ncyI6ICI7QUFBdVYsU0FBUyxvQkFBb0I7QUFDcFgsT0FBTyxXQUFXO0FBQ2xCLFNBQVMsZUFBZTtBQUd4QixJQUFPLHNCQUFRLGFBQWE7QUFBQSxFQUMxQixTQUFTO0FBQUEsSUFDUCxNQUFNO0FBQUEsSUFDTixRQUFRO0FBQUEsTUFDTixjQUFjO0FBQUEsTUFDZCxTQUFTO0FBQUEsUUFDUCx1QkFBdUI7QUFBQSxRQUN2QixjQUFjLENBQUMsZ0NBQWdDO0FBQUEsTUFDakQ7QUFBQSxNQUNBLFlBQVk7QUFBQSxRQUNWLFNBQVM7QUFBQSxRQUNULDJCQUEyQixDQUFDLGNBQWM7QUFBQSxNQUM1QztBQUFBLE1BQ0EsZUFBZSxDQUFDLGVBQWUsY0FBYyxzQkFBc0I7QUFBQSxNQUNuRSxVQUFVO0FBQUEsUUFDUixNQUFNO0FBQUEsUUFDTixZQUFZO0FBQUEsUUFDWixhQUFhO0FBQUEsUUFDYixXQUFXO0FBQUEsUUFDWCxTQUFTO0FBQUEsUUFDVCxrQkFBa0I7QUFBQSxRQUNsQixhQUFhO0FBQUEsUUFDYixPQUFPO0FBQUEsVUFDTDtBQUFBLFlBQ0UsS0FBSztBQUFBLFlBQ0wsT0FBTztBQUFBLFlBQ1AsTUFBTTtBQUFBLFVBQ1I7QUFBQSxVQUNBO0FBQUEsWUFDRSxLQUFLO0FBQUEsWUFDTCxPQUFPO0FBQUEsWUFDUCxNQUFNO0FBQUEsWUFDTixTQUFTO0FBQUEsVUFDWDtBQUFBLFVBQ0E7QUFBQSxZQUNFLEtBQUs7QUFBQSxZQUNMLE9BQU87QUFBQSxZQUNQLE1BQU07QUFBQSxZQUNOLFNBQVM7QUFBQSxVQUNYO0FBQUEsVUFDQTtBQUFBLFlBQ0UsS0FBSztBQUFBLFlBQ0wsT0FBTztBQUFBLFlBQ1AsTUFBTTtBQUFBLFVBQ1I7QUFBQSxVQUNBO0FBQUEsWUFDRSxLQUFLO0FBQUEsWUFDTCxPQUFPO0FBQUEsWUFDUCxNQUFNO0FBQUEsWUFDTixTQUFTO0FBQUEsVUFDWDtBQUFBLFVBQ0E7QUFBQSxZQUNFLEtBQUs7QUFBQSxZQUNMLE9BQU87QUFBQSxZQUNQLE1BQU07QUFBQSxZQUNOLFNBQVM7QUFBQSxVQUNYO0FBQUEsUUFDRjtBQUFBLFFBQ0EsYUFBYTtBQUFBLFVBQ1g7QUFBQSxZQUNFLEtBQUs7QUFBQSxZQUNMLE9BQU87QUFBQSxZQUNQLE1BQU07QUFBQSxZQUNOLFVBQVU7QUFBQSxZQUNWLGFBQWE7QUFBQSxVQUNmO0FBQUEsVUFDQTtBQUFBLFlBQ0UsS0FBSztBQUFBLFlBQ0wsT0FBTztBQUFBLFlBQ1AsTUFBTTtBQUFBLFlBQ04sVUFBVTtBQUFBLFlBQ1YsYUFBYTtBQUFBLFVBQ2Y7QUFBQSxRQUNGO0FBQUEsTUFDRjtBQUFBLElBQ0YsQ0FBQztBQUFBLEVBQ0g7QUFBQSxFQUNBLFNBQVE7QUFBQSxJQUNOLE1BQUs7QUFBQSxJQUNMLE1BQUs7QUFBQSxFQUNQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBb0JGLENBQUM7IiwKICAibmFtZXMiOiBbXQp9Cg==
