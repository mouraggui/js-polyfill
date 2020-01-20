module.exports = function (callback, initial) {
  if (typeof callback !== 'function') {
    throw TypeError(`${callback} is not a function`)
  }

  var acc = (initial !== undefined) ? initial : this[0]
  var initialIndex = (initial !== undefined) ? 0 : 1
  var next = this[initialIndex]
  
  for (var i = 0; i < this.length; i++) {
    acc = callback(acc, next, i, this)
    next = this[this.indexOf(next, i) + 1]
    if (next === undefined) break
  }

  return acc
}