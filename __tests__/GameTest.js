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

  test("임의의 3자리 숫자 선택 테스트", () => {
    const numbersArr = new Array(5);
    for (let i = 0; i < numbersArr.length; i++) {
      numbersArr[i] = game.getAnswer();
    }

    numbersArr.forEach((number) => {
      const numberArr = [...new Set([...(number + "")])];
      expect(numberArr).toHaveLength(3);
      expect(numberArr).not.toEqual(expect.arrayContaining(["0"]));
    });
  });
});
