import { Box } from '@mui/material'
import { Slideshow, Slide, TextoSlide} from "./Slideshow"
import React from 'react'
import img1 from "../../../assets/img/inicio/catedral-01.webp"
import img2 from "../../../assets/img/inicio/Foto-centro-02.webp"
import img3 from "../../../assets/img/inicio/imgMural-01.webp"
import { Link } from 'react-router-dom'

export const Carrusel = () => {
  return (
    <Box component={"main"} sx={{        
        width: "100%",
        overflow: "hidden",
    }}>
        <Slideshow controles={true} autoplay={true} /*velocidad='500' intervalo='3000'*/>
            <Slide>                
                <Link to='/tematicas'>
                    <img src={img1} alt='img-carrusel-catedral-de-huejutla' />
                </Link>                
                <TextoSlide>
                    <p>Catedral de Huejutla</p>
                    <p><i>Imagen por Ceci Mandujano</i></p>
                </TextoSlide>
            </Slide>

            <Slide>
                <Link to='/sobre-nosotros'>
                    <img src={img2} alt='img-carrusel-huejutla-centro' />
                </Link>
                <TextoSlide>
                    <p>Huejutla Centro</p>
                    <p><i>Imagen por Nadhiezda Cruz</i></p>
                </TextoSlide>
            </Slide>

            <Slide>
                <Link to='/tienda'>
                    <img src={img3} alt='img-carrusel-mural-emblematico' />                    
                </Link>
                <TextoSlide>
                    <p>Mural Emblematico</p>
                    <p><i>Imagen por Salomón Hernández</i></p>
                </TextoSlide>
            </Slide>

        </Slideshow>
    </Box>
  )
}
