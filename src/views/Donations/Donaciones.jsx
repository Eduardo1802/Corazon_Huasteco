import React,{useState} from 'react'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box';
import { Grid, Paper, TextField } from '@mui/material';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import { WrapperSingleRoute } from '../../components/customs/WrapperSingleRoute';
import { Bread } from '../../components/customs/Bread';
import {useAuth} from "../../context/AuthContext"

const pasos = ['Se debe iniciar sesión para poder donar.','Formulario', 'Metodo', 'Pago'];

export const Donaciones = () => {
  const {user} = useAuth();
  const [monto, setMonto] = useState(0);
  const [proceso, setProceso] = useState(0);


  const pasos1 = async () => {
    setProceso(1)
    console.log(proceso)
  };

  return (
    <WrapperSingleRoute>
      <Grid container spacing={1}>
        <Grid item xs={12}>
          <Bread migas={[{miga: "INICIO", ruta: "/inicio"},{miga: "DONACIONES", ruta: "/donaciones"}]}/>
        </Grid>
      </Grid>

      <Box sx={{margin:"15px"}}>
        <Box sx={{display: "flex", flexFlow: "column wrap", alignItems: "center"}}>
          <Typography variant="body1" color="primary">
            Donaciones
          </Typography>
        </Box>
      </Box>

      {/* STEPPER */}
      <Grid content spacing={1}>
        <Grid item xs m={2} p={3}>
          <Paper>
            <Box sx={{ width: '100%', p:5, display:"flex", justifyContent: "center"}}>
              {user ? (    
                <Stepper>
                  {/* PASO 1: MONTO */}
                  <Step>
                    <StepLabel>{pasos[1]}</StepLabel>
                    <Grid
                      container
                      rowSpacing={1}
                      columnSpacing={1}
                      sx={{ bgcolor: "background.paper", p: 1}}
                    >
                      <TextField
                      label="Usuario"
                      value={user ? user.email : user.displayName}
                      fullWidth
                      // onChange={(e) => setTitulo(e.target.value)}
                      multiline
                      type={"hidden"}
                      sx={{marginBottom: "15px", marginTop:"15px"}}
                      />
                      <TextField
                        label="Monto"
                        value={monto}
                        fullWidth
                        onChange={(e) => {
                          // Verificar si el valor ingresado es un número
                          if (!isNaN(Number(e.target.value))) {
                            setMonto(e.target.value);
                          }
                        }}
                        onKeyPress={(e) => {
                          // Permitir solo números
                          if (isNaN(Number(e.key))) {
                            e.preventDefault();
                          }
                        }}
                      />
                      <Button fullWidth  variant="contained" onClick="" sx={{ marginTop:"15px"}}> 
                        Donar
                      </Button>
                    </Grid>
                  </Step>
                </Stepper> 
              ) : (
                <Stepper>
                  <Step>
                    <StepLabel>{pasos[0]}</StepLabel>
                  </Step>
                </Stepper>
              )}
            </Box>
          </Paper>
        </Grid>
      </Grid>
      


    </WrapperSingleRoute>
  )
}
