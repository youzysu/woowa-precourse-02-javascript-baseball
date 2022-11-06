const { Console } = require("@woowacourse/mission-utils");
const Game = require("../src/Game");

class App {
  play() {
    Console.print("숫자 야구 게임을 시작합니다.");
    Game.start();
  }
}

module.exports = App;
