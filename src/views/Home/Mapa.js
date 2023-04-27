import React from "react";
import Box from "@mui/material/Box";
import { TileLayer } from "react-leaflet";
import { Marker } from "react-leaflet";
import { Popup } from "react-leaflet";
import { ContenedorMapa } from "./ElementsMapa";
import { SwitchCarouselMap } from "./SwitchCarouselMap";
import { Container } from "@mui/material";

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
    <div>
      {/* B O T O N   P A R A   V O L V E R   A   L A   P A G I N A   D E  I N I C I O */}
      <SwitchCarouselMap irA="carrusel" />

      {/* M A P A */}
      <Container maxWidth="xl" data-aos="flip-right">
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
      </Container>
    </div>
  );
};
