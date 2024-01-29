import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { MemoryRouter } from 'react-router-dom'; // Usaremos MemoryRouter en las pruebas
import { drawer } from './drawer';



describe('Pruebas para el componente drawer', () => {
  test('El componente muestra el título "Corazón Huasteco"', () => {
    render(
      <MemoryRouter>
        {drawer}
      </MemoryRouter>
    );

    const titleElement = screen.getByText('Corazón Huasteco');
    expect(titleElement).toBeInTheDocument();
  });

  test('Los enlaces se renderizan correctamente', () => {
    render(
      <MemoryRouter>
        {drawer}
      </MemoryRouter>
    );

    const enlaces = screen.getAllByRole('listitem');
    expect(enlaces.length).toBeGreaterThan(0); // Verifica que hay al menos un enlace renderizado
  });

});
