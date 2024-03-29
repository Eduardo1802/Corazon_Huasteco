import {useEffect} from 'react'
import { Paper, Button, Box, useMediaQuery, Grid, useTheme, Container, Divider, Typography } from '@mui/material';
import { contadorVisitas } from '../../utils/fnCountStatus';
import { Carrusel } from './Carrusel/Carrusel';
import { ArrowForward, Directions, LocalFlorist, Pets } from '@mui/icons-material';
import imagenLateral from '../../assets/img/inicio/imagenLateral.webp'
import flora from '../../assets/img/inicio/flora-02.webp'
import fauna from '../../assets/img/inicio/fauna-02.webp'
import mapa from '../../assets/img/inicio/mapa-huejutla.webp'
import styled from '@emotion/styled';
import { WavyDivider } from '../../components/customs/WavyDivider';
import { Link } from 'react-router-dom'
import { HelmetComponent } from '../../components/customs/HelmetComponent';

export const Inicio = () => {
  const theme = useTheme();

  useEffect(() => { contadorVisitas("inicio") }, [])
  return (
    <Box sx={{background: theme.palette.background.paper}}>
      <HelmetComponent/>
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
                <Img alt="img-intro-colaboradores" src={imagenLateral} width='100%' height='100%' />
              </Grid>
              <Grid item container xs={12} sm={6} md={8} direction="column" justifyContent="center">
                <Typography gutterBottom variant="subtitle1" component="p" color="text.secondary">
                  Nuestra plataforma es un faro de conocimiento y autenticidad gracias a nuestros dedicados colaboradores. Ellos son los narradores de historias, los guardianes de tradiciones y los informantes de la Huasteca Hidalguense. Con una profunda pasión por su cultura y región, nuestros colaboradores aportan información verídica y perspectivas únicas a través de sus artículos. Desde relatos históricos hasta exploraciones de festivales locales, sus contribuciones enriquecen nuestra comunidad y te sumergen en la riqueza de la Huasteca.
                </Typography>
                <TransformEffectButton aria-label='Explora las voces de los creadores de contenido' component={Link} to="/creadores-de-contenido" endIcon={<ArrowForward/>} variant="contained">
                  Explora sus voces
                </TransformEffectButton>
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
                <TransformEffectButton aria-label='Ver más acerca de la fauna' variant='contained' component={Link} to="/tematicas" endIcon={<LocalFlorist/>}>
                  Ver más
                </TransformEffectButton>
              </Grid>
              <Grid item container alignItems="center" xs={12} sm={6} md={7} order={{xs: 1, sm:2}}>
                <Img alt="img-flora" src={flora} width='100%' height='100%' />
              </Grid>
            </Grid>
        </Container>
      </Paper>

      <Paper component="article" elevation={0}>
        <Container maxWidth="lg">
          {/* SECTION FIVE -- FAUNA */}
            <Grid container columnSpacing={2} rowSpacing={2} py={5} my={5}>
              <Grid item container alignItems="center" xs={12} sm={6} md={7} order={{xs: 1, sm:1}}>
                <Img alt="img-fauna" src={fauna} width='100%' height='100%' />
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
                <TransformEffectButton aria-label='leer un articulo sobre la fauna' variant='contained' component={Link} to="/tematicas" endIcon={<Pets/>}>
                  Ver más
                </TransformEffectButton>
              </Grid>
            </Grid>
        </Container>
      </Paper>

      <Paper component="article" elevation={0}>
        <Container maxWidth="lg">
          <Divider/>
          {/* SECTION SIX -- COLINDANCIAS */}
            <Grid container columnSpacing={2} rowSpacing={2} py={5} mt={5}>
              <Grid item container xs={12} sm={6} md={7} direction="column" justifyContent="center" order={{xs: 1, sm:1}}>
                <Typography variant="h4" component="p" color="primary.light" fontWeight={700} textAlign="center">
                  Colindancias
                </Typography>
                <Typography gutterBottom variant="subtitle1" component="p" color="text.secondary" textAlign="center">
                  Huejutla colinda al norte con el municipio de Orizatlán, el estado de Veracruz; al este con Veracruz, Huautla y Atlapexco; al sur con Atlapexco, Huazalingo y Tlanchinol; y al oeste con Tlanchinol, Jaltocan y Orizatlán.
                </Typography>
                <TransformEffectButton aria-label='Ver un mapa completo de la región' variant='contained' component={Link} to="/mapa" endIcon={<Directions/>}>
                  Ver mapa
                </TransformEffectButton>
              </Grid>
              <Grid item xs={12} sm={6} md={5} order={{xs: 2, sm:2}}>
                <Img alt="img-mapa" src={mapa} width='100%' height='100%' />
              </Grid>
            </Grid>
        </Container>
      </Paper>
    </Box>
  );
}

const Img = styled('img')({ maxWidth: "100%", height: "auto" });

const TransformEffectButton = styled(Button)(({  }) => ({
  borderRadius: 50, 
  '&:hover svg': { animation: "expand 1.1s /* infinite */" },
  '@keyframes expand': {
    '0%': { transform: "scale(1)", transformOrigin: "left bottom" },
    '50%': { transform: "scale(1.5)", transformOrigin: "left bottom" },
    '100%': { transform: "scale(1)", transformOrigin: "left bottom" }
  }
}));