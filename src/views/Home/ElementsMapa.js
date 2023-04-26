import styled from '@emotion/styled'

import { MapContainer } from 'react-leaflet'


export const ContenedorMapa = styled(MapContainer)(({theme}) => ({
    display: "flex",
    flexFlow: "row wrap",

    justifyContent: "center",

    width: "100%",
    height: "70vh",
    borderRadius: "0 0 10px 10px",
    borderBottomWidth: '5px',
    borderBottomStyle: 'solid',
    borderBottomColor: theme.palette.primary.main, 
    backgroundColor: theme.palette.primary.main,
}))