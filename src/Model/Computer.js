const { Random } = require('@woowacourse/mission-utils');
const { NUMBER } = require('../Util/Constants');

class Computer {
  #correctNumbers;

  setCorrectNumbers() {
    const correctNumbers = [];
    while (correctNumbers.length < NUMBER.DIGITS) {
      const number = Random.pickNumberInRange(1, 9);
      if (!correctNumbers.includes(number)) correctNumbers.push(number);
    }

    this.#correctNumbers = correctNumbers;
  }

  compareNumber(userNumber) {
    const result = { strike: 0, ball: 0 };

    userNumber.forEach((number, index) => {
      if (number === this.#correctNumbers[index]) return (result.strike += 1);
      if (this.#correctNumbers.includes(number)) result.ball += 1;
    });

    return result;
  }
}

module.exports = Computer;

