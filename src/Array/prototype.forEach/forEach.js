module.exports = function (f) {
  for (let i = 0; i < this.length; i++) {
    f(this[i], i, this)
  }
}