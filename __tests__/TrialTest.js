const Trial = require('../src/Trial');
const { RESULT } = require('../src/Materials');
const { Console } = require('@woowacourse/mission-utils');

const getLogSpy = () => {
  const logSpy = jest.spyOn(Console, 'print');
  logSpy.mockClear();
  return logSpy;
};

describe('사용자가 입력한 값을 정답과 비교한 힌트 출력', () => {
  test('같은 수가 전혀 없는 경우 낫싱 힌트 출력', () => {
    const answerNumber = [4, 2, 5];
    const userInput = '789';
    const logSpy = getLogSpy();
    const trial = new Trial();
    trial.getHint(userInput, answerNumber);

    expect(logSpy).toHaveBeenCalledWith(RESULT.NOTHING);
  });

  test('볼만 있는 경우 볼 개수 힌트 출력', () => {
    const answerNumber = [4, 2, 5];
    const userInput = '132';
    const logSpy = getLogSpy();
    const trial = new Trial();
    trial.getHint(userInput, answerNumber);

    expect(logSpy).toHaveBeenCalledWith('1' + RESULT.BALL);
  });

  test('스트라이크만 있는 경우 스트라이크 개수 힌트 출력', () => {
    const answerNumber = [4, 2, 5];
    const userInput = '427';
    const logSpy = getLogSpy();
    const trial = new Trial();
    trial.getHint(userInput, answerNumber);

    expect(logSpy).toHaveBeenCalledWith('2' + RESULT.STRIKE);
  });

  test('스트라이크와 볼이 모두 있는 경우 힌트 출력', () => {
    const answerNumber = [4, 2, 5];
    const userInput = '452';
    const logSpy = getLogSpy();
    const trial = new Trial();
    trial.getHint(userInput, answerNumber);

    expect(logSpy).toHaveBeenCalledWith(
      '2' + RESULT.BALL + ' 1' + RESULT.STRIKE
    );
  });
});

describe('사용자가 입력한 값이 정답과 같은지 여부 확인', () => {
  test('사용자가 입력한 값이 정답과 같은 경우 true', () => {
    const answerNumber = [4, 2, 5];
    const userInput = '425';
    const trial = new Trial();
    trial.getHint(userInput, answerNumber);

    expect(trial.isCorrect()).toBeTruthy();
  });

  test('사용자가 입력한 값이 정답과 다른 경우 false', () => {
    const answerNumber = [4, 2, 5];
    const userInput = '452';
    const trial = new Trial();
    trial.getHint(userInput, answerNumber);

    expect(trial.isCorrect()).toBeFalsy();
  });
});
