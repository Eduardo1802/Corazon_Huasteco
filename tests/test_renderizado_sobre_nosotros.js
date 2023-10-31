import React from 'react';
import { render, screen } from '@testing-library/react';
import SobreNosotros from '../src/views/AboutUs/SobreNosotros.jsx';

test('Prueba de renderizado de SobreNosotros', () => {
  render(<SobreNosotros />);
  
  // Verificar que el título "Sobre nosotros" se muestre en la pantalla
  expect(screen.getByText('Sobre nosotros')).toBeInTheDocument();

  // Verificar que las imágenes se muestren en la pantalla
  const imagenes = screen.getAllByRole('img');
  expect(imagenes).toHaveLength(5); // Asegúrate de que haya 5 imágenes

  // Verificar que los enlaces a las redes sociales estén presentes y sean accesibles
  const enlacesRedesSociales = screen.getAllByRole('link');
  enlacesRedesSociales.forEach((enlace) => {
    expect(enlace).toBeInTheDocument();
    expect(enlace).toHaveAttribute('href');
  });
});
