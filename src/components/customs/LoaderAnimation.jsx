import React from 'react'
import { Box, useTheme } from '@mui/material'
import { AnimatedIcon } from '../../components/Layout/NavBar/componentsNavBar'

export const LoaderAnimation = () => {
  const theme = useTheme();
  
  const styles = `
    .container{
      width: 100%;
      height: 80vh;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
    }

    .loader-text {
      font-weight: 500;
      font-family: sans-serif;
      font-size: 30px;
      animation: l1 1s linear infinite alternate;
      color: ${theme.palette.primary.light};
      font-size: 45px;
    }
    .loader-text:before {
      content:"Cargando...";
      font-weight: 700;
    }
    @keyframes l1 {to{opacity: 0}}
  `;

  return (
    <Box sx={{background: theme.palette.background.paper}}>
      <Box sx={{styles}}>
        <Box className="container" >
          <AnimatedIcon animation/>
          <Box className='loader-text'></Box>
        </Box>
      </Box>
    </Box>
  )
}
