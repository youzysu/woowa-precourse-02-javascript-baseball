const MissionUtils = require("@woowacourse/mission-utils");
const THREE_DIGISTS = 3;
const GAME_START_SENTENCE = "숫자 야구 게임을 시작합니다.";
const PLAYER_INPUT_SENTENCE = "숫자를 입력해주세요 : ";

class App {
  answer;
  playerInputValue;

  play() {
    this.printGameStartText();
    this.createAnswer();
    this.getPlayerInputValue();
  }

  printGameStartText() {
    MissionUtils.Console.print(GAME_START_SENTENCE);
  }

  createAnswer() {
    const randomUniqueNumberList = MissionUtils.Random.pickUniqueNumbersInRange(
      1,
      9,
      THREE_DIGISTS
    );
    this.answer = Number(randomUniqueNumberList.join(""));
  }

  getPlayerInputValue() {
    MissionUtils.Console.readLine(PLAYER_INPUT_SENTENCE, (playerInputValue) => {
      this.checkPlayerInputValueValidation(playerInputValue);
    });
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
    return String(string).length === THREE_DIGISTS;
  }
  checkIncludesZero(string) {
    return String(string).includes("0");
  }
}

const app = new App();
console.log(app.play());
module.exports = App;
