const test = require('tape');
const forEach = require('./forEach');

const getSpy = (f = () => {}) => {
  f.calls = 0;

  return new Proxy(f, {
    apply(target) {
      target.calls++;
    }
  });
};

test('Array.prototype.forEach: Calling callback function', assert => {
  const numbers = [1, 2, 3, 4, 5];

  const spy = getSpy();
  const result = forEach.call(numbers, spy);

  assert.equal(result, undefined);
  assert.equal(spy.calls, 5);
  assert.end();
});

test('Array.prototype.forEach: Passing the callback function as null', assert => {
  try {
    forEach.call([], null);
  } catch (err) {
    assert.assert(err instanceof TypeError);
    assert.equal(err.message, 'null is not a function');
  }

  assert.end();
});

test('Array.prototype.forEach: Calling the function without parameters', assert => {
  try {
    forEach.call([]);
  } catch (err) {
    assert.assert(err instanceof TypeError);
    assert.equal(err.message, 'undefined is not a function');
  }

  assert.end();
});

test('Array.prototype.forEach: Passing an arrayLike', assert => {
  const colors = { 0: 'red', 1: 'blue', length: 2 };

  const spy = getSpy();

  forEach.call(colors, spy);

  assert.equal(spy.calls, 2);
  assert.end();
});

test('Array.prototype.forEach: Passing a common object', assert => {
  const colors = { color1: 'red', color2: 'blue', length: 2 };

  const spy = getSpy();

  forEach.call(colors, spy);

  assert.equal(spy.calls, 0);
  assert.end();
});
