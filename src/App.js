const game = require("./libs/game.js");

class App {
  play() {
    // 게임을 시작한다.
    game.start();
    let answer = game.getAnswer();
    //
    // 게임을 진행한다. -> game.progress()
    // 숫자 입력 문구가 출력되며, 플레이어는 숫자를 입력한다.
    // 1. 숫자가 올바른 형식인지 판별한다. -> validation.playerNumber()
    //    - 올바른 형식이 아니라면 강제 종료한다.
    // 2. 입력한 숫자의 결과를 출력한다. -> game.printResult()
    // 3. 틀릴 경우 위의 과정을 반복한다.
    // 4. 맞힐 경우 게임 종료 문구를 출력한다. -> game.printEndSentence()
    // 5. 플레이어는 1,2중 하나를 선택한다.
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
