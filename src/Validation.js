const { ERROR } = require('../src/Materials');

class Validation {
  isValidInput(userInput) {
    this.typeValidity(userInput);
    this.lengthValidity(userInput);
    this.isDuplicate(userInput);
    this.scopeValidity(userInput);
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

  scopeValidity(userInput) {
    if (userInput.split('').includes('0')) {
      throw new Error(ERROR.SCOPE);
    }
  }
}

module.exports = new Validation();
