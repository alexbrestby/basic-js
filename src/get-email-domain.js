const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */
function getEmailDomain(email) {
  const EMAIL_NAME  = email.slice(email.indexOf("@") + 1);

  if (EMAIL_NAME.includes("@")) {
    return getEmailDomain(EMAIL_NAME);
  } else {
    return EMAIL_NAME;
  }
}

module.exports = {
  getEmailDomain,
};
