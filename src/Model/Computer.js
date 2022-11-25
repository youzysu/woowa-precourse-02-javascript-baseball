const { Random } = require('@woowacourse/mission-utils');

class Computer {
  #correctNumbers;

  setCorrectNumbers() {
    const correctNumbers = [];
    while (correctNumbers.length < 3) {
      const number = Random.pickNumberInRange(1, 9);
      if (!correctNumbers.includes(number)) correctNumbers.push(number);
    }
    this.#correctNumbers = correctNumbers;
  }
}

