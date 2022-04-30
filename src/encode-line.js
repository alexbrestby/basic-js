const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let result = [];
  let stringToarray = str.split("");
  let counter = 1;

  for (let i = 0; i < stringToarray.length; i++) {
    let fish;
    if (stringToarray[i] === stringToarray[i + 1]) {
      counter++;
    } else {
      if (counter === 1) {
        fish = `${stringToarray[i]}`;
      } else {
        fish = `${counter}${stringToarray[i]}`;
      }
      result.push(fish);
      counter = 1;
    }
  }

  return result.join("");
}

module.exports = {
  encodeLine,
};
