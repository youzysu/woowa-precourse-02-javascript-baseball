const { THREE_DIGISTS, COMMAND } = require("./constants");

class Validation {
  static playerInputValue(playerInputValue) {
    if (this.#isCorrectPlayerInputValue(playerInputValue)) {
      throw new Error(
        "1부터 9까지 서로 다른 수로 이루어진 3자리의 수를 입력하세요"
      );
    }
  }

  static gameCommnad(gameCommand) {
    if (!this.#isCorrectGameCommand(Number(gameCommand))) {
      throw new Error("1과 2중 올바른 숫자를 입력하세요");
    }
  }

  static #isCorrectPlayerInputValue(playerInputValue) {
    return (
      Number.isNaN(Number(playerInputValue)) ||
      !this.#isThreeDigits(playerInputValue) ||
      this.#isIncludesZero(playerInputValue) ||
      !this.#isUniqueNumbers(playerInputValue)
    );
  }

  static #isCorrectGameCommand(gameCommand) {
    return gameCommand === COMMAND.RESTART || gameCommand === COMMAND.END;
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
