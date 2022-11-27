const Validator = require('../src/Model/Validator');
const { ERROR } = require('../src/Util/Constants');

describe('사용자가 입력한 값의 유효성 판단', () => {
  test('입력값 중 1부터 9까지의 숫자가 아닌 경우 예외 발생', () => {
    const userInputs = [
      [1, 2, 'n'],
      [0, 1, 3],
      ['/', 1, 2],
    ];

    userInputs.forEach((userInput) => {
      expect(() => {
        Validator.validateValue(userInput);
      }).toThrow(ERROR.VALUE);
    });
  });

  test('입력한 숫자가 3개가 아닌 경우 예외 발생', () => {
    const userInputs = [
      [1, 2, 3, 4],
      [1, 2],
    ];

    userInputs.forEach((userInput) => {
      expect(() => {
        Validator.validateLength(userInput);
      }).toThrow(ERROR.LENGTH);
    });
  });

  test('입력한 숫자에 중복이 있는 경우 예외 발생', () => {
    const userInputs = [
      [1, 2, 1],
      [3, 3, 4],
    ];

    userInputs.forEach((userInput) => {
      expect(() => {
        Validator.validateDuplicate(userInput);
      }).toThrow(ERROR.DUPLICATE);
    });
  });

  test('게임 재시작/종료 여부에 1 또는 2가 아닌 값을 입력한 경우 예외 발생', () => {
    const userInputs = ['3', 'l', 'yes', 'no', 'Y', 'N'];

    userInputs.forEach((userInput) => {
      expect(() => {
        Validator.validateOption(userInput);
      }).toThrow(ERROR.OPTION);
    });
  });
});

