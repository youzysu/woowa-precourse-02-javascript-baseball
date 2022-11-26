const ComputerAnswer = require('./Model/ComputerAnswer');
const GameManager = require('./Controller/GameManager');

class App {
  play() {
    new GameManager(new ComputerAnswer());
  }
}

const app = new App();
app.play();

module.exports = App;
