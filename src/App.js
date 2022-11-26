const GameController = require('./Controller/GameController');
const Computer = require('./Model/Computer');

class App {
  #gameController;
  #computer;

  constructor() {
    this.#computer = new Computer();
    this.#gameController = new GameController(this.#computer);
  }

  play() {
    this.#gameController.start();
  }
}

module.exports = App;
