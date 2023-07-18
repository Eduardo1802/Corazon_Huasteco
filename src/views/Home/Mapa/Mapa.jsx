import React from "react";
import Box from "@mui/material/Box";
import { TileLayer } from "react-leaflet";
import { Marker } from "react-leaflet";
import { Popup } from "react-leaflet";
import { ContenedorMapa } from "./ElementsMapa";
import { Container, Grid, Paper } from "@mui/material";
import { Bread } from "../../../components/customs/Bread";
import { HomeRounded, MapOutlined, MapRounded } from "@mui/icons-material";

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

  const position = [21.1437, -98.4181];

  return (
    <Box sx={{bgcolor: "background.default"}}>
      <Bread migas={[{miga: "INICIO", ruta: "/inicio", icono: <HomeRounded/>},{miga: "MAPA", ruta: "/mapa", icono: <MapRounded/>}]}/>
      {/* M A P A */}
      <Paper elevation={0}>
        <Container maxWidth="sx" data-aos="flip-right">
          <Grid container spacing={1}>
            <Grid item xs>
              <Box
                style={{
                  display: "flex",
                  flexFlow: "row wrap",
                  justifyContent: "center",
                }}
              >
                <ContenedorMapa center={position} zoom={16} scrollWheelZoom={false}>
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

            </Grid>
          </Grid>
        </Container>
      </Paper>
    </Box>
  );
};
