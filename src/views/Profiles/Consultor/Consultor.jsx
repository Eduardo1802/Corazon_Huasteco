import React from 'react'
import { WrapperSingleRoute } from '../../../components/customs/WrapperSingleRoute'
import { BasicTabsConsultor } from './BasicTabsConsultor';
import { Box } from '@mui/material';

export const Consultor = () => {  

  return (
    <Box sx={{bgcolor: "background.default"}}>
      <BasicTabsConsultor/>
    </Box>
  )
}
