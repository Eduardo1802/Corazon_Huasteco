import React    from 'react'
import { Card, CardActionArea, CardActions, CardContent, CardMedia, Paper, Typography } from '@mui/material'
import { Link } from 'react-router-dom'

export const ItemsListCard2 = ({titulo='Titulo', ancla, img="#", showContent=true, heightImg=100, widthImg=100 }) => {
  return (
    <Paper 
        sx={{
            p:1, m:1, bgcolor: "background.paper",
            display: "flex", justifyContent: "center"
        }} 
        elevation={0}
    >
        <Card 
            sx={{ 
                width: "176px", 
                transition: "0.2s", 
                "&:hover": { 
                    transform: "scale(1.05)"
                },
                bgcolor: "background.paper",
                border:0.2,
                borderColor: "background.default"
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

                {showContentText({showContent, titulo})}
                
            </CardActionArea>
            <CardActions>
                
            </CardActions>
        </Card>
    </Paper>
  )
}


function showContentText({showContent, titulo}){
    if(showContent){
        return(
            <CardContent>
                <Typography gutterBottom variant="h5" component="p">
                    {titulo}
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