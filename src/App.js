const MissionUtils = require("@woowacourse/mission-utils");
const NUMBER_DIGISTS = 3;

class App {
  answer;

  play() {}

  printGameStartText() {
    MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");
  }

  createAnswer() {
    const randomNumberList = [];
    while (randomNumberList.length < NUMBER_DIGISTS) {
      const randomNumber = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!randomNumberList.includes(randomNumber)) {
        randomNumberList.push(randomNumber);
      }
    }
    this.answer = Number(randomNumberList.join(""));
    return this.answer;
  }
}

const app = new App();
console.log(app.createAnswer());

module.exports = App;
