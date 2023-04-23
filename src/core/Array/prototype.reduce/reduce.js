module.exports = function (callback, initial) {
  if (typeof callback !== 'function') {
    throw TypeError(`${callback} is not a function`);
  }

  let acc = (initial !== undefined) ? initial : this[0];
  let initialIndex = (initial !== undefined) ? 0 : 1;
  let next = this[initialIndex];

  for (let i = 0; i < this.length; i++) {
    acc = callback(acc, next, i, this);
    next = this[this.indexOf(next, i) + 1];

    if (next === undefined) break;
  }

  return acc;
};
