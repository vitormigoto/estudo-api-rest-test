import { somaHorasExtras, calculaDescontos } from '../index.js';

test('Deve retornar a soma das Horas Extras', () => {
  const esperado = 2500;
  const retornado = somaHorasExtras(2000, 500);

  expect(retornado).toBe(esperado);
});
