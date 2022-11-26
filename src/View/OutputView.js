const { Console } = require('@woowacourse/mission-utils');
const { MESSAGE, RESULT } = require('../Util/Constants');

const OutputView = {
  printStart() {
    Console.print(MESSAGE.START);
  },

  printResult(trial) {
    const strikeResult = trial.strike ? trial.strike + RESULT.STRIKE : '';
    const ballResult = trial.ball ? trial.ball + RESULT.BALL + RESULT.BLANK : '';

    if (trial.strike || trial.ball) {
      return Console.print(ballResult + strikeResult);
    }
    Console.print(RESULT.NOTHING);
  },

  printSuccess() {
    Console.print(MESSAGE.SUCCESS);
  },
};

module.exports = OutputView;
