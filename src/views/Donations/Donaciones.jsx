import React,{useState} from 'react'
import PropTypes from 'prop-types';
import { Grid, Paper, Tab, Tabs, AppBar, Typography, Box, Stepper, Step, StepLabel } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { Bread } from '../../components/customs/Bread';
import {useAuth} from "../../context/AuthContext"
import { Tarjeta } from './Tarjeta';
import { Paypal } from './Paypal';
import { Oxxo } from './Oxxo';
import { Transferencia } from './Transferencia';
import { ImgRegistro }        from './ImgRegistro';
import { HomeRounded, VolunteerActivismRounded } from '@mui/icons-material';


const pasos = ['Se debe iniciar sesión para poder donar.','Formulario Tarjeta', 'Formulario Paypal', 'Formulario Oxxo', 'Formulario Transferencia'];

export const Donaciones = () => {
  const {user} = useAuth();
  const [proceso, setProceso] = useState(0);
  const [value, setValue] = React.useState(0);
  const theme = useTheme();

  const pasos1 = async () => {
    setProceso(1)
    console.log(proceso)
  };

  function TabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`full-width-tabpanel-${index}`}
        aria-labelledby={`full-width-tab-${index}`}
        {...other}
      >
        {value === index && (
            <Grid container sx={{ p: 3 }}>
              <Grid item md={5} sm={4} xs={12} order={{md:2, sm:2}}> 
                <ImgRegistro/>
              </Grid>
              
              {/* FORMULARIO */}
              <Grid item md={7} sm={8} xs={12} order={{md:1, sm:1}} >
                {children}
              </Grid>
            </Grid>
        )} 
      </div>
    );
  }
  
  TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  function a11yProps(index) {
    return {
      id: `full-width-tab-${index}`,
      'aria-controls': `full-width-tabpanel-${index}`,
    };
  }

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  return (
    <Box sx={{bgcolor: "background.default"}}>
      
      <Bread migas={[{miga: "INICIO", ruta: "/inicio", icono: <HomeRounded/>},{miga: "DONACIONES", ruta: "/donaciones", icono: <VolunteerActivismRounded/>}]}/>
      

      {/* STEPPER */}
      <Paper elevation={0}>
        <Grid container spacing={1}>
          <Grid item xs={12} sx={{p:3}}> 
            <Typography variant="h4" color="primary" textAlign='center'>Donaciones</Typography>
          </Grid>
          <Grid item xs m={2} p={3} sx={{p:3}}>
            {/* TITULO */}

            {/* CONTENIDO */}
            <Paper sx={{bgcolor: "background.paper"}}>
              <Box sx={{ width: '100%', p:5}} value={value} index={0} dir={theme.direction}>
                {/* VALIDAR QUE HAYA INICIADO SESIÓN */}
                {user ? (
                  <Box sx={{ width: '100%', }}> 
                    <AppBar position="static">
                      <Tabs
                        value={value}
                        onChange={handleChange}
                        indicatorColor="secondary"
                        textColor="inherit"
                        variant="fullWidth"
                        aria-label="vista completa de los metodos de donación"
                      >
                        <Tab label="Tarjeta"       {...a11yProps(0)} />
                        <Tab label="Paypal"        {...a11yProps(1)} />
                        <Tab label="Oxxo"          {...a11yProps(2)} />
                        <Tab label="Transferencia" {...a11yProps(3)} />
                      </Tabs>
                    </AppBar>

                    {/* TARJETA */}
                    <TabPanel value={value} index={0} dir={theme.direction}>
                      <Tarjeta/>
                    </TabPanel>
                  
                    {/* PAYPAL */}
                    <TabPanel value={value} index={1} dir={theme.direction}>
                      <Paypal/>
                    </TabPanel>

                    {/* OXXO */}
                    <TabPanel value={value} index={2} dir={theme.direction}>
                      <Oxxo/>
                    </TabPanel>

                    {/* TRANSFERENCIA */}
                    <TabPanel value={value} index={3} dir={theme.direction}>
                      <Transferencia/>
                    </TabPanel>

                  </Box>
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
      </Paper>
      


    </Box>
  )
}
