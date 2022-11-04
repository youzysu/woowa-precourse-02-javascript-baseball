const { Random, Console } = require("@woowacourse/mission-utils");

const { PLAYER_INPUT_SENTENCE, THREE_DIGISTS } = require("./constants");
const Validation = require("./Validation");

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
    while (randomUniqueNumberList.length < THREE_DIGISTS) {
      const randomNumber = Random.pickNumberInRange(1, 9);
      if (!randomUniqueNumberList.includes(randomNumber)) {
        randomUniqueNumberList.push(randomNumber);
      }
    }
    this.answer = Number(randomUniqueNumberList.join(""));
  }

  getPlayerInputValue() {
    Console.readLine(PLAYER_INPUT_SENTENCE, (playerInputValue) => {
      console.log(this.answer, "정답");
      console.log(playerInputValue, "플레이어 입력값");
      if (Validation.passAllValidationChecks(playerInputValue)) {
        this.playerInputValue = Number(playerInputValue);
      }
      this.compareNumbers(this.answer, this.playerInputValue);
      this.getPlayerInputValue();
    });
  }

  gameReStart() {
    Console.readLine(
      "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.",
      (number) => {
        if (Number(number) === 1) {
          this.gameStart();
        } else {
          Console.close();
        }
      }
    );
  }

  compareNumbers(answer, playerInputValue) {
    const answerNumberList = String(answer).split("");
    const playerNumberList = String(playerInputValue).split("");
    const allNumberList = [...answerNumberList, ...playerNumberList];
    const deduplicatedAllNumberList = [...new Set(allNumberList)];

    if (answer === playerInputValue) {
      Console.print("3스트라이크");
      Console.print("3개의 숫자를 모두 맞히셨습니다! 게임 종료");
      this.gameReStart();
      return;
    }
    if (deduplicatedAllNumberList.length === THREE_DIGISTS * 2) {
      Console.print("낫싱");
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
      Console.print(ballSentence);
      return;
    }
    if (strike && !ball) {
      Console.print(strikeSentence);
      return;
    }
    Console.print(`${ballSentence} ${strikeSentence}`);
  }
}

module.exports = BaseBallGame;
