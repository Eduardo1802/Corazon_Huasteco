import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // server: {
  //   host: '192.168.3.2',
  //   port: 5173,
  // },

  //EL SIGUIENTE CONTENIDO ES SOLO PAR LOS TESTS,
  //COMENTAR ANTES DE SUBIR A PRODUCCIÓN, HACER BUILD O EJECUTAR
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
