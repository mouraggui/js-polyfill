const test = require('tape')
const reduce = require('./reduce')

test('Array.prototype.reduce: Reducing array of numbers', assert => {
  const numbers = [1, 2, 3, 4, 5]

  const result = reduce.call(numbers, (acc, item) => acc + item, 0)
  
  assert.equal(result, 15)
  assert.equal(typeof result, 'number')
  assert.end()
})

test('Array.prototype.reduce: Reducing array of strings', assert => {
  const letters = ['J', 'a', 'v', 'a', 'S', 'c', 'r', 'i', 'p', 't']

  const result = reduce.call(letters, (acc, item) => acc + item, '')
  
  assert.equal(result, 'JavaScript')
  assert.equal(typeof result, 'string')
  assert.end()
})

test('Array.prototype.reduce: Reducing an objects properties', assert => {
  const products = [
    { id: 1, price: 12.2 },
    { id: 2, price: 192.4 },
    { id: 3, price: 132.54 },
  ]

  const result = reduce.call(products, (acc, item) => acc + item.price, 0)
  
  assert.equal(result, 337.14)
  assert.equal(typeof result, 'number')
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
  assert.equal(typeof result, 'string')

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

test('Array.prototype.reduce: Calling the function without parameters', assert => {
  try {
    reduce.call([])
  } catch (err) {
    assert.assert(err instanceof TypeError)
    assert.equal(err.message, 'undefined is not a function')
  }

  assert.end()
})