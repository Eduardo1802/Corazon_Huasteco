import React                            from 'react'
import { Box, Grid, Typography }        from '@mui/material';
import { Facebook, Twitter, Instagram } from '@mui/icons-material';
import { LinkStyled }                   from './footer.elements'

export const Footer = () => {
  return (
    <>    
        <Box sx={{bgcolor: "primary.main", flexGrow:1, mt:5}}>
            <Grid container spacing={5}>
                {/* PRIMER COLUMNA */}
                <Grid item md={4} sm={6} xs={12}>
                    <Box ml={5}>
                        <Typography variant="h6" component="p" sx={{color:'background.paper', fontSize: 16}}>Categorias</Typography>
                        <Typography variant="body1" className="footer-menu">
                            <LinkStyled to="tematicas/vestimenta">Vestimenta</LinkStyled>
                            <LinkStyled to="tematicas/danza">Danza</LinkStyled>
                            <LinkStyled to="tematicas/gastronomia">Gastronomia</LinkStyled>
                            <LinkStyled to="tematicas/musica">Música</LinkStyled>
                            <LinkStyled to="tematicas/tradiciones">Tradiciones</LinkStyled>
                        </Typography>
                    </Box>
                </Grid>
                {/* SEGUNDA COLUMNA */}
                <Grid item md={4} sm={6} xs={12}>
                    <Box ml={5}>
                        <Typography variant="h6" component="p" sx={{color:'background.paper', fontSize: 16}}>Sobre nosotros</Typography>
                        <Typography variant='body1' className="footer-menu">
                            <LinkStyled to="sobre-nosotros">Nuestra historia</LinkStyled>
                            <LinkStyled to="sobre-nosotros">Misión, visión y valores</LinkStyled>
                            <LinkStyled to="sobre-nosotros">Carreras</LinkStyled>
                            <LinkStyled to="aviso-de-privacidad">Politicas de privacidad</LinkStyled>
                            <LinkStyled to="aviso-de-privacidad">Terminos del servicio</LinkStyled>            
                        </Typography>
                    </Box>
                </Grid>
                {/* TERCERA COLUMNA */}
                <Grid item md={4} sm={12} xs={12}>
                    <Box ml={5}>
                        <Typography variant="h6" component="p" sx={{color:'background.paper', fontSize: 16}}>Soporte</Typography>
                        <LinkStyled to="preguntas-frecuentes">Preguntas frecuentes</LinkStyled>
                        <LinkStyled to="#">Ayuda en linea</LinkStyled>
                        <LinkStyled to="#">Confianza y seguridad</LinkStyled>
                    </Box>
                </Grid>
            </Grid>
        </Box>
        {/* REDES SOCIALES */}
        <Box sx={{display: "flex", flexFlow: "column wrap", backgroundColor: 'primary.main', paddingTop: "1.8rem"}}> 
            <Typography variant="caption" sx={{color: 'background.paper', backgroundColor: 'primary.main', paddingBottom: "50px",  textAlign: "center", marginTop: "4rem"}}>
                Todos los derechos reservados &#169; 2023
                <Box sx={{display: "flex", justifyContent: "center", color: 'background.default'}}>
                    <Facebook fontSize='large' sx={{m:2}}/>
                    <Twitter fontSize='large' sx={{m:2}}/>
                    <Instagram fontSize='large' sx={{m:2}}/>
                </Box>
            </Typography>
        </Box>
    </>
  )
}
