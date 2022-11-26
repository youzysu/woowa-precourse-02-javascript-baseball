const { COMMAND, NUMBER_DIGITS } = require("./constants/game");

class Validation {
  /**
   * 플레이어 입력값 유효성 검사
   * @param {string} playerInputValue
   */
  static checkPlayerInputValue(playerInputValue) {
    if (!this.#isCorrectPlayerInputValue(playerInputValue)) {
      throw new Error(
        "1부터 9까지 서로 다른 수로 이루어진 3자리의 수를 입력하세요"
      );
    }
  }

  /**
   * 플레이어 게임 재시작 커멘드 입력 유효성 검사
   * @param {string} gameCommand
   */
  static checkGameCommnad(gameCommand) {
    if (!this.#isCorrectGameCommand(Number(gameCommand))) {
      throw new Error("1과 2중 올바른 숫자를 입력하세요");
    }
  }

  static #isCorrectPlayerInputValue(playerInputValue) {
    return (
      !Number.isNaN(Number(playerInputValue)) &&
      this.#isThreeDigits(playerInputValue) &&
      !this.#isIncludesZero(playerInputValue) &&
      this.#isUniqueNumbers(playerInputValue)
    );
  }

  static #isCorrectGameCommand(gameCommand) {
    return gameCommand === COMMAND.restart || gameCommand === COMMAND.quit;
  }

  static #isThreeDigits(string) {
    return string.length === NUMBER_DIGITS;
  }
  static #isIncludesZero(string) {
    return string.includes("0");
  }
  static #isUniqueNumbers(string) {
    const numberList = string.split("");
    const uniqueNumberList = new Set(numberList);
    return uniqueNumberList.size === NUMBER_DIGITS;
  }
}

module.exports = Validation;
