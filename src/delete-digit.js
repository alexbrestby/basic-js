const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let nToArray = n.toString().split("");
  let result = [];

  for (let i = 0; i < nToArray.length; i++) {
    let temp = [...nToArray]; //take a copy
    temp.splice(i, 1); //delete a symbol
    result.push(Number(temp.join(""))); //push new combo of symbol to array
  }
  return Math.max(...result); //search a max value
}

module.exports = {
  deleteDigit,
};
