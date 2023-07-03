import React from 'react'



// ELEMENTOS DE MATERIAL UI

import Checkbox from '@mui/material/Checkbox';
import Autocomplete from '@mui/material/Autocomplete';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import LockIcon from '@mui/icons-material/Lock';
import HowToRegIcon from '@mui/icons-material/HowToReg';
import FileUploadIcon from '@mui/icons-material/FileUpload';


// REACT ROUTER
import { Link } from 'react-router-dom';
import { WrapperSingleRoute } from '../../components/customs/WrapperSingleRoute';
import { Bread } from '../../components/customs/Bread';

//TODO LO DE ANALYTICS DE FIREBASE
// import { analytics } from '../../App/firebase';
// import { perf } from '../../App/firebase'
// import { logEvent } from 'firebase/analytics';
// import { trace } from 'firebase/performance'

const tipos = [
    { label: 'Estudiante' },
    { label: 'Docente' },
    { label: 'Persona Interesada' },
]

const sexos = [
    { label: 'Masculino' },
    { label: 'Femenino' },
    { label: 'Prefiero no decirlo' },
]

const tematicas = [
    { label: 'Danza' },
    { label: 'Gastronomia' },
    { label: 'Música' },
    { label: 'Tradiciones' },
    { label: 'Vestimenta' },
]


export const Solicitud = () => {

  // useEffect(() => {
  //   logEvent(analytics, 'visitas pagina solicitud');
    
  //   const t = trace(perf, "test_trace");
  //   t.putAttribute("experiment", "A");
  // }, []);  


  return (
    <Box sx={{bgcolor: "background.default"}}>
      <Bread migas={[{miga: "INICIO", ruta: "/inicio"},{miga: "REGISTRO", ruta: "/registro"},{miga: "SOLICITUD", ruta: "/registro/colaborador"}]}/>

      <Box sx={{margin:"15px"}}>
        <Box sx={{display: "flex", flexFlow: "column wrap", alignItems: "center"}}>
          <Typography variant="h4" color="primary.dark" sx={{textAlign: "center", margin: "15px 0"}}>
            Enviar solicitud <HowToRegIcon fontSize='large'/>
          </Typography> 

          {/* C O N T E N E D O R */}
          
              {/* F O R M U L A R I O */}
              <Box
                component="form"
                sx={{
                  '& > :not(style)': { m: 1, minWidth: '200px' }
                }}
                
                noValidate
                autoComplete="off"
              >
                <Typography variant="h6" color="primary">Registra tus datos</Typography>
                
                <TextField type="text" id="filled-basic" label="Nombre(s)" variant="outlined" sx={{ width: 300 }} />
                <TextField type="text" id="filled-basic" label="Apellidos" variant="outlined" sx={{ width: 300 }} />
                <TextField type="number" id="filled-basic" label="Edad" variant="outlined" sx={{ width: 300 }} />
                <Autocomplete
                    disablePortal
                    id="combo-box-demo"
                    options={sexos}
                    sx={{ width: 300 }}
                    renderInput={(params) => <TextField {...params} label="Sexo" />}
                />
                <Autocomplete
                    disablePortal
                    id="combo-box-demo"
                    options={tipos}
                    sx={{ width: 300 }}
                    renderInput={(params) => <TextField {...params} label="Ocupación" />}
                />
                
                <Autocomplete
                    disablePortal
                    id="combo-box-demo"
                    options={tematicas}
                    sx={{ width: 300 }}
                    renderInput={(params) => <TextField {...params} label="Tematica" />}
                />
                
                <Button endIcon={<FileUploadIcon/>} variant="contained" component="label" sx={{ width: 300, textTransform: "capitalize" }}>
                    Certificado
                    <input hidden accept="image/*" multiple type="file" />
                </Button>

                <TextField type="text" id="filled-basic" label="Código Postal:" variant="outlined" sx={{ width: 300 }} />
                <TextField type="email" id="filled-basic" label="Correo electronico:" variant="outlined" sx={{ width: 300 }} />

                
                <TextField type="password" id="filled-basic" label="Contraseña" variant="outlined" sx={{ width: 300 }} />
                <TextField type="password" id="filled-basic" label="Repite la Contraseña" variant="outlined" sx={{ width: 300 }} />
                
                <Box>
                    <Checkbox sx={{maxWidth: "1px"}}/><Typography variant="caption" color="initial" sx={{textAlign: "center"}}>He leído y acepto el <Link to="/aviso-de-privacidad">Aviso de privacidad</Link></Typography>    
                </Box>
                

                <Button variant="contained" sx={{width: "98%"}} endIcon={<LockIcon />}>
                  Registrarse
                </Button>

                <div style={{display: "grid", gridTemplateColumns: "repeat(1, 1fr)"}}>
                    <Typography variant="caption" color="initial" sx={{textAlign: "center"}}>¿Tienes cuenta? <Link to="/acceso"> Inicia sesión</Link></Typography>
                </div>
              </Box>
               
        </Box>
      </Box>
    </Box>
  )
}
