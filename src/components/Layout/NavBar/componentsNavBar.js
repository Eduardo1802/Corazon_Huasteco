import {useScrollTrigger, Slide, Box} from '@mui/material';
import logo from '../../../assets/img/app/imgLogoHuejutla.png'

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

export function AnimatedIcon(){
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
      animation: salto-animate 0.8s infinite;
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
      background-image: url(${logo});
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