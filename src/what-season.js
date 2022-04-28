const { NotImplementedError } = require("../extensions/index.js");

/**
 * Extract season from given date and expose the enemy scout!
 *
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 *
 * @example
 *
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 *
 */

function checkDate(date) {
  try {
    return new Date(date.getTime());
  } catch {
    throw new Error("Invalid date!");
  }
}

function getSeason(date) {
  let season;

  if (!date) return "Unable to determine the time of year!";

  checkDate(date);

  if (
    date.getMonth() === 11 ||
    (date.getMonth() >= 0 && date.getMonth() <= 1)
  ) {
    season = "winter";
  } else if (date.getMonth() >= 2 && date.getMonth() <= 4) {
    season = "spring";
  } else if (date.getMonth() >= 5 && date.getMonth() <= 7) {
    season = "summer";
  } else {
    season = "autumn";
  }

  return season;
}

module.exports = {
  getSeason,
};
