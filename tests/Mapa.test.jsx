import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import { BrowserRouter } from 'react-router-dom';
import { Mapa } from '../src/views/Home/Mapa/Mapa';

describe('Pruebas para el componente Mapa', () => {
  test('El componente de mapa se renderiza correctamente', () => {
    render(
      <BrowserRouter>
        <Mapa />
      </BrowserRouter>
    );

    const mapaComponent = screen.getByTestId('map-container');
    expect(mapaComponent).toBeInTheDocument();
  });

  test('Los marcadores se renderizan correctamente', async () => {
    render(
      <BrowserRouter>
        <Mapa />
      </BrowserRouter>
    );

    // Esperar hasta que se renderice el marcador
    await waitFor(() => {
      const marker1 = screen.getByTestId('marker-1');
      expect(marker1).toBeInTheDocument();
    });

    // Puedes realizar pruebas adicionales para comprobar las propiedades del marcador, si es necesario.
  });

  test('Las popups se muestran correctamente al hacer clic en los marcadores', async () => {
    render(
      <BrowserRouter>
        <Mapa />
      </BrowserRouter>
    );

    // Esperar hasta que se renderice el marcador
    await waitFor(() => {
      const marker1 = screen.getByTestId('marker-1');
      expect(marker1).toBeInTheDocument();

      // Hacer clic en el marcador
      marker1.click();
    });

    // Esperar hasta que se muestre la popup
    await waitFor(() => {
      const popup1 = screen.getByTestId('popup-1');
      expect(popup1).toBeInTheDocument();
    });

    // Puedes realizar pruebas adicionales para comprobar el contenido de la popup, si es necesario.
  });
});
