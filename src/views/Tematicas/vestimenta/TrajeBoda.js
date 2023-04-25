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
import tipica from "../../../assets/img/vestimenta/tipica2.jpg"
import boda from "../../../assets/img/vestimenta/boda3.jpg"

export const TrajeBoda = () => {
  return (
    <WrapperSingleRoute>      
    {/* BREADCRUMBS */}
    <Grid 
      container
      rowSpacing={1}
      columnSpacing={{ xs: 1, sm: 3, md: 5 }}  
    >
      <Grid item xs={12}>
        <Bread migas={[{miga: "INICIO", ruta: "/inicio"},{miga: "TEMATICAS", ruta: "/tematicas"},{miga: "VESTIMENTA", ruta: "/tematicas/vestimenta"},{miga: "BODA", ruta: "/tematicas/vestimenta/boda"}]}/>
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
              image={boda}
            />
          </Card>
        </Paper>
        {/* ELEMENTO 2 TEXTO */}
        {/* <Paper sx={{m:1, p:3, bgcolor: "background.default"}}  elevation={1}>  */}
        <Paper sx={{m:1, p:3, bgcolor: "background.paper"}}  elevation={1}> 
          <Typography variant='body1' component="p" mb={2} color="text.secondary">
          Las bodas indígenas son ceremonias cargadas de rituales y simbolismos, de deseos de armonía y felicidad que generan momentos sumamente espirituales y muy especiales. 
          </Typography>
          <Typography variant='body1' component="p" mb={2} color="text.secondary">
          El traje regional estilizado de boda indígena es un vestuario muy tradicional utilizado para rituales y ceremonias en los matrimonios indígenas. Este acontecimiento hoy en día carece de su valor cultural debido a que estas celebraciones se han dejado de participar y se van olvidando con el tiempo.        
          </Typography>
          <Typography variant='body1' component="p" mb={2} color="text.secondary">
          Es curioso observar a las mujeres con un bello tocado de trenzas con listones de colores que se anudan en su cabeza formando un bello rodete, sobre él se aprecia una corona de flor de Cempoalxóchitl enmarcada con el esplendor del color amarillo del cempoal, ataviada de palmilla verde representado el plumaje de las aves de la región con sus xuchiles de aves que surgen de la misma, su corona representa un símbolo de dignidad, como muestra de poder y supremacía. También de ella surge y cae sobre su espalda una mentilla de manta trigueña bordada con flores en diversos colores, que las manos finas de las mujeres huastecas bordaron y dieron vida a esta mantilla que embellece este traje de novia, cultural por excelencia.
          </Typography>
          <Typography variant='body1' component="p" mb={2} color="text.secondary">
          También como un detalle femenino porta aretes, collar y brazaletes con incrustaciones de bordado y bisutería indígena, realzando su belleza de mujer hidalguense que cubre su cuerpo con un vistoso Corsette bordado a mano por mujeres artesanas, que de hilo en hilo dieron vida a vistosas flores de colores tradicionales. 
          </Typography>
          <Typography variant='body1' component="p" mb={2} color="text.secondary">
          Sobre esta cae una falda de encaje blanca que hace que este traje de novia indígena, luzca radiante, resultando la originalidad de la prenda de una costumbre y tradición muy propia de nuestra cultura.
          </Typography>
          <Typography variant='body1' component="p" mb={2} color="text.secondary">
          Sobre su mano derecha sostiene un maxochitl que en lengua náhuatl significa ramo de flores o flor de mano ataviado de listones de los 7 colores de arcoíris, simbolizando alegría y paz para todos, del mismo surge los instrumentos de la música tradicional para ejecutar los guapangos, sones y danzas para acompañar a la novia huasteca en camino a su gran celebración.
          </Typography>
          <Typography variant='body1' component="p" mb={2} color="text.secondary">
          Su bastón de mando elaborado con mecapales ataviado de flores de Cempoalxochitl que significa 20 flores. Flor representativa de la fiesta más grande de los huastecos “El Xantolo” embelleciendo este maxochitl como un elemento significativo para la novia huasteca.
          </Typography>
          <Typography variant='body1' component="p" mb={2} color="text.secondary">
          En su mano izquierda sostiene un ramo de flores de Cempoalxochitl, con incrustaciones de palmilla verde, de él surgen listones de colores que simbolizan el colorido alegre de la región huasteca, ramo que toda novia porta por costumbre en ese día especial de contraer nupcias y dentro del ritual de boda indígena es parte del complemento que adorna este bello traje estilizado inspirado en el ritual de la boda indígena. 
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
                titulo='Traje regional'
                // descripcion='La mujer del barrio de chililico es la única en toda la región que usa falda amplia y larga hasta el tobillo, no lleva olanes solo alforzas y encaje en la parte inferior. Este tipo de falda no la usa suelta, si no que la enredan alrededor de la cintura formando una falda de medio paso, viste blusa bordada en hilo pasado o hilván y por lo general va descalza'
                img={tipica}
                ancla="../vestimenta/regional"
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
                titulo='Traje regional'
                // descripcion='La mujer del barrio de chililico es la única en toda la región que usa falda amplia y larga hasta el tobillo, no lleva olanes solo alforzas y encaje en la parte inferior. Este tipo de falda no la usa suelta, si no que la enredan alrededor de la cintura formando una falda de medio paso, viste blusa bordada en hilo pasado o hilván y por lo general va descalza'
                img={tipica}
                ancla="../vestimenta/regional"
              />
            </Grid>
            {/* <Grid item> VESTIMENTA */}
              {/* <ItemsListCard2
                titulo='Traje regional'
                // descripcion='La mujer del barrio de chililico es la única en toda la región que usa falda amplia y larga hasta el tobillo, no lleva olanes solo alforzas y encaje en la parte inferior. Este tipo de falda no la usa suelta, si no que la enredan alrededor de la cintura formando una falda de medio paso, viste blusa bordada en hilo pasado o hilván y por lo general va descalza'
                img={tipica}
                ancla="../vestimenta/regional"
              /> */}
            {/* </Grid> */}
          </Grid>
        </Paper>
      </Grid>
      
    </Grid>

    
  </WrapperSingleRoute>
  
  )
}
