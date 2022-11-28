const { Console } = require('@woowacourse/mission-utils');
const { MESSAGE, RESULT } = require('../Util/Constants');

const OutputView = {
  printStart() {
    Console.print(MESSAGE.START);
  },

  printResult({ strike, ball }) {
    const strikeResult = strike ? strike + RESULT.STRIKE : '';
    const ballResult = ball ? ball + RESULT.BALL + RESULT.BLANK : '';

    if (strike || ball) {
      return Console.print(ballResult + strikeResult);
    }
    Console.print(RESULT.NOTHING);
  },

  printSuccess() {
    Console.print(MESSAGE.SUCCESS);
  },
};

module.exports = OutputView;

