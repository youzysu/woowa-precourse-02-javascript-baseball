const MissionUtils = require("@woowacourse/mission-utils");
const NUMBER_DIGISTS = 3;
const GAME_START_TEXT = "숫자 야구 게임을 시작합니다.";

class App {
  answer;
  playerInputValue;

  play() {
    this.printGameStartText();
    this.createAnswer();
    this.getPlayerInputValue();
  }

  printGameStartText() {
    MissionUtils.Console.print(GAME_START_TEXT);
  }

  createAnswer() {
    const randomUniqueNumberList = MissionUtils.Random.pickUniqueNumbersInRange(
      1,
      9,
      NUMBER_DIGISTS
    );
    this.answer = Number(randomUniqueNumberList.join(""));
  }

  getPlayerInputValue() {
    MissionUtils.Console.readLine(
      "숫자를 입력해주세요 : ",
      (playerInputValue) => {
        this.checkPlayerInputValueValidation(playerInputValue);
      }
    );
  }

  checkPlayerInputValueValidation(playerInputValue) {
    if (
      this.checkNumberDigits(playerInputValue) &&
      !this.checkIncludesZero(playerInputValue)
    ) {
      this.playerInputValue = Number(playerInputValue);
    } else {
      throw new Error("잘못된 입력값입니다.");
    }
  }

  checkNumberDigits(string) {
    return string.length === NUMBER_DIGISTS;
  }
  checkIncludesZero(string) {
    return string.includes("0");
  }
}

const app = new App();
console.log(app.play());
module.exports = App;
