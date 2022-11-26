const { Console } = require("@woowacourse/mission-utils");
const { INPUT_MESSAGE } = require("../constants/messages");
const Validation = require("../Validation");

const InputView = {
  readBridgeSize(actionBrridgeSize) {
    Console.readLine(INPUT_MESSAGE.playerInput, (threeDigistsNumber) => {
      Validation.checkPlayerInputValue(threeDigistsNumber);
      actionBrridgeSize(threeDigistsNumber);
    });
  },

  readGameCommand(actionGameCommand) {
    Console.readLine(INPUT_MESSAGE.restart, (gameCommand) => {
      Validation.checkGameCommnad(gameCommand);
      actionGameCommand(gameCommand);
    });
  },
};

module.exports = InputView;
