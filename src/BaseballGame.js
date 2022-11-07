const { Random, Console } = require("@woowacourse/mission-utils");
const { THREE_DIGISTS, BASEBALL, GAME_SENTENCE } = require("./constants");
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
    Console.readLine(GAME_SENTENCE.PLAYER_INPUT, (playerInputValue) => {
      console.log(this.answer, "정답");
      console.log(playerInputValue, "플레이어 입력값");
      if (Validation.passAllValidationChecks(playerInputValue)) {
        this.playerInputValue = Number(playerInputValue);
      }
      this.compareAnswers(this.answer, this.playerInputValue);
      this.getPlayerInputValue();
    });
  }

  gameReStart() {
    Console.readLine(GAME_SENTENCE.RESTART, (number) => {
      if (Number(number) === 1) {
        this.gameStart();
      } else {
        Console.close();
      }
    });
  }

  compareAnswers(answer, playerInputValue) {
    const answerNumberList = String(answer).split("");
    const playerNumberList = String(playerInputValue).split("");
    const allNumberList = [...answerNumberList, ...playerNumberList];
    const deduplicatedAllNumberList = [...new Set(allNumberList)];

    if (answer === playerInputValue) {
      Console.print(`3${BASEBALL.STRIKE}`);
      Console.print(GAME_SENTENCE.END);
      this.gameReStart();
      return;
    }
    if (deduplicatedAllNumberList.length === THREE_DIGISTS * 2) {
      Console.print(BASEBALL.NOTHING);
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
    const ballSentence = ball ? `${ball}${BASEBALL.BALL}` : "";
    const strikeSentence = strike ? `${strike}${BASEBALL.STRIKE}` : "";
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
