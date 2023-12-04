import React,{ useEffect, useState } from 'react';
import { Typography, Grid, Paper, CardMedia, IconButton, Box, Container, Divider, Toolbar, Chip, Card, CardContent, Rating} from '@mui/material'
import { ItemsListCard2 } from '../../components/customs/ItemsListCard2'
import { ItemListCard3 } from '../../components/customs/ItemListCard3'
import { ArticleRounded, Facebook, HomeRounded, Instagram, LabelRounded, Twitter, Web, YouTube, Checkroom, EmojiPeople, RestaurantRounded, MusicNoteRounded, FlagRounded } from '@mui/icons-material';
import { Bread } from '../../components/customs/Bread';
import { Link, useParams } from 'react-router-dom';
import {useAuth} from "../../context/AuthContext"
import AgregarComentarios from './Comentarios/AgregarComentarios';
import userImage from "../../assets/img/perfil/noProfilePicture.webp";
import { app } from '../../config/firebase/firebase'

export const DetalleTematicas = ({tematicas}) => {
  const params = useParams();
  const {user} = useAuth();
  const [proyectos, setProyectos] = useState([]);
  const [datos, setDatos] = useState("");
  const [actualizarInfo, setActualizarInfo] = useState(false);
  
  const obtenerInfo = async (tema,titulo) => {
    const docList = await app.firestore().collection("comentarios").get();
    const proyectosVestimenta = docList.docs.filter((doc) => doc.data().tematica === tema && doc.data().titulo === titulo);
    setProyectos(proyectosVestimenta);
    setActualizarInfo(!actualizarInfo);
  }
  
  useEffect(() => {
    let t = tematicas.filter(tematica => tematica.id === params.id);
    setDatos(t[0].data()); 
    const checa = t[0].data()
    let tema = checa.tematica;
    let titulo = checa.titulo;
    obtenerInfo(tema,titulo);
  }, [/* params.id,actualizarInfo */]);

    const tematicaMayusculas = datos.tematica ? datos.tematica.toUpperCase() : '';
    const tituloMayusculas = datos.titulo ? datos.titulo.toUpperCase() : '';
    const tematicaMinusculas = datos.tematica ? datos.tematica.toLowerCase() : '';

    console.log("Datos", datos)
    console.log("proyectos", proyectos)
    console.log("actualizarinfo", actualizarInfo)

  return (
    <Box sx={{bgcolor: "background.paper"}}>
      {/* Breadcrumbs */}
      <Bread migas={[{miga: "INICIO", ruta: "/inicio", icono: <HomeRounded/>},{miga: "TEMATICAS", ruta: "/tematicas", icono: <LabelRounded/>},{miga: `${tematicaMayusculas}`, ruta: `/tematicas/${tematicaMinusculas}`, icono: setIcon(datos.tematica)},{miga: `${tituloMayusculas}`, icono: <ArticleRounded/>}]}/>
      
      <Container maxWidth="xl">
        <Grid container spacing={1}>
          {/* titulo */}
          <Grid item xs={12}><Typography color="text.primary" textAlign="left" variant='h4' gutterBottom>{datos.titulo}</Typography><Divider/></Grid>
          
          {/* COLUMNA IZQUIERDA */}
          <Grid item container spacing={0} xs={12} sm={12} md={8}>
            
            <Grid item xs={12}>
              <Typography color="text.primary" textAlign="right" variant='subtitle1'>{datos.subtitulo}</Typography>
              <Box sx={{ width: "auto", display: "flex", justifyContent: "center", my: 5 }}>
                <CardMedia
                  component="img"
                  alt={datos.titulo}
                  title={datos.titulo}
                  sx={{ objectFit: 'cover', maxWidth: { xs: "100%", sm: "90%", md: "80%", lg: "70%" }, height: '100%' }}
                  src={datos.portada}
                />
              </Box>
            </Grid>
            <Grid item xs={12}>
              <Toolbar/>
              <Divider/>
              <Typography variant='overline' color="primary.light" gutterBottom>
                {datos.fecha}
              </Typography>
            </Grid>
            <Grid item xs={12}><Chip label={datos.autor} color="info" variant="contained"/></Grid>
              {/* Iterar sobre el contenido del datos */}
              { datos && datos.contenido 
                ? datos.contenido.map((seccion, index) => (
                  <Grid item xs={12} key={index}>
                    {seccion.parrafo && <Typography variant='subtitle1' color="text.secondary" gutterBottom py={3}>{seccion.parrafo}</Typography>}
                    { seccion.imagen && 
                      <Box sx={{ width: "auto", display: "flex", justifyContent: "center" }}>
                        <CardMedia
                          component="img"
                          title={datos.titulo}
                          alt={`Imagen ${index + 1}`}
                          sx={{ objectFit: 'cover', maxWidth: { xs: "100%", sm: "90%", md: "80%", lg: "70%" }, height: '100%' }}
                          src={seccion.imagen}
                        />
                      </Box>
                    }
                  </Grid>
                ))
                : "No hay contenido"
            }
              
              <Divider/>
            <Grid item xs={12} my={5}>
              <CardMedia
                component="img"
                alt='banner'
                width="100%"
                image='https://firebasestorage.googleapis.com/v0/b/corazon-huasteco-bfbcc.appspot.com/o/Derechos_autor%2Fhuejutla.jpg?alt=media&token=b316be25-b511-485d-ab03-45608276f258'
              />
              <Divider/>
            </Grid>
              

            {/* COMENTARIOS */}
            <Grid item xs={12}>
              <Typography variant='h4' component="p" mb={2}>
                Comentarios
              </Typography>
            </Grid>
            <Grid item xs={12}>
              {user ? 
                (<AgregarComentarios tematica={datos}/>) 
                : 
                (console.log("Inicia Sesión"))
              }
            </Grid>
            <Grid item xs={12}>
              {
                (proyectos.map(proyecto => {
                  return (
                    <Grid item xs={12} key={proyecto.id} sx={{ my:2}}>
                      <Card elevation={0} sx={{ display: 'flex', flexDirection: {xs: "row", sm: "row", md: "row"}, minHeight: {xs: 50, sm: 65, md:75, lg:85, xl:95}, borderRadius: 2 }}>
                        <CardMedia
                          component="img"
                          sx={{ maxWidth: {xs: 50, sm: 65, md:75, lg:85, xl:95}, maxHeight: {xs: 50, sm: 65, md:75, lg:85, xl:95}, objectFit: "cover", borderBottom: "3px solid", borderColor: "divider" }}
                          image={proyecto.data().imagen}
                          alt={proyecto.data().usuario}
                        />
                        <Box sx={{ display: 'flex', flexDirection: 'column', flexGrow: 1, borderLeft: "3px solid", borderColor: "divider" }}>
                          <CardContent sx={{ flex: '1 0 auto' }}>
                            <Typography variant="subtitle2">
                              {proyecto.data().comentario}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                              {proyecto.data().usuario}
                            </Typography>
                          </CardContent>
                          <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1, borderTop: "2px solid", borderColor: "divider" }}>
                              <Rating 
                                name="half-rating" 
                                value={proyecto.data().puntuacion}
                                readOnly
                              />
                          </Box>
                        </Box>
                      </Card>
                      
                    </Grid>
                  )
                })) 
              }  
            </Grid>
            


          </Grid>





          {/* COLUMNA DERECHA */}
          <Grid item xs={12} sm={12} md={4}>
            <Paper sx={{ position: "sticky", top:130}} elevation={1}>
              <Box sx={{ m:1, p:2}} elevation={6}>
                  <CardMedia
                    component="img"
                    alt='banner'
                    width="100%"
                    image='https://firebasestorage.googleapis.com/v0/b/corazon-huasteco-bfbcc.appspot.com/o/Derechos_autor%2FDerechos1.png?alt=media&token=097b75a8-6720-4e18-a891-884396b04c86'
                    />
              </Box>
              <Box sx={{m:1, p:2}} elevation={6}>
                <IconButton aria-label='ir a facebbok' color='primary' component={Link} to="https://web.facebook.com/" target='_BLANK'>
                  <Facebook fontSize='large'/>
                </IconButton>
                <IconButton aria-label='ir a twitter' color='primary' component={Link} to="https://twitter.com/" target="_BLANK">
                  <Twitter fontSize='large'/>
                </IconButton>
                <IconButton aria-label='ir a instagram' color='primary' component={Link} to="https://www.instagram.com" target="_BLANK">
                  <Instagram fontSize='large'/>
                </IconButton>
                <IconButton aria-label='ir a youtube' color='primary' component={Link} to="https://www.youtube.com/" target="_BLANK">
                  <YouTube fontSize='large'/>
                </IconButton>
                <IconButton aria-label='ir al blog web' color='primary' component={Link} to="https://www.google.com/" target="_BLANK">
                  <Web fontSize='large'/>
                </IconButton>
                
              </Box>
              <Box sx={{ m:1, p:2}} elevation={6}>
                <Typography>
                  Articulos de interes
                </Typography>
                <Grid container spacing={1}>
                  <Grid item> {/* VESTIMENTA */}
                    <ItemsListCard2
                      titulo={datos.titulo}
                      img={datos.portada}
                      ancla={`../tematicas/${params.id}`}
                    />
                  </Grid>
                </Grid>
              </Box>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}


const setIcon = (tematica) => {
  switch (tematica) {
    case 'Vestimenta':
      return <Checkroom />;
    case 'Danza':
      return <EmojiPeople />;
    case 'Gastronomia':
      return <RestaurantRounded />;
    case 'Musica':
      return <MusicNoteRounded />;
    case 'Tradiciones':
      return <FlagRounded />;
    default:
      return <ArticleRounded />;
  }
};