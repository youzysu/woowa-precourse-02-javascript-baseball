const MissionUtils = require("@woowacourse/mission-utils");
const BaseBallGame = require("./BaseballGame");

const { GAME_START_SENTENCE } = require("./constants");

class App {
  play() {
    this.printGameStartSentence();
    new BaseBallGame();
  }

  printGameStartSentence() {
    MissionUtils.Console.print(GAME_START_SENTENCE);
  }
}

const app = new App();
app.play();
module.exports = App;
