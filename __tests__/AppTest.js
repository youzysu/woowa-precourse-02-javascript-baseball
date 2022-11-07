const App = require('../src/App');
const { MESSAGE, OPTION, ERROR } = require('../src/Materials');
const { Random, Console } = require('@woowacourse/mission-utils');

const getLogSpy = () => {
  const logSpy = jest.spyOn(Console, 'print');
  logSpy.mockClear();
  return logSpy;
};

describe('숫자 야구 게임 애플리케이션 테스트', () => {
  test('게임 시작 문구 출력', () => {
    const logSpy = getLogSpy();
    const app = new App();
    app.play();

    expect(logSpy).toHaveBeenCalledWith(MESSAGE.START);
  });
});
