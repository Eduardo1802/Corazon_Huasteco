import React, { useState } from "react";
import { Box, Grid, Divider, Chip, Paper, Typography, Button } from '@mui/material';
import { AnalyticsRounded } from '@mui/icons-material';
import ControllableStates from "./ControlallableStates";
import axios from "axios";

export const AdminPrediciones = () => {
  const [nextMonth, setNextMonth] = useState("");
  const [predictionData, setPredictionData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isEmptyResponse, setIsEmptyResponse] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setIsLoading(true);
      setIsEmptyResponse(false);
  
      const formattedNextMonth = parseInt(nextMonth);
      const data = { next_month: formattedNextMonth };
  
      const response = await axios.post('http://localhost:5000/api/predict', data);
      console.log('Respuesta del servidor:', response.data);
  
      const parsedResponse = JSON.parse(response.data); // Parse the JSON data
  
      if (Array.isArray(parsedResponse)) {
        // Convertir la respuesta en un objeto JavaScript
        const predictionObject = parsedResponse.reduce((acc, curr) => {
          acc[curr.fecha] = curr;
          return acc;
        }, {});
  
        setPredictionData(predictionObject);
      } else {
        setPredictionData(parsedResponse);
      }
  
      setIsLoading(false);
    } catch (error) {
      console.error('Error al hacer la solicitud POST:', error);
      setIsLoading(false);
    }
  };

  return (
    <Box>
      {/* PREDICIÓN - ITEMS */}
      <Grid container spacing={0}>
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
            <form onSubmit={handleSubmit}>
              <input type="text" value={nextMonth} onChange={(e) => setNextMonth(e.target.value)} />
              <button type="submit" disabled={isLoading}>Predict</button>
            </form>
            {isLoading && <p>Cargando...</p>}
            {isEmptyResponse && <p>La respuesta está vacía.</p>}
          </Paper>

          <Paper elevation={3} sx={{ p: 2, m: 1 }}>
            <Typography textAlign="left" variant="h5" color="text.secondary" sx={{ display: 'flex', justifyContent: 'center' }}>
              Resultado
            </Typography>
          {predictionData && Object.keys(predictionData).length > 0 ? (
            <table>
              <thead>
                <tr>
                  <th>Fecha</th>
                  {Object.keys(predictionData).length > 0 &&
                    Object.keys(predictionData[Object.keys(predictionData)[0]]).map((product) => (
                      <th key={product}>{product}</th>
                    ))}
                </tr>
              </thead>
              <tbody>
                {Object.keys(predictionData).map((date) => (
                  <tr key={date}>
                    <td>{new Date(parseInt(date)).toLocaleDateString()}</td>
                    {Object.values(predictionData[date]).map((value, index) => (
                      <td key={index}>{value}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          ) : null}
        </Paper>  
      </Grid>
    </Grid>
  </Box>
  );
};
