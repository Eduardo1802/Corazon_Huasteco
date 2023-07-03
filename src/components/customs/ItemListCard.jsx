import React    from 'react'
import { Card, CardActionArea, CardActions, CardContent, CardMedia, Paper, Typography } from '@mui/material'
import { Link } from 'react-router-dom'

export const ItemListCard = ({titulo='Titulo', descripcion="Desc", ancla, img="#", showContent=true, heightImg=270, widthImg, shoWActions=true }) => {
  return (
    <Paper 
        sx={{
            /* p:1 , */ m:1, /* bgcolor: "background.default",  */
            display: "flex", justifyContent: "center"
        }} 
        elevation={0}
    >
        <Card 
            sx={{ 
                width: {widthImg}, 
                transition: "0.2s", 
                "&:hover": { 
                    transform: "scale(1.05)"
                },
                // bgcolor: "background.paper"
            }}
        >
            <CardActionArea 
                component={Link} 
                to={ancla} 
                sx={{
                    color: "primary.main",
                    '&:hover':{
                    color: "primary.main"
                    }
                }} 
            >
                <CardMedia
                    component="img"
                    height={heightImg}
                    image={img}
                    alt={titulo}
                />

                {showContentText({showContent, titulo, descripcion})}
                
            </CardActionArea>
            {
                shoWActions === true ? 
                <CardActions>
                
                </CardActions>
                :
                <></>
            }
            
        </Card>
    </Paper>
  )
}


function showContentText({showContent, titulo, descripcion}){
    if(showContent){
        return(
            <CardContent>
                <Typography gutterBottom variant="h5" component="p" color="text.primary">
                    {titulo}
                </Typography>
                <Typography variant="body1" color="text.secondary">
                    {descripcion}
                </Typography>
            </CardContent>
        )
    }
    else{
        return(
            <></>
        )
    }
}