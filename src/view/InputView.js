const { Console } = require("@woowacourse/mission-utils");
const { GAME_SENTENCE } = require("../constants");
const Validation = require("../Validation");

const InputView = {
  readBridgeSize(callback) {
    Console.readLine(GAME_SENTENCE.PLAYER_INPUT, (threeDigistsNumber) => {
      if (Validation.passAllValidationChecks(threeDigistsNumber)) {
        callback(threeDigistsNumber);
      }
    });
  },

  readGameCommand(callback) {
    Console.readLine(GAME_SENTENCE.RESTART, (number) => {
      callback(number);
    });
  },
};

module.exports = InputView;
