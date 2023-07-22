import {useScrollTrigger, Slide, Box, useTheme} from '@mui/material';
import React from 'react';
import logo1 from '../../../assets/img/app/imgLogoHuejutla.png'
import logo2 from '../../../assets/img/app/imgLogoHuejutlaLight.png'
import logo3 from '../../../assets/img/app/imgLogoHuejutlaDark.png'

// esto permite ocoultar el nav al hacer scroll
export function HideOnScroll(props) {
    const { children, window } = props;
    // Note that you normally won't need to set the window ref as useScrollTrigger
    // will default to window.
    // This is only being set here because the demo is in an iframe.
    const trigger = useScrollTrigger({
      target: window ? window() : undefined,
    });
  
    return (
      <Slide appear={false} direction="down" in={!trigger}>
        {children}
      </Slide>
    );
}

export function ElevationScroll(props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

export function AnimatedIcon(props){

  const {isDarkMode} = props;
  

  const styles = `
  .contenedor-animate{
    position: relative;
  }

  .moneda-animate{
      background: transparent;
      width: 60px;
      height: 60px;
      position: relative;
      border-radius: 20%;
      // animation: salto-animate 0.8s infinite;
  }

  .moneda-animate::before{
      content: '';
      display: inline-block;
      background: transparent;
      width: 60px;
      height: 60px;
      position: absolute;
      border-radius: 20%;
  }

  .moneda-animate::after{
      content: '';
      display: inline-block;
      background-image: url(${isDarkMode === 'dark' ? logo3 : logo2});
      width: 60px;
      height: 60px;
      position: absolute;
      background-size: 55px 55px;
      background-repeat: no-repeat;
      
  }

  @keyframes salto-animate {
      0%, 100% {top: 0;}
      30% {top:-3px;}
  }
  `

  return(
    <Box sx={{styles}}>
      <Box className="contenedor-animate">
        <Box className="moneda-animate">
        </Box>
      </Box>
    </Box>
  )
}