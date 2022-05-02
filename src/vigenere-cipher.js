const { NotImplementedError } = require("../extensions/index.js");

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 *
 * @example
 *
 * const directMachine = new VigenereCipheringMachine();
 *
 * const reverseMachine = new VigenereCipheringMachine(false);
 *
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 *
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 *
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 *
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 *
 */

Array.prototype.insert = function (index, item) {
  this.splice(index, 0, item);
};

class VigenereCipheringMachine {
  constructor(direction = false) {
    this.direction = direction;
  }

  checkArguments = (msg, k) => {
    if (!msg || !k) {
      throw new Error("Incorrect arguments!");
    }
  };

  encrypt(message, key) {
    this.checkArguments(message, key);
    let result = [];
    message = message.toUpperCase().split("");
    key = key
      .repeat(Math.ceil(message.length / key.length))
      .toUpperCase()
      .split("");

    for (let i = 0; i < message.length; i++) {
      if (message[i].charCodeAt(0) >= 65 && message[i].charCodeAt(0) <= 90) {
        let item = message[i].charCodeAt(0) - 65 + (key[i].charCodeAt(0) - 65);
        message[i] = String.fromCharCode((item % 26) + 65);
      } else {
        key.insert(i, message[i]);
      }
      result.push(message[i]);
    }

    console.log(this.direction ? result.reverse().join("") : result.join(""));
    return this.direction ? result.reverse().join("") : result.join("");
  }

  decrypt(message, key) {
    this.checkArguments(message, key);
    let result = [];
    message = message.toUpperCase().split("");
    key = key
      .repeat(Math.ceil(message.length / key.length))
      .toUpperCase()
      .split("");

    for (let i = 0; i < message.length; i++) {
      if (message[i].charCodeAt(0) >= 65 && message[i].charCodeAt(0) <= 90) {
        let item = message[i].charCodeAt(0) + 65 - (key[i].charCodeAt(0) - 65);
        message[i] = String.fromCharCode((item % 26) + 65);
      } else {
        key.insert(i, message[i]);
      }
      result.push(message[i]);
    }

    console.log(this.direction ? result.reverse().join("") : result.join(""));
    return this.direction ? result.reverse().join("") : result.join("");
  }
}

const directMachine = new VigenereCipheringMachine();
directMachine.encrypt("attack at dawn!", "alphonse"); //'AEIHQX SX DLLU!'
directMachine.decrypt("UWJJW XAGWLNFM VNNNDXHVWWL :)", "js");

module.exports = {
  VigenereCipheringMachine,
};
