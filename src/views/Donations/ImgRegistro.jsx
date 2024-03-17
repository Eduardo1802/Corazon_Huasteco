import { CardMedia, Container } from '@mui/material'
import React from 'react'
import imgSierra from "../../assets/img/inicio/imgSierra.webp"

export const ImgRegistro = () => {
  return (
    <Container maxWidth="sm">
      <CardMedia
        component="img"
        image={imgSierra}
        alt="Sierra"
        sx={{height: "100vh"}}
      />
    </Container>
  )
}