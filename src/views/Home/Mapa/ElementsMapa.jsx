import styled from '@emotion/styled'

import { MapContainer } from 'react-leaflet'


export const ContenedorMapa = styled(MapContainer)(({theme, altura}) => ({
    display: "flex",
    flexFlow: "row wrap",

    justifyContent: "center",

    width: "100%",
    height: altura ? altura : "70vh",
    borderRadius: "0 0 10px 10px",
    
    
}))