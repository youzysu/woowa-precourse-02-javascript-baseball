const MissionUtils = require("@woowacourse/mission-utils");
const NUMBER_DIGISTS = 3;
const GAME_START_TEXT = "숫자 야구 게임을 시작합니다.";

class App {
  answer;

  play() {
    this.printGameStartText();
    this.createAnswer();
  }

  printGameStartText() {
    MissionUtils.Console.print(GAME_START_TEXT);
  }

  createAnswer() {
    const randomUniqueNumberList = MissionUtils.Random.pickUniqueNumbersInRange(
      1,
      9,
      NUMBER_DIGISTS
    );
    this.answer = Number(randomUniqueNumberList.join(""));
    console.log(this.answer);
  }
}

const app = new App();
console.log(app.createAnswer());

module.exports = App;
