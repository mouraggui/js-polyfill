module.exports = function (callback, thisArg) {
  if (typeof callback !== 'function') {
    throw TypeError(`${callback} is not a function`)
  }
  
  for (var i = 0; i < this.length; i++) {
    if (!this[i]) continue;
    
    callback.call(thisArg, this[i], i, this)
  }
}