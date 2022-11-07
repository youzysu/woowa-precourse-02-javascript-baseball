const { describe, expect, test } = require("@jest/globals");
const validation = require("../src/libs/validation");

describe("validation.playerInput() 테스트", () => {
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

describe("validation.option() 테스트", () => {
  test.each([["1"], ["2"]])(
    "validation.option(&s) => 올바른 입력 이므로 true를 반환",
    (input) => {
      expect(validation.option(input)).toBeTruthy();
    }
  );

  test.each([["0"], [""], ["안녕하세요"], ["!!"], ["3"], ["123"]])(
    "validation.option(&s) => 1, 2가 아닌 입력값은 false를 반환",
    (input) => {
      expect(validation.option(input)).toBeFalsy();
    }
  );
});
