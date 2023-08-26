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
                  Hace milenios, los tenec o huaxtecos fundaron "Tantocoy," un lugar de sauces. Más tarde, los toltecas lo rebautizaron como "Huexotlan," que significa lo mismo. En 1522, la expedición de Francisco de Garay trajo cambios a la región, sometida por Hernán Cortés, quien en diciembre conquistó Huexotlan, llamándolo desde entonces Huejutla. Este es solo un vistazo a la historia. Haz clic para descubrir más sobre la fascinante herencia cultural de esta tierra ancestral.
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
                <Button variant='outlined' endIcon={<ArrowForward/>} sx={{borderRadius: 5, '&:hover':{backgroundColor: theme.palette.primary.main, color: theme.palette.background.paper}}}>
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
                <Button variant='outlined' endIcon={<LocalFlorist/>} sx={{borderRadius: 5, '&:hover':{backgroundColor: theme.palette.primary.main, color: theme.palette.background.paper}}}>
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
                <Button variant='outlined' endIcon={<Pets/>} sx={{borderRadius: 5, '&:hover':{backgroundColor: theme.palette.primary.main, color: theme.palette.background.paper}}}>
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
                <Button variant='outlined' endIcon={<Directions/>} sx={{borderRadius: 5, '&:hover':{backgroundColor: theme.palette.primary.main, color: theme.palette.background.paper}}}>
                  Ver mapa
                </Button>
              </Grid>
              <Grid item xs={12} sm={12} md={8} order={{xs: 2, sm:2}}>
                <OnlyMapa altura={isSmallScreen ? "215px" : "50vh"}/>
              </Grid>
            </Grid>
        </Container>
      </Paper>





      {/* <Paper>
        <Grid container>
          <Grid item md={6} xs={12}>
            <Paper
              data-aos="zoom-in-right"
              sx={{
                p: { xs: 2, sm: 3, md: 5 },
                m: { xs: 1, sm: 3, md: 5 },
                bgcolor: "background.paper",
              }}
              elevation={3}
            >
              <Typography gutterBottom variant="h6" component="p" color="primary">
                Fundación.
              </Typography>
              <Typography
                variant="subtitle1"
                component="p"
                color="text.secondary"
              >
                Los tenec o huaxtecos fundaron a huexotlan en el año 3000 a.c. con
                el nombre de Tantocoy, “Tan” = lugar “tocoy” = sauces, lugar de
                sauces. A la llegada de los toltecas en el año 619 a.c., cambio su
                nombre por el huexotlan, siendo sus dos etimologías Náuatl,
                significado lo mismo “Huexo” = sauces y “Tlan” = lugar, lugar de
                sauces. También nos dicen los papeles de la nueva España,
                coleccionados y cuidadosamente anotados por el señor Don Francisco
                del Paso y Troncoso, que en 1522 llegaron por el mar de Pánuco,
                una expedición al mando de Francisco de Garay, desde Jamaica y su
                presencia insurreccionó a los indios, los cuales fueron sometidos
                por Hernán Cortez en 1522, pasando por Huexotlan y que en
                diciembre de 1522 con su aguerrido ejercito conquisto Huexotlan,
                castellanizando el nombre para nombrarse desde entonces Huejutla.
              </Typography>
            </Paper>

            <Paper
              data-aos="zoom-in-right"
              sx={{
                p: { xs: 2, sm: 3, md: 5 },
                m: { xs: 1, sm: 3, md: 5 },
                bgcolor: "background.paper",
              }}
              elevation={3}
            >
              <Typography gutterBottom variant="h6" component="p" color="primary">
                Flora.
              </Typography>
              <Typography
                variant="subtitle1"
                component="p"
                color="text.secondary"
              >
                En Huejutla abundan los árboles silvestres de donde se saca la
                leña para proporcionar lumbre y calor a los hogares o para los
                hornos donde se cose el pan, el zacahuil, xojol, las reposterías.
                Se encuentran arboles frutales como el aguacate, el chico zapote,
                guayabos, naranjos, limas, mangos, mandarinas, ciruelos, zapote
                prieto, anonas, capulines, humos, chalahuites, cocos, plátanos,
                pitahayas, caña de azúcar, calabaza, papaya, camotes, cacahuates,
                tamarindo, zarza, tepache, maizales y pastizales. Madera fina
                como: cedro, orejón, palo de rosa, bálsamo, chicozapote, chijol,
                pioche, jalamate, palo escrito. Arboles resinosos como: el copal,
                predo, chaca, plantas medicinales: zacate de limón, la ruda, la
                chaya, el estafiate, albacar, gordolobo, cornizuelo, abundantes
                plantas de ornato, infinidad de plantas, gran variedad.
              </Typography>
            </Paper>

            <Paper
              data-aos="zoom-in-right"
              sx={{
                p: { xs: 2, sm: 3, md: 5 },
                m: { xs: 1, sm: 3, md: 5 },
                bgcolor: "background.paper",
              }}
              elevation={3}
            >
              <Typography gutterBottom variant="h6" component="p" color="primary">
                Fauna.
              </Typography>
              <Typography
                variant="subtitle1"
                component="p"
                color="text.secondary"
              >
                En el municipio existe gran extinción de animales. Predominan
                zorras, tlacuaches, coyotes, zorrillos, tuzas, onzas, zacamixtle,
                venados, conejos, gato montés, cuachacales, tigrillos, tejones,
                mapaches, caballos, burros, mulas, reses, borregos, ratones,
                ratas, ect. Aves, tales como gavilán, auras, zopilotes, lechuzas,
                tecolotes, aguilillas, chachalacas, torcazas, palomas, tordos,
                patos, cordonices, tórtolas, perdices, papanes, loros, pericos,
                cotorras, búhos, cardenales, cuacheches, calandrias, primaveras,
                media lunas, guiliquisis, pájaro azul, cuamomoxtles, quetzales,
                chuparrosas, perdigueros, pichones, gallos, gallinas, etc. En su
                variedad existen guajolotes, gansos, gallinitas, garzas, pato
                silvestre, quebranta huesos, colmeneros, pixcuhuiles, poxacuas.
                Reptiles como las víboras, coralillos, mahuaquites,
                apachicohuatls, mazacuates, culebra de agua, lagartijas,
                salamandras, iguanas, tarántulas y alacranes.
              </Typography>
            </Paper>
          </Grid>

          <Grid item md={6} xs={12}>
            <Paper
              data-aos="zoom-in-up"
              sx={{
                p: { xs: 2, sm: 3, md: 5 },
                m: { xs: 1, sm: 3, md: 5 },
                bgcolor: "background.paper",
              }}
              elevation={3}
            >
              <Typography gutterBottom variant="h6" component="p" color="primary">
                Historia.
              </Typography>
              <Typography
                variant="subtitle1"
                component="p"
                color="text.secondary"
              >
                En diciembre de 1522 Hernán Cortés, estuvo en Huexotlan y
                conquistó la Huaxteca, castellanizándose su nombre a Huejutla.
              </Typography>
              <Typography
                variant="subtitle1"
                component="p"
                color="text.secondary"
              >
                El convenio agustino o catedral, con características de estilo
                romántico, gótico y plateresco, el campanario con forma de
                espadaña, 3 arcadas, bóvedas de cañón, la torre tiene almedas de
                estilo mudéjar, que le hacen parecer una fortaleza de la época del
                renacimiento italiano, construido entre 1940 a 1945, bajo la orden
                de Fray Juan de Estacio, provincial de los monjes agustinos, es el
                símbolo más importante de los huejutlenses.
              </Typography>
              <Typography
                variant="subtitle1"
                component="p"
                color="text.secondary"
              >
                Creación del distrito: el 04 de octubre de 1824, al elegirse el
                estado de México, Huejutla, se convierte en Distrito. En 1869 al
                elegirse el Estado de Hidalgo, pasa a formar parte de esta
                entidad.
              </Typography>
              <Typography
                variant="subtitle1"
                component="p"
                color="text.secondary"
              >
                Batalla de Tampico. Fernando VII, Rey de España, quiso conquistar
                México, envió una flota de 4000 soldados al mando del general
                Isidro Barradas, pero el 11 de septiembre de 1829, el batallón
                cívico de Huejutla participó en la batalla, venciendo a los
                Españoles.
              </Typography>
              <Typography
                variant="subtitle1"
                component="p"
                color="text.secondary"
              >
                Intervención norteamericana. Al mando de las guardias nacionales
                de Huejutla, General Don. Francisco de Garay, encabeza a los
                milicianos huejutlenses y derrotan al invasor norteamericano que
                avanzaba hacia el centro del país previendo de víveres en bestias
                de carga, desembarcadas en el puerto de Tampico, en el lugar
                llamado rio Calabozo, en un reñido encuentro en que el horror de
                las armas quedo bien puesto emprendiendo el enemigo una vergonzosa
                y precipitada huida el dia 12 de julio de 1847.
              </Typography>
              <Typography
                variant="subtitle1"
                component="p"
                color="text.secondary"
              >
                De aquella batalla de Puebla llegan a posicionarse a Huejutla los
                franceses en noviembre de 1865, pero el 21 de mayo de 1866, son
                derrotados y expulsados por grupos de huejutlenses al mando del
                Capitán Antonio Reyes Cabrera (a) El tordo.
              </Typography>
              <Typography
                variant="subtitle1"
                component="p"
                color="text.secondary"
              >
                En 1943, el congreso del Estado decreta que nuestra ciudad se
                llamará, Huejutla de Reyes Hidalgo.
              </Typography>
              <Typography
                variant="subtitle1"
                component="p"
                color="text.secondary"
              >
                En la revolución Mexicana, destaca, la participación de los
                generales huejutlenses: Francisco de P. Mariel, Daniel Cerecedo
                Estrada, Vicente C. Salazar B, Armando, Antonio y Jesús Azuara
                Sarmiento.
              </Typography>
            </Paper>
            <Paper
              data-aos="flip-right"
              sx={{
                p: { xs: 2, sm: 3, md: 5 },
                m: { xs: 1, sm: 3, md: 5 },
                bgcolor: "background.paper",
              }}
              elevation={3}
            >
              <Typography gutterBottom variant="h6" component="p" color="primary">
                Clima.
              </Typography>
              <Typography
                variant="subtitle1"
                component="p"
                color="text.secondary"
              >
                Huejutla tiene un clima caluroso húmedo, algo del trópico, debido
                a la poca altura s.n.m. registrándose temperaturas hasta 35° a la
                sombra, aumentando en los meses, de abril, mayo, junio, julio y
                agosto; el invierno es extremoso.
              </Typography>
            </Paper>
            <Paper
              data-aos="flip-right"
              sx={{
                p: { xs: 2, sm: 3, md: 5 },
                m: { xs: 1, sm: 3, md: 5 },
                bgcolor: "background.paper",
              }}
              elevation={3}
            >
              <Typography gutterBottom variant="h6" component="p" color="primary">
                Colindancias.
              </Typography>
              <Typography
                variant="subtitle1"
                component="p"
                color="text.secondary"
              >
                Huejutla colinda al norte con el municipio de Orizatlán, el estado
                de Veracruz; al este con Veracruz, Huautla y Atlapexco; al sur con
                Atlapexco, Huazalingo y Tlanchinol; y al oeste con Tlanchinol,
                Jaltocan y Orizatlán.
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </Paper> */}
    </Box>
  );
}


const Img = styled('img')({
  maxWidth: "100%",
  height: "auto"
});