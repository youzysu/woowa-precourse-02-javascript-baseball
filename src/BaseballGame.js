const { Random, Console } = require("@woowacourse/mission-utils");
const { THREE_DIGISTS, BASEBALL, GAME_SENTENCE } = require("./constants");
const { removeListDuplication, throwErrorWrongInputValue } = require("./utils");
const Validation = require("./Validation");

class BaseBallGame {
  answer;
  playerInputValue;

  start() {
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
      this.compareAnswers();
      this.getPlayerInputValue();
    });
  }

  restart() {
    Console.readLine(GAME_SENTENCE.RESTART, (number) => {
      if (Number(number) === 1) {
        this.start();
        return;
      }
      if (Number(number) === 2) {
        Console.close();
        return;
      }
      throwErrorWrongInputValue();
    });
  }

  compareAnswers() {
    const answerNumbers = String(this.answer).split("");
    const playerNumbers = String(this.playerInputValue).split("");
    const allNumbers = [...answerNumbers, ...playerNumbers];

    if (this.answer === this.playerInputValue) {
      Console.print(`3${BASEBALL.STRIKE}`);
      Console.print(GAME_SENTENCE.END);
      this.restart();
      return;
    }
    if (removeListDuplication(allNumbers).length === THREE_DIGISTS * 2) {
      Console.print(BASEBALL.NOTHING);
      return;
    }

    const baseballGameResult = playerNumbers.reduce(
      (baseballGameResult, playerNumber, playerNumberIndex) => {
        const answerNumberIndex = answerNumbers.indexOf(playerNumber);
        if (answerNumberIndex !== -1) {
          if (answerNumberIndex === playerNumberIndex) {
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
    this.printBallStrikeSentence(baseballGameResult);
  }

  printBallStrikeSentence({ strike, ball }) {
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

const baseballGame = new BaseBallGame();
module.exports = baseballGame;
