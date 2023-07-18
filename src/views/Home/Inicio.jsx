import React, {useEffect} from 'react'
import Typography from '@mui/material/Typography'
import { Paper, Button, Box, useMediaQuery, Grid, useTheme, List, ListItem, ListItemIcon, ListItemText, Container, Divider, Chip } from '@mui/material';
import { WrapperSingleRoute } from '../../components/customs/WrapperSingleRoute';
import { contadorVisitas } from '../../utils/fnCountStatus';
import { Carrusel } from './Carrusel/Carrusel';
import { Link } from 'react-router-dom';
import ArrowRightAltOutlinedIcon from '@mui/icons-material/ArrowRightAltOutlined';
import CircleOutlinedIcon from '@mui/icons-material/CircleOutlined';
import { MapOutlined, LooksOneOutlined, LooksTwoOutlined, Looks3Outlined, Looks4Outlined, HistoryEdu, FmdGoodRounded, FlagRounded, MusicNoteRounded, LocalOfferRounded, LanguageRounded, RestaurantRounded } from '@mui/icons-material';
import lenguas1 from '../../assets/img/inicio/lenguas1.jpg'
import lenguas2 from '../../assets/img/inicio/lenguas2.jpg'
import lenguas3 from '../../assets/img/inicio/lenguas3.jpg'
import danzas1 from '../../assets/img/inicio/danzas1.jpg'
import danzas2 from '../../assets/img/inicio/danzas2.jpg'
import danzas3 from '../../assets/img/inicio/danzas3.jpg'
import backImg from '../../assets/img/inicio/paisaje1.jpg'
import { AnimatedIcon } from '../../components/Layout/NavBar/componentsNavBar';


