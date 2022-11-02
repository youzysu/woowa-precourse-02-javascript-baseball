const MissionUtils = require("@woowacourse/mission-utils");

class App {
  play() {
    const RANDOM_NUMBER = MissionUtils.Random.pickUniqueNumbersInRange(1, 9, 3);
    MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");
    let receivedNumber;
    MissionUtils.Console.readLine("숫자를 입력해주세요.", (number) => {
      receivedNumber = number;
      console.log(receivedNumber);
    });
  }
}

const app = new App();
app.play();

module.exports = App;
