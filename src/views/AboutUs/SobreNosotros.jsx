import React, { useEffect }   from 'react'
import { Grid,  Typography, Paper, Box, Divider } from '@mui/material';
import { Bread }              from '../../components/customs/Bread';
import { contadorVisitas }    from '../../utils/fnCountStatus';
import TimelineUsLarge from './TimelineUsLarge';
import TimelineUsSmall from './TimelineUsSmall';
import { HomeRounded, BusinessRounded } from '@mui/icons-material';
import { AvatarItem } from './AvatarItem';
import lalo from '../../assets/img/sobre-nosotros/lalo.jpg'
import josa from '../../assets/img/sobre-nosotros/josa.jpg'
import elder from '../../assets/img/sobre-nosotros/elder.jpg'
import einar from '../../assets/img/sobre-nosotros/einar.jpg'
import chino from '../../assets/img/sobre-nosotros/chino.jpg'

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
            <Typography variant="h4" color="primary" textAlign='center' >Sobre nosotros</Typography>
          </Grid>
        </Grid>
        <Box sx={{display: {xs:"none", sm:"none", md:"flex", lg:"flex", xl: "flex"}}}>
          <TimelineUsLarge/>
        </Box>
        <Box sx={{display: {xs:"flex", sm:"flex", md:"none", lg:"none", xl: "none"}}}>
          <TimelineUsSmall/>
        </Box>

        <Divider sx={{mb: 4}}/>

        <Grid container spacing={5}>
          <Grid item xs={12}>
            <Typography variant="h4" color="primary.light" fontWeight={500} textAlign='center'>Conoce al equipo de desarrolladores</Typography>
          </Grid>
          <Grid item xs={12} container direction="row" columnSpacing={2} rowSpacing={2} justifyContent="center" sx={{pb: 5}}>
            <Grid item>
              <AvatarItem 
                alt={"Eduardo Azuara"}
                imagen={lalo} 
                firstColor={"#617030"} 
                secondColor={"#5A6C9F"}
                enlace='https://facebook.com/eduardo.azuara.5074'
              />
            </Grid>
            <Grid item>
              <AvatarItem 
                alt={"Yael Josafath"}
                imagen={josa} 
                firstColor={"#282A2D"} 
                secondColor={"#BABABD"}
                enlace='https://facebook.com/yaeljosafath.floresalvarado.1'
              />
            </Grid>
            <Grid item>
              <AvatarItem 
                alt={"Elder Meyer"}
                imagen={elder} 
                firstColor={"#00434c"} 
                secondColor={"#44b4d0"}
                enlace='https://elder-meyer.web.app/'
              />
            </Grid>
            <Grid item>
              <AvatarItem 
                alt={"Einar Omar"}
                imagen={einar} 
                firstColor={"#F5BF31"} 
                secondColor={"#A8BB5F"}
                enlace='https://facebook.com/EinarOmarVillegasRuiz'
              />
            </Grid>
            <Grid item>
              <AvatarItem 
                alt={"Juan de Dios"}
                imagen={chino} 
                firstColor={"#C76958"} 
                secondColor={"#62CDFF"}
                enlace='https://facebook.com/juan.delangel.9406'
              />
            </Grid>
          </Grid>
        </Grid>

      </Paper>


    </Box>
  )
}
