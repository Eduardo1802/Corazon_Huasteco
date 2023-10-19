import React, {useEffect} from 'react'
import Typography from '@mui/material/Typography'
import { Paper, Button, Box, useMediaQuery, Grid, useTheme, Container, Divider } from '@mui/material';
import { contadorVisitas } from '../../utils/fnCountStatus';
import { Carrusel } from './Carrusel/Carrusel';
import { ArrowForward, Directions, LocalFlorist, Pets } from '@mui/icons-material';
import imagenLateral from '../../assets/img/inicio/imagenLateral.jpg'
import flora from '../../assets/img/inicio/flora-02.jpg'
import fauna from '../../assets/img/inicio/fauna-02.jpg'
import styled from '@emotion/styled';
import { OnlyMapa } from './Mapa/Mapa';
import { WavyDivider } from '../../components/customs/WavyDivider';
import {Link} from 'react-router-dom'

export const Inicio = () => {

  const isSmallScreen = useMediaQuery('(max-width:600px)');
  const theme = useTheme();

  useEffect(() => { contadorVisitas("inicio") }, [])

  return (
    <Box sx={{background: theme.palette.background.paper}}>
      <Paper component="article" elevation={0}>
        {/* SECTION ONE -- CARRUSEL */}
        <Carrusel />
      </Paper>

      <WavyDivider invertColors/>

      <Paper component="article" elevation={0}>
        <Container maxWidth="lg">
          {/* SECTION TWO -- FUNDACIÓN */}
            <Grid container columnSpacing={2} py={5} my={{xs: 0, md:5}}>
              <Grid item container xs={12} lg={4} direction="column" justifyContent="center" alignItems="center">
                <Typography gutterBottom variant="h4" component="p" color="primary.light" fontWeight={700}>
                  Huejutla: Descubriendo Nuestra Historia
                </Typography>
              </Grid>
              <Grid item xs={12} lg={8}>
                <Typography variant="subtitle1" component="p" color="text.secondary">
                  Hace milenios, los tenec o huaxtecos fundaron "Tantocoy", un lugar de sauces. Más tarde, los toltecas lo rebautizaron como "Huexotlan," que significa lo mismo. En 1522, la expedición de Francisco de Garay trajo cambios a la región, sometida por Hernán Cortés, quien en diciembre conquistó Huexotlan, llamándolo desde entonces Huejutla. Este es solo un vistazo a la historia. Haz clic para descubrir más sobre la fascinante herencia cultural de esta tierra ancestral.
                </Typography>
              </Grid>
            </Grid>
        </Container>
      </Paper>

      <Paper component="article" elevation={0}>
        <Container maxWidth="lg">
          {/* SECTION THREE -- COLABORADORES */}
            <Grid container columnSpacing={2} py={5} my={5} >
              <Grid item xs={12} lg={12} >
                <Typography gutterBottom variant="h4" component="p" color="primary.light" fontWeight="400" textAlign="center">
                  Nuestros Colaboradores: Voces Auténticas de la Huasteca Hidalguense
                </Typography>
              </Grid>
              <Grid item xs={12} lg={12} >
                <Typography gutterBottom variant='subtitle1' component="p" color="primary.light" textAlign="center">
                  Conoce a los Apasionados Guardianes de la Cultura y la Región
                </Typography>
              </Grid>
              <Grid item container alignItems="center" xs={12} sm={6} md={4}>
                <Img alt="img-intro-colaboradores" src={imagenLateral} />
              </Grid>
              <Grid item container xs={12} sm={6} md={8} direction="column" justifyContent="center">
                <Typography gutterBottom variant="subtitle1" component="p" color="text.secondary">
                  Nuestra plataforma es un faro de conocimiento y autenticidad gracias a nuestros dedicados colaboradores. Ellos son los narradores de historias, los guardianes de tradiciones y los informantes de la Huasteca Hidalguense. Con una profunda pasión por su cultura y región, nuestros colaboradores aportan información verídica y perspectivas únicas a través de sus artículos. Desde relatos históricos hasta exploraciones de festivales locales, sus contribuciones enriquecen nuestra comunidad y te sumergen en la riqueza de la Huasteca.
                </Typography>
                <Button aria-label='ir a la sección de creadores de contenido' variant='outlined' component={Link} to="/creadores-de-contenido" endIcon={<ArrowForward/>} sx={{borderRadius: 5, '&:hover':{backgroundColor: theme.palette.primary.main, color: theme.palette.background.paper}}}>
                  Explora sus Voces
                </Button>
              </Grid>
            </Grid>
        </Container>
      </Paper>

      <Paper component="article" elevation={0}>
        <Container maxWidth="lg">
          <Divider/>
          {/* SECTION FOUR -- FLORA */}
            <Grid container columnSpacing={2} rowSpacing={2} py={5} my={5}>
              <Grid item container xs={12} sm={6} md={5} direction="column" justifyContent="center" order={{xs: 2, sm:1}}>
                <Typography variant="overline" component="p" color="text.secondary" textAlign="center">
                  Flora
                </Typography>
                <Typography variant="h4" component="p" color="primary.light" fontWeight={700} textAlign="center">
                  Riqueza Botánica de la Huasteca Hidalguense
                </Typography>
                <Typography gutterBottom variant="subtitle1" component="p" color="text.secondary" textAlign="center">
                  Explora la abundante biodiversidad de Huejutla: árboles frutales, madera fina, plantas medicinales y una profusión de flora.
                </Typography>
                <Button aria-label='leer un articulo sobre flora' variant='outlined' component={Link} to="/tematicas" endIcon={<LocalFlorist/>} sx={{borderRadius: 5, '&:hover':{backgroundColor: theme.palette.primary.main, color: theme.palette.background.paper}}}>
                  Ver más
                </Button>
              </Grid>
              <Grid item container alignItems="center" xs={12} sm={6} md={7} order={{xs: 1, sm:2}}>
                <Img alt="img-flora" src={flora} />
              </Grid>
            </Grid>
        </Container>
      </Paper>

      <Paper component="article" elevation={0}>
        <Container maxWidth="lg">
          {/* SECTION FIVE -- FAUNA */}
            <Grid container columnSpacing={2} rowSpacing={2} py={5} my={5}>
              <Grid item container alignItems="center" xs={12} sm={6} md={7} order={{xs: 1, sm:1}}>
                <Img alt="img-fauna" src={fauna} />
              </Grid>
              <Grid item container xs={12} sm={6} md={5} direction="column" justifyContent="center" order={{xs: 2, sm:2}}>
                <Typography variant="overline" component="p" color="text.secondary" textAlign="center">
                  Fauna
                </Typography>
                <Typography variant="h4" component="p" color="primary.light" fontWeight={700} textAlign="center">
                  Diversidad Faunística de Huejutla
                </Typography>
                <Typography gutterBottom variant="subtitle1" component="p" color="text.secondary" textAlign="center">
                  Descubre la fascinante variedad de vida silvestre en Huejutla, desde mamíferos y aves hasta reptiles y más.
                </Typography>
                <Button aria-label='leer un articulo sobre la fauna' variant='outlined' component={Link} to="/tematicas" endIcon={<Pets/>} sx={{borderRadius: 5, '&:hover':{backgroundColor: theme.palette.primary.main, color: theme.palette.background.paper}}}>
                  Ver más
                </Button>
              </Grid>
            </Grid>
        </Container>
      </Paper>

      <Paper component="article" elevation={0}>
        <Container maxWidth="xl">
          <Divider/>
          {/* SECTION SIX -- COLINDANCIAS */}
            <Grid container columnSpacing={2} rowSpacing={2} py={5} mt={5}>
              <Grid item container xs={12} sm={12} md={4} direction="column" justifyContent="center" order={{xs: 1, sm:1}}>
                <Typography variant="h4" component="p" color="primary.light" fontWeight={700} textAlign="center">
                  Colindancias
                </Typography>
                <Typography gutterBottom variant="subtitle1" component="p" color="text.secondary" textAlign="center">
                  Huejutla colinda al norte con el municipio de Orizatlán, el estado de Veracruz; al este con Veracruz, Huautla y Atlapexco; al sur con Atlapexco, Huazalingo y Tlanchinol; y al oeste con Tlanchinol, Jaltocan y Orizatlán.
                </Typography>
                <Button aria-label='ir a la sección del mapa' variant='outlined' component={Link} to="/mapa" endIcon={<Directions/>} sx={{borderRadius: 5, '&:hover':{backgroundColor: theme.palette.primary.main, color: theme.palette.background.paper}}}>
                  Ver mapa
                </Button>
              </Grid>
              <Grid item xs={12} sm={12} md={8} order={{xs: 2, sm:2}}>
                <OnlyMapa altura={isSmallScreen ? "215px" : "50vh"}/>
              </Grid>
            </Grid>
        </Container>
      </Paper>
    </Box>
  );
}


const Img = styled('img')({
  maxWidth: "100%",
  height: "auto"
});