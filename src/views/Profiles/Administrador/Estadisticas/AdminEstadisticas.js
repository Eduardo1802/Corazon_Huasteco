import { Grid } from '@mui/material'
import React from 'react'
import {AreaChart} from './AreaChart'
import { TematicasEstadisticas } from './TematicasEstadisticas'
import { VerticalBarChart } from './VerticalBarChart'
import { WrapperSingleRoute } from '../../../../components/customs/WrapperSingleRoute'


export const AdminEstadisticas = ({datos}) => {

  return (
    <WrapperSingleRoute>
        <Grid container>
            <Grid item md={6} sm={12} xs={12} p={{md: 1, sm: 0.5, xs: 0}}>
                <AreaChart datos={datos}/> 
            </Grid>
            <Grid item md={6} sm={12} xs={12} p={{md: 1, sm: 0.5, xs: 0}}>
                <VerticalBarChart datos={datos}/>
            </Grid>
            <Grid item xs={12} p={{md: 1, sm: 0.5, xs: 0}}>
                <TematicasEstadisticas/>
            </Grid>
        </Grid>
    </WrapperSingleRoute>
  )
}
