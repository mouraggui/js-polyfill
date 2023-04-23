const test = require('tape');
const map = require('./map');

test('Array.prototype.map: Multiplying each value of the array by 2', assert => {
  const numbers = [2, 4, 6, 8, 10];

  const result = map.call(numbers, item => item * 2);

  assert.assert(Array.isArray(result));
  assert.equal(result.length, 5);
  assert.deepEqual(result, [4, 8, 12, 16, 20]);
  assert.end();
});

test('Array.prototype.map: Squared each value of the array', assert => {
  const numbers = [2, 4, 6, 8, 10];

  const result = map.call(numbers, item => item ** 2);

  assert.assert(Array.isArray(result));
  assert.equal(result.length, 5);
  assert.deepEqual(result, [4, 16, 36, 64, 100]);
  assert.end();
});

test('Array.prototype.map: Calling function passing a callback without behavior', assert => {
  const numbers = [1, 2];

  const result = map.call(numbers, () => {});

  assert.assert(Array.isArray(result));
  assert.equal(result.length, 2);
  assert.deepEqual(result, [undefined, undefined]);
  assert.end();
});

test('Array.prototype.map: Passing thisArg as a parameter with a function expression', assert => {
  const numbers = [1];

  const result = map.call(numbers, function () { return this; }, { name: 'Guilherme' });

  assert.assert(Array.isArray(result));
  assert.equal(result.length, 1);
  assert.deepEqual(result, [{ name: 'Guilherme' }]);
  assert.end();
});

test('Array.prototype.map: Passing thisArg as a parameter with an arrow function', assert => {
  const numbers = [1];

  const result = map.call(numbers, () => this, { name: 'Guilherme' });

  assert.assert(Array.isArray(result));
  assert.equal(result.length, 1);
  assert.deepEqual(result, [module.exports]);
  assert.end();
});

test('Array.prototype.map: Passing the callback function as null', assert => {
  try {
    map.call([], null);
  } catch (err) {
    assert.assert(err instanceof TypeError);
    assert.equal(err.message, 'null is not a function');
  }

  assert.end();
});

test('Array.prototype.map: Calling the function without parameters', assert => {
  try {
    map.call([]);
  } catch (err) {
    assert.assert(err instanceof TypeError);
    assert.equal(err.message, 'undefined is not a function');
  }

  assert.end();
});

test('Array.prototype.map: Passing an arrayLike', assert => {
  const colors = { 0: 'red', 1: 'blue', length: 2 };

  const result = map.call(colors, item => item);

  assert.assert(Array.isArray(result));
  assert.equal(result.length, 2);
  assert.deepEqual(result, ['red', 'blue']);
  assert.end();
});

test('Array.prototype.map: Passing a common object', assert => {
  const colors = { color1: 'red', color2: 'blue', length: 2 };

  const result = map.call(colors, item => item);

  assert.assert(Array.isArray(result));
  assert.equal(result.length, 2);
  assert.deepEqual(result, new Array(2));
  assert.end();
});
