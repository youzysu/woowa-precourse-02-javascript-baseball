const MissionUtils = require('@woowacourse/mission-utils');
const Computer = require('../src/Model/Computer');

const mockRandoms = (numbers) => {
  MissionUtils.Random.pickNumberInRange = jest.fn();
  numbers.reduce((acc, number) => {
    return acc.mockReturnValueOnce(number);
  }, MissionUtils.Random.pickNumberInRange);
};

describe('컴퓨터 성능 테스트', () => {
  test('같은 수가 같은 자리에 있으면 스트라이크, 다른 자리에 있으면 볼이다.', () => {
    const randoms = [2, 8, 5];
    const userNumbers = [
      [1, 4, 7],
      [1, 2, 3],
      [4, 6, 5],
      [5, 8, 2],
      [2, 8, 5],
    ];
    const trialResult = [
      { strike: 0, ball: 0 },
      { strike: 0, ball: 1 },
      { strike: 1, ball: 0 },
      { strike: 1, ball: 2 },
      { strike: 3, ball: 0 },
    ];

    mockRandoms(randoms);
    const computer = new Computer();
    computer.setCorrectNumbers();

    userNumbers.forEach((userNumber, index) => {
      const result = trialResult[index];
      expect(computer.compareNumber(userNumber)).toEqual(result);
    });
  });
});
