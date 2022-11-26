const Validation = require("../src/Validation");

describe("Validation Test", () => {
  test("플레이어 입력값 유효성 검사 테스트", () => {
    const incorrectInputPlayerValues = ["120", "1234", "abc", "111"];

    incorrectInputPlayerValues.forEach((incorrectInputPlayerValue) => {
      expect(() => {
        Validation.checkPlayerInputValue(incorrectInputPlayerValue);
      }).toThrow();
    });
  });

  test("플레이어 게임 재시작 커멘드 입력 유효성 검사 테스트", () => {
    const incorrectGameCommnads = ["abc", "0", "3", "12"];

    incorrectGameCommnads.forEach((incorrectGameCommnad) => {
      expect(() => {
        Validation.checkGameCommnad(incorrectGameCommnad);
      }).toThrow();
    });
  });
});
