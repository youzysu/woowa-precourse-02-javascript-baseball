const MissionUtils = require("@woowacourse/mission-utils");
const BaseBallGame = require("../src/BaseballGame");
const { BASEBALL, GAME_SENTENCE } = require("../src/constants");
const baseballGame = new BaseBallGame();

const getLogSpy = () => {
  const logSpy = jest.spyOn(MissionUtils.Console, "print");
  logSpy.mockClear();
  return logSpy;
};

describe("정답과 플레이어 입력값을 비교", () => {
  test("3개의 숫자를 모두 맞칠 경우", () => {
    const messages = [`3${BASEBALL.STRIKE}`, GAME_SENTENCE.END];
    const logSpy = getLogSpy();

    baseballGame.compareAnswers(713, 713);

    messages.forEach((message) => {
      expect(logSpy).toHaveBeenCalledWith(message);
    });
  });

  test("하나도 없는 경우", () => {
    const logSpy = getLogSpy();
    baseballGame.compareAnswers(713, 245);
    expect(logSpy).toHaveBeenCalledWith(BASEBALL.NOTHING);
  });

  test("볼과 스트라이크", () => {
    const logSpy = getLogSpy();

    baseballGame.compareAnswers(713, 145);
    expect(logSpy).toHaveBeenNthCalledWith(1, `1${BASEBALL.BALL}`);

    baseballGame.compareAnswers(713, 671);
    expect(logSpy).toHaveBeenNthCalledWith(2, `2${BASEBALL.BALL}`);

    baseballGame.compareAnswers(713, 123);
    expect(logSpy).toHaveBeenNthCalledWith(
      3,
      `1${BASEBALL.BALL} 1${BASEBALL.STRIKE}`
    );

    baseballGame.compareAnswers(713, 216);
    expect(logSpy).toHaveBeenNthCalledWith(4, `1${BASEBALL.STRIKE}`);
  });
});
