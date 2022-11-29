const BaseballGame = require('./Controller/BaseballGame');
const Computer = require('./Model/Computer');

class App {
  #baseballGame;
  #computer;

  constructor() {
    this.#baseballGame = new BaseballGame(this.#computer);
  }

  play() {
    this.#baseballGame.start();
  }
}

module.exports = App;
