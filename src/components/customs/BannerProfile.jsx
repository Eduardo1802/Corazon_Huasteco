import styled from '@emotion/styled';
import { Grid } from '@mui/material';
import React from 'react'
import banner from '../../assets/img/perfil/finally.jpg'

export const BannerProfile = () => {
  return (
    <FiltroColor>
        <img
            src={banner}
            alt="Mi imagen"
            style={{
            height: "20vh",
            width: "100%",
            objectFit: "cover",
            }}
        />
    </FiltroColor>
  )
}


const FiltroColor = styled(Grid)(({ theme }) => ({
    position: "relative",
    "&::after": {
      content: '""',
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      backgroundColor: theme.palette.primary.dark,
      mixBlendMode: "color",
      opacity: 1,
    },
  }));
  