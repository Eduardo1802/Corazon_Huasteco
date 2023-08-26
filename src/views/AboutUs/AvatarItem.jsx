import React from 'react'
import styled from '@emotion/styled'
import { Box, Tooltip, Typography, tooltipClasses, useMediaQuery } from '@mui/material'
import { Link } from 'react-router-dom'

export const AvatarItem = ({imagen, alt, firstColor, secondColor, enlace="#"}) => { 

  const isSmallScreen = useMediaQuery('(max-width:900px)');

  return (
    <Link to={enlace} target='_BLANK'>
      <BootstrapTooltip title={<Typography variant='subtitle1'>{alt}</Typography>} arrow placement="bottom" firstColor={firstColor} secondColor={secondColor}>
        <Avatar firstColor={firstColor} secondColor={secondColor} isSmallScreen={isSmallScreen}>
          <img src={imagen} alt={alt}/>
        </Avatar>
      </BootstrapTooltip>
    </Link>
  )
}

const BootstrapTooltip = styled(({ className, ...props }) => (
  <Tooltip {...props} arrow classes={{ popper: className }} />
))(({ theme, firstColor, secondColor }) => ({
  [`& .${tooltipClasses.arrow}`]: {
    color: firstColor ? firstColor : theme.palette.primary.dark,
  },
  [`& .${tooltipClasses.tooltip}`]: {
    background: `linear-gradient(to bottom, ${ firstColor ? firstColor : theme.palette.primary.dark}, ${ secondColor ? secondColor : theme.palette.primary.light})`,
  },
  
}));

export const Avatar = styled(Box)(({ theme, firstColor, secondColor, isSmallScreen }) => ({
  background: `linear-gradient(to right, ${ firstColor ? firstColor : theme.palette.primary.dark}, ${ secondColor ? secondColor : theme.palette.primary.light})`,
  width:  isSmallScreen ? "100px" : "150px",
  height: isSmallScreen ? "100px" : "150px",
  borderRadius: "50%",
  overflow: "hidden",
  transition: "300ms ease",
  
  
  img : {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    objectPosition: "top",
    borderRadius: "inherit",
    userSelect: "none",
    pointerEvents: "none",
  },


  '&:hover': {
    cursor: "pointer",
    padding: "5px",
    transform: "rotate(10deg)",
  }
}))


