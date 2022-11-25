const { OPTION } = require('../libs/const');

class Validator {
  static playerAnswer(userAnswer) {
    const isOnlyNumber = !isNaN(userAnswer);
    const isThreeLength = userAnswer.length === 3;
    const isNotIncludesZero = !userAnswer.includes('0');
    const isNotOverlap = [...new Set([...(userAnswer + '')])].length === 3;

    const validationList = [
      isOnlyNumber,
      isThreeLength,
      isNotIncludesZero,
      isNotOverlap,
    ];

    return validationList.every((item) => item);
  }

  static playerOption(option) {
    let isValid = false;

    if (option === OPTION.RESTART || option === OPTION.EXIT) isValid = true;

    return isValid;
  }
}

module.exports = Validator;
