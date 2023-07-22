import { Box, useTheme } from '@mui/material'
import React from 'react'
import { useLocation } from 'react-router-dom'

export const DividerCurve = () => {

    const location = useLocation();
    const isHome = location.pathname === "/home";


    const theme = useTheme()

    const styles = `
        .curved {
        position: relative;
        background: ${isHome ? theme.palette.background.paper : theme.palette.background.paper};
        height: 2.5rem;
        border-bottom-left-radius: 50% 60%;
        border-bottom-right-radius: 50% 60%;
        }


        {/*estilos diferenntes para el separador*/}


        .spikes {
        position: relative;
        background: ${theme.palette.background.paper};
        height: 1rem;
        }
        
        .spikes::after {
        content: '';
        position: absolute;
        right: 0;
        left: -0%;
        top: 100%;
        z-index: 10;
        display: block;
        height: 50px;
        background-size: 50px 100%;
        background-image: linear-gradient(135deg, ${theme.palette.background.paper} 25%, transparent 25%), linear-gradient(225deg, ${theme.palette.background.paper} 25%, transparent 25%);
        background-position: 0 0;
        }
    `

  return (
    <Box sx={{bgcolor: "primary.main"}}>
        <style>{styles}</style>
        {/* <section className="spikes"></section> */}
        <section className="curved"></section>
    </Box>
  )
}
