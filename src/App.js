const { Console } = require("@woowacourse/mission-utils");
const BaseballGame = require("./BaseballGame");
const { COMMAND } = require("./constants/game");

const InputView = require("./view/InputView");
const OutputView = require("./view/OutputView");

class App {
  constructor() {
    this.baseballGame = new BaseballGame();
  }

  play() {
    OutputView.printStart();
    this.start();
  }

  start() {
    this.baseballGame.setAnswerNumbers();

    this.readBridgeSize();
  }

  readBridgeSize() {
    InputView.readBridgeSize(this.actionBrridgeSize.bind(this));
  }

  actionBrridgeSize(threeDigistsNumber) {
    this.baseballGame.setPlayerNumbers(threeDigistsNumber);

    this.compareAnswer();
  }

  compareAnswer() {
    OutputView.printCountResult(this.baseballGame.getCount());

    if (this.baseballGame.isAnswer()) {
      OutputView.printGameSuccess();
      this.readGameCommand();
      return;
    }

    this.readBridgeSize();
  }

  readGameCommand() {
    InputView.readGameCommand(this.actionGameCommand.bind(this));
  }

  actionGameCommand(gameCommand) {
    if (Number(gameCommand) === COMMAND.restart) {
      this.start();
      return;
    }
    this.quit();
  }

  quit() {
    Console.close();
  }
}

const app = new App();
app.play();
module.exports = App;
