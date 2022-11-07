const { Console } = require("@woowacourse/mission-utils");
const { MESSAGE, OPTION } = require("./libs/const.js");
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

  progress(answer) {
    Console.readLine(MESSAGE.INPUT_NUMBER, (input) => {
      if (!validation.playerInput(input)) game.quitWithException();

      const { ball, strike } = game.getResult(answer, input);
      game.printResult(ball, strike);

      if (strike !== 3) return this.progress(answer);

      return this.end();
    });
  }

  end() {
    Console.readLine(MESSAGE.INPUT_OPTION, (input) => {
      if (!validation.option(input)) game.quitWithException();

      if (input === OPTION.RESTART) return this.restart();

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
