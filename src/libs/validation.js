const { OPTION } = require("./const");

const validation = {
  checkPlayerAnswer: (userAnswer) => {
    const isOnlyNumber = !isNaN(userAnswer);
    const isThreeLength = userAnswer.length === 3;
    const isNotIncludesOne = !userAnswer.includes("0");
    const isNotOverlap = [...new Set([...(userAnswer + "")])].length === 3;

    const validationList = [
      isOnlyNumber,
      isThreeLength,
      isNotIncludesOne,
      isNotOverlap,
    ];

    return validationList.every((item) => item);
  },

  checkPlayerOption: (option) => {
    let isValid = false;

    if (option === OPTION.RESTART || option === OPTION.EXIT) isValid = true;

    return isValid;
  },
};

module.exports = validation;
