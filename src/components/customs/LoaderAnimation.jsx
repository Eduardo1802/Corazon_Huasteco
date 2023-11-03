import React from 'react'

import { Box, Typography, useTheme } from '@mui/material'

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

    
    .loader {
        width: 65px;
        aspect-ratio: 1;
        position: relative;
      }
      .loader:before,
      .loader:after {
        content: "";
        position: absolute;
        border-radius: 50px;
        box-shadow: 0 0 0 3px inset ${theme.palette.primary.main};
        animation: l4 2.5s infinite;
      }
      .loader:after {
        animation-delay: -1.25s;
      }
      @keyframes l4 {
        0% {
          inset: 0 35px 35px 0;
        }
        12.5% {
          inset: 0 35px 0 0;
        }
        25% {
          inset: 35px 35px 0 0;
        }
        37.5% {
          inset: 35px 0 0 0;
        }
        50% {
          inset: 35px 0 0 35px;
        }
        62.5% {
          inset: 0 0 0 35px;
        }
        75% {
          inset: 0 0 35px 35px;
        }
        87.5% {
          inset: 0 0 35px 0;
        }
        100% {
          inset: 0 35px 35px 0;
        }
      }


    .loader-text {
        font-weight: 500;
        font-family: sans-serif;
        font-size: 30px;
        animation: l1 1s linear infinite alternate;
        color: ${theme.palette.primary.main};
        font-size: 45px;
    }
    .loader-text:before {
        content:"Cargando..."
    }
    @keyframes l1 {to{opacity: 0}}
  `;

  return (
    <Box sx={{background: theme.palette.background.paper}}>
        <Box sx={{styles}}>
        <Box className="container" >
            <Box className="loader"></Box>
            <Box className='loader-text'></Box>
        </Box>
        </Box>
    </Box>
  )
}
