module.exports = function (callback, thisArg) {
  if (typeof callback !== 'function') {
    throw TypeError(`${callback} is not a function`)
  }

  var resultArr = new Array(this.length)
  
  for (var i = 0; i < this.length; i++) {
    if (this[i] === undefined) continue

    resultArr[i] = callback.call(thisArg, this[i], i, this)
  }

  return resultArr
}