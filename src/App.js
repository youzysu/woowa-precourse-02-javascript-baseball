const MissionUtils = require("@woowacourse/mission-utils");

const numberCheck = (number) => {
  if (number.length != 3) {
    throw "잘못된 값을 입력하셨습니다. 게임을 종료합니다.";
  }
};

const pointCounter = (receive, random) => {
  let ballStrikeCount = [0, 0];
  receive.forEach((item, index) => {
    if (item == random[index]) {
      ballStrikeCount[1] += 1;
    } else if (random.includes(Number(item))) {
      ballStrikeCount[0] += 1;
    }
    console.log(ballStrikeCount);
  });
};

class App {
  play() {
    const RANDOM_NUMBER = MissionUtils.Random.pickUniqueNumbersInRange(1, 9, 3);
    console.log(RANDOM_NUMBER);
    MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");

    MissionUtils.Console.readLine("숫자를 입력해주세요.", (number) => {
      let receivedNumber = number.split("");

      numberCheck(receivedNumber);
      pointCounter(receivedNumber, RANDOM_NUMBER);
    });
  }
}

const app = new App();
app.play();

module.exports = App;
