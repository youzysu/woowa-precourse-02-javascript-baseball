const { THREE_DIGISTS } = require("./constants");

class Validation {
  static passAllValidationChecks(playerInputValue) {
    if (
      Number.isNaN(Number(playerInputValue)) ||
      !this.#isThreeDigits(playerInputValue) ||
      this.#isIncludesZero(playerInputValue) ||
      !this.#isUniqueNumbers(playerInputValue)
    ) {
      throw new Error(
        "1부터 9까지 서로 다른 수로 이루어진 3자리의 수를 입력하세요"
      );
    }
  }

  static #isThreeDigits(string) {
    return string.length === THREE_DIGISTS;
  }
  static #isIncludesZero(string) {
    return string.includes("0");
  }
  static #isUniqueNumbers(string) {
    const numberList = string.split("");
    const uniqueNumberList = new Set(numberList);
    return uniqueNumberList.size === THREE_DIGISTS;
  }
}

module.exports = Validation;
