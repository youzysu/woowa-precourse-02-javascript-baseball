const { MESSAGE } = require("../constant/Message");
const { COMMAND } = require("../constant/Constant");

const Validate = {
  checkUserInput(number) {
    this.isNumber(number);
    this.isLengthValid(number);
    this.isIncludesZero(number);
    this.isDuplicated(number);
  },
  isNumber(number) {
    number.forEach((element) => {
      if (isNaN(element)) {
        throw new Error(MESSAGE.NUMBER_ERROR.NOT_A_NUMBER);
      }
    });
  },
  isLengthValid(number) {
    if (number.length != 3) {
      throw new Error(MESSAGE.NUMBER_ERROR.INVALID_LENGTH);
    }
  },
  isIncludesZero(number) {
    if (number.includes("0"))
      throw new Error(MESSAGE.NUMBER_ERROR.INCLUDES_ZERO);
  },
  isDuplicated(number) {
    let removeDuplication = new Set(number);
    removeDuplication = [...removeDuplication];
    if (removeDuplication.length != 3) {
      throw new Error(MESSAGE.NUMBER_ERROR.DUPLICATED);
    }
  },

  checkCommand(command) {
    if (command !== COMMAND.RESTART && command !== COMMAND.FINISH) {
      throw new Error(MESSAGE.COMAND_ERROR.INVALID_COMMAND);
    }
  },
};

module.exports = Validate;
