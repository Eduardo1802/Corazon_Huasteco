import React from 'react'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box';
import { WrapperSingleRoute } from '../../components/customs/WrapperSingleRoute';
import { Bread } from '../../components/customs/Bread';
import { HomeRounded, LibraryBooksRounded } from '@mui/icons-material';
import { Paper } from '@mui/material';

export const CreadoresDeContenido = () => {

  

  return (
    <Box sx={{bgcolor: "background.default"}}>
      <Bread migas={[{miga: "INICIO", ruta: "/inicio", icono: <HomeRounded/>},{miga: "CREADORES DE CONTENIDO", ruta: "/creadores-de-contenido", icono: <LibraryBooksRounded/>}]}/>
      <Paper sx={{padding: "15px"}}>
        <Box sx={{display: "flex", flexFlow: "column wrap", alignItems: "center"}}>
          <Typography variant="body1" color="primary">
            Creadores de cotenido
          </Typography>
        </Box>
      </Paper>
    </Box>
  )
}
