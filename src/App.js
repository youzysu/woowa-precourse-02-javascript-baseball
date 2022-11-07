const MissionUtils = require("@woowacourse/mission-utils");
const {
  RANGE_OF_COMPUTER_NUMBER,
  GAME_GUIDE_MESSAGE,
  GAME_RESULT,
  RESPONSE,
} = require("./Constant");

class App {
  get computerNumber() {
    let pickedNumber = [];
    while (pickedNumber.length < RANGE_OF_COMPUTER_NUMBER.LENGTH) {
      let number = MissionUtils.Random.pickNumberInRange(
        RANGE_OF_COMPUTER_NUMBER.MINIMUM,
        RANGE_OF_COMPUTER_NUMBER.MAXIMUM
      );
      if (!pickedNumber.includes(number)) pickedNumber.push(number);
    }
    return pickedNumber;
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
        if (response) {
          this.restartOrFinish();
        } else {
          this.inputNumber(computerNumber);
        }
      }
    );
  }

  restartOrFinish() {
    MissionUtils.Console.readLine(
      GAME_GUIDE_MESSAGE.NEW_OR_CLOSE_MESSAGE,
      (answer) => {
        if (answer == RESPONSE.RESTART) {
          this.play();
        } else if (answer == RESPONSE.FINISH) {
          MissionUtils.Console.close();
        }
      }
    );
  }

  validCheck(userInputNumber) {
    this.isLengthValid(userInputNumber);
    this.isDuplicated(userInputNumber);
  }
  isLengthValid(userInputNumber) {
    if (userInputNumber.length != 3) {
      throw GAME_RESULT.ERROR;
    }
  }
  isDuplicated(userInputNumber) {
    let removeDuplication = new Set(userInputNumber);
    removeDuplication = [...removeDuplication];
    if (removeDuplication.length != 3) {
      throw GAME_RESULT.ERROR;
    }
  }

  ballStrikeCounter(userInputNumber, computerNumber) {
    let ballStrikeCount = [0, 0];
    userInputNumber.forEach((item, index) => {
      if (item == computerNumber[index]) {
        ballStrikeCount[1] += 1;
      } else if (computerNumber.includes(Number(item))) {
        ballStrikeCount[0] += 1;
      }
    });
    return ballStrikeCount;
  }

  gameResult(ballStrike) {
    if (ballStrike[0] == 0 && ballStrike[1] == 0) {
      MissionUtils.Console.print(GAME_RESULT.NOTHING);
      return false;
    } else if (ballStrike[1] == 3) {
      MissionUtils.Console.print(GAME_RESULT.THREE_STRIKE);
      return true;
    } else if (ballStrike[0] == 0) {
      MissionUtils.Console.print(ballStrike[1] + GAME_RESULT.STRIKE);
      return false;
    } else if (ballStrike[1] == 0) {
      MissionUtils.Console.print(ballStrike[0] + GAME_RESULT.BALL);
      return false;
    } else {
      MissionUtils.Console.print(
        ballStrike[0] +
          GAME_RESULT.BALL +
          " " +
          ballStrike[1] +
          GAME_RESULT.STRIKE
      );
      return false;
    }
  }
}
module.exports = App;

const app = new App();
app.play();
