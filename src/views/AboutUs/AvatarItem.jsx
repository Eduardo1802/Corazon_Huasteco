import React from 'react'
import styled from '@emotion/styled'
import { Box, Tooltip, Typography, tooltipClasses, useMediaQuery } from '@mui/material'
import { Link } from 'react-router-dom'

export const AvatarItem = ({imagen, alt, firstcolor, secondcolor, enlace="#"}) => { 

  const issmallscreen = useMediaQuery('(max-width:900px)');

  return (
    <Link to={enlace} target='_BLANK'>
      <BootstrapTooltip title={<Typography variant='subtitle1'>{alt}</Typography>} arrow placement="bottom" firstcolor={firstcolor} secondcolor={secondcolor}>
        <Avatar firstcolor={firstcolor} secondcolor={secondcolor} issmallscreen={issmallscreen}>
          <img src={imagen} alt={alt}/>
        </Avatar>
      </BootstrapTooltip>
    </Link>
  )
}

const BootstrapTooltip = styled(({ className, ...props }) => (
  <Tooltip {...props} arrow classes={{ popper: className }} />
))(({ theme, firstcolor, secondcolor }) => ({
  [`& .${tooltipClasses.arrow}`]: {
    color: firstcolor ? firstcolor : theme.palette.primary.dark,
  },
  [`& .${tooltipClasses.tooltip}`]: {
    background: `linear-gradient(to bottom, ${ firstcolor ? firstcolor : theme.palette.primary.dark}, ${ secondcolor ? secondcolor : theme.palette.primary.light})`,
  },
  
}));

export const Avatar = styled(Box)(({ theme, firstcolor, secondcolor, issmallscreen }) => ({
  background: `linear-gradient(to right, ${ firstcolor ? firstcolor : theme.palette.primary.dark}, ${ secondcolor ? secondcolor : theme.palette.primary.light})`,
  width:  issmallscreen ? "100px" : "150px",
  height: issmallscreen ? "100px" : "150px",
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


