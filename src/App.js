const MissionUtils = require("@woowacourse/mission-utils");
const NUMBER_DIGISTS = 3;

class App {
  answer;

  play() {}

  printGameStartText() {
    MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");
  }

  createAnswer() {
    const randomUniqueNumberList = MissionUtils.Random.pickUniqueNumbersInRange(
      1,
      9,
      3
    );
    this.answer = Number(randomUniqueNumberList.join(""));
    return this.answer;
  }
}

const app = new App();
console.log(app.createAnswer());

module.exports = App;
