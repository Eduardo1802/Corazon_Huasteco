import React from "react";
import Box from "@mui/material/Box";
import { TileLayer } from "react-leaflet";
import { Marker } from "react-leaflet";
import { Popup } from "react-leaflet";
import { ContenedorMapa } from "./ElementsMapa";
import { Container, Grid, Paper } from "@mui/material";
import { Bread } from "../../../components/customs/Bread";
import { HomeRounded, MapOutlined, MapRounded } from "@mui/icons-material";
import { HelmetComponent } from "../../../components/customs/HelmetComponent";

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

  

  return (
    <Box sx={{bgcolor: "background.default"}}>
      <HelmetComponent/>
      <Bread migas={[{miga: "INICIO", ruta: "/inicio", icono: <HomeRounded/>},{miga: "MAPA", ruta: "/mapa", icono: <MapRounded/>}]}/>
      {/* M A P A */}
      <Paper elevation={0}>
        <Container maxWidth="sx">
          <Grid container spacing={1}>
            <Grid item xs>
              <Box
                data-testid="map-container"
                style={{
                  display: "flex",
                  flexFlow: "row wrap",
                  justifyContent: "center",
                }}
              >
                {/* START FROM MAP */}
                  <OnlyMapa/>
                {/* END OF MAP */}
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Paper>
      <link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.3/dist/leaflet.css"
        integrity="sha256-kLaT2GOSpHechhsozzB+flnD+zUyjE2LlfWPgU04xyI="
        crossorigin=""
      />
      {/* <!-- Make sure you put this AFTER Leaflet's CSS --> */}
      <script src="https://unpkg.com/leaflet@1.9.3/dist/leaflet.js"
        integrity="sha256-WBkoXOwTeyKclOHuWtc+i2uENFpDZ9YPdf5Hf+D7ewM="
        crossorigin="" async>
      </script>
    </Box>
  );
};


export const OnlyMapa = ({altura}) => {

  const position = [21.1437, -98.4181];

  return(
    <ContenedorMapa center={position} zoom={16} scrollWheelZoom={false} altura={altura}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Box data-testid="marker-1">
        <Marker position={position}>
          <Box data-testid="popup-1"> 
            <Popup>
              Huejutla de Reyes Hidalgo. <br /> 43000
            </Popup>
          </Box>
        </Marker>
      </Box>

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
  )
  
}