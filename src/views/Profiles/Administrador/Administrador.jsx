import React from 'react'
import { WrapperSingleRoute } from '../../../components/customs/WrapperSingleRoute'
import BasicTabsAdministrador from './BasicTabsAdministrador'
import { Box } from '@mui/material'

export const Administrador = () => {

  return (
    <Box sx={{bgcolor: "background.default"}}>
      <BasicTabsAdministrador/>
    </Box>
  )
}
