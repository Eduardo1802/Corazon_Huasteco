import React, { useEffect }   from 'react'
import { Grid,  Typography, Paper, Box, Divider } from '@mui/material';
import { Bread }              from '../../components/customs/Bread';
import { contadorVisitas }    from '../../utils/fnCountStatus';
import TimelineUsLarge from './TimelineUsLarge';
import TimelineUsSmall from './TimelineUsSmall';
import { HomeRounded, BusinessRounded } from '@mui/icons-material';
import { AvatarItem } from './AvatarItem';
import lalo from '../../assets/img/sobre-nosotros/lalo.webp'
import josa from '../../assets/img/sobre-nosotros/josa.webp'
import elder from '../../assets/img/sobre-nosotros/elder.webp'
import einar from '../../assets/img/sobre-nosotros/einar.webp'
import chino from '../../assets/img/sobre-nosotros/chino.webp'
import imgAus                 from "../../assets/img/sobre-nosotros/imgSobreNosotros.webp"
import imgMural               from "../../assets/img/inicio/imgMural-01.webp"
import { HelmetComponent } from '../../components/customs/HelmetComponent';

// import CustomizedTimeline from './CustomizedTimeline';

export const SobreNosotros = () => {

  useEffect(() => {
    contadorVisitas("sobre-nosotros");
  }, [])

  return (
    <Box sx={{bgcolor: "background.default"}}>
      <HelmetComponent/>
      {/* Breadcrumbs */}
      <Bread migas={[{miga: "INICIO", ruta: "/inicio", icono: <HomeRounded/>},{miga: "SOBRE NOSOTROS", ruta: "/sobre-nosotros", icono: <BusinessRounded/>}]}/>
      
      <Paper elevation={0}>
        <Grid container spacing={1}>
          <Grid item xs sx={{p:3}}> 
            <Typography variant="h4" color="primary" textAlign='center' >Sobre nosotros</Typography>
          </Grid>
        </Grid>
        <Box sx={{display: {xs:"none", sm:"none", md:"flex", lg:"flex", xl: "flex"}}}>
          <TimelineUsLarge imgAus={imgAus} imgMural={imgMural}/>
        </Box>
        <Box sx={{display: {xs:"flex", sm:"flex", md:"none", lg:"none", xl: "none"}}}>
          <TimelineUsSmall imgAus={imgAus} imgMural={imgMural}/>
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
                firstcolor={"#617030"} 
                secondcolor={"#5A6C9F"}
                enlace='https://facebook.com/eduardo.azuara.5074'
                data-testid="lalo-link"
              />
            </Grid>
            <Grid item>
              <AvatarItem 
                alt={"Yael Josafath"}
                imagen={josa} 
                firstcolor={"#282A2D"} 
                secondcolor={"#BABABD"}
                enlace='https://facebook.com/yaeljosafath.floresalvarado.1'
              />
            </Grid>
            <Grid item>
              <AvatarItem 
                alt={"Elder Meyer"}
                imagen={elder} 
                firstcolor={"#00434c"} 
                secondcolor={"#44b4d0"}
                enlace='https://elder-meyer.web.app/'
              />
            </Grid>
            <Grid item>
              <AvatarItem 
                alt={"Einar Omar"}
                imagen={einar} 
                firstcolor={"#F5BF31"} 
                secondcolor={"#A8BB5F"}
                enlace='https://facebook.com/EinarOmarVillegasRuiz'
              />
            </Grid>
            <Grid item>
              <AvatarItem 
                alt={"Juan de Dios"}
                imagen={chino} 
                firstcolor={"#C76958"} 
                secondcolor={"#62CDFF"}
                enlace='https://facebook.com/juan.delangel.9406'
              />
            </Grid>
          </Grid>
        </Grid>

      </Paper>


    </Box>
  )
}
