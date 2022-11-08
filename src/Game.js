const Trial = require('../src/Trial');
const Validation = require('../src/Validation');
const { MESSAGE, OPTION, ERROR } = require('../src/Materials');
const { Random, Console } = require('@woowacourse/mission-utils');

class Game {
  setCorrectNumber() {
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
    const correctNumber = this.setCorrectNumber();
    this.getResult(correctNumber);
  }

  getResult(correctNumber) {
    Console.readLine(MESSAGE.TRIAL, userInput => {
      Validation.isValidInput(userInput);

      const userTrial = new Trial();
      userTrial.getHint(userInput, correctNumber);

      if (!userTrial.isCorrect()) {
        this.getResult(correctNumber);
      }

      if (userTrial.isCorrect()) {
        Console.print(MESSAGE.SUCCESS);
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
