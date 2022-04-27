const { NotImplementedError } = require("../extensions/index.js");

/**
 * Create name of dream team based on the names of its members
 *
 * @param {Array} members names of the members
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 *
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  let result = [];
  if (!members || !Array.isArray(members)) return false;
  members.filter((elem) => {
    if (typeof elem == "string") {
      result.push(elem.trim().toUpperCase()[0]);
    } else {
      return false;
    }
  });
  return result.sort().join("");
}

module.exports = {
  createDreamTeam,
};
