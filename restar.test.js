const restar = require('./restar.js');

test('restar 5 y 3 es igual a 2', () => {
  expect(restar(5, 3)).toBe(2);
});

test('restar -5 y -3 es igual a -2', () => {
  expect(restar(-5, -3)).toBe(-2);
});

test('restar 0 y 0 es igual a 0', () => {
  expect(restar(0, 0)).toBe(0);
});
