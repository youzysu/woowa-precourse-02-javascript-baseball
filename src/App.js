const MissionUtils = require("@woowacourse/mission-utils");
const {
  RANGE_OF_COMPUTER_NUMBER,
  GAME_GUIDE_MESSAGE,
  GAME_RESULT,
} = require("./Constant");

class App {
  constructor() {
    this.message;
  }
  get computerNumber() {
    return MissionUtils.Random.pickUniqueNumbersInRange(
      RANGE_OF_COMPUTER_NUMBER.MINIMUM,
      RANGE_OF_COMPUTER_NUMBER.MAXIMUM,
      RANGE_OF_COMPUTER_NUMBER.LENGTH
    );
  }

  play() {
    MissionUtils.Console.print(GAME_GUIDE_MESSAGE.START_MESSAGE);
    this.game();
  }

  game() {
    const COMPUTER_NUMBER = this.computerNumber;
    this.inputNumber(COMPUTER_NUMBER);
  }

  inputNumber(computerNumber) {
    MissionUtils.Console.readLine(
      GAME_GUIDE_MESSAGE.INPUT_MESSAGE,
      (number) => {
        let splitInputNumber = number.split("");
        this.validCheck(splitInputNumber);
        let point = this.pointCounter(splitInputNumber, computerNumber);
        this.message = this.answerMessageMaker(point);
        if (this.message == "retry") {
          this.inputNumber(computerNumber);
        } else if (this.message == "done") {
          this.inputNewOrFinish();
        }
      }
    );
  }

  inputNewOrFinish() {
    MissionUtils.Console.readLine(
      GAME_GUIDE_MESSAGE.NEW_OR_CLOSE_MESSAGE,
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
      throw GAME_RESULT.ERROR;
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
      MissionUtils.Console.print(GAME_RESULT.NOTHING);
      return "retry";
    } else if (arr[1] == 3) {
      MissionUtils.Console.print(GAME_RESULT.THREE_STRIKE);
      return "done";
    } else if (arr[0] == 0) {
      MissionUtils.Console.print(arr[1] + GAME_RESULT.STRIKE);
      return "retry";
    } else if (arr[1] == 0) {
      MissionUtils.Console.print(arr[0] + GAME_RESULT.BALL);
      return "retry";
    } else {
      MissionUtils.Console.print(
        arr[0] + GAME_RESULT.BALL + " " + arr[1] + GAME_RESULT.STRIKE
      );
      return "retry";
    }
  }
}
module.exports = App;

const app = new App();
app.play();
