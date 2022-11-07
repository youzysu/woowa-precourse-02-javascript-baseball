const { describe, expect, test } = require("@jest/globals");
const App = require("../src/App");
const game = require("../src/libs/game.js");
const MissionUtils = require("@woowacourse/mission-utils");
const { MESSAGE } = require("../src/libs/const");

const getLogSpy = () => {
  const logSpy = jest.spyOn(MissionUtils.Console, "print");
  logSpy.mockClear();
  return logSpy;
};

describe("App class의 start() 테스트", () => {
  test("게임시작 문구 출력 테스트", () => {
    const logSpy = getLogSpy();
    const message = MESSAGE.START;

    const app = new App();
    app.play();

    expect(logSpy).toHaveBeenCalledWith(message);
  });
});

describe("game.getAnswer() 테스트", () => {
  const numbersArr = new Array(5);
  for (let i = 0; i < numbersArr.length; i++) {
    numbersArr[i] = game.getAnswer();
  }

  test("3자리의 숫자인지 확인하는 테스트", () => {
    numbersArr.forEach((number) => {
      expect(number + "").toHaveLength(3);
    });
  });

  test("0이 포함되어 있지 않은지 확인하는 테스트", () => {
    numbersArr.forEach((number) => {
      expect(number + "").toEqual(expect.not.stringContaining("0"));
    });
  });

  test("중복된 숫자가 있는지 확인하는 테스트", () => {
    numbersArr.forEach((number) => {
      const numberArr = [...new Set([...(number + "")])];
      expect(numberArr).toHaveLength(3);
    });
  });

  test("숫자로만 이루어져 있는지 확인하기", () => {
    numbersArr.forEach((number) => {
      expect(number + "").not.toBeNaN();
    });
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

test("게임결과 문구를 출력 테스트", () => {
  const resultArr = [
    game.printResult(0, 1),
    game.printResult(1, 0),
    game.printResult(1, 1),
    game.printResult(3, 0),
    game.printResult(0, 0),
    game.printResult(0, 3),
    game.printResult(2, 1),
  ];

  const answerArr = [
    "1스트라이크",
    "1볼 ",
    "1볼 1스트라이크",
    "3볼 ",
    "낫싱",
    "3스트라이크",
    "2볼 1스트라이크",
  ];

  resultArr.forEach((result, idx) => {
    expect(result).toEqual(answerArr[idx]);
  });
});
