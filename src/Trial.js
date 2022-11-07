const { Console } = require('@woowacourse/mission-utils');
const { RESULT } = require('../src/Materials');

class Trial {
  constructor() {
    this.strikeCount = 0;
    this.ballCount = 0;
  }

  counterStrikeBall(userInput, answerNumber) {
    const userNumber = userInput
      .toString()
      .split('')
      .map(str => Number(str));

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
      Console.print(RESULT.NOTHING);
    }
    if (strikeCount === 0 && ballCount > 0) {
      Console.print(`${ballCount}` + RESULT.BALL);
    }
    if (strikeCount > 0 && ballCount === 0) {
      Console.print(`${strikeCount}` + RESULT.STRIKE);
    }
    if (strikeCount > 0 && ballCount > 0) {
      Console.print(
        `${ballCount}` + RESULT.BALL + ` ${strikeCount}` + RESULT.STRIKE
      );
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
