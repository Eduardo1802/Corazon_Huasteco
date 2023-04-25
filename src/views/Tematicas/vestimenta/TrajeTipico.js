import React from 'react'
import { Typography, Grid, Paper, CardMedia, Card, IconButton} from '@mui/material'
import { ItemsListCard2 } from '../../../components/customs/ItemsListCard2'
//TODO LO DE ANALYTICS DE FIREBASE
// import { analytics } from '../App/firebase';
// import { perf } from '../App/firebase'
// import { logEvent } from 'firebase/analytics';
// import { trace } from 'firebase/performance'

import { Facebook, Instagram, Twitter, Web, YouTube } from '@mui/icons-material';
import { WrapperSingleRoute } from '../../../components/customs/WrapperSingleRoute';
import { Bread } from '../../../components/customs/Bread';

// IMAGENES
import tipica from "../../../assets/img/vestimenta/tipica.jpg"
import boda from "../../../assets/img/vestimenta/boda.jpg"


export const TrajeTipico = () => {
  return (
    <WrapperSingleRoute>      
      {/* BREADCRUMBS */}
      <Grid 
        container
        rowSpacing={1}
        columnSpacing={{ xs: 1, sm: 3, md: 5 }}  
      >
        <Grid item xs={12}>
          <Bread migas={[{miga: "INICIO", ruta: "/inicio"},{miga: "TEMATICAS", ruta: "/tematicas"},{miga: "VESTIMENTA", ruta: "/tematicas/vestimenta"},{miga: "REGIONAL", ruta: "/tematicas/vestimenta/regional"}]}/>
        </Grid>
      </Grid>
      

      {/* CONTENEDOR DE LA VISTA */}
      <Grid 
        container
        spacing={1}
      >
        {/* COLUMNA IZQUIERDA */}
        <Grid item xs={12} sm={7} md={8}>
          {/* ELEMENTO 1 IMAGEN */}
          <Paper sx={{m:1, p:3}} elevation={3}> 
            <Card>
              <CardMedia
                component="img"
                alt='principal'
                height="500"
                image={tipica}
              />
            </Card>
          </Paper>
          {/* ELEMENTO 2 TEXTO */}
          {/* <Paper sx={{m:1, p:3, bgcolor: "background.default"}}  elevation={1}>  */}
          <Paper sx={{m:1, p:3, bgcolor: "background.paper"}}  elevation={1}> 
            <Typography variant='body1' component="p" mb={2} color="text.secondary">
             El municipio de Huejutla de Reyes Hidalgo, deriva su nombre de las raíces nahuatlhuexotl (sauces) y tlan lugar que significa lugar donde abundan los sauces.   
            </Typography>
            <Typography variant='body1' component="p" mb={2} color="text.secondary">
             Hablar de Huejutla, es hablar de costumbres, tradiciones, artesanías, gastronomía, música y danza, pero sobre todo en un carácter muy especial es hablar de su vestimenta típica, ya que todo es bello en sus diferentes bordados y significados y que todo lo hace interesante y cautivador.
            </Typography>
            <Typography variant='body1' component="p" mb={2} color="text.secondary">
            En su representación orgullosamente tiene a su barrio de Chililico lugar del chililitet (piedra de obsidiana) tierra de alfareros descendientes de aquellos trabajadores del barro que prepararon cerámica desde la época prehispánica que por su diseño y acabado es única en el mundo. 
            </Typography>
            <Typography variant='body1' component="p" mb={2} color="text.secondary">
            Es curioso observar a las mujeres de Chililico ataviadas con bellos listones de colores sobre su cabeza cruzados desde la parte de atrás y anudada al frente, luciendo collares de piedritas de diferentes tamaños y colores y aretes largos o arracadas luciendo en ocasiones especiales.
            </Typography>
            <Typography variant='body1' component="p" mb={2} color="text.secondary">
            La mujer del barrio de chililico es la única en toda la región que usa falda amplia y larga hasta el tobillo, no lleva olanes solo alforzas y encaje en la parte inferior. Este tipo de falda no la usa suelta, si no que la enredan alrededor de la cintura formando una falda de medio paso, viste blusa bordada en hilo pasado o hilván y por lo general va descalza, la falda la sueltan para acuclillarse al llegar al mercado o vender sus productos, metiéndola entre las 
            piernas por el frente y jamás la usan suelta. Algo característico es el reboso negro que utilizan sobre el hombro o enredado sobre la cabeza, tanto para protegerse del sol o del frío. 
            </Typography>
            <Typography variant='body1' component="p" mb={2} color="text.secondary">
            Complementa este traje regional su artesanía típica elaborada por sus propias mujeres de este lugar, una olla que almacena el agua para mitigar la sed, artesanías con simbolismos que pintan con pincel de pluma de pollo la iconografía de flores y aves, lenguaje ancestral de nuestras raíces. 
            </Typography>
          </Paper>
          {/* ELEMENTO 3 BANNER */}
          <Paper sx={{ m:1, p:2}} elevation={3}>
            <Card>
              <CardMedia
                component="img"
                alt='banner'
                height="140"
                image='https://huejutla.gob.mx/contenidos/huejutla/img/banner_2022_6_6_1654523235.7192.jpg'
              />
            </Card>
          </Paper>

          {/* ELEMENTO 4 ARTICULOS */}
          <Paper sx={{m:1, p:3}} elevation={3}> 
              <Typography variant='body1' component="p" mb={2}>
                Articulos relacionados
              </Typography>
            <Grid container spacing={1}>
              <Grid item> {/* VESTIMENTA */}
                <ItemsListCard2
                  titulo='Traje de Boda'
                  // descripcion='La mujer del barrio de chililico es la única en toda la región que usa falda amplia y larga hasta el tobillo, no lleva olanes solo alforzas y encaje en la parte inferior. Este tipo de falda no la usa suelta, si no que la enredan alrededor de la cintura formando una falda de medio paso, viste blusa bordada en hilo pasado o hilván y por lo general va descalza'
                  img={boda}
                  ancla="../vestimenta"
                />
              </Grid>
            </Grid>
          </Paper>

          {/* ELEMETNO 5 COMENTARIOS */}
          <Paper sx={{m:1, p:3}} elevation={3}> 
            <Typography variant='body1' component="p" mb={2}>
              Comentario
            </Typography>
          </Paper>
        </Grid>

        {/* COLUMNA DERECHA */}
        <Grid item xs={12} sm={5} md={4}>
          <Paper sx={{ m:1, p:2}} elevation={6}>
            <Card>
              <CardMedia
                component="img"
                alt='banner'
                height="140"
                image='https://huejutla.gob.mx/contenidos/huejutla/img/banner_2022_6_6_1654523235.7192.jpg'
              />
            </Card>
          </Paper>
          <Paper sx={{m:1, p:2}} elevation={6}>
            <IconButton color='primary'>
              <Facebook fontSize='large'/>
            </IconButton>
            <IconButton color='primary'>
              <Twitter fontSize='large'/>
            </IconButton>
            <IconButton color='primary'>
              <Instagram fontSize='large'/>
            </IconButton>
            <IconButton color='primary'>
              <YouTube fontSize='large'/>
            </IconButton>
            <IconButton color='primary'>
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
                  titulo='Traje de Boda'
                  // descripcion='La mujer del barrio de chililico es la única en toda la región que usa falda amplia y larga hasta el tobillo, no lleva olanes solo alforzas y encaje en la parte inferior. Este tipo de falda no la usa suelta, si no que la enredan alrededor de la cintura formando una falda de medio paso, viste blusa bordada en hilo pasado o hilván y por lo general va descalza'
                  img={boda}
                  ancla="../vestimenta/boda"
                />
              </Grid>
              {/* <Grid item> VESTIMENTA */}
                {/* <ItemsListCard2
                  titulo='Traje de Boda'
                  descripcion='La mujer del barrio de chililico es la única en toda la región que usa falda amplia y larga hasta el tobillo, no lleva olanes solo alforzas y encaje en la parte inferior. Este tipo de falda no la usa suelta, si no que la enredan alrededor de la cintura formando una falda de medio paso, viste blusa bordada en hilo pasado o hilván y por lo general va descalza'
                  img={boda}
                  ancla="../vestimenta/boda"
                /> */}
              {/* </Grid> */}
            </Grid>
          </Paper>
        </Grid>
        
      </Grid>

      
    </WrapperSingleRoute>
    
  )
}
