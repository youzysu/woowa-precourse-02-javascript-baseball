const { Console } = require('@woowacourse/mission-utils');
const { MESSAGE, OPTION, ERROR_MESSAGE } = require('./libs/const.js');
const Quit = require('./libs/Quit.js');
const ComputerAnswer = require('./Model/ComputerAnswer.js');
const Validator = require('./Model/Validator.js');
const InputView = require('./View/InputView.js');
const OutputView = require('./View/OutputView.js');

class App {
  #computerAnswer;

  constructor() {
    this.#computerAnswer = new ComputerAnswer();
  }

  play() {
    this.start();
    this.progress();
  }

  start() {
    OutputView.printMessage(MESSAGE.START);
  }

  progress() {
    InputView.readPlayerAnswer((playerAnswer) => {
      if (!Validator.playerAnswer(playerAnswer))
        Quit.withException(ERROR_MESSAGE.ANSWER);

      const { ballCount, strikeCount } =
        this.#computerAnswer.comparePlayerAnswer(playerAnswer);

      OutputView.printResult(ballCount, strikeCount);

      if (strikeCount !== 3) return this.progress();

      return this.end();
    });
  }

  end() {
    InputView.readCommand((option) => {
      if (!Validator.playerOption(option))
        Quit.withException(ERROR_MESSAGE.OPTION);

      if (option === OPTION.RESTART) return this.restart();

      return Quit.game();
    });
  }

  restart() {
    this.#computerAnswer.resetValue();
    this.progress();
  }
}

const app = new App();
app.play();

module.exports = App;
