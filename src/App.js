const MissionUtils = require("@woowacourse/mission-utils");
const {
  GAME_START_SENTENCE,
  PLAYER_INPUT_SENTENCE,
  THREE_DIGISTS,
} = require("./constants");

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

  compareNumbers(answer, playerInputValue) {
    if (answer === playerInputValue) return "3개의 숫자를 모두 맞히셨습니다!";
    const answerNumberList = String(answer).split("");
    const playerNumberList = String(playerInputValue).split("");
    const allNumberList = [...answerNumberList, ...playerNumberList];
    const deduplicatedAllNumberList = [...new Set(allNumberList)];
    if (deduplicatedAllNumberList.length === THREE_DIGISTS * 2) return "낫싱";
  }
}

const app = new App();
console.log(app.play());
module.exports = App;
