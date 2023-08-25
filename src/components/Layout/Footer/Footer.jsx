import React                                from 'react'
import { Box, CardMedia, Container, Grid, MenuItem, TextField, Typography, useTheme }  from '@mui/material';
import { LinkStyled }                       from './footer.elements'
import imgLogo1                             from "../../../assets/img/app/imgLogoHuejutlaLight.png"
import UseAnimations                        from 'react-useanimations';
import facebook                             from "react-useanimations/lib/facebook";
import twitter                              from "react-useanimations/lib/twitter";
import instagram                            from "react-useanimations/lib/instagram";
import { Link }                             from 'react-router-dom';

export const Footer = () => {

    const theme = useTheme();

    const LANGUAGES = [
        {
          code: 'en-US',
          name: 'English',
        },
        {
          code: 'es-ES',
          name: 'Español',
        },
      ];

  return (
    <Box bgcolor="primary.main" pt={4}>
        <Container>
            <Grid container spacing={2} pb={3}>
                {/* REDES */}
                <Grid item xs={12} sm={4} md={3} order={{xs: 6, sm: 1, md: 1}} container alignItems="center">
                    <Grid container direction="column" justifyContent="center" spacing={2}>
                        <Grid item container direction="row" justifyContent={{xs: "center", sm: "flex-start", md: "flex-start"}} wrap='no-wrap'>
                            <Link to='https://es-la.facebook.com/' target='_BLANK' >
                                <UseAnimations
                                    animation={facebook}
                                    size={56} 
                                    strokeColor={theme.palette.background.default} 
                                />
                            </Link>
                            <Link to='https://twitter.com/' target='_BLANK' >
                                <UseAnimations
                                    animation={twitter}
                                    size={56} 
                                    strokeColor={theme.palette.background.default} 
                                />
                            </Link>
                            <Link to='https://www.instagram.com/' target='_BLANK'>
                                <UseAnimations
                                    animation={instagram}
                                    size={56} 
                                    strokeColor={theme.palette.background.default} 
                                />
                            </Link>
                        </Grid>
                        <Grid item container justifyContent={{xs: "center", sm: "flex-start", md: "flex-start"}}>
                            <Typography variant="body1" sx={{color: theme.palette.background.paper}}>
                                &#169; Corazón Huasteco 2023
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
                {/* ENLACES */}
                <Grid item xs={12} sm={4} md={3} order={{xs: 1, sm: 3, md: 2}} container direction="column" alignItems="flex-start">
                    <Typography variant="h6" component="p" sx={{ color: theme.palette.background.paper }}>
                        Categorias
                    </Typography>
                    <LinkStyled to="tematicas/vestimenta">Vestimenta</LinkStyled>
                    <LinkStyled to="tematicas/danza">Danza</LinkStyled>
                    <LinkStyled to="tematicas/gastronomia">Gastronomia</LinkStyled>
                    <LinkStyled to="tematicas/musica">Música</LinkStyled>
                    <LinkStyled to="tematicas/tradiciones">Tradiciones</LinkStyled>
                </Grid>
                <Grid item xs={12} sm={4} md={3} order={{xs: 2, sm: 4, md: 3}} container direction="column" alignItems="flex-start">
                    <Typography variant="h6" component="p" sx={{ color: theme.palette.background.paper }}>
                        Sobre Nosotros
                    </Typography>
                    <LinkStyled to="sobre-nosotros">Nuestra historia</LinkStyled>
                    <LinkStyled to="sobre-nosotros">Misión, visión y valores</LinkStyled>
                    <LinkStyled to="sobre-nosotros">Carreras</LinkStyled>
                    <LinkStyled to="aviso-de-privacidad">Politicas de privacidad</LinkStyled>
                    <LinkStyled to="aviso-de-privacidad">Terminos del servicio</LinkStyled>
                </Grid>
                <Grid item xs={12} sm={4} md={3} order={{xs: 3, sm: 5, md: 4}} container direction="column" alignItems="flex-start">
                    <Typography variant="h6" component="p" sx={{ color: theme.palette.background.paper }}>
                        Soporte
                    </Typography>
                    <LinkStyled to="preguntas-frecuentes">Preguntas frecuentes</LinkStyled>
                    <LinkStyled to="#">Ayuda en linea</LinkStyled>
                    <LinkStyled to="#">Confianza y seguridad</LinkStyled>
                </Grid>
                {/* LENGUAJE */}
                <Grid item xs={12} sm={8} md={9} order={{xs: 4, sm: 2, md: 5}}>
                    <Typography variant="subtitle1" component="p" sx={{ color: theme.palette.background.paper }}>
                        Idioma
                    </Typography>
                    <TextField
                        select
                        size='medium'
                        variant='standard'
                        SelectProps={{
                            native: false,
                        }}
                        sx={{
                            width: 150,
                            '& .MuiInputBase-root': {
                                color: 'background.paper', // Cambia el color del texto del TextField
                                bgcolor: 'primary.light', // Cambia el color de fondo del TextField
                            },
                        }}
                    >
                        {LANGUAGES.map((language) => (
                            <MenuItem value={language.code} key={language.code}>
                                {language.name}
                            </MenuItem>
                        ))}
                    </TextField>
                </Grid>
                {/* LOGO */}
                <Grid item xs={12} sm={12} md={3} order={{xs: 5, sm: 6, md: 6}} container direction="row" justifyContent={{xs:"center", sm: "flex-end", md:"flex-start"}}>
                    <CardMedia
                        sx={{
                            // mt: {xs: 10, sm: 5, md: 10}, 
                            width: 90,
                            bgcolor: "transparent",
                        }}
                        component="img"
                        height={90}
                        image={imgLogo1}
                        alt="icono"
                    />
                </Grid>
            </Grid>
        </Container>
    </Box>
  );
}
