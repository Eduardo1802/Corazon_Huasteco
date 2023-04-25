import React from 'react'
import Box from '@mui/material/Box';
import { Link } from 'react-router-dom';
import { TileLayer } from 'react-leaflet';
import { Marker } from 'react-leaflet';
import { Popup } from 'react-leaflet';
import { ContenedorMapa } from './ElementsMapa';
import ViewCarouselIcon from '@mui/icons-material/ViewCarousel';
import MapIcon from '@mui/icons-material/Map';
import { Typography } from '@mui/material';

//TODO LO DE ANALYTICS DE FIREBASE
// import { analytics } from '../../App/firebase';
// import { perf } from '../../App/firebase'
// import { logEvent } from 'firebase/analytics';
// import { trace } from 'firebase/performance'

export const Mapa = () => {

  // useEffect(() => {
  //   logEvent(analytics, 'visitas pagina mapa');
    
  //   const t = trace(perf, "test_trace");
  //   t.putAttribute("experiment", "A");
  // }, []);

  const position = [21.1437, -98.4181]

  return (
    <div>
      {/* B O T O N   P A R A   V O L V E R   A   L A   P A G I N A   D E  I N I C I O */}
      <Box sx={{ textAlign: "center", padding: "15px 0"}}>
        <Box sx={{bgcolor: 'primary.main', borderRadius: "50px", display: "inline-flex"}}>
          <Box sx={{color: "red", padding: "7px 14px", borderRadius: "50px"}}>  
            <Typography component={Link} to="/inicio" sx={{textDecoration: "none", color: "background.default", '&:hover':{color: "background.paper"}}}>
              Carrusel <ViewCarouselIcon/>
            </Typography>
          </Box>
          <Box sx={{bgcolor: "background.default", padding: "7px 14px", borderRadius: "50px", borderColor: "primary.main", borderStyle: "solid"}}>
            <Typography color="primary">
              Mapa <MapIcon/>
            </Typography>
          </Box>
        </Box>
      </Box>

      {/* M A P A */}
      <Box style={{display: "flex", flexFlow: "row wrap", justifyContent: "center"}}>
        
      <ContenedorMapa  center={position} zoom={16} scrollWheelZoom={false}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
        <Marker position={position}>
          <Popup>
            Huejutla de Reyes Hidalgo. <br /> 43000
          </Popup>
        </Marker>

        <Marker position={[21.147628, -98.408421]}>
          <Popup>
            Parque Municipal de Huejutla de Reyes. <br /> 43000
          </Popup>
        </Marker>

        <Marker position={[21.141316, -98.419818]}>
          <Popup>
            Reloj Monumental de Huejutla. <br /> 43000
          </Popup>
        </Marker>

        <Marker position={[21.147159, -98.424378]}>
          <Popup>
            Reloj Monumental de Huejutla. <br /> 43000
          </Popup>
        </Marker>
      </ContenedorMapa>
          </Box>
      
      

    </div>
  )
}
