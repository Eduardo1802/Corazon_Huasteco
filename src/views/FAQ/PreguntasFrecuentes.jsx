import React from 'react'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box';
import { AccordionDes } from './AccordionDes';
import { WrapperSingleRoute } from '../../components/customs/WrapperSingleRoute';
import { Bread } from '../../components/customs/Bread';
import { HomeRounded, LiveHelpRounded, QuestionAnswerRounded } from '@mui/icons-material';
import { Grid, Paper } from '@mui/material';

export const PreguntasFrecuentes = () => {
  return (
    <Box sx={{bgcolor: "background.default"}}>
        <Bread migas={[{miga: "INICIO", ruta: "/inicio", icono: <HomeRounded/>},{miga: "PREGUNTAS FRECUENTES", ruta: "/preguntas-frecuentes", icono: <LiveHelpRounded/>}]}/>

        <Paper elevation={0}>
          <Grid container spacing={1}>
            <Grid item xs={12} sx={{p:3}}>
              <Typography variant="h5" color="primary" sx={{mb:5}} textAlign="center">
                  Preguntas frecuentes
              </Typography>
            </Grid>
            <Grid item xs={12} sx={{p:3}}>
              <Box sx={{padding:"15px"}}>
                <Box sx={{display: "flex", alignItems: "center", justifyContent: "center"}}>
                  <AccordionDes/>
                </Box>
              </Box>
            </Grid>

          </Grid>
        </Paper>
    </Box>
  )
}
