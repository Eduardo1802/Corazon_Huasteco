import { Grid, Paper, Box, Typography } from '@mui/material';
import { Bread } from '../../components/customs/Bread';
import { HomeRounded, SecurityRounded } from '@mui/icons-material';
import { TextPrivacy } from './TextPrivacy';
import { HelmetComponent } from '../../components/customs/HelmetComponent';

export const AvisoDePrivacidad = () => {
  return (
    <Box sx={{bgcolor: "background.default"}}>
      <HelmetComponent/>
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
    </Box>
  )
}