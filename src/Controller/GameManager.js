const OutputView = require('../View/OutputView');
const InputView = require('../View/InputView');
const Validator = require('../Model/Validator');
const Quit = require('../libs/Quit');
const { MESSAGE, OPTION } = require('../libs/const');
const { playerAnswer } = require('../Model/Validator');

class GameManager {
  #computerAnswer;

  constructor(compuerAnswer) {
    this.#computerAnswer = compuerAnswer;
    this.start();
  }

  start() {
    OutputView.printMessage(MESSAGE.START);
    this.play();
  }

  play() {
    InputView.readPlayerAnswer((playerAnswer) => {
      Validator.playerAnswer(playerAnswer);

      const { ballCount, strikeCount } =
        this.#computerAnswer.comparePlayerAnswer(playerAnswer);

      OutputView.printResult(ballCount, strikeCount);

      this.actionAboutPlayerAnswer(playerAnswer);
    });
  }

  actionAboutPlayerAnswer(playerAnswer) {
    if (this.#computerAnswer.isThreeStrike(playerAnswer)) return this.end();

    return this.play();
  }

  end() {
    InputView.readCommand((option) => {
      Validator.playerOption(option);

      this.actionAboutCommand(option);
    });
  }

  actionAboutCommand(option) {
    if (option === OPTION.RESTART) return this.restart();

    return Quit.game();
  }

  restart() {
    this.#computerAnswer.resetValue();
    this.play();
  }
}

module.exports = GameManager;
