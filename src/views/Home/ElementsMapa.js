import styled from '@emotion/styled'

import { MapContainer } from 'react-leaflet'


export const ContenedorMapa = styled(MapContainer)`
    display: flex;
    flex-flow: row wrap;

    justify-content: center;

    width: 100vw;
    height: 560px;
    border-radius: 0 0 10px 10px;
    border-bottom: 5px solid #591D55;
    background-color: #591D55;
`