const MissionUtils = require("@woowacourse/mission-utils");
const BaseBallGame = require("./BaseballGame");

const { GAME_START_SENTENCE } = require("./constants");

class App {
  play() {
    MissionUtils.Console.print(GAME_START_SENTENCE);
    new BaseBallGame();
  }
}

const app = new App();
app.play();
module.exports = App;
