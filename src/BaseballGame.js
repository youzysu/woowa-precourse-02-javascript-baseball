const { Random } = require("@woowacourse/mission-utils");
const { THREE_DIGISTS } = require("./constants");

class BaseBallGame {
  answer; // Number Set이라고 가정
  playerInputValue; // Number[]라고 가정
  count = {
    ball: 0,
    strike: 0,
  };

  setCount() {
    this.count = {
      ball: 0,
      strike: 0,
    };
    this.playerInputValue.forEach((number, index) => {
      if (!this.answer.has(number)) return;
      const answer = [...this.answer];
      if (answer[index] === number) {
        return (this.count.strike += 1);
      }
      this.count.ball += 1;
    });
  }

  setPlayerInputValue(playerInputValue) {
    this.playerInputValue = playerInputValue.split("").map(Number);
  }

  isAnswer() {
    return this.count.strike === 3;
  }

  createAnswer() {
    const randomUniqueNumberList = new Set();
    while (randomUniqueNumberList.size < THREE_DIGISTS) {
      const randomNumber = Random.pickNumberInRange(1, 9);
      randomUniqueNumberList.add(randomNumber);
    }
    console.log(randomUniqueNumberList);
    this.answer = randomUniqueNumberList;
  }
}

module.exports = BaseBallGame;
