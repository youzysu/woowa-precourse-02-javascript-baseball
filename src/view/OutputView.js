const { Console } = require("@woowacourse/mission-utils");
const { GAME_SENTENCE } = require("./constants");

const OutputView = {
  printStart() {
    Console.print(GAME_SENTENCE.START);
  },
};

module.exports = OutputView;
