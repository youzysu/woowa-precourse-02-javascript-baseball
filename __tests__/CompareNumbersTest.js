const App = require("../src/App");
const app = new App();

//테스트 케이스 콘솔 받는 법으로 수정
//compareNumbers(answer, playerInputValue);

describe("정답과 플레이어 입력값을 비교", () => {
  test("3개의 숫자를 모두 맞칠 경우", () => {
    //given
    const message = "3개의 숫자를 모두 맞히셨습니다!";
    const logSpy = jest.spyOn(console, "log");

    //when
    app.compareNumbers(713, 713);

    //then
    expect(logSpy).toHaveBeenCalledWith(message);
  });

  test("하나도 없는 경우", () => {
    const logSpy = jest.spyOn(console, "log");
    app.compareNumbers(713, 245);
    expect(logSpy).toHaveBeenCalledWith("낫싱");
  });

  test("볼과 스트라이크", () => {
    const logSpy = jest.spyOn(console, "log");
    app.compareNumbers(713, 145);
    expect(logSpy).toHaveBeenCalledWith("1볼");
    app.compareNumbers(713, 671);
    expect(logSpy).toHaveBeenCalledWith("2볼");
    app.compareNumbers(713, 123);
    expect(logSpy).toHaveBeenCalledWith("1볼 1스트라이크");
    app.compareNumbers(713, 216);
    expect(logSpy).toHaveBeenCalledWith("1스트라이크");
  });
});
