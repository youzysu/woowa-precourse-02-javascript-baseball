const BaseBallGame = require("../src/BaseballGame");
const baseballGame = new BaseBallGame();

describe("플레이 입력값 유효성 검사", () => {
  test("3자리 수 인지 검사", () => {
    expect(baseballGame.checkNumberDigits("123")).toEqual(true);
    expect(baseballGame.checkNumberDigits(123)).toEqual(true);
    expect(baseballGame.checkNumberDigits("")).toEqual(false);
    expect(baseballGame.checkNumberDigits(1234)).toEqual(false);
  });
  test("0이 포함되어 있는지 검사", () => {
    expect(baseballGame.checkIncludesZero("0")).toEqual(true);
    expect(baseballGame.checkIncludesZero(0)).toEqual(true);
    expect(baseballGame.checkIncludesZero(120)).toEqual(true);
    expect(baseballGame.checkIncludesZero("123")).toEqual(false);
    expect(baseballGame.checkIncludesZero("777")).toEqual(false);
  });
});
