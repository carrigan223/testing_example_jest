/**
 * @param {number} a
 * @param {number} b
 *
 * @returns {number}
 *
 * function add(a,b) takes two numbers and returns the sum of them
 *
 */

const add = (a, b) => {
  let sum = 0;

  sum = a + b;

  return sum;
};

console.log(add(1, 2));

module.exports = { add };
