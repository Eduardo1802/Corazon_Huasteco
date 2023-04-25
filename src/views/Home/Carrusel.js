import { Box } from '@mui/material'
import { Slideshow, Slide, TextoSlide} from "./Slideshow"
import React from 'react'
import img1 from "./../../assets/img/inicio/Foto-centro.jpg"
import img2 from "./../../assets/img/inicio/catedral.jpg"
import img3 from "./../../assets/img/inicio/imgMural.jpg"

export const Carrusel = () => {
  return (
    <Box component={"main"} sx={{        
        width: "100%",
        overflow: "hidden",
        borderRadius: "10px"
    }}>
        <Slideshow controles={true} autoplay={true} /*velocidad='500' intervalo='3000'*/>
            <Slide>
                <a target='_BLANK' rel='noreferrer' href='https://corazon-huasteco.com/'>
                    <img src={img1} alt='imagen1' />
                </a>
                <TextoSlide>
                    <p>Huejutla Centro</p>
                </TextoSlide>
            </Slide>

            <Slide>
                <a target='_BLANK' rel='noreferrer' href='https://corazon-huasteco.com/'>
                    <img src={img2} alt='imagen2' />
                </a>
                <TextoSlide>
                    <p>Catedral de Huejutla</p>
                </TextoSlide>
            </Slide>

            <Slide>
                <a target='_BLANK' rel='noreferrer' href='https://corazon-huasteco.com/'>
                    <img src={img3} alt='imagen3' />
                </a>
                <TextoSlide>
                    <p>Mural Emblematico</p>
                </TextoSlide>
            </Slide>

        </Slideshow>
    </Box>
  )
}
