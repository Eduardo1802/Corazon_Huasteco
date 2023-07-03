import React from 'react'
import { WrapperSingleRoute } from '../../../components/customs/WrapperSingleRoute'
import { BasicTabsSupervisor } from './BasicTabsSupervisor'
import { Box } from '@mui/material'

export const Supervisor = () => {

  return (
    <Box sx={{bgcolor: "background.default"}}>
      <BasicTabsSupervisor/>
    </Box>
  )
}
