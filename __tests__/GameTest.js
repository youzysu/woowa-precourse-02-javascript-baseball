const Game = require('../src/Game');
const { MESSAGE, ERROR } = require('../src/Materials');
const MissionUtils = require('@woowacourse/mission-utils');

const mockQuestions = answers => {
  MissionUtils.Console.readLine = jest.fn();
  answers.reduce((acc, input) => {
    return acc.mockImplementationOnce((question, callback) => {
      callback(input);
    });
  }, MissionUtils.Console.readLine);
};

const mockRandoms = numbers => {
  MissionUtils.Random.pickNumberInRange = jest.fn();
  numbers.reduce((acc, number) => {
    return acc.mockReturnValueOnce(number);
  }, MissionUtils.Random.pickNumberInRange);
};

const getLogSpy = () => {
  const logSpy = jest.spyOn(MissionUtils.Console, 'print');
  logSpy.mockClear();
  return logSpy;
};

describe('1부터 9까지 서로 다른 수로 이루어진 3자리의 수 생성', () => {
  test('랜덤으로 생성된 숫자에는 0이 포함되지 않는다.', () => {
    const correctNumber = Game.setCorrectNumber();

    expect(correctNumber.includes(0)).toBeFalsy();
  });

  test('랜덤으로 생성된 숫자에는 중복된 숫자가 존재하지 않는다.', () => {
    const correctNumber = Game.setCorrectNumber();
    const removedSame = new Set(correctNumber);

    expect(correctNumber.length === removedSame.size).toBeTruthy();
  });

  test('랜덤으로 생성된 숫자는 3자리 숫자이다', () => {
    const correctNumber = Game.setCorrectNumber();

    expect(correctNumber.length === 3).toBeTruthy();
  });
});

describe('게임이 시작되면 정답을 설정하고 게임이 종료될 때까지 플레이어가 시도한 값을 입력 받아 결과를 출력한다.', () => {
  test('게임이 종료될 때까지 플레이어가 시도한 값을 입력 받는다.', () => {
    const randoms = [7, 5, 9];
    const answers = ['246', '159', '157', '759', '2'];
    const logSpy = getLogSpy();
    const messages = [
      '낫싱',
      '2스트라이크',
      '1볼 1스트라이크',
      '3스트라이크',
      MESSAGE.SUCCESS,
    ];

    mockRandoms(randoms);
    mockQuestions(answers);

    Game.start();

    messages.forEach(output => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output));
    });
  });
});

describe('게임이 종료되면 게임을 다시 시작하거나 완전히 종료한다.', () => {
  test('게임 종료 후 1을 입력하면 게임을 다시 시작하고, 2를 입력하면 게임을 완전히 종료한다.', () => {
    const randoms = [7, 5, 9, 2, 4, 6];
    const answers = ['246', '159', '157', '759', '1', '824', '246', '2'];
    const logSpy = getLogSpy();
    const messages = [
      '낫싱',
      '2스트라이크',
      '1볼 1스트라이크',
      '3스트라이크',
      '2볼',
      MESSAGE.SUCCESS,
    ];

    mockRandoms(randoms);
    mockQuestions(answers);

    Game.start();

    messages.forEach(output => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output));
    });
  });

  test('게임 종료 후 1이나 2가 아닌 값을 입력하면 예외를 발생하고 게임을 종료한다.', () => {
    const randoms = [7, 5, 9];
    const answers = ['246', '159', '157', '759', '3'];

    mockRandoms(randoms);
    mockQuestions(answers);

    expect(() => {
      Game.start();
    }).toThrow(ERROR.NOT_OPTION);
  });
});
