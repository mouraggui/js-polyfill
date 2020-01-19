module.exports = function (f, initial = this[0]) {
  if (typeof f !== 'function') throw TypeError(`${f} is not a function`)

  let acc = initial
  let next = this[Number(initial === this[0])]
  
  for (let i = 0; i < this.length; i++) {
    acc = f(acc, next, i, this)
    next = this[this.indexOf(next, i) + 1]
    if (next === undefined) break
  }

  return acc
}