import {Box, Grid, Paper}     from '@mui/material';
import { Bread }              from '../../components/customs/Bread';
import { FormAcceso }         from './FormAcceso';
import { ImgAcceso }          from './ImgAcceso';
import { HomeRounded, LoginRounded } from '@mui/icons-material';
import { HelmetComponent } from '../../components/customs/HelmetComponent';

export const Acceso = () => {
  return (
    <Box sx={{bgcolor: "background.default"}}>
      <HelmetComponent/>
      {/* Breadcrumbs */}
      <Bread migas={[{miga: "INICIO", ruta: "/inicio", icono: <HomeRounded/>},{miga: "ACCESO", ruta: "/acceso", icono: <LoginRounded/>}]}/>
      
      {/* CONTENIDO */}
      <Paper elevation={0}>
        <Grid container spacing={1}>
          {/* IMAGEN */}
          <Grid item md={7} sm={6} xs={12} order={{md:1, sm:1, xs:2}} display={{md: "block", sm: "block", xs: "none"}}> 
            <ImgAcceso/>
          </Grid>
          
          {/* FORMULARIO */}
          <Grid item md={5} sm={6} xs={12} order={{md:2, sm:2, xs:1}} sx={{display: "flex", alignItems:"center"}}>
            <FormAcceso/>
          </Grid>
        </Grid>
      </Paper>
    </Box>
  )
}