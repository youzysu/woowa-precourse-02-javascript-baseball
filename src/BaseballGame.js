const { Random } = require("@woowacourse/mission-utils");
const { THREE_DIGISTS, COUNT } = require("./constants");

class BaseBallGame {
  /**
   * 정답 숫자
   * @type {Set<number>}
   */
  #answer;

  /**
   * 플레이어 입력 숫자
   * @type {number[]}
   */
  #playerInputValue;

  /**
   * 볼 스트라이크 개수
   * @type  {{ ball: number, strike: number }}
   */
  #count;

  setCount() {
    this.#resetCount();
    this.#playerInputValue.forEach((number, index) => {
      if (!this.#answer.has(number)) return;
      if (this.#isStrike({ number, index })) {
        return (this.#count.strike += 1);
      }
      this.#count.ball += 1;
    });
  }

  getCount() {
    return this.#count;
  }

  setPlayerInputValue(playerInputValue) {
    this.#playerInputValue = playerInputValue.split("").map(Number);
  }

  isAnswer() {
    return this.#count.strike === 3;
  }

  createAnswer() {
    const randomUniqueNumberList = new Set();
    while (randomUniqueNumberList.size < THREE_DIGISTS) {
      const randomNumber = Random.pickNumberInRange(1, 9);
      randomUniqueNumberList.add(randomNumber);
    }
    console.log(randomUniqueNumberList);
    this.#answer = randomUniqueNumberList;
  }

  #resetCount() {
    this.#count = { ...COUNT.initialization };
  }

  #isStrike({ number, index }) {
    const answer = [...this.#answer];
    return answer[index] === number;
  }
}

module.exports = BaseBallGame;
