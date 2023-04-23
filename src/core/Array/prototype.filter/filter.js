module.exports = function (callback) {
  const arr = []

  for (let i = 0; i < this.length; i++) {
    let result = callback(this[i], i, this)
    if (result) {
      arr.push(this[i])
    }
  }

  return arr
}
