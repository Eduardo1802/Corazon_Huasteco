import React, {useEffect} from 'react'
import Typography from '@mui/material/Typography'
import { Paper, Button, Box, useMediaQuery, Grid/* , useTheme */ } from '@mui/material';
import { WrapperSingleRoute } from '../../components/customs/WrapperSingleRoute';
import { contadorVisitas } from '../../utils/fnCountStatus';
import { Carrusel } from './Carrusel/Carrusel';
import { Link } from 'react-router-dom';
import ArrowRightAltRoundedIcon from '@mui/icons-material/ArrowRightAltRounded';
import { MapRounded } from '@mui/icons-material';

export const Inicio = () => {

  const isSmallScreen = useMediaQuery('(max-width:600px)');
  // const theme = useTheme();

  useEffect(() => {
    contadorVisitas("inicio");
  }, [])

  return (
    <WrapperSingleRoute>
      <Carrusel />

      <Paper component='section' 
        sx={{
          margin: "4px 8px", 
          minHeight: '98vh', 
          display: "flex", 
          justifyContent: "center", 
          alignItems: "center", 
          // background: `linear-gradient(150deg, ${theme.palette.background.paper} 25%, ${theme.palette.primary.dark}b7 77%, ${theme.palette.primary.light} 95%)`
        }}
      >
        <Box px={{xs: 3, sm: 5, md: 10}} py={8}>
          <Box >
            <Typography variant={isSmallScreen ? 'h3' : 'h2'} component="h1" gutterBottom>
              Cultura de La Huasteca Hidalguense
            </Typography>
          </Box>
          <Box>
            <Typography variant={isSmallScreen ? 'h6' : 'h5'} component="p" gutterBottom mb={3}>
              La cultura de La Huasteca Hidalguense es una rica mezcla de historia, tradiciones, gastronomía y artesanías que se han desarrollado a lo largo del tiempo en la región.
            </Typography>
          </Box>
          <Box>
            <Button variant="contained" color="primary" size='large' component={Link} to="/tematicas"
              sx={{
                position: "relative",
                transition: "all 0.3s ease",
                '&:hover': {
                  '&': {
                    transform: "translateX(7px)" // Ajusta el valor según el desplazamiento deseado
                  }
                }
              }}
            >
              <Typography variant={isSmallScreen ? 'button': 'h6'}> 
                Descubre La Huasteca Hidalguense
              </Typography>
              
                <ArrowRightAltRoundedIcon fontSize='large'/>
              
            </Button>
          </Box>
        </Box>
      </Paper>

      
      
      <Paper component='section' 
        sx={{
          margin: "4px 8px", 
          minHeight: '98vh', 
          display: "flex", 
          justifyContent: "center", 
          alignItems: "center", 
          // background: `linear-gradient(210deg, ${theme.palette.background.paper} 25%, ${theme.palette.primary.dark}b7 77%, ${theme.palette.primary.light} 95%)`
        }} 
      >
        <Box px={{xs: 3, sm: 5, md: 10}} py={8}>    
          <Grid container spacing={2} >
            <Grid item xs={12}>
              <Typography variant={isSmallScreen ? 'h4' : 'h3'} component="h2" gutterBottom>
                Historia de La Huasteca Hidalguense
              </Typography>
            </Grid>
            <Grid item md={6} xs={12}>
              <Paper sx={{p: 3, height: "100%"}} elevation={5}>
                <Typography variant={isSmallScreen ? 'h5' : 'h4'} component="h3" gutterBottom>
                  Antecedentes prehispánicos
                </Typography>
                <Typography variant={isSmallScreen ? 'h6' : 'h5'} component="p" gutterBottom mb={3}>
                  La Huasteca Hidalguense fue habitada originalmente por pueblos indígenas que desarrollaron culturas únicas y ricas en tradiciones.
                </Typography>
              </Paper>
            </Grid>
            <Grid item md={6} xs={12}>
              <Paper sx={{p: 3, height: "100%"}} elevation={5}>
                <Typography variant={isSmallScreen ? 'h5' : 'h4'} component="h3" gutterBottom>
                  Época colonial
                </Typography>
                <Typography variant={isSmallScreen ? 'h6' : 'h5'} component="p" gutterBottom mb={3}>
                  La llegada de los españoles a la región tuvo un gran impacto en la cultura y tradiciones huastecas, siendo una época de cambios y mestizaje.
                </Typography>
              </Paper>
            </Grid>
            <Grid item md={6} xs={12}>
              <Paper sx={{p: 3, height: "100%"}} elevation={5}>
                <Typography variant={isSmallScreen ? 'h5' : 'h4'} component="h3" gutterBottom>
                  Independencia y revolución                </Typography>
                <Typography variant={isSmallScreen ? 'h6' : 'h5'} component="p" gutterBottom mb={3}>
                  La región fue escenario de importantes episodios de la historia mexicana, como la guerra de independencia y la revolución mexicana.                </Typography>
              </Paper>
            </Grid>
            <Grid item md={6} xs={12}>
              <Paper sx={{p: 3, height: "100%"}} elevation={5}>
                <Typography variant={isSmallScreen ? 'h5' : 'h4'} component="h3" gutterBottom>
                  Hoy en día                </Typography>
                <Typography variant={isSmallScreen ? 'h6' : 'h5'} component="p" gutterBottom mb={3}>
                  La Huasteca Hidalguense es reconocida por su patrimonio cultural y turístico, y es un lugar que invita a visitar y conocer su historia.
                </Typography>
              </Paper>
            </Grid>
          </Grid>
        </Box>
      </Paper>

      

      <Paper component='section' 
        sx={{
          margin: "4px 8px", 
          minHeight: '98vh', 
          display: "flex", 
          justifyContent: "center", 
          alignItems: "center", 
          // background: `linear-gradient(150deg, ${theme.palette.background.paper} 25%, ${theme.palette.primary.dark}b7 77%, ${theme.palette.primary.light} 95%)`
        }}      
      >
        <Box px={{xs: 3, sm: 5, md: 10}} py={8}>    
          <Grid container spacing={2} >
            <Grid item xs={12}>
              <Typography variant={isSmallScreen ? 'h4' : 'h3'} component="h2" gutterBottom>
                Ubicación Geográfica y Características de la Región             
              </Typography>
            </Grid>
            <Grid item md={6} xs={12}>
              <Paper sx={{p: 3, height: "100%"}} elevation={0}>
                <Typography variant={isSmallScreen ? 'h5' : 'h4'} component="h3" gutterBottom>
                  Ubicación Geográfica
                </Typography>
                <Typography variant={isSmallScreen ? 'h6' : 'h5'} component="p" gutterBottom mb={3}>
                  La Huasteca Hidalguense se encuentra en el noreste del estado de Hidalgo, y colinda con los estados de San Luis Potosí, Veracruz, Puebla y Querétaro.
                </Typography>
              </Paper>
            </Grid>
            <Grid item md={6} xs={12}>
              <Paper sx={{p: 3, height: "100%"}} elevation={0}>
                <Typography variant={isSmallScreen ? 'h5' : 'h4'} component="h3" gutterBottom>
                  Características de la Región
                </Typography>
                <Typography variant={isSmallScreen ? 'h6' : 'h5'} component="p" gutterBottom mb={3}>
                  La región cuenta con una gran diversidad geográfica, que incluye montañas, ríos, cascadas y una rica flora y fauna.
                </Typography>
              </Paper>
            </Grid>
            <Grid item xs={12}>
              <Box>
                <Button variant="contained" color="primary" size='large' component={Link} to="/mapa"
                  sx={{
                    position: "relative",
                    transition: "all 0.3s ease",
                    '&:hover': {
                      '&': {
                        transform: "translateX(7px)" // Ajusta el valor según el desplazamiento deseado
                      }
                    }
                  }}
                >
                  <Typography variant={isSmallScreen ? 'button': 'h6'}> 
                    Ver mapa
                  </Typography>
                  <ArrowRightAltRoundedIcon fontSize='large'/>
                  <MapRounded/>
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Box>
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
    </WrapperSingleRoute>
  );
}
