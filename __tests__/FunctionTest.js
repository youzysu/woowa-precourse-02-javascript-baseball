//입력값이 서로 다른 3자리 숫자인지 아닌지 확인
const numberCheck = (numberArr) => {
  if (numberArr.length != 3) {
    throw "잘못된 값을 입력하셨습니다. 게임을 종료합니다.";
  }
};

//pointerCounter는 입력값과 난수를 비교하여 [볼,스트라이크]순서로 반환
const pointCounter = (receive, random) => {
  let ballStrikeCount = [0, 0];
  receive.forEach((item, index) => {
    if (item == random[index]) {
      ballStrikeCount[1] += 1;
    } else if (random.includes(Number(item))) {
      ballStrikeCount[0] += 1;
    }
  });
  return ballStrikeCount;
};

describe("구현 기능 목록 테스트", () => {
  test("예외처리", () => {
    expect(() => numberCheck([1, 2, 3, 4])).toThrow(
      "잘못된 값을 입력하셨습니다. 게임을 종료합니다."
    );
  });

  test("모두 같은자리 같은숫자일 때", () => {
    expect(pointCounter([1, 2, 3], [1, 2, 3])).toEqual([0, 3]);
  });
  test("모두 다른자리 같은숫자일 때", () => {
    expect(pointCounter([1, 2, 3], [3, 1, 2])).toEqual([3, 0]);
  });
  test("일치하는 숫자가 하나도 없을 때", () => {
    expect(pointCounter([1, 2, 3], [4, 5, 6])).toEqual([0, 0]);
  });
  test("1스트라이크 1볼인 경우", () => {
    expect(pointCounter([1, 2, 3], [1, 3, 5])).toEqual([1, 1]);
  });
});
