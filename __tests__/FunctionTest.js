const numberCheck = (numberArr) => {
  if (numberArr.length != 3) {
    throw "잘못된 값을 입력하셨습니다. 게임을 종료합니다.";
  }
};

describe("구현 기능 목록 테스트", () => {
  test("예외처리", () => {
    expect(() => numberCheck([1, 2, 3, 4])).toThrow(
      "잘못된 값을 입력하셨습니다. 게임을 종료합니다."
    );
  });
});
