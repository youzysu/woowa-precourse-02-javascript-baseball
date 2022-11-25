const { Random, Console } = require("@woowacourse/mission-utils");
const { ballStrike } = require("./BallStrike");
const { COMMAND, THREE_DIGISTS, COUNT, GAME_SENTENCE } = require("./constants");
const { removeListDuplication, throwErrorWrongInputValue } = require("./utils");
const Validation = require("./Validation");

class BaseBallGame {
  answer; // Number Set이라고 가정
  playerInputValue; // Number[]라고 가정
  count = {
    ball: 0,
    strike: 0,
  };

  // 금요일은 App에 control 옮기기

  setCount(playerInputValue) {
    playerInputValue.forEach((number, index) => {
      if (!this.answer.has(number)) return;
      const answer = [...this.answer];
      if (answer[index] === number) {
        return (this.count.strike += 1);
      }
      this.count.ball += 1;
    });
  }

  start() {
    this.createAnswer();
    this.getPlayerInputValue();
  }

  createAnswer() {
    const randomUniqueNumberList = new Set();
    while (randomUniqueNumberList.size < THREE_DIGISTS) {
      const randomNumber = Random.pickNumberInRange(1, 9);
      randomUniqueNumberList.add(randomNumber);
    }
    this.answer = Number([...randomUniqueNumberList].join("")); // 그냥 answer에 Set으로 저장해도 될 것 같은데
  }

  getPlayerInputValue() {
    Console.readLine(GAME_SENTENCE.PLAYER_INPUT, (playerInputValue) => {
      console.log(this.answer, "정답");
      if (Validation.passAllValidationChecks(playerInputValue)) {
        this.playerInputValue = Number(playerInputValue);
      }
      this.compareAnswers();
      this.getPlayerInputValue();
    });
  }

  restart() {
    Console.readLine(GAME_SENTENCE.RESTART, (number) => {
      if (Number(number) === COMMAND.RESTART) {
        this.start();
        return;
      }
      if (Number(number) === COMMAND.END) {
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
      Console.print(COUNT.STRIKE(3));
      Console.print(GAME_SENTENCE.END);
      this.restart();
      return;
    }
    if (removeListDuplication(allNumbers).length === THREE_DIGISTS * 2) {
      Console.print(COUNT.NOTHING);
      return;
    }

    ballStrike.count = { playerNumbers, answerNumbers };
    ballStrike.printResultSentence();
  }
}

const baseballGame = new BaseBallGame();
module.exports = baseballGame;
