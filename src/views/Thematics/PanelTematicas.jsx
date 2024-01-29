import React, { useEffect, /*useState*/ } from 'react'
import { Box, Button, Container, Grid, Paper, Typography, styled } from '@mui/material'
// import { app } from '../../config/firebase/firebase'
import { Link, Outlet } from 'react-router-dom'
// import { ItemListCard } from '../../components/customs/ItemListCard'
import { Bread } from '../../components/customs/Bread'
// import GroupSkeleton from "../Shop/groupSkeleton"
import { contadorVisitas } from '../../utils/fnCountStatus'
import { Checkroom, EmojiPeople, FlagRounded, HomeRounded, LabelRounded, MusicNoteRounded, RestaurantRounded } from '@mui/icons-material';
import { HelmetComponent } from '../../components/customs/HelmetComponent'

export const PanelTematicas = () => {
  // const [isLoading, setIsLoading] = useState(true);
  // const [proyectos, setProyectos] = useState([]);

  // const obtenerInfo = async () => {
  //   const docList = await app.firestore().collection("temas").get();
  //   setProyectos(docList.docs.map((doc) => doc));
  // }

  useEffect(() => {
    contadorVisitas("tematicas");
    // obtenerInfo();
    // // Simulamos una carga de datos de 2 segundos
    // const timeoutId = setTimeout(() => {
    //   // Una vez que se han cargado los datos, actualizamos el estado
    //   setIsLoading(false);
    // }, 1000);
    //   // Limpiamos el timeout si el componente se desmonta antes de que termine la carga
    //   return () => clearTimeout(timeoutId);
  }, [])

  return (
    <Box sx={{bgcolor: "background.default"}}>
      <HelmetComponent/>
      {/* Breadcrumbs */}
      <Bread migas={[{miga: "INICIO", ruta: "/inicio", icono: <HomeRounded/>},{miga: "TEMATICAS", ruta: "/tematicas", icono: <LabelRounded/>},]}/>

      {/* L I S T A D O   D E   T E M A T I C A S */}
      <Paper elevation={0}>
        <Container maxWidth="xl">
          
          <Grid container spacing={1}> {/* G R I D  G R A L. */}
            <Grid item xs={12}> 
              <BoldText>
                <strong>Ideas</strong>, {" "}
                <strong>historias</strong>, 
                y {" "}
                <strong>tendencias</strong> 
                {" "} que definen la riqueza cultural. 
              </BoldText>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="h4" component="p" textAlign="left" gutterBottom fontWeight={300}>
                Explora las diferentes tematicas
              </Typography>
            </Grid>
            <Grid item container spacing={2}> 
              <Grid item xs={12} sm={6} md={4} lg={3} xl={3}>
                <Link to="vestimenta">
                  <TransformEffectButton endIcon={<Checkroom/>} variant="text" colorhover="#6A5ACD" fullWidth>
                    <Typography variant="h6">Vestimenta</Typography>
                  </TransformEffectButton>
                </Link>
              </Grid>
              <Grid item xs={12} sm={6} md={4} lg={3} xl={3}>
                <Link to="danza">
                  <TransformEffectButton endIcon={<EmojiPeople/>} variant="text" colorhover="#FFA726" fullWidth>
                    <Typography variant="h6">Danza</Typography>
                  </TransformEffectButton>
                </Link>
              </Grid>
              <Grid item xs={12} sm={6} md={4} lg={3} xl={3} display={{xs: "none", sm: "none", md:"none", lg: "block"}}></Grid>
              <Grid item xs={12} sm={6} md={4} lg={3} xl={3} display={{xs: "none", sm: "none", md:"block", lg: "block"}}></Grid>
              <Grid item xs={12} sm={6} md={4} lg={3} xl={3}>
                <Link to="gastronomia">
                  <TransformEffectButton endIcon={<RestaurantRounded/>} variant="text" colorhover="#E53935" fullWidth>
                    <Typography variant="h6">Gastronomia</Typography>
                  </TransformEffectButton>
                </Link>
              </Grid>
              <Grid item xs={12} sm={6} md={4} lg={3} xl={3}>
                <Link to="musica">
                  <TransformEffectButton endIcon={<MusicNoteRounded/>} variant="text" colorhover="#4d7ec9" fullWidth>
                    <Typography variant="h6">Música</Typography>
                  </TransformEffectButton>
                </Link>
              </Grid>
              <Grid item xs={12} sm={6} md={4} lg={3} xl={3} display={{xs: "none", sm: "none", md:"block", lg: "block"}}></Grid>
              <Grid item xs={12} sm={6} md={4} lg={3} xl={3} display={{xs: "none", sm: "none", md:"none", lg: "block"}}></Grid>
              <Grid item xs={12} sm={6} md={4} lg={3} xl={3}>
                <Link to="tradiciones">
                  <TransformEffectButton endIcon={<FlagRounded/>} variant="text" colorhover="#2E7D32" fullWidth>
                    <Typography variant="h6">Tradiciones</Typography>
                  </TransformEffectButton>
                </Link>
              </Grid>
              <Grid item xs={12} sm={6} md={4} lg={3} xl={3}></Grid>
              <Grid item xs={12} sm={6} md={4} lg={3} xl={3}></Grid>
              <Grid item xs={12} sm={6} md={4} lg={3} xl={3}></Grid>
              
            </Grid>
            {/* {
              isLoading ? (
                <GroupSkeleton/>
              )
              :
              (proyectos.map(proyecto => {
                return (
                  <Grid item xs={12} sm={12} md={6} lg={4} xl={3} key={proyecto.id}>
                    <ItemListCard
                      key={proyecto.id}
                      id={proyecto.id}
                      titulo={proyecto.data().titulo}
                      descripcion={proyecto.data().descripcion}
                      ancla={proyecto.data().ancla}
                      img={proyecto.data().img}
                      shoWActions={false}
                    />  
                  </Grid>
                )
              }))
            } */}
          </Grid>
          
        </Container>

      </Paper>
      <Outlet/> {/* R O U T E R  O U T L E T */}{/**SALIDA DE LA SUBRUTA */}
    </Box>
  )
}



