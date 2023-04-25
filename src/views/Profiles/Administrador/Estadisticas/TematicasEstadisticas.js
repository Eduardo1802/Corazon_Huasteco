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

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: true,
      text: 'Visitas de Tematicas',
    },
  },
};

const datos = [
    { 
      label: 'Mes 1', 
      vestimenta: 17, 
      danza: 13,
      gastronomia: 17,
      musica: 12,
      tradiciones: 15
    },
    { 
      label: 'Mes 2', 
      vestimenta: 28, 
      danza: 25,
      gastronomia: 32,
      musica: 18,
      tradiciones: 30
    },
    { 
      label: 'Mes 3',
      vestimenta: 46, 
      danza: 48,
      gastronomia: 60,
      musica: 27,
      tradiciones: 60
    },
    { 
      label: 'Mes 4', 
      vestimenta: 76, 
      danza: 92,
      gastronomia: 113,
      musica: 40,
      tradiciones: 120
    },
    { 
      label: 'Mes 5', 
      vestimenta: 125, 
      danza: 178,
      gastronomia: 213,
      musica: 261,
      tradiciones: 240
    },
    { 
      label: 'Mes 6', 
      vestimenta: 206, 
      danza: 342,
      gastronomia: 402,
      musica: 91,
      tradiciones: 480
    },
    { 
        label: 'Mes 7', 
        vestimenta: 339, 
        danza: 658,
        gastronomia: 756,
        musica: 737,
        tradiciones: 960
    },
    { 
        label: 'Mes 8', 
        vestimenta: 559, 
        danza: 1264,
        gastronomia: 1423,
        musica: 205,
        tradiciones: 1920
    },
    { 
        label: 'Mes 9',
        vestimenta: 921, 
        danza: 2432,
        gastronomia: 2680,
        musica: 308,
        tradiciones: 3840
    },
    { 
        label: 'Mes 10', 
        vestimenta: 1516, 
        danza: 4676,
        gastronomia: 5044,
        musica: 461,
        tradiciones: 7680
    },
    { 
        label: 'Mes 11', 
        vestimenta: 2498, 
        danza: 8993,
        gastronomia: 9494,
        musica: 692,
        tradiciones: 15360
    },
    { 
        label: 'Mes 12', 
        vestimenta: 4114, 
        danza: 17294,
        gastronomia: 17871,
        musica: 1038,
        tradiciones: 30720
    },
  ];


export const data = {
  labels: datos.map((item) => item.label),
  datasets: [
    {
      label: 'Vestimenta',
      data: datos.map((item) => item.vestimenta),
      backgroundColor: 'rgb(115, 31, 62)',
    },

    {
      label: 'Danza',
      data: datos.map((item) => item.danza),
      backgroundColor: 'rgb(89, 30, 79)',
    },

    {
      label: 'Gastronomía',
      data: datos.map((item) => item.gastronomia),
      backgroundColor: 'rgb(191, 154, 86)',
    },

    {
      label: 'Música',
      data: datos.map((item) => item.musica),
      backgroundColor: 'rgb(166, 33, 69)',
    },

    {
      label: 'Tradiciones',
      data: datos.map((item) => item.tradiciones),
      backgroundColor: 'rgb(166, 141, 141)',
    },
  ],
};

export function TematicasEstadisticas() {
  return(
    <Paper elevation={3} sx={{my: 3}}>
      <Bar 
        options={options} 
        data={data} 
      />
    </Paper>
  ) 
}
