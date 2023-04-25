import React from 'react'
import { Box, Breadcrumbs, Typography } from '@mui/material'
import { Link } from 'react-router-dom'

export const Bread = (props) => {
    const { migas } = props

  return (
    <Box sx={{p: 2}}>
        <Breadcrumbs aria-label="breadcrumb" separator="/">
            {migas.map((item) => (
                <Typography key={item.ruta} component={Link} to={`${item.ruta}`} sx={{color: "primary.main", textDecoration: "none", '&:hover':{color: "secondary.main"}}}>
                    {item.miga}
                </Typography>
            ))}
        </Breadcrumbs>
    </Box>
  )
}
