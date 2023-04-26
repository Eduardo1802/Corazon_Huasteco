import React from 'react'

import { Box, Typography, useTheme } from '@mui/material'

export const LoaderAnimation = () => {

  const theme = useTheme();
  
  const styles = `
  .container {
    display: grid;
    place-content: center;
    height: 80vh;
  }

  .cargando {
      width: 120px;
      height: 30px;
      display: flex;
      flex-wrap: wrap;
      align-items: flex-end;
      justify-content: space-between;
      margin: 0 auto;
  }

  .texto-cargando {
      padding-top: 20px
  }

  .cargando span {
      font-size: 20px;
      text-transform: uppercase;
  }

  .pelotas {
      width: 25px;
      height: 25px;
      background-color: ${theme.palette.primary.main};
      animation: salto .5s alternate infinite;
      border-radius: 50%
  }

  .pelotas:nth-child(2) {
      animation-delay: .18s;
  }

  .pelotas:nth-child(3) {
      animation-delay: .37s;
  }

  @keyframes salto {
      from {
          transform: scaleX(1.25);
      }

      to {
          transform:
              translateY(-50px) scaleX(1);
      }
  }
  `;

  return (
    <Box sx={{styles}}>
      <Box className="container" >
          <Box className="cargando">
              <Box className="pelotas"></Box>
              <Box className="pelotas"></Box>
              <Box className="pelotas"></Box>
              <Typography component="span" className="texto-cargando" color="primary">Cargando... </Typography>
          </Box>
      </Box>
    </Box>
  )
}
