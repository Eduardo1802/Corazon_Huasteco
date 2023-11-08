import React,{ useEffect, useState } from 'react';
import { Typography, Grid, Paper, CardMedia, Card, IconButton, Box} from '@mui/material'
import { ItemsListCard2 } from '../../components/customs/ItemsListCard2'
import { ItemListCard3 } from '../../components/customs/ItemListCard3'
import { ArticleRounded, Facebook, HomeRounded, Instagram, LabelRounded, Twitter, Web, YouTube } from '@mui/icons-material';
import { Bread } from '../../components/customs/Bread';
import { useParams } from 'react-router-dom';
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
  
  return (
    <Box sx={{bgcolor: "background.default"}}>
      {/* Breadcrumbs */}
      <Bread migas={[{miga: "INICIO", ruta: "/inicio", icono: <HomeRounded/>},{miga: "TEMATICAS", ruta: "/tematicas", icono: <LabelRounded/>},{miga: `${tematicaMayusculas}`, ruta: `/tematicas/${tematicaMinusculas}`},{miga: `${tituloMayusculas}`, icono: <ArticleRounded/>}]}/>
      
      <Paper elevation={0}>
        <Grid container spacing={1}>
          {/* COLUMNA IZQUIERDA */}
          <Grid item xs={12} sm={7} md={8}>
            {/* ELEMENTO 1 IMAGEN */}
            
            <Paper sx={{m:1, p:1}} elevation={0}> 
            <Typography variant="h4" component="p" textAlign="center" color="primary">
              {datos.titulo}
            </Typography>
              <Card>
                <CardMedia
                  component="img"
                  alt='principal'
                  height="500"
                  image={datos.imagen}
                />
              </Card>
            </Paper>

            {/* ELEMENTO 2 TEXTO */}
            <Paper sx={{m:1, p:3}}  elevation={1}>
              <Typography gutterBottom variant="h4" component="p" textAlign="center" color="primary">
                  {datos.titulo}
              </Typography>
              <Typography variant='body1' component="p" mb={2} style={{textAlign: "justify"}}>
                {/* {datos.informacion} */}
                {datos.informacion && datos.informacion.split('.').map((sentence, index) => (
                  <React.Fragment key={index}>
                    {sentence.trim()}.
                    <br />
                  </React.Fragment>
                ))}

              </Typography>
              {/* <iframe src={datos.info} width="100%" height="500px" /> */}
            </Paper>

            {/* ELEMENTO 3 BANNER */}
            <Paper sx={{ m:1, p:2}} elevation={3}>
              <Card>
                <CardMedia
                  component="img"
                  alt='banner'
                  height="155"
                  image='https://firebasestorage.googleapis.com/v0/b/corazon-huasteco-bfbcc.appspot.com/o/Derechos_autor%2Fhuejutla.jpg?alt=media&token=b316be25-b511-485d-ab03-45608276f258'
                  />
              </Card>
            </Paper>

            {/* ELEMENTO 4 ARTICULOS */}
            <Paper sx={{m:1, p:3}} elevation={3}> 
                <Typography variant='body1' component="p" mb={2}>
                  Articulos relacionados
                </Typography>
              <Grid container spacing={1}>
                <Grid item> 
                  <ItemsListCard2
                    titulo={datos.titulo}
                    img={datos.imgPortada}
                    ancla={`../tematicas/${params.id}`}
                  />
                </Grid>
              </Grid>
            </Paper>

            {/* ELEMETNO 5 COMENTARIOS */}
            <Paper sx={{m:1, p:3}} elevation={3}> 
              <Typography variant='body1' component="p" mb={2}>
                Comentarios
              </Typography>
              {user ? (
                  <AgregarComentarios tematica={datos}/>
                  
              ) : (
                console.log("Inicia Sesión")
                )}
              {/* L I S T A R   C O M E N T A R I O S */}
              {
                (proyectos.map(proyecto => {
                  return (
                    // <Grid container>
                      <Grid item xs={12} sm={6} md={4} key={proyecto.id} sx={{minWidth:"100%"}}>
                        <ItemListCard3
                          key={proyecto.id}
                          id={proyecto.id}
                          titulo={proyecto.data().usuario}
                          descripcion={proyecto.data().comentario}
                          puntuacion={proyecto.data().puntuacion}
                          img={userImage}/>
                      </Grid>
                    // </Grid>
                  )
                })) 
              }    
              
              {/* T E R M I N A    L I S T A R    C O M E N T A R I O S */}
            </Paper>

          </Grid>

        {/* COLUMNA DERECHA */}
        <Grid item xs={12} sm={5} md={4}>
          <Box sx={{border: "3px solid red", position: "sticky", top:130}}>
            <Paper sx={{ m:1, p:2}} elevation={6}>
              <Card>
                <CardMedia
                  component="img"
                  alt='banner'
                  height="140"
                  image='https://firebasestorage.googleapis.com/v0/b/corazon-huasteco-bfbcc.appspot.com/o/Derechos_autor%2FDerechos1.png?alt=media&token=097b75a8-6720-4e18-a891-884396b04c86'
                  />
              </Card>
            </Paper>
            <Paper sx={{m:1, p:2}} elevation={6}>
              <IconButton aria-label='ir a facebbok' color='primary'>
                <Facebook fontSize='large'/>
              </IconButton>
              <IconButton aria-label='ir a twitter' color='primary'>
                <Twitter fontSize='large'/>
              </IconButton>
              <IconButton aria-label='ir a instagram' color='primary'>
                <Instagram fontSize='large'/>
              </IconButton>
              <IconButton aria-label='ir a youtube' color='primary'>
                <YouTube fontSize='large'/>
              </IconButton>
              <IconButton aria-label='ir al blog web' color='primary'>
                <Web fontSize='large'/>
              </IconButton>
              
            </Paper>
            <Paper sx={{ m:1, p:2}} elevation={6}>
              <Typography>
                Articulos de interes
              </Typography>
              <Grid container spacing={1}>
                <Grid item> {/* VESTIMENTA */}
                  <ItemsListCard2
                      titulo={datos.titulo}
                      img={datos.imgPortada}
                      ancla={`../tematicas/${params.id}`}
                  />
                </Grid>
              </Grid>
            </Paper>
          </Box>
        </Grid>

        </Grid>
      </Paper>
    </Box>
  )
}
