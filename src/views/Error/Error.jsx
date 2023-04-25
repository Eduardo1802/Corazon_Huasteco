import { Typography, Box, Button, Grid } from '@mui/material'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import React from 'react'
import { Link } from 'react-router-dom'
import img404 from "../../assets/img/app/imageError.jpg"
import { WrapperSingleRoute } from '../../components/customs/WrapperSingleRoute';

export const Error = () => {
  return (
    <WrapperSingleRoute>
      <Grid container>
        <Grid item xs>
          <Grid container>
            <Grid item md={6} sm={12} order={{md:1, sm:2, xs:2}}>
              <Box sx={{display: "flex", flexFlow: "column wrap", height: "100%", justifyContent: "center"}}>
                <Box>
                  <Typography variant="h2" color="inherit" textAlign='center'>¡Oops!</Typography>
                  <Typography variant="h6" color="inherit" textAlign='center'>No hemos podido encontrar esta página</Typography>
                  <br/>
                  <Box sx={{display: "flex", justifyContent: "center"}} mb={5}>
                    <Link to="/inicio" style={{textDecoration: "none"}}> 
                      <Button variant="outlined" sx={{'&:hover':{bgcolor: "primary.main", color: "background.default"}}} startIcon={<ArrowBackIosIcon/>}>
                        Volver al inicio
                      </Button>
                    </Link>
                  </Box>
                </Box>
              </Box>
            </Grid>
            <Grid item md={6} sm={12} order={{md:2, sm:1, xs:1}}>
              <Box sx={{display: "flex", justifyContent: "center"}}>
                <img src={img404} width="75%" alt="Error" />
              </Box>
            </Grid>
          </Grid>
        </Grid>
      </Grid>

        
    </WrapperSingleRoute>
  )
}
