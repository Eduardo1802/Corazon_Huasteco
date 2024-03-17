import { CardMedia } from '@mui/material'
import imgSierra from "../../assets/img/inicio/imgSierra.webp"

export const ImgRegistro = () => {
  return (
    <CardMedia
      component="img"
      image={imgSierra}
      alt="img-sierra"
      sx={{height: "100vh"}}
    />
  )
}