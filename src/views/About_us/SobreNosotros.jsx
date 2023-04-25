import React, { useEffect }   from 'react'
import { Card, CardActionArea, CardMedia, Grid, Box, Typography } from '@mui/material';
import { WrapperSingleRoute } from '../../components/customs/WrapperSingleRoute';
import { Bread }              from '../../components/customs/Bread';
import { contadorVisitas }    from '../../utils/fnCountStatus';
import imgAus                 from "../../assets/img/sobre-nosotros/imgSobreNosotros.jpg"
import imgMural               from "../../assets/img/inicio/imgMural.jpg"


export const SobreNosotros = () => {

  useEffect(() => {
    contadorVisitas("sobre-nosotros");
  }, [])

  return (
    <WrapperSingleRoute>
      {/* Breadcrumbs */}
      <Bread migas={[{miga: "INICIO", ruta: "/inicio"},{miga: "SOBRE NOSOTROS", ruta: "/sobre-nosotros"}]}/>

      {/* TITULO */}
      <Grid container spacing={1}>
        <Grid item xs sx={{p:3}}> 
          <Typography variant="h4" color="initial" sx={{textAlign: "center"}}>Sobre Nosotros</Typography>
        </Grid>
      </Grid>{/*FIN DE TITULO*/}

      {/* MISION */}
      <Grid container spacing={1}>
        {/* IMAGEN */}
        <Grid item xs={12} md={6} order={{md:1, sm:2, xs:2}}>
          <Card
            sx={{
              width: "100%",
              bgcolor: "background.paper"
            }}
          >
            <CardActionArea>
              <CardMedia
                component="img"
                height={"100%"}
                image={imgAus}
                alt="sobre-nosotros"
              />
            </CardActionArea>
          </Card>   
        </Grid>{/*FIN DE IMAGEN */}
        
        {/* TEXTO DERECHA */}
        <Grid item xs={12} md={6} order={{md:2, sm:1, xs:1}}>
          <Box sx={{p:3, height: "100%", display: "flex", justifyContent: "center", flexFlow: "column wrap"}}>
            <Typography variant="h4" color="text.primary">
              Misión: 
            </Typography>
            <Typography variant="subtitle1" color="text.secondary">
              Somos una empresa que promueve la cultura a traves de la difusión y fomento de la enseña que impulsen la libre expresión cultural, estimulando los trabajos de creación, investigación, cientificos, literarios y artisticos
            </Typography>
          </Box>
        </Grid>{/*FIN DE TEXTO DERECHA */}        
      </Grid>{/*FIN DE MISION */}


      {/* VISION */}
      <Grid container spacing={1}>
        {/* TEXTO IZQUIERDA */}
        <Grid item xs={12} md={6}>
          <Box sx={{p:3, height: "100%", display: "flex", justifyContent: "center", flexFlow: "column wrap"}}>
            <Typography variant="h4" color="text.primary">
              Visión: 
            </Typography>
            <Typography variant="subtitle1" color="text.secondary">
              Ser una empresa importante en el ambito cultural del municipio de Huejutla de Reyes Hidalgo para proyectar a nivel nacional e internacional la cultura de esta región.
            </Typography>
          </Box>
        </Grid>{/*FIN DE TEXTO IZQUIERDA */}    

        {/* IMAGEN */}
        <Grid item xs={12} md={6}>
          <Card
            sx={{
              width: "100%",
              bgcolor: "background.paper"
            }}
          >
            <CardActionArea>
              <CardMedia
                component="img"
                height={"100%"}
                image={imgMural}
                alt="sobre-nosotros"
              />
            </CardActionArea>
          </Card>   
        </Grid>{/*FIN DE IMAGEN */}
      </Grid>{/*FIN DE VISION*/}

      {/* VALORES */}
      <Grid container spacing={1}>
        <Grid item xs={12}>
            <Typography variant="h4" color="text.primary" textAlign="center">
              Valores
            </Typography>
        </Grid>
      </Grid>{/*FIN DE VALORES*/}
    </WrapperSingleRoute>
  )
}
