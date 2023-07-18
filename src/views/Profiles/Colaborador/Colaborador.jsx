import React from 'react'
import { WrapperSingleRoute } from '../../../components/customs/WrapperSingleRoute'
import { BasicTabsColaborador } from './BasicTabsColaborador';
import { Box } from '@mui/material';

export const Colaborador = () => {
  

  return (
    <Box sx={{bgcolor: "background.default"}}>
      <BasicTabsColaborador/>
    </Box>
  )
}