const BoldText = styled(Typography)(({ theme }) => ({
  color: theme.palette.primary.light,
  fontSize: "5rem",
  fontWeight: "500",
  // textIndent: "10rem",
  letterSpacing: "-0.2rem",
  lineHeight: "1",
  wordSpacing: "0rem",
  whiteSpace: "wrap",
  margin: "10rem 0 3rem 0",
  "@media screen and (max-width: 767px)": {
    fontSize: "3rem",
    textAlign: "center",
    textIndent: "0rem",
    letterSpacing: "-0.1rem",
    lineHeight: "1",
    wordSpacing: "0rem",
    whiteSpace: "wrap",
    margin: "3rem 0 1rem 0",
  },

  "& strong": {
    position: "relative",
    color: theme.palette.text.primary,
    // color: getContrastText(theme.palette.background.default) === '#000' ? theme.palette.primary.main : theme.palette.success.main,
    textDecoration: "none",
    "&::before": {
      content: "''",
      position: "absolute",
      width: "100%",
      height: "4px",
      borderRadius: "4px",
      backgroundColor: theme.palette.primary.light,
      bottom: 10,
      left: 0,
      transformOrigin: "right",
      transform: "scaleX(0)",
      transition: "transform .3s ease-in-out",
    },
    // "&:hover::before": {
    //   transformOrigin: "left",
    //   transform: "scaleX(1)",
    //   color: "red"
    // },
  },

  // "& strong:nth-of-type(1)": {
  //   // color: theme.palette.primary.main,
  //   "&:hover": {
  //     color: theme.palette.success.dark,
  //   },
  //   "&::before": {
  //     backgroundColor: theme.palette.success.light,
  //   },
  // },
  // "& strong:nth-of-type(2)": {
  //   // color: theme.palette.primary.main,
  //   "&:hover": {
  //     color: theme.palette.info.dark,
  //   },
  //   "&::before": {
  //     backgroundColor: theme.palette.info.light,
  //   },
  // },
  // "& strong:nth-of-type(3)": {
  //   // color: theme.palette.primary.main,
  //   "&:hover": {
  //     color: theme.palette.error.dark,
  //   },
  //   "&::before": {
  //     backgroundColor: theme.palette.error.light,
  //   },
  // },
  
}));

const TransformEffectButton = styled(Button)(({ theme, colorhover }) => ({
  position: 'relative',
  '&::before': {
    content: "''",
    position: 'absolute',
    width: '100%',
    height: 4,
    borderRadius: 4,
    backgroundColor: colorhover || theme.palette.primary.light,
    bottom: 0,
    left: 0,
    transformOrigin: 'left',
    transform: 'scaleX(0)',
    transition: 'transform .3s ease-in-out',
  },
  '&:hover::before': {
    transformOrigin: 'left',
    transform: 'scaleX(1)',
  },
  '&:hover svg': {
    animation: "expand 1.1s /* infinite */"
  },
  '&:hover':{
    color: colorhover || theme.palette.primary.light,
  },
  '@keyframes expand': {
    '0%': { transform: "scale(1)", transformOrigin: "left bottom" },
    '50%': { transform: "scale(1.2)", transformOrigin: "left bottom" },
    '100%': { transform: "scale(1)", transformOrigin: "left bottom" }
  }
}));