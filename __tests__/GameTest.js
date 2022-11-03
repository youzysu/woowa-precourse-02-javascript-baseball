const game = require("../src/libs/game.js");
const MissionUtils = require("@woowacourse/mission-utils");

const getLogSpy = () => {
  const logSpy = jest.spyOn(MissionUtils.Console, "print");
  logSpy.mockClear();
  return logSpy;
};

describe("게임 실행 테스트", () => {
  test("게임시작 문구 출력 테스트", () => {
    const logSpy = getLogSpy();
    const message = "숫자 야구 게임을 시작합니다.";

    game.start();

    expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(message));
  });
});
