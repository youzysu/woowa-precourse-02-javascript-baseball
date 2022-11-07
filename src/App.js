const Game = require('../src/Game');
const { MESSAGE } = require('../src/Materials');
const { Console } = require('@woowacourse/mission-utils');

class App {
  play() {
    Console.print(MESSAGE.START);
    Game.start();
  }
}

module.exports = App;
