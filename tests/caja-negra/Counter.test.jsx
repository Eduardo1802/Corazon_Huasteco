import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Counter from './Counter';

describe('Pruebas para el funcionamiento del contador', () => {
  test('El contador muestra el valor inicial correctamente', () => {
    render(<Counter />);
    const contadorElement = screen.getByText(/Contador: 0/i);
    expect(contadorElement).toBeInTheDocument();
  });

  test('El contador incrementa correctamente al hacer clic en el botón', () => {
    render(<Counter />);
    const contadorElement = screen.getByText(/Contador: 0/i);
    const buttonElement = screen.getByText(/Incrementar/i);

    fireEvent.click(buttonElement);
    expect(contadorElement.textContent).toBe('Contador: 1');

    fireEvent.click(buttonElement);
    expect(contadorElement.textContent).toBe('Contador: 2');
  });

  test('El contador no muestra números negativos', () => {
    render(<Counter />);
    const contadorElement = screen.getByText(/Contador: 0/i);
    const buttonElement = screen.getByText(/Incrementar/i);

    fireEvent.click(buttonElement);
    fireEvent.click(buttonElement);
    fireEvent.click(buttonElement);
    expect(contadorElement.textContent).toBe('Contador: 3');

    // Hacer clic en el botón para decrementar
    fireEvent.click(buttonElement);
    fireEvent.click(buttonElement);
    expect(contadorElement.textContent).toBe('Contador: 5');
  });
});
