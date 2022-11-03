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

  test("게임 플레이어의 답변과 컴퓨터의 정답을 비교하여 결과를 반환하는 테스트", () => {
    const resultArr = [
      game.getResult(438, "421"),
      game.getResult(438, "253"),
      game.getResult(438, "328"),
      game.getResult(438, "843"),
      game.getResult(438, "179"),
      game.getResult(769, "769"),
    ];

    const answerArr = [
      { ball: 0, strike: 1 },
      { ball: 1, strike: 0 },
      { ball: 1, strike: 1 },
      { ball: 3, strike: 0 },
      { ball: 0, strike: 0 },
      { ball: 0, strike: 3 },
    ];

    resultArr.forEach((result, idx) => {
      expect(result).toEqual(answerArr[idx]);
    });
  });
});
