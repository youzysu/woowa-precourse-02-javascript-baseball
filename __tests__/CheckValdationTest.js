const App = require("../src/App");
const app = new App();

describe("플레이 입력값 유효성 검사", () => {
  test("3자리 수 인지 검사", () => {
    expect(app.checkNumberDigits("123")).toEqual(true);
    expect(app.checkNumberDigits(123)).toEqual(true);
    expect(app.checkNumberDigits("")).toEqual(false);
    expect(app.checkNumberDigits(1234)).toEqual(false);
  });
  test("0이 포함되어 있는지 검사", () => {
    expect(app.checkIncludesZero("0")).toEqual(true);
    expect(app.checkIncludesZero(0)).toEqual(true);
    expect(app.checkIncludesZero(120)).toEqual(true);
    expect(app.checkIncludesZero("123")).toEqual(false);
    expect(app.checkIncludesZero("777")).toEqual(false);
  });
});
