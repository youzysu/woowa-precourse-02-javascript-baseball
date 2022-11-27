const { Random } = require('@woowacourse/mission-utils');
const { NUMBER } = require('../Util/Constants');

class Computer {
  #correctNumbers;

  setCorrectNumbers() {
    const correctNumbers = [];
    while (correctNumbers.length < NUMBER.COUNT) {
      const number = Random.pickNumberInRange(1, 9);
      if (!correctNumbers.includes(number)) correctNumbers.push(number);
    }

    this.#correctNumbers = correctNumbers;
  }

  compareNumber(userNumber) {
    const result = { strike: 0, ball: 0 };

    for (let index = 0; index < userNumber.length; index++) {
      if (userNumber[index] === this.#correctNumbers[index]) result.strike += 1;
      else if (this.#correctNumbers.includes(userNumber[index])) result.ball += 1;
    }

    return result;
  }
}

module.exports = Computer;
