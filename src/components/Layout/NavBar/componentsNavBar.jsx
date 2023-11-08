import {useScrollTrigger, Box} from '@mui/material';
import React from 'react';
import logoLight from '../../../assets/img/app/imgLogoHuejutlaLight.webp'

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

export function AnimatedIcon({animation}){
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
    animation: ${animation ? "salto-animate 0.8s infinite" : "none"}
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
    background-image: url(${logoLight});
    width: 60px;
    height: 60px;
    position: absolute;
    background-size: 55px 55px;
    background-repeat: no-repeat;
  }

  @keyframes salto-animate {
    0%, 100% {top: 0;}
    30% {top:-20px;}
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