export const Inicio = () => {

  const isSmallScreen = useMediaQuery('(max-width:900px)');
  const theme = useTheme();

  useEffect(() => {
    contadorVisitas("inicio");
  }, [])

  return (
    <Box>
      {/* SECTION ONE -- CAROUSEL */}
      <Carrusel />


      {/* SECTION TWO -- CULTURA DE LA HUASTECA...*/}
      <Paper component='section' 
        sx={{
          borderRadius: 0,
          // margin: "4px 8px", 
          minHeight: '60vh', 
          display: "flex", 
          justifyContent: "center", 
          alignItems: "center", 
          backgroundImage: `url(${backImg})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center center",
          // background: `linear-gradient(150deg, ${theme.palette.background.paper} 25%, ${theme.palette.primary.dark}b7 77%, ${theme.palette.primary.light} 95%)`
        }}
      >
        <Container maxWidth='lg' sx={{backgroundColor: theme.palette.background.paper, p:3, borderRadius: 0}} >
          <Box >
            <Typography variant={isSmallScreen ? 'h4' : 'h3'} component="h1" gutterBottom>
              Cultura de La Huasteca Hidalguense
            </Typography>
          </Box>
          <Box>
            <Typography variant='body1' sx={{fontSize: "1.25rem"}} component="p" gutterBottom mb={3}>
              La cultura de La Huasteca Hidalguense es una rica mezcla de historia, tradiciones, gastronomía y artesanías que se han desarrollado a lo largo del tiempo en la región.
            </Typography>
          </Box>
          <Box data-aos="fade-up">
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
              <ArrowRightAltOutlinedIcon fontSize='large'/>
            </Button>
          </Box>
        </Container>
      </Paper>

      
      {/* SECTION THREE -- HISTORIA DE LA HUASTECA...*/}
      <Paper component='section' 
        sx={{
          borderRadius: 0,
          // margin: "4px 8px", 
          minHeight: '98vh', 
          display: "flex", 
          justifyContent: "center", 
          alignItems: "center", 
          // background: `linear-gradient(210deg, ${theme.palette.background.paper} 25%, ${theme.palette.primary.dark}b7 77%, ${theme.palette.primary.light} 95%)`
        }} 
      >
        <Container maxWidth='lg'>    
          <Grid container spacing={2} py={8}>
            <Grid item xs={12}>
              <Typography variant={isSmallScreen ? 'h4' : 'h3'} component="h2" gutterBottom>
                Historia de La Huasteca Hidalguense
              </Typography>
              <Divider>
                <Chip color="primary" variant='outlined' label={<HistoryEdu/>} />
              </Divider>
            </Grid>
            <Grid item md={6} xs={12}>
              <Paper  sx={{p: 3, height: "100%", background: `${theme.palette.primary.light}80`}} elevation={1}>
                <Typography variant={isSmallScreen ? 'h5' : 'h4'} component="h3" gutterBottom>
                  Antecedentes prehispánicos
                </Typography>
                <Typography variant='body1' sx={{fontSize: "1.25rem"}} component="p" gutterBottom mb={3} data-aos="fade-up" data-aos-delay="75">
                  La Huasteca Hidalguense fue habitada originalmente por pueblos indígenas que desarrollaron culturas únicas y ricas en tradiciones.
                </Typography>
              </Paper>
            </Grid>
            <Grid item md={6} xs={12}>
              <Paper  sx={{p: 3, height: "100%", background: `${theme.palette.primary.light}80`}} elevation={1}>
                <Typography variant={isSmallScreen ? 'h5' : 'h4'} component="h3" gutterBottom>
                  Época colonial
                </Typography>
                <Typography variant='body1' sx={{fontSize: "1.25rem"}} component="p" gutterBottom mb={3} data-aos="fade-up" data-aos-delay="100">
                  La llegada de los españoles a la región tuvo un gran impacto en la cultura y tradiciones huastecas, siendo una época de cambios y mestizaje.
                </Typography>
              </Paper>
            </Grid>
            <Grid item md={6} xs={12}>
              <Paper  sx={{p: 3, height: "100%", background: `${theme.palette.primary.light}80`}} elevation={1}>
                <Typography variant={isSmallScreen ? 'h5' : 'h4'} component="h3" gutterBottom>
                  Independencia y revolución                </Typography>
                <Typography variant='body1' sx={{fontSize: "1.25rem"}} component="p" gutterBottom mb={3} data-aos="fade-up" data-aos-delay="125">
                  La región fue escenario de importantes episodios de la historia mexicana, como la guerra de independencia y la revolución mexicana.                </Typography>
              </Paper>
            </Grid>
            <Grid item md={6} xs={12}>
              <Paper  sx={{p: 3, height: "100%", background: `${theme.palette.primary.light}80`}} elevation={1}>
                <Typography variant={isSmallScreen ? 'h5' : 'h4'} component="h3" gutterBottom>
                  Hoy en día                </Typography>
                <Typography variant='body1' sx={{fontSize: "1.25rem"}} component="p" gutterBottom mb={3} data-aos="fade-up" data-aos-delay="150">
                  La Huasteca Hidalguense es reconocida por su patrimonio cultural y turístico, y es un lugar que invita a visitar y conocer su historia.
                </Typography>
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </Paper>

      
      {/* SECTION FOUR -- UBICACIÓN GEOGRAFÍCA...*/}
      <Paper component='section' 
        sx={{
          borderRadius: 0,
          // margin: "4px 8px", 
          minHeight: '58vh', 
          display: "flex", 
          justifyContent: "center", 
          alignItems: "center", 
          // background: `linear-gradient(150deg, ${theme.palette.background.paper} 25%, ${theme.palette.primary.dark}b7 77%, ${theme.palette.primary.light} 95%)`
        }}      
      >
        <Container maxWidth='lg'>    
          <Grid container spacing={2} py={8} >
            <Grid item xs={12}>
              <Typography variant={isSmallScreen ? 'h4' : 'h3'} component="h2" gutterBottom>
                Ubicación Geográfica y Características de la Región             
              </Typography>
              <Divider>
                <Chip color="primary" variant='outlined' label={<FmdGoodRounded/>} />
              </Divider>
            </Grid>
            <Grid item md={6} xs={12}>
              <Paper /* data-aos="fade-up" data-aos-delay="100" */ sx={{p:1, height: "100%"}} elevation={0}>
                <Typography variant={isSmallScreen ? 'h5' : 'h4'} component="h3" gutterBottom>
                  Ubicación Geográfica
                </Typography>
                <Typography variant='body1' sx={{fontSize: "1.25rem"}} component="p" gutterBottom mb={3}>
                  La Huasteca Hidalguense se encuentra en el noreste del estado de Hidalgo, y colinda con los estados de San Luis Potosí, Veracruz, Puebla y Querétaro.
                </Typography>
              </Paper>
            </Grid>
            <Grid item md={6} xs={12}>
              <Paper /* data-aos="fade-up" data-aos-delay="150" */ sx={{p:1, height: "100%"}} elevation={0}>
                <Typography variant={isSmallScreen ? 'h5' : 'h4'} component="h3" gutterBottom>
                  Características de la Región
                </Typography>
                <Typography variant='body1' sx={{fontSize: "1.25rem"}} component="p" gutterBottom mb={3}>
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
                  <ArrowRightAltOutlinedIcon fontSize='large'/>
                  <MapOutlined/>
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Paper>


      {/* SECTION FIVE -- LENGUAS HABLADAS...*/}
      <Paper component='section' 
        sx={{
          borderRadius: 0,
          // margin: "4px 8px", 
          minHeight: '98vh', 
          display: "flex", 
          justifyContent: "center", 
          alignItems: "center", 
          // background: `linear-gradient(150deg, ${theme.palette.background.paper} 25%, ${theme.palette.primary.dark}b7 77%, ${theme.palette.primary.light} 95%)`
        }}      
      >
        <Container maxWidth='lg'>    
          <Grid container spacing={2} py={8}>
            <Grid item xs={12}>
              <Typography variant={isSmallScreen ? 'h4' : 'h3'} component="h2" gutterBottom>
                Lenguas habladas en la Región
              </Typography>
              <Divider>
                <Chip color="primary" variant='outlined' label={<LanguageRounded/>} />
              </Divider>
            </Grid>
            <Grid data-aos="fade-down" data-aos-delay="100" item xs display='flex' justifyContent='flex-start' alignItems='center' flexDirection="column">
              <img src={lenguas1} width={300} height={200} alt='nahuatl' />
              <Typography variant={isSmallScreen ? 'h5' : 'h4'} component="h3" gutterBottom textAlign='center'>Náhuatl</Typography>
              <Typography variant="body1" textAlign='center' 
                sx={{fontSize: "1.25rem"}}
              >
                El náhuatl es una lengua originaria de la región que sigue siendo hablada por algunos habitantes locales.
              </Typography>
            </Grid>
            <Grid data-aos="fade-down" data-aos-delay="150" item xs display='flex' justifyContent='flex-start' alignItems='center' flexDirection="column">
              <img src={lenguas2} width={300} height={200} alt='tenek' />
              <Typography variant={isSmallScreen ? 'h5' : 'h4'} component="h3" gutterBottom textAlign='center'>Tének</Typography>
              <Typography variant="body1" textAlign='center' 
                sx={{fontSize: "1.25rem"}}
              >
                El tének, también conocido como huasteco, es otra lengua originaria de la región que todavía se habla hoy en día.
              </Typography>
            </Grid>
            <Grid data-aos="fade-down" data-aos-delay="200" item xs display='flex' justifyContent='flex-start' alignItems='center' flexDirection="column">
              <img src={lenguas3} width={300} height={200} alt='español' />
              <Typography variant={isSmallScreen ? 'h5' : 'h4'} component="h3" gutterBottom textAlign='center'>Español</Typography>
              <Typography variant="body1" textAlign='center' 
                sx={{fontSize: "1.25rem"}}
              >
                El español es el idioma oficial y se habla en toda la región, siendo un lenguaje que u
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </Paper>


      {/* SECTION SIX -- ARTESANIAS REPRESEN...*/}
      <Paper component='section' 
        sx={{
          borderRadius: 0,
          // margin: "4px 8px", 
          minHeight: '58vh', 
          display: "flex", 
          justifyContent: "center", 
          alignItems: "center", 
          // background: `linear-gradient(210deg, ${theme.palette.background.paper} 25%, ${theme.palette.primary.dark}b7 77%, ${theme.palette.primary.light} 95%)`
        }} 
      >
        <Container maxWidth='lg'>    
          <Grid container spacing={2} py={8}>
            <Grid item xs={12}>
              <Typography variant={isSmallScreen ? 'h4' : 'h3'} component="h2" gutterBottom>
                Artesanías Representativas de la Cultura Huasteca
              </Typography>
              <Divider>
                <Chip color="primary" variant='outlined' label={<LocalOfferRounded/>} />
              </Divider>
            </Grid>
            <Grid item md={6} xs={12} display='flex'>
              <Box>
                <LooksOneOutlined fontSize='large'/>
              </Box>
              <Box data-aos="zoom-in" data-aos-delay="100" sx={{px: 3, height: "100%"}}>
                <Typography variant={isSmallScreen ? 'h5' : 'h4'} component="h3" gutterBottom>
                  Bordados
                </Typography>
                <Typography variant='body1' sx={{fontSize: "1.25rem"}} component="p" gutterBottom mb={3}>
                  Los bordados huastecos son famosos por su colorido y complejidad, y se pueden encontrar en vestimentas, toallas, manteles y otros artículos textiles.
                </Typography>
              </Box>
            </Grid>
            <Grid item md={6} xs={12} display='flex'>
              <Box>
                <LooksTwoOutlined fontSize='large'/>
              </Box>
              <Box data-aos="zoom-in" data-aos-delay="150" sx={{px: 3, height: "100%"}}>
                <Typography variant={isSmallScreen ? 'h5' : 'h4'} component="h3" gutterBottom>
                  Cestería
                </Typography>
                <Typography variant='body1' sx={{fontSize: "1.25rem"}} component="p" gutterBottom mb={3}>
                  La cestería es otra de las artesanías típicas de la región, y se caracteriza por el uso de fibras naturales como la palma, el carrizo o el mimbre.
                </Typography>
              </Box>
            </Grid>
            <Grid item md={6} xs={12} display='flex'>
              <Box>
                <Looks3Outlined fontSize='large'/>
              </Box>
              <Box data-aos="zoom-in" data-aos-delay="200" sx={{px: 3, height: "100%"}}>
                <Typography variant={isSmallScreen ? 'h5' : 'h4'} component="h3" gutterBottom>
                  Talabartería
                </Typography>
                <Typography variant='body1' sx={{fontSize: "1.25rem"}} component="p" gutterBottom mb={3}>
                  La talabartería es la artesanía que se dedica a trabajar el cuero y producir objetos como sillas, estribos, riendas y otros objetos.
                </Typography>
              </Box>
            </Grid>
            <Grid item md={6} xs={12} display='flex'>
              <Box>
                <Looks4Outlined fontSize='large'/>
              </Box>
              <Box data-aos="zoom-in" data-aos-delay="250" sx={{px: 3, height: "100%"}}>
                <Typography variant={isSmallScreen ? 'h5' : 'h4'} component="h3" gutterBottom>
                  Esculturas de madera 
                </Typography>
                <Typography variant='body1' sx={{fontSize: "1.25rem"}} component="p" gutterBottom mb={3}>
                  La región destaca por la producción de figuras y esculturas de madera tallada, algunas de las cuales son de gran valor artístico.
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Paper>


      {/* SECTION SEVEN -- GASTRONOMÍA TIPICA...*/}
      <Box sx={{background: `${theme.palette.background.paper}`}}>
        <Paper component='section' 
          sx={{
            // margin: "4px 8px", 
            minHeight: '98vh', 
            display: "flex", 
            justifyContent: "center", 
            alignItems: "center", 
            background: `${theme.palette.primary.light}80`
            // background: `linear-gradient(210deg, ${theme.palette.background.paper} 25%, ${theme.palette.primary.dark}b7 77%, ${theme.palette.primary.light} 95%)`
          }} 
        >
          <Container maxWidth='lg'>    
            <Grid container  p={3} sx={{background: theme.palette.background.paper, borderRadius:1}}>
              <Grid item xs={12}>
                <Typography variant={isSmallScreen ? 'h4' : 'h3'} component="h2" gutterBottom>
                  Gastronomía Típica de La Huasteca Hidalguense
                </Typography>
                <Divider>
                <Chip color="primary" variant='outlined' label={<RestaurantRounded/>} />
              </Divider>
              </Grid>
              <Grid item md={4} sm={6} xs={12}>
                <Typography variant={isSmallScreen ? 'h5' : 'h4'} component="h3" gutterBottom>
                  Platillos salados
                </Typography>
                <List dense>
                  <ListItem sx={{m:0, p:0}}>
                    <ListItemIcon>
                      <CircleOutlinedIcon fontSize='small'/>
                    </ListItemIcon>
                    <ListItemText
                      primary={
                        <Typography variant='body1' sx={{fontSize: "1.25rem"}}>
                          Enchiladas Huastecas
                        </Typography>
                      }
                    />
                  </ListItem>
                  <ListItem sx={{m:0, p:0}}>
                    <ListItemIcon>
                      <CircleOutlinedIcon fontSize='small'/>
                    </ListItemIcon>
                    <ListItemText
                      primary={
                        <Typography variant='body1' sx={{fontSize: "1.25rem"}}>
                          Tacos de barbacoa de borrego
                        </Typography>
                      }
                    />
                  </ListItem>
                  <ListItem sx={{m:0, p:0}}>
                    <ListItemIcon>
                      <CircleOutlinedIcon fontSize='small'/>
                    </ListItemIcon>
                    <ListItemText
                      primary={
                        <Typography variant='body1' sx={{fontSize: "1.25rem"}}>
                          Pescado a la talla
                        </Typography>
                      }
                    />
                  </ListItem>
                  <ListItem sx={{m:0, p:0}}>
                    <ListItemIcon>
                      <CircleOutlinedIcon fontSize='small'/>
                    </ListItemIcon>
                    <ListItemText
                      primary={
                        <Typography variant='body1' sx={{fontSize: "1.25rem"}}>
                          Mole de olla
                        </Typography>
                      }
                    />
                  </ListItem>
                </List>
              </Grid>

              <Grid item md={4} sm={6} xs={12}>
                <Typography variant={isSmallScreen ? 'h5' : 'h4'} component="h3" gutterBottom>
                  Postres
                </Typography>
                <List dense >
                  <ListItem sx={{m:0, p:0}}>
                    <ListItemIcon>
                      <CircleOutlinedIcon fontSize='small'/>
                    </ListItemIcon>
                    <ListItemText
                      primary={
                        <Typography variant='body1' sx={{fontSize: "1.25rem"}}>
                          Buñuelos
                        </Typography>
                      }
                    />
                  </ListItem>
                  <ListItem sx={{m:0, p:0}}>
                    <ListItemIcon>
                      <CircleOutlinedIcon fontSize='small'/>
                    </ListItemIcon>
                    <ListItemText
                      primary={
                        <Typography variant='body1' sx={{fontSize: "1.25rem"}}>
                          Capirotada
                        </Typography>
                      }
                    />
                  </ListItem>
                  <ListItem sx={{m:0, p:0}}>
                    <ListItemIcon>
                      <CircleOutlinedIcon fontSize='small'/>
                    </ListItemIcon>
                    <ListItemText
                      primary={
                        <Typography variant='body1' sx={{fontSize: "1.25rem"}}>
                          Camote en dulce
                        </Typography>
                      }
                    />
                  </ListItem>
                  <ListItem sx={{m:0, p:0}}>
                    <ListItemIcon>
                      <CircleOutlinedIcon fontSize='small'/>
                    </ListItemIcon>
                    <ListItemText
                      primary={
                        <Typography variant='body1' sx={{fontSize: "1.25rem"}}>
                          Dulce de leche
                        </Typography>
                      }
                    />
                  </ListItem>
                </List>
              </Grid>

              <Grid item md={4} sm={12} xs={12}>
                <Typography variant={isSmallScreen ? 'h5' : 'h4'} component="h3" gutterBottom>
                  Bebidas
                </Typography>
                <List dense >
                  <ListItem sx={{m:0, p:0}}>
                    <ListItemIcon>
                      <CircleOutlinedIcon fontSize='small'/>
                    </ListItemIcon>
                    <ListItemText
                      primary={
                        <Typography variant='body1' sx={{fontSize: "1.25rem"}}>
                          Pulqué
                        </Typography>
                      }
                    />
                  </ListItem>
                  <ListItem sx={{m:0, p:0}}>
                    <ListItemIcon>
                      <CircleOutlinedIcon fontSize='small'/>
                    </ListItemIcon>
                    <ListItemText
                      primary={
                        <Typography variant='body1' sx={{fontSize: "1.25rem"}}>
                          Agua de horchata
                        </Typography>
                      }
                    />
                  </ListItem>
                  <ListItem sx={{m:0, p:0}}>
                    <ListItemIcon>
                      <CircleOutlinedIcon fontSize='small'/>
                    </ListItemIcon>
                    <ListItemText
                      primary={
                        <Typography variant='body1' sx={{fontSize: "1.25rem"}}>
                          Café de olla
                        </Typography>
                      }
                    />
                  </ListItem>
                  <ListItem sx={{m:0, p:0}}>
                    <ListItemIcon>
                      <CircleOutlinedIcon fontSize='small'/>
                    </ListItemIcon>
                    <ListItemText
                      primary={
                        <Typography variant='body1' sx={{fontSize: "1.25rem"}}>
                          Chocolate (bebida caliente de cacao)
                        </Typography>
                      }
                    />
                  </ListItem>
                </List>
              </Grid>
            </Grid>
          </Container>
        </Paper>
      </Box>


      {/* SECTION EIGTH -- DANZAS Y MÚSICA...*/}
      <Paper component='section' 
        sx={{
          borderRadius: 0,
          // margin: "4px 8px", 
          minHeight: '58vh', 
          display: "flex", 
          justifyContent: "center", 
          alignItems: "center", 
          // background: `linear-gradient(150deg, ${theme.palette.background.paper} 25%, ${theme.palette.primary.dark}b7 77%, ${theme.palette.primary.light} 95%)`
        }}      
      >
        <Container maxWidth='lg'>    
          <Grid container spacing={2} py={8}>
            <Grid item xs={12}>
              <Typography variant={isSmallScreen ? 'h4' : 'h3'} component="h2" gutterBottom>
                Danzas y Música Tradicionales
              </Typography>
              <Divider>
                <Chip color="primary" variant='outlined' label={<MusicNoteRounded/>} />
              </Divider>
            </Grid>
            <Grid data-aos="fade-down" data-aos-delay="100" item xs display='flex' justifyContent='flex-start' alignItems='center' flexDirection="column">
              <img src={danzas1} width={260} height={260} alt='nahuatl' />
              <Typography variant={isSmallScreen ? 'h5' : 'h4'} component="h3" gutterBottom textAlign='center'>Danza del Huapango</Typography>
              <Typography variant="body1" textAlign='center' 
                sx={{fontSize: "1.25rem"}}
              >
                El huapango es una danza folclórica que se baila al son de la música típica huasteca, y que representa el mestizaje cultural de la región.
              </Typography>
            </Grid>
            <Grid data-aos="fade-down" data-aos-delay="150" item xs display='flex' justifyContent='flex-start' alignItems='center' flexDirection="column">
              <img src={danzas2} width={260} height={260} alt='tenek' />
              <Typography variant={isSmallScreen ? 'h5' : 'h4'} component="h3" gutterBottom textAlign='center'>Jarabe Huasteco</Typography>
              <Typography variant="body1" textAlign='center' 
                sx={{fontSize: "1.25rem"}}
              >
                El jarabe huasteco es una danza que combina elementos indígenas y españoles, y que destaca por su energía y alegría.
              </Typography>
            </Grid>
            <Grid data-aos="fade-down" data-aos-delay="200" item xs display='flex' justifyContent='flex-start' alignItems='center' flexDirection="column">
              <img src={danzas3} width={260} height={260} alt='español' />
              <Typography variant={isSmallScreen ? 'h5' : 'h4'} component="h3" gutterBottom textAlign='center'>Música Huasteca</Typography>
              <Typography variant="body1" textAlign='center' 
                sx={{fontSize: "1.25rem"}}
              >
                La música huasteca se caracteriza por el uso de instrumentos como el violín, la guitarra quinta huapanguera y la jarana huasteca.              </Typography>
            </Grid>
          </Grid>
        </Container>
      </Paper>


      {/* SECTION NINE -- FIESTAS Y CELEBRACIONES...*/}
      <Paper component='section' 
        sx={{
          borderRadius: 0,
          // margin: "4px 8px", 
          minHeight: '88vh', 
          display: "flex", 
          justifyContent: "center", 
          alignItems: "center", 
          // background: `linear-gradient(210deg, ${theme.palette.background.paper} 25%, ${theme.palette.primary.dark}b7 77%, ${theme.palette.primary.light} 95%)`
        }} 
      >
        <Container maxWidth='lg'>    
          <Grid container spacing={2} py={8}>
            <Grid item xs={12}>
              <Typography variant={isSmallScreen ? 'h4' : 'h3'} component="h2" gutterBottom>
                Fiestas y Celebraciones Importantes en la Región
              </Typography>
              <Divider>
                <Chip color="primary" variant='outlined' label={<FlagRounded/>} />
              </Divider>
            </Grid>
            <Grid item md={4} sm={6} xs={12}>
              <Paper /* data-aos="fade-up" data-aos-delay="100" */ sx={{p: 3, height: "100%"}} elevation={1}>
                <Typography variant={isSmallScreen ? 'h5' : 'h4'} component="h3" gutterBottom>
                  Día de Muertos
                </Typography>
                <Typography variant='body1' sx={{fontSize: "1.25rem"}} component="p" gutterBottom mb={3}>
                  El Día de Muertos es una festividad que se celebra con gran devoción en toda la región, y en la que se honra a los difuntos con ofrendas y altares con flores, velas, alimentos y otros objetos simbólicos.
                </Typography>
              </Paper>
            </Grid>
            <Grid item md={4} sm={6} xs={12}>
              <Paper /* data-aos="fade-up" data-aos-delay="150" */ sx={{p: 3, height: "100%"}} elevation={1}>
                <Typography variant={isSmallScreen ? 'h5' : 'h4'} component="h3" gutterBottom>
                  Feria de San Francisco de Asís
                </Typography>
                <Typography variant='body1' sx={{fontSize: "1.25rem"}} component="p" gutterBottom mb={3}>
                  La feria de San Francisco de Asís es una de las celebraciones más importantes de la región, que se lleva a cabo en el mes de octubre y destaca por su colorido y animación.
                </Typography>
              </Paper>
            </Grid>
            <Grid item md={4} sm={12} xs={12}>
              <Paper /* data-aos="fade-up" data-aos-delay="200" */ sx={{p: 3, height: "100%"}} elevation={1}>
                <Typography variant={isSmallScreen ? 'h5' : 'h4'} component="h3" gutterBottom>
                  Carnaval Huasteco
                </Typography>
                <Typography variant='body1' sx={{fontSize: "1.25rem"}} component="p" gutterBottom mb={3}>
                  El carnaval huasteco es una celebración que se lleva a cabo anualmente en diferentes comunidades de la región, y que incluye bailes, música y desfile de carros alegóricos.
                </Typography>
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </Paper>


      {/* SECTION TEN -- QUIERO IR...*/}
      <Paper component='section' 
        elevation={0}
        sx={{
          borderRadius: 0,
          // margin: "4px 8px", 
          minHeight: '38vh', 
          display: "flex", 
          justifyContent: "center", 
          alignItems: "center", 
          // background: `linear-gradient(150deg, ${theme.palette.background.paper} 25%, ${theme.palette.primary.dark}b7 77%, ${theme.palette.primary.light} 95%)`
          pb: 8
        }}
      >
        <Container maxWidth='lg'>
          <Box>
            <AnimatedIcon/>
            <Typography variant={isSmallScreen ? 'body1' : 'h5'} sx={{fontSize: "1.25rem"}} component="p" gutterBottom mb={3}>
              ¿Listo para explorar La Huasteca Hidalguense? ¡No te pierdas la oportunidad de conocer una de las regiones más auténticas y hermosas de México! Haz clic en el botón y descubre todo lo que La Huasteca Hidalguense tiene para ofrecer.
            </Typography>
          </Box>
          <Box data-aos="fade-up">
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
                ¡Quiero ir!
              </Typography>
              <ArrowRightAltOutlinedIcon fontSize='large'/>
            </Button>
          </Box>
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
