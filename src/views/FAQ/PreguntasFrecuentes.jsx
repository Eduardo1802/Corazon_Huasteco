import React from 'react'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box';
import { AccordionDes } from './AccordionDes';
import { WrapperSingleRoute } from '../../components/customs/WrapperSingleRoute';
import { Bread } from '../../components/customs/Bread';

export const PreguntasFrecuentes = () => {
  return (
    <Box sx={{bgcolor: "background.default"}}>
        <Bread migas={[{miga: "INICIO", ruta: "/inicio"},{miga: "PREGUNTAS FRECUENTES", ruta: "/preguntas-frecuentes"}]}/>

        <Box sx={{padding:"15px"}}>
            <Box sx={{display: "flex", flexFlow: "column wrap", alignItems: "center"}}>
            <Typography variant="h5" color="primary" sx={{mb:5}}>
                Preguntas frecuentes
            </Typography>

            <AccordionDes/>

            </Box>
        </Box>
    </Box>
  )
}
