module.exports = function (callback, initial = this[0]) {
  if (typeof callback !== 'function') {
    throw TypeError(`${callback} is not a function`)
  }

  let acc = initial
  let next = this[Number(initial === this[0])]
  
  for (let i = 0; i < this.length; i++) {
    acc = callback(acc, next, i, this)
    next = this[this.indexOf(next, i) + 1]
    if (next === undefined) break
  }

  return acc
}