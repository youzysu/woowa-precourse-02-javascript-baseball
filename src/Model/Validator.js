const { ERROR, OPTION, NUMBER } = require('../Util/Constants');

const Validator = {
  validateNumber(userInput) {
    Validator.validateValue(userInput);
    Validator.validateLength(userInput);
    Validator.validateDuplicate(userInput);
  },

  validateValue(userInput) {
    userInput.forEach((number) => {
      if (!new RegExp('^[1-9]+$').test(number)) {
        throw new Error(ERROR.VALUE);
      }
    });
  },

  validateLength(userInput) {
    if (userInput.length !== NUMBER.COUNT) {
      throw new Error(ERROR.LENGTH);
    }
  },

  validateDuplicate(userInput) {
    const removedSame = new Set(userInput);
    if (userInput.length !== removedSame.size) {
      throw new Error(ERROR.DUPLICATE);
    }
  },

  validateOption(userInput) {
    if (userInput !== OPTION.RESTART && userInput !== OPTION.END) {
      throw new Error(ERROR.OPTION);
    }
  },
};

module.exports = Validator;

