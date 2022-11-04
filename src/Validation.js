const { THREE_DIGISTS } = require("./constants");

class Validation {
  static passAllValidationChecks(playerInputValue) {
    if (
      this.isThreeDigits(playerInputValue) &&
      !this.isIncludesZero(playerInputValue) &&
      !isNaN(playerInputValue)
    ) {
      return true;
    } else {
      throw new Error("잘못된 입력값입니다.");
    }
  }

  static isThreeDigits(string) {
    return String(string).length === THREE_DIGISTS;
  }
  static isIncludesZero(string) {
    return String(string).includes("0");
  }
}

module.exports = Validation;
