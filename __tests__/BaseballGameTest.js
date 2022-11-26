const MissionUtils = require("@woowacourse/mission-utils");
const BaseBallGame = require("../src/BaseballGame");

const mockRandoms = (numbers) => {
  MissionUtils.Random.pickNumberInRange = jest.fn();
  numbers.reduce((acc, number) => {
    return acc.mockReturnValueOnce(number);
  }, MissionUtils.Random.pickNumberInRange);
};

describe("BaseBallGame Class test", () => {
  test("스트라이크 볼 카운트 테스트", () => {
    const randoms = [1, 2, 3];
    const playerInputValues = ["123", "124", "145", "312", "341", "367", "456"];
    const counts = [
      { ball: 0, strike: 3 },
      { ball: 0, strike: 2 },
      { ball: 0, strike: 1 },

      { ball: 3, strike: 0 },
      { ball: 2, strike: 0 },
      { ball: 1, strike: 0 },

      { ball: 0, strike: 0 },
    ];

    mockRandoms(randoms);
    const baseballGame = new BaseBallGame();
    baseballGame.setAnswerNumbers();

    playerInputValues.forEach((playerInputValue, index) => {
      const count = counts[index];
      baseballGame.setPlayerNumbers(playerInputValue);
      baseballGame.setCount();

      expect(baseballGame.getCount()).toEqual(count);
    });
  });

  test("정답인 경우 테스트", () => {
    const randoms = [1, 2, 3];
    mockRandoms(randoms);

    const baseballGame = new BaseBallGame();
    baseballGame.setAnswerNumbers();
    baseballGame.setPlayerNumbers("123");
    baseballGame.setCount();

    expect(baseballGame.isAnswer()).toBeTruthy();
  });
});
