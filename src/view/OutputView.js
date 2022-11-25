const { Console } = require("@woowacourse/mission-utils");
const { COUNT, GAME_SENTENCE } = require("../constants");

const OutputView = {
  printStart() {
    Console.print(GAME_SENTENCE.START);
  },

  printCountResult({ ball, strike }) {
    if (this.isNothing({ ball, strike })) {
      return Console.print(COUNT.NOTHING);
    }
    Console.print(`${COUNT.BALL(ball)} ${COUNT.STRIKE(strike)}`);
  },

  printGameSuccess() {
    Console.print(GAME_SENTENCE.END);
  },

  isNothing({ ball, strike }) {
    return ball === 0 && strike === 0;
  },
};

module.exports = OutputView;
