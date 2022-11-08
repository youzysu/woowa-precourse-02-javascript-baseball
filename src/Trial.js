const { RESULT } = require('../src/Materials');
const { Console } = require('@woowacourse/mission-utils');

class Trial {
  constructor() {
    this.strikeCount = 0;
    this.ballCount = 0;
  }

  countStrikeBall(userInput, correctNumber) {
    const userNumber = userInput.split('').map(str => Number(str));

    for (let index = 0; index < userNumber.length; index++) {
      if (userNumber[index] === correctNumber[index]) this.strikeCount++;
      if (
        correctNumber.includes(userNumber[index]) &&
        userNumber[index] !== correctNumber[index]
      )
        this.ballCount++;
    }
  }

  getHint(userInput, correctNumber) {
    this.countStrikeBall(userInput, correctNumber);

    if (this.strikeCount === 0 && this.ballCount === 0) {
      Console.print(RESULT.NOTHING);
    }
    if (this.strikeCount === 0 && this.ballCount > 0) {
      Console.print(`${this.ballCount}` + RESULT.BALL);
    }
    if (this.strikeCount > 0 && this.ballCount === 0) {
      Console.print(`${this.strikeCount}` + RESULT.STRIKE);
    }
    if (this.strikeCount > 0 && this.ballCount > 0) {
      Console.print(`${this.ballCount}` + RESULT.BALL +` ${this.strikeCount}` + RESULT.STRIKE);
    }
  }

  isCorrect() {
    if (this.strikeCount === 3) {
      return true;
    }
    return false;
  }
}

module.exports = Trial;
