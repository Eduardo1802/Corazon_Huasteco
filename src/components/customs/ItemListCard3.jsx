import React from 'react'
import { Card, CardActionArea, CardContent, CardMedia, Grid, Paper, Typography, Rating } from '@mui/material'

import { Link } from 'react-router-dom'

export const ItemListCard3 = ({titulo='Titulo', descripcion="Desc", puntuacion, img="#", showContent=true }) => {

  return (
    <Paper 
        sx={{
            p:1, m:1, bgcolor: "background.paper", 
            display: "flex", justifyContent: "center",
        }} 
        elevation={0}
    >
        <Card 
            sx={{ 
                // width: "150px", 
                transition: "0.2s", 
                "&:hover": { 
                    transform: "scale(1.05)"
                },
                bgcolor: "background.paper"
            }}
        >
            <CardActionArea 
                component={Link} 
                // to={ancla} 
                sx={{
                    color: "primary.main",
                    '&:hover':{
                    color: "primary.main"
                    }
                }} 
            >
                <Grid container spacing={0}>
                    <Grid item xs={5}>
                        <CardMedia
                            component="img"
                            image={img}
                            alt={titulo}
                            sx={{ width: "35%" }} 
                        />
                    </Grid>
                    <Grid item xs={7} sx={{flexGrow: 1 }}>
                        {showContentText({showContent, titulo, descripcion, puntuacion})}
                    </Grid>
                </Grid>
            </CardActionArea>
        </Card>
    </Paper>
  )
}


function showContentText({showContent, titulo, descripcion, puntuacion}){
    puntuacion = parseInt(puntuacion)
    // eslint-disable-next-line
    const textosPuntuacion = {
        0.5: "Inútil",
        1: "Inútil",
        1.5: "Pobre",
        2: "Pobre",
        2.5: "De Acuerdo",
        3: "De Acuerdo",
        3.5: "Bueno",
        4: "Bueno",
        4.5: "Excelente",
        5: "Excelente",
    };
    if(showContent){
        return(
            <CardContent>
                <Typography gutterBottom variant="h5" component="p">
                    {titulo}
                </Typography>
                <Typography variant="body1" color="text.secondary" style={{marginBottom: "5px"}}>
                    {descripcion}
                </Typography>
                <div style={{display: 'flex'}}>
                    <Rating 
                        name="half-rating" 
                        // defaultValue={2.5} 
                        // precision={1} 
                        value={puntuacion}
                        sx={{marginRight: "15px"}}
                    />

                    {/* {puntuacion in textosPuntuacion && <p>{textosPuntuacion[puntuacion]}</p>} */}
                    
                </div>
            </CardContent>
        )
    }
    else{
        return(
            <></>
        )
    }
}
