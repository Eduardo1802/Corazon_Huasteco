import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import { Paper } from '@mui/material';


ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
);





export function AreaChart({datos}) {

  // Datos
  const data = {
    labels: datos.map((item) => item.id),
    datasets: [
      {
        fill: true,
        label: 'Inicio',
        data: datos.map((item) => item.data().inicio),
        borderColor: 'rgb(115, 31, 62)',
        backgroundColor: 'rgba(115, 31, 62, 0.5)',
        pointRadius: 7 // Establece el radio en píxeles de cada punto
      },
      {
        fill: true,
        label: 'Sobre Nosotros',
        data: datos.map((item) => item.data()["sobre-nosotros"]),
        borderColor: 'rgb(89, 30, 79)',
        backgroundColor: 'rgba(89, 30, 79, 0.5)',
        pointRadius: 7 // Establece el radio en píxeles de cada punto
      },
      {
        fill: true,
        label: 'Tematicas',
        data: datos.map((item) => item.data().tematicas),
        borderColor: 'rgb(191, 154, 86)',
        backgroundColor: 'rgb(191, 154, 86, 0.5)',
        pointRadius: 7 // Establece el radio en píxeles de cada punto
      },
      {
        fill: true,
        label: 'Tienda',
        data: datos.map((item) => item.data().tienda),
        borderColor: 'rgb(166, 33, 69)',
        backgroundColor: 'rgb(166, 33, 69, 0.5)',
        pointRadius: 7 // Establece el radio en píxeles de cada punto
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
        text: 'Gráfico de área visitas',
      },
    },
  };

  return(
    <Paper elevation={3} sx={{my: 3}} >
      <Line 
        options={options} 
        data={data} 
      />
    </Paper>
  ) 
}
