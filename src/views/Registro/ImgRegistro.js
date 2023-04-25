import { CardMedia } from '@mui/material'
import React from 'react'
import imgSierra from "../../assets/img/inicio/imgSierra.jpg"

export const ImgRegistro = () => {
  return (
    <CardMedia
        component="img"
        image={imgSierra}
        alt="Sierra"
        sx={{height: "100vh"}}
    />
  )
}
