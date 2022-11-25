const MissionUtils = require("@woowacourse/mission-utils");
const { MESSAGE } = require("../constant/Message");

const InputView = {
  readNumber(fn) {
    MissionUtils.Console.readLine(MESSAGE.INPUT.NUMBER, fn);
  },
  readCommand(fn) {
    MissionUtils.Console.readLine(MESSAGE.INPUT.COMMAND, fn);
  },
};

module.exports = InputView;
