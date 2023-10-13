import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  //TELCEL-HUAWEI-B311-2F0A
  server: {
    host: '192.168.8.6', 
    port: 5173,
  },

  // HONOR 50 LITE
  // server: {
  //   host: '192.168.131.56', 
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
