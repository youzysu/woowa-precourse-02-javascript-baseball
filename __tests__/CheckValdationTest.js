const Validation = require("../src/Validation");

describe("플레이 입력값 유효성 검사", () => {
  test("3자리 수 인지 검사", () => {
    expect(Validation.isThreeDigits("123")).toEqual(true);
    expect(Validation.isThreeDigits(123)).toEqual(true);
    expect(Validation.isThreeDigits("")).toEqual(false);
    expect(Validation.isThreeDigits(1234)).toEqual(false);
  });
  test("0이 포함되어 있는지 검사", () => {
    expect(Validation.isIncludesZero("0")).toEqual(true);
    expect(Validation.isIncludesZero(0)).toEqual(true);
    expect(Validation.isIncludesZero(120)).toEqual(true);
    expect(Validation.isIncludesZero("123")).toEqual(false);
    expect(Validation.isIncludesZero("777")).toEqual(false);
  });
  test("입력된 숫자가 모두 다른 숫자인지 검사", () => {
    expect(Validation.isUniqueNumbers("123")).toEqual(true);
    expect(Validation.isUniqueNumbers(123)).toEqual(true);
    expect(Validation.isUniqueNumbers(111)).toEqual(false);
    expect(Validation.isUniqueNumbers("111")).toEqual(false);
    expect(Validation.isUniqueNumbers("181")).toEqual(false);
  });
});
