module.exports = function (callback, thisArg) {
  if (typeof callback !== 'function') {
    throw TypeError(`${callback} is not a function`)
  }
  
  const result = []
  
  for (let i = 0; i < this.length; i++) {
    result.push(callback.call(thisArg, this[i], i, this))
  }

  return result
}