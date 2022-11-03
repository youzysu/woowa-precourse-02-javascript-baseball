const game = require("./libs/game.js");

class App {
  play() {
    game.start();
    let answer = game.getAnswer();

    game.progress(answer);
  }
}

const app = new App();
app.play();

module.exports = App;
