import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { Paper } from '@mui/material';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);


export function VerticalBarChart({datos}) {

  // Datos
  const data = {
    labels: datos.map((item) => item.id),
    datasets: [
      {
        label: 'Inicio',
        data: datos.map((item) => item.data().inicio),
        backgroundColor: 'rgb(115, 31, 62)',
      },

      {
        label: 'Sobre nosotros',
        data: datos.map((item) => item.data()["sobre-nosotros"]),
        backgroundColor: 'rgb(89, 30, 79)',
      },
  
      {
        label: 'Tematicas',
        data: datos.map((item) => item.data().tematicas),
        backgroundColor: 'rgb(191, 154, 86)',
      },
  
      {
        label: 'Tienda',
        data: datos.map((item) => item.data().tienda),
        backgroundColor: 'rgb(166, 33, 69)',
      },
  
      
    ],
  };

  // Opciones
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Gráfico de barra visitas',
      },
    },
  };

  return (
    <Paper elevation={3} sx={{my: 3}}>
      <Bar 
        options={options} 
        data={data} 
      />
    </Paper>
  )
}
