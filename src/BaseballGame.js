const { Random } = require("@woowacourse/mission-utils");
const { COUNT, NUMBER_DIGITS } = require("./constants/game");

class BaseBallGame {
  /**
   * 정답 숫자
   * @type {Set<number>}
   */
  #answerNumbers;

  /**
   * 플레이어 입력 숫자
   * @type {number[]}
   */
  #playerNumbers;

  /**
   * 볼 스트라이크 개수
   * @type  {{ ball: number, strike: number }}
   */
  #count;

  setAnswerNumbers() {
    this.#answerNumbers = this.#createRandomUniqueNumberList();
  }

  setPlayerNumbers(playerNumbers) {
    this.#playerNumbers = playerNumbers.split("").map(Number);
  }

  isAnswer() {
    return this.#count.strike === COUNT.out;
  }

  getCount() {
    this.#resetCount();
    this.#playerNumbers.forEach(this.#calculateCount.bind(this));
    return this.#count;
  }

  #calculateCount(palyerNumber, palyerNumberIndex) {
    if (!this.#answerNumbers.has(palyerNumber)) return;
    if (this.#isStrike({ palyerNumber, palyerNumberIndex })) {
      return (this.#count.strike += 1);
    }
    this.#count.ball += 1;
  }

  #createRandomUniqueNumberList() {
    const randomUniqueNumberList = new Set();
    while (randomUniqueNumberList.size < NUMBER_DIGITS) {
      const randomNumber = Random.pickNumberInRange(1, 9);
      randomUniqueNumberList.add(randomNumber);
    }
    console.log(randomUniqueNumberList);
    return randomUniqueNumberList;
  }

  #resetCount() {
    this.#count = { ...COUNT.initialization };
  }

  #isStrike({ palyerNumber, palyerNumberIndex }) {
    const answerNumbers = [...this.#answerNumbers];
    return answerNumbers[palyerNumberIndex] === palyerNumber;
  }
}

module.exports = BaseBallGame;
