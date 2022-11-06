const { Random, Console } = require("@woowacourse/mission-utils");
const Validation = require("../src/Validation.js");

class Game {
  setAnswerNumber() {
    const numbers = Random.pickUniqueNumbersInRange(1, 9, 3);
    return numbers;
  }

  start() {
    const answerNumber = this.setAnswerNumber();
    this.compareNumber(answerNumber);
  }

  compareNumber(answerNumber) {
    Console.readLine("숫자를 입력해주세요 : ", (userInput) => {
      Validation.isValidInput(userInput);
      const hint = new Hint();
      hint.getHint(userInput, answerNumber);
      if (!hint.getResult()) {
        this.compareNumber(answerNumber);
      }
      this.askReplay();
    });
  }
}

class Hint {
  constructor() {
    this.strikeCount = 0;
    this.ballCount = 0;
  }

  counterStrikeBall(userInput, answerNumber) {
    const userNumber = userInput
      .toString()
      .split("")
      .map((str) => Number(str));

    for (let index = 0; index < userNumber.length; index++) {
      if (userNumber[index] === answerNumber[index]) this.strikeCount++;
      if (
        answerNumber.includes(userNumber[index]) &&
        userNumber[index] !== answerNumber[index]
      )
        this.ballCount++;
    }

    const hint = [this.strikeCount, this.ballCount];
    return hint;
  }

  getHint(userInput, answerNumber) {
    const hint = this.counterStrikeBall(userInput, answerNumber);
    const strikeCount = hint[0];
    const ballCount = hint[1];

    if (strikeCount === 0 && ballCount === 0) {
      Console.print("낫싱");
    }
    if (strikeCount === 0 && ballCount > 0) {
      Console.print(`${ballCount}볼`);
    }
    if (strikeCount > 0 && ballCount === 0) {
      Console.print(`${strikeCount}스트라이크`);
    }
    if (strikeCount > 0 && ballCount > 0) {
      Console.print(`${ballCount}볼 ${strikeCount}스트라이크`);
    }
  }

  getResult() {
    if (this.strikeCount === 3) {
      return true;
    }
    return false;
  }
}

module.exports = new Game();
