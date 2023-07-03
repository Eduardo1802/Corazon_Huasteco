import React from 'react'
// naterial components
import {Box, Grid, Paper} from '@mui/material';
// aditional components
import { Bread }              from '../../components/customs/Bread';
import { WrapperSingleRoute } from '../../components/customs/WrapperSingleRoute';
import { ImgRegistro }        from './ImgRegistro';
import { FormRegistro }       from './FormRegistro';

export const Registro = () => {
  return (
    <Box sx={{bgcolor: "background.default"}}>
      {/* BREADCRUMBS */}
      <Bread migas={[{miga: "INICIO", ruta: "/inicio"},{miga: "REGISTRO", ruta: "/registro"}]}/>

      {/* CONTENIDO */}
      <Paper>
        <Grid container>
          {/* IMAGEN */}
          <Grid item md={5} sm={4} xs={12} order={{md:2, sm:2, xs:1}} display={{md: "block", sm: "block", xs: "none"}}> 
            <ImgRegistro/>
          </Grid>
          
          {/* FORMULARIO */}
          <Grid item md={7} sm={8} xs={12} order={{md:1, sm:1, xs:2}} sx={{display: "flex", alignItems:"center"}}>
            <FormRegistro/>
          </Grid>
        </Grid>
      </Paper>     
      
    </Box>
  )
}
