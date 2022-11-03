const validation = require("../src/libs/validation");

describe("유효성 테스트", () => {
  test("게임 플레이어의 답변 유효성 테스트", () => {
    const resultArr = [
      validation.playerInput("123"),
      validation.playerInput("689"),
      validation.playerInput("1234"),
      validation.playerInput("b12"),
      validation.playerInput("abc"),
      validation.playerInput("112"),
      validation.playerInput("98"),
      validation.playerInput("025"),
      validation.playerInput("727"),
    ];

    const answerArr = [
      true,
      true,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
    ];

    resultArr.forEach((result, idx) => {
      expect(result).toEqual(answerArr[idx]);
    });
  });
});
