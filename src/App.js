const { Console } = require('@woowacourse/mission-utils');
const { MESSAGE } = require('../src/Materials');
const Game = require('../src/Game');

class App {
  play() {
    Console.print(MESSAGE.START);
    Game.start();
  }
}

module.exports = App;
