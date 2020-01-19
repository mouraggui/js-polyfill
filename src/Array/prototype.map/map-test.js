const test = require('tape')
const reduce = require('./map')

test('Array.prototype.map: Multiplying each value of the array by 2', assert => {
  const numbers = [2, 4, 6, 8, 10]

  const result = reduce.call(numbers, item => item * 2)
  
  assert.assert(Array.isArray(result))
  assert.equal(result.length, 5)
  assert.deepEqual(result, [4, 8, 12, 16, 20])
  assert.end()
})

test('Array.prototype.map: Squared each value of the array', assert => {
  const numbers = [2, 4, 6, 8, 10]

  const result = reduce.call(numbers, item => item ** 2)
  
  assert.assert(Array.isArray(result))
  assert.equal(result.length, 5)
  assert.deepEqual(result, [4, 16, 36, 64, 100])
  assert.end()
})

test('Array.prototype.map: calling function passing a callback without behavior', assert => {
  const numbers = [1, 2]

  const result = reduce.call(numbers, () => {})
  
  assert.assert(Array.isArray(result))
  assert.equal(result.length, 2)
  assert.deepEqual(result, [undefined, undefined])
  assert.end()
})