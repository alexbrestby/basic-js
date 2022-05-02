const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */

function sortByHeight(arr) {
  let sortedPositiveArrayCopy = [...arr]
    .filter((item) => item >= 0)
    .sort((a, b) => a - b);
  //.sort((a, b) => b - a);

  return arr.map((elem) =>
    elem !== -1 ? sortedPositiveArrayCopy.shift() : elem
    //elem !== -1 ? sortedPositiveArrayCopy.pop() : elem
  );
}

arr = [-1, 150, 190, 170, -1, -1, 160, 180];
console.log(sortByHeight(arr));

module.exports = {
  sortByHeight,
};
