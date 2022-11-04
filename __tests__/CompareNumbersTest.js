const MissionUtils = require("@woowacourse/mission-utils");
const BaseBallGame = require("../src/BaseballGame");
const baseballGame = new BaseBallGame();

const getLogSpy = () => {
  return jest.spyOn(MissionUtils.Console, "print");
};

describe("정답과 플레이어 입력값을 비교", () => {
  test("3개의 숫자를 모두 맞칠 경우", () => {
    const message = "3스트라이크";
    const logSpy = getLogSpy();

    baseballGame.compareNumbers(713, 713);

    expect(logSpy).toHaveBeenCalledWith(message);
  });

  test("하나도 없는 경우", () => {
    const logSpy = getLogSpy();
    baseballGame.compareNumbers(713, 245);
    expect(logSpy).toHaveBeenCalledWith("낫싱");
  });

  test("볼과 스트라이크", () => {
    const logSpy = getLogSpy();
    baseballGame.compareNumbers(713, 145);
    expect(logSpy).toHaveBeenCalledWith("1볼");
    baseballGame.compareNumbers(713, 671);
    expect(logSpy).toHaveBeenCalledWith("2볼");
    baseballGame.compareNumbers(713, 123);
    expect(logSpy).toHaveBeenCalledWith("1볼 1스트라이크");
    baseballGame.compareNumbers(713, 216);
    expect(logSpy).toHaveBeenCalledWith("1스트라이크");
  });
});
