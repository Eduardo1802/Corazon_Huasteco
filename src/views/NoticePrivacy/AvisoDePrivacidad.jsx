import React from 'react'
//TODO LO DE ANALYTICS DE FIREBASE
// import { analytics } from '../App/firebase';
// import { perf } from '../App/firebase'
// import { logEvent } from 'firebase/analytics';
// import { trace } from 'firebase/performance'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography'

import { WrapperSingleRoute } from '../../components/customs/WrapperSingleRoute';
import { Grid, Paper } from '@mui/material';

import { Bread } from '../../components/customs/Bread';
import { HomeRounded, SecurityRounded } from '@mui/icons-material';
import { TextPrivacy } from './TextPrivacy';


export const AvisoDePrivacidad = () => {

  // useEffect(() => {
  //   logEvent(analytics, 'visitas pagina avisodeprivacidad');
    
  //   const t = trace(perf, "test_trace");
  //   t.putAttribute("experiment", "A");
  // }, []);


  return (
    <Box sx={{bgcolor: "background.default"}}>
      {/* Breadcrumbs */}
      <Bread migas={[{miga: "INICIO", ruta: "/inicio", icono: <HomeRounded/>},{miga: "AVISO DE PRIVACIDAD", ruta: "/aviso-de-privacidad", icono: <SecurityRounded/>}]}/>

      {/* Aviso de privacidad */}
      <Paper elevation={0}>
        <Grid container spacing={1}>
          <Grid item xs={12}>
          <Typography variant="h4" color="primary" textAlign='center'>Aviso de privacidad</Typography>
          </Grid>
          {/* Contenido */}
          <Grid item xs={12}>
            <TextPrivacy/>
          </Grid>
        </Grid>
      </Paper>


      {/* <Box sx={{margin:"15px"}}>
        <Box sx={{display: "flex", flexFlow: "column wrap", alignItems: "center"}}>
          

          <div style={{display: "flex", justifyContent: "center"}}>
            <div style={{display: "inline-block", flexFlow: "row wrap", padding: "25px 50px", marginBottom: "15px", background: "#d1d1e1", borderRadius: "2px solid red", width: "70%"}}>

              <p>
                Conoce el corazón de la Huasteca, con domicilio en Paseo de los Framboyanes s/n,
                Colonia Jacarandas, Huejutla de Reyes, CP. 43000, Hidalgo, México, es el responsable del tratamiento de los datos
                personales que nos proporcione, los cuales serán protegidos conforme a lo dispuesto por la Ley General de Protección
                de Datos Personales en Posesión de Sujetos Obligados, y demás normatividad que resulte aplicable.
              </p>        

              <div>
                <strong>
                  l. ¿Qué datos personales solicitamos y para qué fines?
                </strong>
                <p>
                  Los datos personales que solicitamos los utilizaremos para las siguientes finalidades:
                </p>
              </div>

              <div>
                <table className="table_planes">
                  <thead>
                    <tr>
                      <th>Finalidad</th>
                      <th colSpan="2">¿Requieren consentimiento del titular?</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td></td>
                      <td>No</td>
                      <td>Si</td>
                    </tr>
                    <tr>
                      <td>Interación</td>
                      <td></td>
                      <td>X</td>
                    </tr>
                    <tr>
                      <td>Estadisticas</td>
                      <td></td>
                      <td>X</td>
                    </tr>
                    </tbody>
                </table>
              </div>

              <div>
                <p>
                  Para llevar a cabo las finalidades descritas en el presente aviso de privacidad,
                  se solicitarán los siguientes datos personales:
                </p>
                <ul>
                    <li>Perfil de usuario</li>
                    <li>Nombre</li>
                    <li>Apellido paterno</li>
                    <li>Apellido materno</li>
                    <li>Edad</li>
                    <li>Sexo</li>
                    <li>Código postal</li>
                    <li>Correo electrónico</li>
                    <li>Contraseña</li>
                </ul>
                <p>
                  Se informa que no se solicitarán datos personales sensibles      
                </p>
              </div>
          
              <div>
                <p>
                  <strong>ll. ¿Con quién compartimos su información personal y para qué fines?</strong>
                </p>
                <p>
                  Le informamos que realizamos las siguientes transferencias para las cuales requerimos de su consentimiento:
                </p>
                <div>
                  <table style={{tableLayout: "fixed"}}>
                    <thead>
                      <tr>
                        <th>Destinatario de los datos personales</th>
                        <th>Finalidad</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Casa de la cultura</td>
                        <td>Verificación e integridad de los datos</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div>
                <strong>lll. ¿Cuál es el fundamento para el tratamiento de datos personales?</strong>
                <p>
                  Ley general de transparencia de datos.
                </p>
              </div>

              <div>
                <strong>IV. ¿Dónde puedo ejercer mis derechos ARCO?</strong>
                <p>
                  Usted podrá presentar su solicitud para el ejercicio de los derechos de acceso, rectificación,
                  cancelación u oposición de sus datos personales (derechos ARCO) directamente ante nuestra Unidad
                  de Transparencia, cuyos datos de contacto son los siguientes:
                </p>
                
                <ul>
                  <li>
                      a) Nombre de su titular: Eduardo Azuara Redondo.
                    </li>
                    <li>
                      b) Domicilio: Anahuac s/n, Colonia Palma, Huejutla de Reyes, Huejutla de Reyes, CP. 43000,
                      Hidalgo, México
                    </li>
                    <li>
                      c) Correo electrónico: 20200725@uthh.edu.mx
                    </li>
                    <li>
                      d) Número telefónico y extensión: 7717292053
                    </li>
                    <li>
                      d) Número telefónico y extensión: 7717292053
                    </li>
                    <li>
                      e) Otro dato de contacto: 7711189815
                    </li>
                </ul>

                <p>
                  Asimismo, usted podrá presentar una solicitud de ejercicio de derechos ARCO a través de la Plataforma
                  Nacional de Transparencia, disponible en  <Link to="/inicio">http://www.plataformadetransparencia.org.mx</Link> . 
                </p>
              </div>

              
              <div>
                <strong>V. ¿Cómo puede conocer los cambios en este aviso de privacidad?</strong>
                <p>
                  El presente aviso de privacidad puede sufrir modificaciones, cambios o actualizaciones derivadas
                  de nuevos requerimientos legales o por otras causas.
                </p>
                <p>
                  Nos comprometemos a mantenerlo informado sobre los cambios que pueda sufrir el presente aviso de
                  privacidad, a través de: Correo electrónico.
                </p>
              </div>
          
              <div>
                <strong>Otros datos de contacto:</strong>
                <ul>
                  <li>Página de Internet: https://uthh.online/corazonhuasteco/main.html</li>
                  <li>Correo electrónico para la atención del público en general: 20200744@uthh.edu.mx</li>
                  <li>Número telefónico para la atención del público en general: 7717292053 </li>
                </ul>
              </div>
              
              <h6 style={{textAlign: "right"}}>Última actualización: 19/10/2022</h6>

            </div>
          </div>


        </Box>
      </Box> */}
      
    </Box>
  )
}
