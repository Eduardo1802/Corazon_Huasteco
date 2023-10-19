import { Typography, Box, Button, Grid } from '@mui/material'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import React from 'react'
import { Link } from 'react-router-dom'
import screenError from "../../assets/img/app/screenError.svg"

export const Error = () => {
  return (
    <Box sx={{bgcolor: "background.paper"}}>
      <Grid container>
        <Grid item xs>
          <Grid container>
            <Grid item md={6} sm={12} xs={12} order={{md:1, sm:2, xs:2}}>
              <Box sx={{display: "flex", flexFlow: "column wrap", height: "100%", justifyContent: "center", p:3}}>
                <Box>
                  <Typography variant="h2" color="primary" textAlign='center'>¡Oops!</Typography>
                  <Typography variant="h6" color="primary" textAlign='center'>No hemos podido encontrar esta página</Typography>
                  {/* <br/> */}
                  <Box sx={{display: "flex", justifyContent: "center"}} mb={5}>
                    <Link to="/inicio" style={{textDecoration: "none"}}> 
                      <Button aria-label='vover a la página principal' variant="outlined" sx={{'&:hover':{bgcolor: "primary.main", color: "background.default"}}} startIcon={<ArrowBackIosIcon/>}>
                        Volver al inicio
                      </Button>
                    </Link>
                  </Box>
                </Box>
              </Box>
            </Grid>
            <Grid item md={6} sm={12} order={{md:2, sm:1, xs:1}}>
              <Box sx={{display: "flex", justifyContent: "center"}}>
                <Box
                  component="img"
                  src={screenError}
                  alt="img-error"
                  sx={{ width: {xs: "45%", sm: "45%", md: "55%"} }}
                />
              </Box>
            </Grid>
          </Grid>
        </Grid>
      </Grid>

        
    </Box>
  )
}
