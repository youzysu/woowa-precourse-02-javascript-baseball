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
  });
  return ballStrikeCount;
};

const answerMessageMaker = (arr) => {
  if (arr[0] == 0 && arr[1] == 0) {
    MissionUtils.Console.print("낫싱");
  } else if (arr[1] == 3) {
    MissionUtils.Console.print(
      "3스트라이크\n3개의 숫자를 모두 맞히셨습니다! 게임 종료"
    );
  } else if (arr[0] == 0) {
    MissionUtils.Console.print(arr[1] + "스트라이크");
  } else if (arr[1] == 0) {
    MissionUtils.Console.print(arr[0] + "볼");
  } else {
    MissionUtils.Console.print(arr[0] + "볼" + arr[1] + "스트라이크");
  }
};

class App {
  play() {
    const RANDOM_NUMBER = MissionUtils.Random.pickUniqueNumbersInRange(1, 9, 3);
    console.log(RANDOM_NUMBER);
    MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");

    MissionUtils.Console.readLine("숫자를 입력해주세요.", (number) => {
      let splitInputNumber = number.split("");

      numberCheck(splitInputNumber);

      let point = pointCounter(splitInputNumber, RANDOM_NUMBER);
      answerMessageMaker(point);
    });
  }
}
module.exports = App;

const app = new App();
app.play();
