import React                     from 'react'
import { Detector }              from 'react-detect-offline'
import { Box, Grid, Typography } from '@mui/material';


const CheckConnection = props => {
  return (
    <>
        <Detector
            render={({online})=> (
                online ? props.children:
                <Box sx={{
                    width: "100%",
                    margin: "0px auto",
                    bgcolor: "background.default",
                    border: "2px solid #ddd",
                    minHeight: "100vh", //altura de la pantalla, tambien se puede usar "auto"
                  }}>
                    <Grid container sx={{height: "100vh", display: "flex", alignItems: "center"}}>
                        <Grid item xs>
                            <Grid container>
                                <Grid item md={6} sm={12} xs={12} order={{md:1, sm:2, xs:2}}>
                                    <Box sx={{display: "flex", flexFlow: "column wrap", height: "100%", justifyContent: "center"}}>
                                        <Box>
                                            <Typography variant="h2" color="inherit" textAlign='center'>Uh oh!</Typography>
                                            <Typography variant="h6" color="inherit" textAlign='center'>Parece que no tienes conexión</Typography>
                                        </Box>
                                    </Box>
                                </Grid>
                                <Grid item md={6} sm={12} order={{md:2, sm:1, xs:1}}>
                                    <Box sx={{display: "flex", justifyContent: "center"}}>
                                        <img src="" width="75%" alt="Error" />
                                    </Box>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Box>
            )}
        />
    </>
  )
}


export default CheckConnection;