import React                  from 'react'
import {Grid, Paper}          from '@mui/material';
import { WrapperSingleRoute } from '../../components/customs/WrapperSingleRoute';
import { Bread }              from '../../components/customs/Bread';
import { FormAcceso }         from './FormAcceso';
import { ImgAcceso }          from './ImgAcceso';

export const Acceso = () => {
  return (
    <WrapperSingleRoute>
      {/* Breadcrumbs */}
      <Bread migas={[{miga: "INICIO", ruta: "/inicio"},{miga: "ACCESO", ruta: "/acceso"}]}/>
      
      {/* CONTENIDO */}
      <Paper>
        <Grid container>
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
      {/* <Link to="cesar">Cifrado cesar</Link> */}
    </WrapperSingleRoute>
  )
}
