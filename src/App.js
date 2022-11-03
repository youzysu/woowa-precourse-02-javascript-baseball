const game = require("./libs/game.js");

class App {
  play() {
    game.start();
    let answer = game.getAnswer();

    game.progress(answer);

    // 6. 1,2를 올바르게 선택했는지 확인한다. -> validation.option()
    //    - 그 외의 입력을 한다면 강제 종료한다.
    //
    // 게임을 재시작한다. -> game.reset()
    // 1. 1을 입력한 경우 게임을 다시 시작한다.
    //
    // 게임을 완젼히 종료한다. -> game.end()
    // 1. 2을 입력한 경우 게임을 완전히 종료한다.
  }
}

const app = new App();
app.play();

module.exports = App;
