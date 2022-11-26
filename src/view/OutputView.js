const { Console } = require("@woowacourse/mission-utils");
const { OUTPUT_MESSAGE } = require("../constants/messages");

const OutputView = {
  printStart() {
    Console.print(OUTPUT_MESSAGE.start);
  },

  printCountResult({ ball, strike }) {
    if (this.isNothing({ ball, strike })) {
      return Console.print(OUTPUT_MESSAGE.nothing);
    }
    Console.print(OUTPUT_MESSAGE.countResult({ ball, strike }));
  },

  printGameSuccess() {
    Console.print(OUTPUT_MESSAGE.end);
  },

  isNothing({ ball, strike }) {
    return ball === 0 && strike === 0;
  },
};

module.exports = OutputView;
