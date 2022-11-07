const MissionUtils = require("@woowacourse/mission-utils");
const BaseBallGame = require("../src/BaseballGame");
const { BASEBALL, GAME_SENTENCE } = require("../src/constants");

const mockQuestions = (answers) => {
  MissionUtils.Console.readLine = jest.fn();
  answers.reduce((acc, input) => {
    return acc.mockImplementationOnce((question, callback) => {
      callback(input);
    });
  }, MissionUtils.Console.readLine);
};

const mockRandoms = (numbers) => {
  MissionUtils.Random.pickNumberInRange = jest.fn();
  numbers.reduce((acc, number) => {
    return acc.mockReturnValueOnce(number);
  }, MissionUtils.Random.pickNumberInRange);
};

const getLogSpy = () => {
  const logSpy = jest.spyOn(MissionUtils.Console, "print");
  logSpy.mockClear();
  return logSpy;
};

describe("정답과 플레이어 입력값을 비교", () => {
  test("3개의 숫자를 모두 맞칠 경우", () => {
    const randoms = [7, 1, 3];
    const answers = ["713"];
    const logSpy = getLogSpy();
    const messages = [`3${BASEBALL.STRIKE}`, GAME_SENTENCE.END];

    mockRandoms(randoms);
    mockQuestions(answers);

    const baseballGame = new BaseBallGame();
    baseballGame.start();

    messages.forEach((message) => {
      expect(logSpy).toHaveBeenCalledWith(message);
    });
  });

  test("하나도 없는 경우", () => {
    const randoms = [7, 1, 3];
    const answers = ["245"];
    const logSpy = getLogSpy();

    mockRandoms(randoms);
    mockQuestions(answers);

    const baseballGame = new BaseBallGame();
    baseballGame.start();

    expect(logSpy).toHaveBeenCalledWith(BASEBALL.NOTHING);
  });

  test("볼과 스트라이크", () => {
    const randoms = [7, 1, 3];
    const answers = ["145", "671", "123", "216"];
    const logSpy = getLogSpy();
    const messages = ["1볼", "2볼", "1볼 1스트라이크", "1스트라이크"];

    mockRandoms(randoms);
    mockQuestions(answers);

    const baseballGame = new BaseBallGame();
    baseballGame.start();

    messages.forEach((message) => {
      expect(logSpy).toHaveBeenCalledWith(message);
    });
  });
});
