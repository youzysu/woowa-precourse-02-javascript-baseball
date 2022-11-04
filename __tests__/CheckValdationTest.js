const BaseBallGame = require("../src/BaseballGame");
const baseballGame = new BaseBallGame();

describe("플레이 입력값 유효성 검사", () => {
  test("3자리 수 인지 검사", () => {
    expect(baseballGame.isThreeDigits("123")).toEqual(true);
    expect(baseballGame.isThreeDigits(123)).toEqual(true);
    expect(baseballGame.isThreeDigits("")).toEqual(false);
    expect(baseballGame.isThreeDigits(1234)).toEqual(false);
  });
  test("0이 포함되어 있는지 검사", () => {
    expect(baseballGame.isIncludesZero("0")).toEqual(true);
    expect(baseballGame.isIncludesZero(0)).toEqual(true);
    expect(baseballGame.isIncludesZero(120)).toEqual(true);
    expect(baseballGame.isIncludesZero("123")).toEqual(false);
    expect(baseballGame.isIncludesZero("777")).toEqual(false);
  });
});
