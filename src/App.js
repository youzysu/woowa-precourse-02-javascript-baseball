const { Console } = require("@woowacourse/mission-utils");
const game = require("./libs/game.js");
const validation = require("./libs/validation.js");

class App {
  play() {
    this.start();
    this.progress(game.getAnswer());
  }

  start() {
    Console.print("숫자 야구 게임을 시작합니다.");
  }

  progress(answer) {
    Console.readLine("숫자를 입력해주세요 : ", (input) => {
      if (!validation.playerInput(input)) return game.quitWithException();

      const { ball, strike } = game.getResult(answer, input);
      game.printResult(ball, strike);

      if (strike !== 3) return this.progress(answer);

      this.end();
    });
  }

  end() {
    Console.readLine(
      "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n",
      (input) => {
        if (!validation.option(input)) return game.quitWithException();

        if (input === "1") return this.progress(game.getAnswer());

        this.exit();
      }
    );
  }

  exit() {
    Console.close();
  }
}

const app = new App();
app.play();

module.exports = App;
