const Validation = require('../src/Validation');
const { ERROR } = require('../src/Materials');

describe('정답을 맞추기 위해 입력한 값의 유효성 판단', () => {
  test('입력값 중 숫자가 아닌 타입이 포함된 경우 예외 발생', () => {
    const userInput = '98a';

    expect(() => {
      Validation.isValidInput(userInput);
    }).toThrow(ERROR.TYPE);
  });

  test('입력값의 길이가 3보다 작은 경우 예외 발생', () => {
    const userInput = '2';

    expect(() => {
      Validation.isValidInput(userInput);
    }).toThrow(ERROR.LENGTH);
  });

  test('입력값의 길이가 3보다 큰 경우 예외 발생', () => {
    const userInput = '5324';

    expect(() => {
      Validation.isValidInput(userInput);
    }).toThrow(ERROR.LENGTH);
  });

  test('입력값에 중복된 숫자가 있는 경우 예외 발생', () => {
    const userInput = '422';

    expect(() => {
      Validation.isValidInput(userInput);
    }).toThrow(ERROR.DUPLICATE);
  });

  test('입력값에 0이 포함된 경우 예외 발생', () => {
    const userInput = '012';

    expect(() => {
      Validation.isValidInput(userInput);
    }).toThrow(ERROR.SCOPE);
  });
});
