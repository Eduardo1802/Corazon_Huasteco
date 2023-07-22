import React, { useState } from 'react';
import { Box, Grid, Divider, Chip, Paper, Typography, Button } from '@mui/material'
import { AnalyticsRounded } from '@mui/icons-material';
import ControllableStates from "./ControlallableStates";
import axios from 'axios';

const options = [1,2,3,4,5,6,7,8,9,10,11,12];

export const AdminPrediciones = () => {
  const [value, setValue] = useState(options[0]);
  const [inputValue, setInputValue] = useState(1);
  const [data, setData] = useState('');

  const handleClick = () => {
    // Cambia 'your-data' por el dato que deseas enviar a la API
    const newData = value;
    axios.post('https://jsonplaceholder.typicode.com/posts', { data: newData })
      .then(response => {
        setData(response.data);
      })
      .catch(error => {
        console.error('Error al enviar los datos:', error);
      });
  };

  return (
    <Box>
      {/* PREDICIÓN - ITEMS */}
      <Grid container spacing={0}>
        {/* SEPARADOR */}
        <Grid item xs={12} p={3}>
          <Divider>
            <Chip
              label="Prediciones"
              size="large"
              variant="filled"
              icon={<AnalyticsRounded />}
            />
          </Divider>
        </Grid>

        <Grid item xs={12} p={3}>
          <Paper elevation={3} sx={{ p: 2, m: 1 }}>
            <Typography textAlign="left" variant="h5" color="text.secondary" sx={{ display: 'flex', justifyContent: 'center' }}>
              Predición de Ventas por Producto
            </Typography>
            <Typography textAlign="left" variant="h6" color="text.secondary">
              Ingresa la cantidad de meses a predecir: {`${value}`}
            </Typography>
            <div style={{ marginBottom: '16px' }} />
            <ControllableStates
              value={value}
              setValue={setValue}
              inputValue={inputValue}
              setInputValue={setInputValue}
              options={options}
            />
            <Button
              variant="contained"
              onClick={() => handleClick()}
            >
              PREDECIR
            </Button>

          </Paper>
           

          <Paper elevation={3} sx={{ p: 2, m: 1 }}>
            <Typography textAlign="left" variant="h5" color="text.secondary" sx={{ display: 'flex', justifyContent: 'center' }}>
              Resultado
            </Typography>
          </Paper>
        </Grid>

      </Grid>
    </Box>
  )
}
