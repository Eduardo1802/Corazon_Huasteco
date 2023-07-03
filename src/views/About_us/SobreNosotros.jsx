import React, { useEffect }   from 'react'
import { Grid,  Typography, Paper, Box } from '@mui/material';
import { WrapperSingleRoute } from '../../components/customs/WrapperSingleRoute';
import { Bread }              from '../../components/customs/Bread';
import { contadorVisitas }    from '../../utils/fnCountStatus';
import TimelineUsLarge from './TimelineUsLarge';
import TimelineUsSmall from './TimelineUsSmall';
import { HomeRounded, BusinessRounded } from '@mui/icons-material';

// import CustomizedTimeline from './CustomizedTimeline';


export const SobreNosotros = () => {

  useEffect(() => {
    contadorVisitas("sobre-nosotros");
  }, [])

  return (
    <Box sx={{bgcolor: "background.default"}}>
      {/* Breadcrumbs */}
      <Bread migas={[{miga: "INICIO", ruta: "/inicio", icono: <HomeRounded/>},{miga: "SOBRE NOSOTROS", ruta: "/sobre-nosotros", icono: <BusinessRounded/>}]}/>

      <Paper elevation={0}>
        <Grid container spacing={1}>
          <Grid item xs sx={{p:3}}> 
            <Typography variant="h4" color="primary" sx={{textAlign: "center"}}>Sobre Nosotros</Typography>
          </Grid>
        </Grid>
        <Box sx={{display: {xs:"none", sm:"none", md:"flex", lg:"flex", xl: "flex"}}}>
          <TimelineUsLarge/>
        </Box>
        <Box sx={{display: {xs:"flex", sm:"flex", md:"none", lg:"none", xl: "none"}}}>
          <TimelineUsSmall/>
        </Box>
      </Paper>


    </Box>
  )
}
