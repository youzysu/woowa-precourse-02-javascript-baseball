const { Random, Console } = require('@woowacourse/mission-utils');
const Validation = require('../src/Validation');
const Trial = require('../src/Trial');
const { MESSAGE, OPTION, ERROR } = require('../src/Materials');

class Game {
  setAnswerNumber() {
    const numbers = [];
    while (numbers.length < 3) {
      const number = Random.pickNumberInRange(1, 9);
      if (!numbers.includes(number)) {
        numbers.push(number);
      }
    }
    return numbers;
  }

  start() {
    const answerNumber = this.setAnswerNumber();
    this.compareNumber(answerNumber);
  }

  compareNumber(answerNumber) {
    Console.readLine(MESSAGE.TRIAL, userInput => {
      Validation.isValidInput(userInput);

      const trial = new Trial();
      trial.getHint(userInput, answerNumber);

      if (!trial.isCorrect()) {
        this.compareNumber(answerNumber);
      }

      if (trial.isCorrect()) {
        Console.print(MESSAGE.CLEAR);
        this.askReplay();
      }
    });
  }

  askReplay() {
    Console.readLine(MESSAGE.REPLAY, answer => {
      if (answer === OPTION.RESTART) return this.start();
      if (answer === OPTION.END) return Console.close();
      throw new Error(ERROR.NOT_OPTION);
    });
  }
}

module.exports = new Game();
