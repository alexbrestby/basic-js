const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  let resultObject = {};

  for (let i = 0; i < domains.length; i++) {
    let counter = "";
    let elem = domains[i].split(".").reverse();

    for (let i = 0; i < elem.length; i++) {
      counter += `.${elem[i]}`;
      if (resultObject[counter]) {
        resultObject[counter]++;
      } else {
        resultObject[counter] = 1;
      }
    }
  }

  return resultObject;
  // console.log(resultObject);
}

// domains = ["code.yandex.ru", "music.yandex.ru", "yandex.ru"];
// getDNSStats(domains);

module.exports = {
  getDNSStats,
};
