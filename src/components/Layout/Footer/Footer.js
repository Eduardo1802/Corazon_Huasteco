import React                            from 'react'
import { Box, Grid, Typography, useTheme }        from '@mui/material';
import {  Twitter, Instagram } from '@mui/icons-material';
import {FacebookRounded} from '@mui/icons-material';
import { IconButtonStyled, LinkStyled }                   from './footer.elements'
import imgLogo1 from "../../../assets/img/app/imgLogoHuejutla.png"

export const Footer = () => {

    const theme = useTheme();

  return (
    <Box bgcolor="primary.main" pt={4}>
        {/* PRIMERA FILA */}
        <Grid container rowSpacing={1} columnSpacing={1}>
            <Grid item md={4} sm={6} xs={12}>
                <Box sx={{ml: {md:10, sm:5, xs:8}, mb:3}} >
                    <Typography
                        variant="h6"
                        component="p"
                        sx={{ color: theme.palette.background.paper }}
                    >
                        Categorias
                    </Typography>
                    <Typography variant="body1" className="footer-menu">
                        <LinkStyled to="tematicas/vestimenta">Vestimenta</LinkStyled>
                        <LinkStyled to="tematicas/danza">Danza</LinkStyled>
                        <LinkStyled to="tematicas/gastronomia">Gastronomia</LinkStyled>
                        <LinkStyled to="tematicas/musica">Música</LinkStyled>
                        <LinkStyled to="tematicas/tradiciones">Tradiciones</LinkStyled>
                    </Typography>
                </Box>
            </Grid>
            <Grid item md={4} sm={6} xs={12}>
                <Box sx={{ml: {md:10, sm:5, xs:8}, mb:3}} >
                    <Typography 
                        variant="h6" 
                        component="p" 
                        sx={{color: theme.palette.background.paper}}
                    >
                        Sobre Nosotros
                    </Typography>
                    <Typography variant='body1' className="footer-menu">
                        <LinkStyled to="sobre-nosotros">Nuestra historia</LinkStyled>
                        <LinkStyled to="sobre-nosotros">Misión, visión y valores</LinkStyled>
                        <LinkStyled to="sobre-nosotros">Carreras</LinkStyled>
                        <LinkStyled to="aviso-de-privacidad">Politicas de privacidad</LinkStyled>
                        <LinkStyled to="aviso-de-privacidad">Terminos del servicio</LinkStyled>
                    </Typography>
                </Box>
            </Grid>
            <Grid item md={4} sm={6} xs={12}>
                <Box sx={{ml: {md:10, sm:5, xs:8}, mb:3}} >
                    <Typography 
                        variant="h6" 
                        component="p" 
                        sx={{color: theme.palette.background.paper}}
                    >
                        Soporte
                    </Typography>
                    <LinkStyled to="preguntas-frecuentes">Preguntas frecuentes</LinkStyled>
                    <LinkStyled to="#">Ayuda en linea</LinkStyled>
                    <LinkStyled to="#">Confianza y seguridad</LinkStyled>
                </Box>
            </Grid>
        </Grid>

        {/* SEGUNDA FILA */}
        <Grid container rowSpacing={1} columnSpacing={1}>
            <Grid item md={6} sm={6} xs={12} order={{md: 1, sm:1, xs:2}} mb={3}>
                <Box sx={{display: "flex", height: "100%", flexDirection: "column", justifyContent: "center", alignItems: "center"}}>
                    <Box sx={{ display: "flex", justifyContent: "center" }}>
                        <img src={imgLogo1} alt="logo" width="100vw" />
                    </Box>
                        
                    <Typography variant="body1" sx={{color: theme.palette.background.paper}}>
                        Todos los derechos reservados &#169; 2023
                    </Typography>
                </Box>
            </Grid>
            <Grid item md={6} sm={6} xs={12} order={{md: 2, sm:2, xs:1}} mb={3}>
                <Box sx={{display: "flex", height: "100%", alignItems: "center", justifyContent: "center", flexFlow: "column wrap"}}>
                    <Box>
                        <IconButtonStyled component='a' href='https://es-la.facebook.com/' target='_BLANK' aria-label="facebook" sx={{margin: "0 2", color: "white"}}>
                            <FacebookRounded fontSize='large'/>
                        </IconButtonStyled>
                        <IconButtonStyled component='a' href='https://twitter.com/' target='_BLANK' aria-label="facebook" sx={{margin: "0 2", color: "white"}}>
                            <Twitter fontSize='large'/>
                        </IconButtonStyled>
                        <IconButtonStyled component='a' href='https://www.instagram.com/' target='_BLANK' aria-label="facebook" sx={{margin: "0 2", color: "white"}}>
                            <Instagram fontSize='large'/>
                        </IconButtonStyled>
                    </Box>
                    <Typography variant="body1" sx={{color: theme.palette.background.paper}}>
                        Redes de contacto
                    </Typography>
                </Box>
            </Grid>
        </Grid>
    </Box>
  );
}
