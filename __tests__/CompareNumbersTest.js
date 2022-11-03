const App = require("../src/App");
const app = new App();

describe("정답과 플레이어 입력값을 비교", () => {
  //compareNumbers(answer, playerInputValue);
  test("3개의 숫자를 모두 맞칠 경우", () => {
    expect(app.compareNumbers(713, 713)).toEqual(
      "3개의 숫자를 모두 맞히셨습니다!"
    );
  });
  test("하나도 없는 경우", () => {
    expect(app.compareNumbers(713, 245)).toEqual("낫싱");
  });
  test("볼과 스트라이크", () => {
    expect(app.compareNumbers(713, 123)).toEqual("1볼 1스트라이크");
    expect(app.compareNumbers(713, 145)).toEqual("1볼");
    expect(app.compareNumbers(713, 671)).toEqual("1볼");
    expect(app.compareNumbers(713, 216)).toEqual("2볼");
  });
});
