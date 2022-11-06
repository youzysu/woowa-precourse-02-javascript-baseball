const { Random, Console } = require('@woowacourse/mission-utils');
const Validation = require('../src/Validation.js');

class Game {
  setAnswerNumber() {
    const numbers = [];
    while (numbers.length < 3) {
      const number = Random.pickNumberInRange(1, 9);
      if (!numbers.includes(number)) {
        numbers.push(number);
      }
    }
    return numbers;
  }

  start() {
    const answerNumber = this.setAnswerNumber();
    this.compareNumber(answerNumber);
  }

  compareNumber(answerNumber) {
    Console.readLine('숫자를 입력해주세요 : ', userInput => {
      Validation.isValidInput(userInput);

      const trial = new Trial();
      trial.getHint(userInput, answerNumber);

      if (!trial.isCorrect()) {
        this.compareNumber(answerNumber);
      }

      if (trial.isCorrect()) {
        Console.print('3개의 숫자를 모두 맞히셨습니다! 게임 종료');
        this.askReplay();
      }
    });
  }

  askReplay() {
    Console.readLine(
      '게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.',
      answer => {
        if (answer === '1') this.start();
        if (answer === '2') Console.close();
        throw new Error('유효하지 않은 값을 입력하여 게임 종료됩니다.');
      },
    );
  }
}

class Trial {
  constructor() {
    this.strikeCount = 0;
    this.ballCount = 0;
  }

  counterStrikeBall(userInput, answerNumber) {
    const userNumber = userInput
      .toString()
      .split('')
      .map(str => Number(str));

    for (let index = 0; index < userNumber.length; index++) {
      if (userNumber[index] === answerNumber[index]) this.strikeCount++;
      if (
        answerNumber.includes(userNumber[index]) &&
        userNumber[index] !== answerNumber[index]
      )
        this.ballCount++;
    }

    const hint = [this.strikeCount, this.ballCount];
    return hint;
  }

  getHint(userInput, answerNumber) {
    const hint = this.counterStrikeBall(userInput, answerNumber);
    const strikeCount = hint[0];
    const ballCount = hint[1];

    if (strikeCount === 0 && ballCount === 0) {
      Console.print('낫싱');
    }
    if (strikeCount === 0 && ballCount > 0) {
      Console.print(`${ballCount}볼`);
    }
    if (strikeCount > 0 && ballCount === 0) {
      Console.print(`${strikeCount}스트라이크`);
    }
    if (strikeCount > 0 && ballCount > 0) {
      Console.print(`${ballCount}볼 ${strikeCount}스트라이크`);
    }
  }

  isCorrect() {
    if (this.strikeCount === 3) {
      return true;
    }
    return false;
  }
}

module.exports = new Game();
