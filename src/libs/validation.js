const { OPTION } = require("./const");

const validation = {
  playerInput: (input) => {
    const isOnlyNumber = !isNaN(input);
    const isThreeLength = input.length === 3;
    const isNotIncludesOne = !input.includes("0");
    const isNotOverlap = [...new Set([...(input + "")])].length === 3;

    const validationList = [
      isOnlyNumber,
      isThreeLength,
      isNotIncludesOne,
      isNotOverlap,
    ];

    return validationList.every((item) => item);
  },

  option: (input) => {
    let isValid;

    if (input !== OPTION.RESTART && input !== OPTION.EXIT) isValid = false;
    else isValid = true;

    return isValid;
  },
};

module.exports = validation;
