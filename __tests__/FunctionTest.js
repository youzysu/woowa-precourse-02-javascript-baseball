const MissionUtils = require("@woowacourse/mission-utils");

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

const answerMessageMaker = (arr) => {
  if (arr[0] == 0 && arr[1] == 0) {
    MissionUtils.Console.print("낫싱");
  } else if (arr[1] == 3) {
    MissionUtils.Console.print(
      "3스트라이크\n3개의 숫자를 모두 맞히셨습니다! 게임 종료"
    );
  } else if (arr[0] == 0) {
    MissionUtils.Console.print(arr[1] + "스트라이크");
  } else if (arr[1] == 0) {
    MissionUtils.Console.print(arr[0] + "볼");
  } else {
    MissionUtils.Console.print(arr[0] + "볼" + arr[1] + "스트라이크");
  }
};

const getLogSpy = () => {
  const logSpy = jest.spyOn(MissionUtils.Console, "print");
  logSpy.mockClear();
  return logSpy;
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

  test("낫싱인 경우", () => {
    const logSpy = getLogSpy();
    answerMessageMaker([0, 0]);
    expect(logSpy).toHaveBeenCalledWith(expect.stringContaining("낫싱"));
  });
  test("3스트라이크인 경우", () => {
    const logSpy = getLogSpy();
    answerMessageMaker([0, 3]);
    expect(logSpy).toHaveBeenCalledWith(
      expect.stringContaining(
        "3스트라이크\n3개의 숫자를 모두 맞히셨습니다! 게임 종료"
      )
    );
  });
  test("3볼인 경우", () => {
    const logSpy = getLogSpy();
    answerMessageMaker([3, 0]);
    expect(logSpy).toHaveBeenCalledWith(expect.stringContaining("3볼"));
  });
  test("2볼1스트라이크인 경우", () => {
    const logSpy = getLogSpy();
    answerMessageMaker([2, 1]);
    expect(logSpy).toHaveBeenCalledWith(
      expect.stringContaining("2볼1스트라이크")
    );
  });
});
