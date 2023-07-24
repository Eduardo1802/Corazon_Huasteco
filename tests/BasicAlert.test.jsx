// tests/white_test/BasicAlerts.test.js
import { render, screen } from '@testing-library/react';
import BasicAlerts from '../src/components/customs/BasicAlerts';

describe('Pruebas de caja blanca - BasicAlerts', () => {
  test('El mensaje se renderiza correctamente', () => {
    // Arrange
    const message = 'Mensaje de prueba';

    // Act
    render(<BasicAlerts message={message} />);

    // Assert
    expect(screen.getByText(message)).toBeDefined();
  });


});
