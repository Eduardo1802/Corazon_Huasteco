import { crearDocumentoVisitas, formatDate } from "../../src/utils/fnCountStatus";


describe('Función de fecha para el contador de estadisticas', () => {
  test('formatDate devuelve la fecha formateada correctamente', () => {
    const dateMock = new Date();

    const result = formatDate(dateMock);

    expect(result).toBe('2023-07-24');
  });

  test('formatDate devuelve la fecha formateada con ceros iniciales', () => {
    const dateMock = new Date(2023, 0, 5);

    const result = formatDate(dateMock);

    expect(result).toBe('2023-01-05');
  });

  test('formatDate devuelve la fecha formateada con el día y mes de un solo dígito', () => {
    const dateMock = new Date(2023, 2, 6);

    const result = formatDate(dateMock);

    expect(result).toBe('2023-03-06');
  });

  test('my types work properly', () => {
    expectTypeOf(crearDocumentoVisitas).toBeFunction()

    // @ts-expect-error name is a string
    assertType(crearDocumentoVisitas({ name: 42 }))
  })
});
