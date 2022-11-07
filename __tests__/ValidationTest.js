const { describe, expect, test } = require("@jest/globals");
const validation = require("../src/libs/validation");

describe.only("validation.playerInput() 테스트", () => {
  test.each([["123"], ["456"], ["258"]])(
    "validation.playerInput(%s) => true",
    (input) => {
      expect(validation.playerInput(input)).toBeTruthy();
    }
  );

  test.each([["abc"], ["a12"], ["가나다라"], ["안녕"], ["2!!"], ["^^"]])(
    "validation.playerInput(%s) => 숫자가 아닌 값이 포함되어 있어 false를 반환",
    (input) => {
      expect(validation.playerInput(input)).toBeFalsy();
    }
  );

  test.each([["2687"], ["7896"], ["12"], ["98"], ["7"], ["123456789"]])(
    "validation.playerInput(%s) => 3자리 숫자가 아니므로 false를 반환",
    (input) => {
      expect(validation.playerInput(input)).toBeFalsy();
    }
  );

  test.each([["120"], ["950"], ["201"], ["048"]])(
    "validation.playerInput(%s) => 0이 포함되어 있어 false를 반환",
    (input) => {
      expect(validation.playerInput(input)).toBeFalsy();
    }
  );

  test.each([["115"], ["355"], ["181"], ["777"]])(
    "validation.playerInput(%s) => 중복된 숫자가 있어 false를 반환",
    (input) => {
      expect(validation.playerInput(input)).toBeFalsy();
    }
  );
});

describe("유효성 테스트", () => {
  test("게임 종료 후 답변 유효성 테스트", () => {
    const resultArr = [
      validation.option("1"),
      validation.option("2"),
      validation.option("0"),
      validation.option(1),
      validation.option(2),
      validation.option("안녕하세요."),
    ];

    const answerArr = [true, true, false, false, false, false];

    resultArr.forEach((result, idx) => {
      expect(result).toEqual(answerArr[idx]);
    });
  });
});
