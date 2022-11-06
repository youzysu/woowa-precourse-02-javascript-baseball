const MissionUtils = require("@woowacourse/mission-utils");
const {
  RANGE_OF_COMPUTER_NUMBER,
  GAME_GUIDE_MESSAGE,
  GAME_RESULT,
} = require("./Constant");

class App {
  get computerNumber() {
    let arr = [];
    for (let i = 0; i < RANGE_OF_COMPUTER_NUMBER.LENGTH; i++) {
      arr.push(
        MissionUtils.Random.pickNumberInRange(
          RANGE_OF_COMPUTER_NUMBER.MINIMUM,
          RANGE_OF_COMPUTER_NUMBER.MAXIMUM
        )
      );
    }
    return arr;
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
        let ballStrike = this.ballStrikeCounter(
          splitInputNumber,
          computerNumber
        );

        let response = this.gameResult(ballStrike);
        if (response == "incorrect") {
          this.inputNumber(computerNumber);
        } else if (response == "correct") {
          this.inputNewOrFinish();
        }
      }
    );
  }

  inputNewOrFinish() {
    MissionUtils.Console.readLine(
      GAME_GUIDE_MESSAGE.NEW_OR_CLOSE_MESSAGE,
      (answer) => {
        if (answer == "1") {
          this.play();
        } else if (answer == "2") {
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

  ballStrikeCounter(receive, random) {
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

  gameResult(arr) {
    if (arr[0] == 0 && arr[1] == 0) {
      MissionUtils.Console.print(GAME_RESULT.NOTHING);
      return "incorrect";
    } else if (arr[1] == 3) {
      MissionUtils.Console.print(GAME_RESULT.THREE_STRIKE);
      return "correct";
    } else if (arr[0] == 0) {
      MissionUtils.Console.print(arr[1] + GAME_RESULT.STRIKE);
      return "incorrect";
    } else if (arr[1] == 0) {
      MissionUtils.Console.print(arr[0] + GAME_RESULT.BALL);
      return "incorrect";
    } else {
      MissionUtils.Console.print(
        arr[0] + GAME_RESULT.BALL + " " + arr[1] + GAME_RESULT.STRIKE
      );
      return "incorrect";
    }
  }
}
module.exports = App;

const app = new App();
app.play();
