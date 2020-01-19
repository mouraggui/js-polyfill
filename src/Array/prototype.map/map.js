module.exports = function (f) {
  if (typeof f !== 'function') throw TypeError(`${f} is not a function`)

  const result = []

  for (let i = 0; i < this.length; i++) {
    result.push(f(this[i], i, this))
  }

  return result
}