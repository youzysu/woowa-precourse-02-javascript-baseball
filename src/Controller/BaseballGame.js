const { Console } = require('@woowacourse/mission-utils');
const Utils = require('../Util/Utils');
const InputView = require('../View/InputView');
const OutputView = require('../View/OutputView');
const Validator = require('../Model/Validator');
const { OPTION, NUMBER } = require('../Util/Constants');
const Computer = require('../Model/Computer');

class BaseballGame {
  #computer;

  constructor(computer) {
    this.#computer = new Computer();
  }

  start() {
    OutputView.printStart();
    this.setGameNumber();
  }

  setGameNumber() {
    this.#computer.setCorrectNumbers();
    this.requestNumber();
  }

  requestNumber() {
    InputView.readNumber((userInput) => {
      const userNumbers = Utils.convertNumber(userInput);
      Validator.validateNumber(userNumbers);
      const trial = this.#computer.compareNumber(userNumbers);
      this.showResult(trial);
    });
  }

  showResult(trial) {
    OutputView.printResult(trial);
    this.showNext(trial);
  }

  showNext(trial) {
    if (trial.strike === NUMBER.COUNT) {
      OutputView.printSuccess();
      return this.requestRetry();
    }
    this.requestNumber();
  }

  requestRetry() {
    InputView.readCommand((userInput) => {
      Validator.validateOption(userInput);
      if (userInput === OPTION.RESTART) return this.setGameNumber();
      if (userInput === OPTION.END) return this.end();
    });
  }

  end() {
    Console.close();
  }
}

module.exports = BaseballGame;

