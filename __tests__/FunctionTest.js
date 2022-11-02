const App = require("../src/App");

describe("구현 기능 목록 테스트", () => {
  test("입력값 받아오기", () => {
    const app = new App();
    expect(app.play()).toBe("안녕");
  });
});
