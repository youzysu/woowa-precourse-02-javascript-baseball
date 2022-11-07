const Game = require('../src/Game');
const MissionUtils = require('@woowacourse/mission-utils');

const getLogSpy = () => {
  const logSpy = jest.spyOn(MissionUtils.Console, 'print');
  logSpy.mockClear();
  return logSpy;
};

describe('1부터 9까지 서로 다른 수로 이루어진 3자리의 수 생성', () => {
  test('랜덤으로 생성된 숫자에는 0이 포함되지 않는다.', () => {
    const answerNumber = Game.setAnswerNumber();

    expect(answerNumber.includes(0)).toBeFalsy();
  });

  test('랜덤으로 생성된 숫자에는 중복된 숫자가 존재하지 않는다.', () => {
    const answerNumber = Game.setAnswerNumber();
    const removedSame = new Set(answerNumber);

    expect(answerNumber.length === removedSame.size).toBeTruthy();
  });

  test('랜덤으로 생성된 숫자는 3자리 숫자이다', () => {
    const answerNumber = Game.setAnswerNumber();

    expect(answerNumber.length === 3).toBeTruthy();
  });
});
