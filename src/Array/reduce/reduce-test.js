const test = require('tape')
const reduce = require('./reduce')

test('Array.prototype.reduce: Reducing an objects properties', assert => {
  const products = [
    { id: 1, price: 12.2 },
    { id: 2, price: 192.4 },
    { id: 3, price: 132.54 },
  ]

  const result = reduce.call(products, (acc, item) => acc + item.price, 0)
  
  assert.equal(result, 337.14)
  assert.end()
})

test('Array.prototype.reduce: Omitting an initial value', assert => {
  const products = [
    { id: 1, price: 12.2 },
    { id: 2, price: 192.4 },
    { id: 3, price: 132.54 },
  ]

  const result = reduce.call(products, (acc, item) => acc + item)
  
  assert.equal(result, '[object Object][object Object][object Object]')

  assert.end()
})

test('Array.prototype.reduce: Passing the callback function as null', assert => {
  try {
    reduce.call([], null)
  } catch (err) {
    assert.assert(err instanceof TypeError)
    assert.equal(err.message, 'null is not a function')
  }

  assert.end()
})