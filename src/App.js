const { Console } = require("@woowacourse/mission-utils");
const { MESSAGE, OPTION, ERROR_MESSAGE } = require("./libs/const.js");
const game = require("./libs/game.js");
const validation = require("./libs/validation.js");

class App {
  play() {
    this.start();
    this.progress(game.getAnswer());
  }

  start() {
    Console.print(MESSAGE.START);
  }

  progress(computerAnswer) {
    Console.readLine(MESSAGE.INPUT_NUMBER, (playerAnswer) => {
      if (!validation.checkPlayerAnswer(playerAnswer))
        game.quitWithException(ERROR_MESSAGE.ANSWER);

      const { ballCount, strikeCount } = game.getResult(
        computerAnswer,
        playerAnswer
      );
      game.printResult(ballCount, strikeCount);

      if (strikeCount !== 3) return this.progress(computerAnswer);

      return this.end();
    });
  }

  end() {
    Console.readLine(MESSAGE.INPUT_OPTION, (option) => {
      if (!validation.checkPlayerOption(option))
        game.quitWithException(ERROR_MESSAGE.OPTION);

      if (option === OPTION.RESTART) return this.restart();

      return this.exit();
    });
  }

  restart() {
    this.progress(game.getAnswer());
  }

  exit() {
    Console.close();
  }
}

const app = new App();
app.play();

module.exports = App;
