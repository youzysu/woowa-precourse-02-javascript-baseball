const MissionUtils = require("@woowacourse/mission-utils");

class App {
  constructor() {
    this.message;
  }
  get computerNumber() {
    return MissionUtils.Random.pickUniqueNumbersInRange(1, 9, 3);
  }

  play() {
    MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");
    this.game();
  }

  game() {
    const COMPUTER_NUMBER = this.computerNumber;
    this.inputNumber(COMPUTER_NUMBER);
  }

  inputNumber(computerNumber) {
    MissionUtils.Console.readLine("숫자를 입력해주세요.", (number) => {
      let splitInputNumber = number.split("");
      this.validCheck(splitInputNumber);
      let point = this.pointCounter(splitInputNumber, computerNumber);
      this.message = this.answerMessageMaker(point);
      if (this.message == "retry") {
        this.inputNumber(computerNumber);
      } else if (this.message == "done") {
        this.inputNewOrFinish();
      }
    });
  }

  inputNewOrFinish() {
    MissionUtils.Console.readLine(
      "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.",
      (number) => {
        if (number == "1") {
          this.play();
        } else if (number == "2") {
          MissionUtils.Console.close();
        }
      }
    );
  }

  validCheck(number) {
    if (number.length != 3) {
      throw "잘못된 값을 입력하셨습니다. 게임을 종료합니다.";
    }
  }

  pointCounter(receive, random) {
    let ballStrikeCount = [0, 0];
    receive.forEach((item, index) => {
      if (item == random[index]) {
        ballStrikeCount[1] += 1;
      } else if (random.includes(Number(item))) {
        ballStrikeCount[0] += 1;
      }
    });
    return ballStrikeCount;
  }

  answerMessageMaker(arr) {
    if (arr[0] == 0 && arr[1] == 0) {
      MissionUtils.Console.print("낫싱");
      return "retry";
    } else if (arr[1] == 3) {
      MissionUtils.Console.print(
        "3스트라이크\n3개의 숫자를 모두 맞히셨습니다! 게임 종료"
      );
      return "done";
    } else if (arr[0] == 0) {
      MissionUtils.Console.print(arr[1] + "스트라이크");
      return "retry";
    } else if (arr[1] == 0) {
      MissionUtils.Console.print(arr[0] + "볼");
      return "retry";
    } else {
      MissionUtils.Console.print(arr[0] + "볼" + " " + arr[1] + "스트라이크");
      return "retry";
    }
  }
}
module.exports = App;

const app = new App();
app.play();
