const MissionUtils = require("@woowacourse/mission-utils");

const numberCheck = (number) => {
  if (number.split("").length != 3) {
    throw "잘못된 값을 입력하셨습니다. 게임을 종료합니다.";
  }
};
class App {
  play() {
    const RANDOM_NUMBER = MissionUtils.Random.pickUniqueNumbersInRange(1, 9, 3);

    MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");

    MissionUtils.Console.readLine("숫자를 입력해주세요.", (number) => {
      let receivedNumber = number;
      numberCheck(receivedNumber);
    });
  }
}

const app = new App();
app.play();

module.exports = App;
