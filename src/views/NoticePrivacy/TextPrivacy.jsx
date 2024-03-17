import { Box, Paper, Typography, Table, TableBody, TableCell, TableContainer, TableRow, useTheme } from '@mui/material';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';

export const TextPrivacy = () => {
  const theme = useTheme();
  return (
    <Paper elevation={1} sx={{ mr: { xs: 1, sm: 10, md: 15 }, ml: { xs: 1, sm: 10, md: 15 }, p: 3,}}>
      <Typography variant="body1" component="p">
        Conoce el corazón de la Huasteca, con domicilio en Paseo de los
        Framboyanes s/n, Colonia Jacarandas, Huejutla de Reyes, CP. 43000,
        Hidalgo, México, es el responsable del tratamiento de los datos
        personales que nos proporcione, los cuales serán protegidos conforme a
        lo dispuesto por la Ley General de Protección de Datos Personales en
        Posesión de Sujetos Obligados, y demás normatividad que resulte
        aplicable.
      </Typography>
      <Typography variant="body1" component="p" sx={{ fontWeight: "bolder", mt: 3 }}>
        l. ¿Qué datos personales solicitamos y para qué fines?
      </Typography>
      <Typography variant="body1" component="p">
        Los datos personales que solicitamos los utilizaremos para las
        siguientes finalidades:
      </Typography>
      <Typography variant="body1" component="p" sx={{mt: 1 }}>
        <TableContainer component={Paper}>
          <Table style={{ border: `1px solid ${theme.palette.divider}` }}>
            <TableBody>
              <TableRow>
                <TableCell style={{ border: `1px solid ${theme.palette.divider}`, textAlign: 'center' }}>Finalidad</TableCell>
                <TableCell style={{ border: `1px solid ${theme.palette.divider}`, textAlign: 'center' }}>¿Requieren consentimiento del titular?</TableCell>
              </TableRow>
              <TableRow>
                <TableCell style={{ border: `1px solid ${theme.palette.divider}`, textAlign: 'center' }}>Colaborar brindando información</TableCell>
                <TableCell style={{ border: `1px solid ${theme.palette.divider}`, textAlign: 'center' }}>
                  <Table style={{ border: `1px solid ${theme.palette.divider}` }}>
                    <TableBody>
                      <TableRow>
                        <TableCell style={{ border: `1px solid ${theme.palette.divider}`, textAlign: 'center' }}>No</TableCell>
                        <TableCell style={{ border: `1px solid ${theme.palette.divider}`, textAlign: 'center' }}>Si</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell style={{ border: `1px solid ${theme.palette.divider}`, textAlign: 'center' }}></TableCell>
                        <TableCell style={{ border: `1px solid ${theme.palette.divider}`, textAlign: 'center' }}>x</TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Typography>
      <Typography variant="body1" component="p" sx={{ mt: 1 }}>
        Para llevar a cabo las finalidades descritas en el presente aviso de
        privacidad, se solicitarán los siguientes datos personales:
      </Typography>
      <Box sx={{ mt: 2 }}>
        <Typography variant="body1" component="p">
          <ArrowRightIcon />
          Perfil de usuario
        </Typography>
        <Typography variant="body1" component="p">
          <ArrowRightIcon />
          Nombre
        </Typography>
        <Typography variant="body1" component="p">
          <ArrowRightIcon />
          Apellido paterno
        </Typography>
        <Typography variant="body1" component="p">
          <ArrowRightIcon />
          Apellido materno
        </Typography>
        <Typography variant="body1" component="p">
          <ArrowRightIcon />
          Edad
        </Typography>
        <Typography variant="body1" component="p">
          <ArrowRightIcon />
          Sexo
        </Typography>
        <Typography variant="body1" component="p">
          <ArrowRightIcon />
          Código postal
        </Typography>
        <Typography variant="body1" component="p">
          <ArrowRightIcon />
          Correo electrónico
        </Typography>
        <Typography variant="body1" component="p">
          <ArrowRightIcon />
          Contraseña
        </Typography>
      </Box>
      <Typography variant="body1" component="p" sx={{ mt: 2 }}>
        Se informa que no se solicitarán datos personales sensibles
      </Typography>
      <Typography variant="body1" component="p" sx={{ fontWeight: "bolder", mt: 3 }}>
        ll. ¿Con quién compartimos su información personal y para qué fines?
      </Typography>
      <Typography variant="body1" component="p">
        Le informamos que realizamos las siguientes transferencias para las
        cuales requerimos de su consentimiento:
      </Typography>
      <Typography variant="body1" component="p" sx={{ mt: 1 }}>
        <TableContainer component={Paper}>
          <Table style={{ border: `1px solid ${theme.palette.divider}` }}>
            <TableBody>
              <TableRow>
                <TableCell style={{ border: `1px solid ${theme.palette.divider}`, textAlign: 'center' }}>Destinatario de los datos personales</TableCell>
                <TableCell style={{ border: `1px solid ${theme.palette.divider}`, textAlign: 'center' }}>Finalidad</TableCell>
              </TableRow>
              <TableRow>
                <TableCell style={{ border: `1px solid ${theme.palette.divider}`, textAlign: 'center' }}>Casa de la cultura</TableCell>
                <TableCell style={{ border: `1px solid ${theme.palette.divider}`, textAlign: 'center' }}>Verificación e integridad de los datos</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Typography>
      <Typography variant="body1" component="p" sx={{ fontWeight: "bolder", mt: 3 }}>
        lll. ¿Cuál es el fundamento para el tratamiento de datos personales?
      </Typography>
      <Typography variant="body1" component="p">
        Ley general de transparencia de datos.
      </Typography>

      <Typography variant="body1" component="p" sx={{ fontWeight: "bolder", mt: 3 }}>
        IV. ¿Dónde puedo ejercer mis derechos ARCO?
      </Typography>
      <Typography variant="body1" component="p">
        Usted podrá presentar su solicitud para el ejercicio de los derechos de
        acceso, rectificación, cancelación u oposición de sus datos personales
        (derechos ARCO) directamente ante nuestra Unidad de Transparencia, cuyos
        datos de contacto son los siguientes:
      </Typography>
      <Box sx={{ mt: 2 }}>
        <Typography variant="body1" component="p">
          <ArrowRightIcon />
          {"a) Nombre de su titular: Eduardo Azuara Redondo."}
        </Typography>
        <Typography variant="body1" component="p">
          <ArrowRightIcon />
          {"b) Domicilio: Anahuac s/n, Colonia Palma, Huejutla de Reyes, Huejutla de Reyes, CP. 43000, Hidalgo, México"}
        </Typography>
        <Typography variant="body1" component="p">
          <ArrowRightIcon />
          {"c) Correo electrónico: 20200725@uthh.edu.mx"}
        </Typography>
        <Typography variant="body1" component="p">
          <ArrowRightIcon />
          {"d) Número telefónico y extensión: 7717292053"}
        </Typography>
        <Typography variant="body1" component="p">
          <ArrowRightIcon />
          {"e) Otro dato de contacto: 7711189815"}
        </Typography>
      </Box>
      <Typography variant="body1" component="p" sx={{ mt: 2 }}>
        Asimismo, usted podrá presentar una solicitud de ejercicio de derechos
        ARCO a través de la Plataforma Nacional de Transparencia, disponible en
        el siguiente{" "}
        <a href="http://www.plataformadetransparencia.org.mx">enlace.</a>.
      </Typography>

      <Typography variant="body1" component="p" sx={{ fontWeight: "bolder", mt: 3 }}>
        V. ¿Cómo puede conocer los cambios en este aviso de privacidad?
      </Typography>
      <Typography variant="body1" component="p">
        El presente aviso de privacidad puede sufrir modificaciones, cambios o
        actualizaciones derivadas de nuevos requerimientos legales o por otras
        causas.
      </Typography>
      <Typography variant="body1" component="p">
        Nos comprometemos a mantenerlo informado sobre los cambios que pueda
        sufrir el presente aviso de privacidad, a través de: Correo electrónico.
      </Typography>

      <Typography variant="body1" component="p" sx={{ fontWeight: "bolder", mt: 3 }}>
        Otros datos de contacto:
      </Typography>
      <Box>
        <Typography variant="body1" component="p">
          Página de Internet:{" "}
          <a href="https://uthh.online/corazon.divider.html">
            Corazón huasteco
          </a>
        </Typography>
        <Typography variant="body1" component="p">
          Correo electrónico para la atención del público en general:
          20200744@uthh.edu.mx
        </Typography>
        <Typography variant="body1" component="p">
          Número telefónico para la atención del público en general: 7717292053
        </Typography>
      </Box>

      <Typography variant="body1" component="p" sx={{ fontWeight: "bolder", mt: 3 }} textAlign="right">
        Última actualización: 19/10/2022
      </Typography>
    </Paper>
  );
}