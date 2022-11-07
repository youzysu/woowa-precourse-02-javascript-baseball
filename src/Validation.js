const { ERROR } = require('../src/Materials');

class Validation {
  isValidInput(userInput) {
    this.typeValidity(userInput);
    this.lengthValidity(userInput);
    this.isDuplicate(userInput);
  }

  typeValidity(userInput) {
    if (!Number.isInteger(Number(userInput))) {
      throw new Error(ERROR.TYPE);
    }
  }

  lengthValidity(userInput) {
    if (userInput.length !== 3) {
      throw new Error(ERROR.LENGTH);
    }
  }

  isDuplicate(userInput) {
    const removedSame = new Set(userInput);
    if (userInput.length !== removedSame.size) {
      throw new Error(ERROR.DUPLICATE);
    }
  }
}

module.exports = new Validation();
