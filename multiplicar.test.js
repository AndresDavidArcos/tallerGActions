const multiplicar = require('./multiplicar');

test('multiplicar 5 y 3 es igual a 15', () => {
  expect(multiplicar(5, 3)).toBe(15);
});

test('multiplicar -5 y -3 es igual a 15', () => {
  expect(multiplicar(-5, -3)).toBe(15);
});

test('multiplicar 0 y 0 es igual a 0', () => {
  expect(multiplicar(0, 0)).toBe(0);
});
