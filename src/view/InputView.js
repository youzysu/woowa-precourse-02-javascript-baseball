const { Console } = require("@woowacourse/mission-utils");
const { GAME_SENTENCE } = require("../constants");
const Validation = require("../Validation");

const InputView = {
  readBridgeSize(callback) {
    Console.readLine(GAME_SENTENCE.PLAYER_INPUT, (threeDigistsNumber) => {
      Validation.checkPlayerInputValue(threeDigistsNumber);
      callback(threeDigistsNumber);
    });
  },

  readGameCommand(callback) {
    Console.readLine(GAME_SENTENCE.RESTART, (gameCommand) => {
      Validation.checkGameCommnad(gameCommand);
      callback(gameCommand);
    });
  },
};

module.exports = InputView;
