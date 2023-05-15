import { Box } from '@mui/material'
import { Slideshow, Slide, TextoSlide} from "./Slideshow"
import React from 'react'
import img1 from "../../../assets/img/inicio/Foto-centro-02.jpg"
import img2 from "../../../assets/img/inicio/catedral-02.jpg"
import img3 from "../../../assets/img/inicio/imgMural-02.jpg"
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
                    <img src={img1} alt='imagen1' />
                </Link>
                <TextoSlide>
                    <p>Huejutla Centro</p>
                </TextoSlide>
            </Slide>

            <Slide>                
                <Link to='/sobre-nosotros'>
                    <img src={img2} alt='imagen2' />
                </Link>                
                <TextoSlide>
                    <p>Catedral de Huejutla</p>
                </TextoSlide>
            </Slide>

            <Slide>
                <Link to='/tienda'>
                    <img src={img3} alt='imagen3' />                    
                </Link>
                <TextoSlide>
                    <p>Mural Emblematico</p>
                </TextoSlide>
            </Slide>

        </Slideshow>
    </Box>
  )
}
