import React from 'react'
import { Box, Breadcrumbs, Link as MuiLink, Paper, useTheme } from '@mui/material'
import { Link } from 'react-router-dom'
import MuiSvgIcon from '@mui/material/SvgIcon';

export const Bread = (props) => {
    const { migas } = props
    const theme = useTheme();

  return (
    <Box sx={{p: 2, bgcolor: "background.paper"}} > {/*se puede comentar el fondo, y componente para ajustar algunas cosas */}
        <Breadcrumbs aria-label="migas de pan del sitio web" separator="/">
        {migas.map((item, index) => (
            <MigaDePan
                migas={migas}
                index={index}
                key={index}
                icon={item.icono}
                miga={item.miga}
                ruta={item.ruta}
                theme={theme}
            />
        ))}
        </Breadcrumbs>
    </Box>
  )
}


const MigaDePan = ({ index, migas, icon, miga, ruta, theme }) => {
    const migaCapitalizada = capitalizeWords(miga)
    return (
      <MuiLink
        underline={index === migas.length - 1 ? 'none' : 'hover'}
        sx={{ display: 'flex', alignItems: 'center', paddingX: 1, marginX:-0.5, marginY: 0.2, background: `${theme.palette.primary.light}56`, borderRadius: 30, }}
        color='inherit'
        component={Link}
        to={ruta}
      >
        {icon && (
          <IconoMigaDePan sx={{ mr: 0.5 }} fontSize='inherit'>
            {icon}
          </IconoMigaDePan>
        )}
        {migaCapitalizada}
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


  function capitalizeWords(text) {
    const words = text.split(' ');
    const capitalizedWords = words.map((word) => {
      word = word.toLowerCase();
      return word.charAt(0).toUpperCase() + word.slice(1);
    });
    const capitalizedText = capitalizedWords.join(' ');
    return capitalizedText;
  }
  