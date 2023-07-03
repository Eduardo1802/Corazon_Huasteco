import React from 'react'
import { Box, Breadcrumbs, Link as MuiLink } from '@mui/material'
import { Link } from 'react-router-dom'
import MuiSvgIcon from '@mui/material/SvgIcon';

export const Bread = (props) => {
    const { migas } = props

  return (
    <Box sx={{p: 2}}>
        <Breadcrumbs aria-label="breadcrumb" separator="/">
        {migas.map((item, index) => (
            <MigaDePan
                migas={migas}
                index={index}
                key={item.ruta}
                icon={item.icono}
                miga={item.miga}
                ruta={item.ruta}
            />
        ))}
        </Breadcrumbs>
    </Box>
  )
}


const MigaDePan = ({ index, migas, icon, miga, ruta }) => {
    return (
      <MuiLink
        underline={index === migas.length - 1 ? 'none' : 'hover'}
        sx={{ display: 'flex', alignItems: 'center' }}
        color='inherit'
        component={Link}
        to={ruta}
      >
        {icon && (
          <IconoMigaDePan sx={{ mr: 0.5 }} fontSize='inherit'>
            {icon}
          </IconoMigaDePan>
        )}
        {miga}
      </MuiLink>
    );
  };

  const IconoMigaDePan = ({ children, ...props }) => {

  
    return (
      <MuiSvgIcon {...props}>
        {children}
      </MuiSvgIcon>
    );
  };