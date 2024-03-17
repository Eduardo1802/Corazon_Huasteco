import React from 'react'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box';
import { Bread } from '../../components/customs/Bread';
import { HomeRounded, LibraryBooksRounded } from '@mui/icons-material';
import { Grid, Paper } from '@mui/material';
import { HelmetComponent } from '../../components/customs/HelmetComponent';

export const CreadoresDeContenido = () => {
  return (
    <Box sx={{bgcolor: "background.default"}}>
      <HelmetComponent/>
      <Bread migas={[{miga: "INICIO", ruta: "/inicio", icono: <HomeRounded/>},{miga: "CREADORES DE CONTENIDO", ruta: "/creadores-de-contenido", icono: <LibraryBooksRounded/>}]}/>

      <Paper elevation={0}>
        <Grid container spacing={1}>
          <Grid item xs sx={{p:3}}>
            <Box sx={{display: "flex", flexFlow: "column wrap", alignItems: "center"}}>
              <Typography variant="h4" color="primary" textAlign='center' >Creadores de contenido</Typography>
            </Box>
          </Grid>
        </Grid>
      </Paper>
    </Box>
  )
}