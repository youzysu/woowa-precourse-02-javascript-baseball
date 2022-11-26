const { Console } = require("@woowacourse/mission-utils");
const { INPUT_MESSAGE } = require("../constants/messages");
const Validation = require("../Validation");

const InputView = {
  readBridgeSize(callback) {
    Console.readLine(INPUT_MESSAGE.playerInput, (threeDigistsNumber) => {
      Validation.checkPlayerInputValue(threeDigistsNumber);
      callback(threeDigistsNumber);
    });
  },

  readGameCommand(callback) {
    Console.readLine(INPUT_MESSAGE.restart, (gameCommand) => {
      Validation.checkGameCommnad(gameCommand);
      callback(gameCommand);
    });
  },
};

module.exports = InputView;
