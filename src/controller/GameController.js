const MissionUtils = require("@woowacourse/mission-utils");

const { MESSAGE } = require("../constant/Message");
const { COMMAND } = require("../constant/Constant");
const RandomNumberMaker = require("../utils/RandomNumberMaker");
const InputView = require("../views/InputView");
const OutputView = require("../views/OutputView");
const Validate = require("../utils/Validate");

class GameController {
  #computerNumber;
  #userInputNumber;
  #ball = 0;
  #strike = 0;

  startGame() {
    MissionUtils.Console.print(MESSAGE.START_GAME);
    this.game();
  }

  game() {
    this.#computerNumber = RandomNumberMaker();
    this.inputNumber();
  }

  inputNumber() {
    InputView.readNumber((number) =>
      this.validCheck(number.split("").map(Number))
    );
  }

  validCheck(number) {
    Validate.checkUserInput(number);
    this.#userInputNumber = number;

    this.countBallStrike();
  }

  countBallStrike() {
    this.#userInputNumber.forEach((item, index) => {
      if (item === this.#computerNumber[index]) {
        this.#strike += 1;
      } else if (this.#computerNumber.includes(Number(item))) {
        this.#ball += 1;
      }
    });

    this.printGameResult();
  }

  printGameResult() {
    OutputView.printResult(this.#ball, this.#strike);

    if (this.#strike === 3) {
      return this.inputCommand();
    }
    return this.continueGame();
  }

  inputCommand() {
    InputView.readCommand((command) => {
      Validate.checkCommand(command);
      if (command == COMMAND.RESTART) {
        return this.restartGame();
      }
      return MissionUtils.Console.close();
    });
  }
  restartGame() {
    this.#ball = 0;
    this.#strike = 0;
    this.game();
  }

  continueGame() {
    this.#ball = 0;
    this.#strike = 0;
    this.inputNumber();
  }
}
module.exports = GameController;
