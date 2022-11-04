const MissionUtils = require("@woowacourse/mission-utils");

const { PLAYER_INPUT_SENTENCE, THREE_DIGISTS } = require("./constants");

class BaseBallGame {
  answer;
  playerInputValue;

  constructor() {
    this.gameStart();
  }

  gameStart() {
    this.createAnswer();
    this.getPlayerInputValue();
  }

  createAnswer() {
    const randomUniqueNumberList = [];
    while (randomUniqueNumberList.length < 3) {
      const number = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!randomUniqueNumberList.includes(number)) {
        randomUniqueNumberList.push(number);
      }
    }
    this.answer = Number(randomUniqueNumberList.join(""));
  }

  getPlayerInputValue() {
    MissionUtils.Console.readLine(PLAYER_INPUT_SENTENCE, (playerInputValue) => {
      this.checkPlayerInputValueValidation(playerInputValue);
      this.compareNumbers(this.answer, this.playerInputValue);
      this.getPlayerInputValue();
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

  gameReStart() {
    MissionUtils.Console.readLine(
      "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.",
      (number) => {
        if (Number(number) === 1) {
          this.gameStart();
        } else {
          MissionUtils.Console.close();
        }
      }
    );
  }

  compareNumbers(answer, playerInputValue) {
    console.log(answer);
    const answerNumberList = String(answer).split("");
    const playerNumberList = String(playerInputValue).split("");
    const allNumberList = [...answerNumberList, ...playerNumberList];
    const deduplicatedAllNumberList = [...new Set(allNumberList)];

    if (answer === playerInputValue) {
      MissionUtils.Console.print("3스트라이크");
      MissionUtils.Console.print("3개의 숫자를 모두 맞히셨습니다! 게임 종료");
      this.gameReStart();
      return;
    }
    if (deduplicatedAllNumberList.length === THREE_DIGISTS * 2) {
      MissionUtils.Console.print("낫싱");
      return;
    }

    const baseballGameResult = playerNumberList.reduce(
      (baseballGameResult, targetPlayerNumber, targetPlayerNumberIndex) => {
        const indexOf = answerNumberList.indexOf(targetPlayerNumber);
        if (indexOf !== -1) {
          if (indexOf === targetPlayerNumberIndex) {
            baseballGameResult["strike"]
              ? baseballGameResult["strike"]++
              : (baseballGameResult["strike"] = 1);
          } else {
            baseballGameResult["ball"]
              ? baseballGameResult["ball"]++
              : (baseballGameResult["ball"] = 1);
          }
        }
        return baseballGameResult;
      },
      {}
    );
    this.makeBallStrikeSentence(baseballGameResult);
  }

  makeBallStrikeSentence({ strike, ball }) {
    const ballSentence = ball ? `${ball}볼` : "";
    const strikeSentence = strike ? `${strike}스트라이크` : "";
    if (ball && !strike) {
      MissionUtils.Console.print(ballSentence);
      return;
    }
    if (strike && !ball) {
      MissionUtils.Console.print(strikeSentence);
      return;
    }
    MissionUtils.Console.print(`${ballSentence} ${strikeSentence}`);
  }
}

module.exports = BaseBallGame;
