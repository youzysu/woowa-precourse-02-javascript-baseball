const { Console } = require('@woowacourse/mission-utils');

class OutputView {
  static printMessage(message) {
    Console.print(message);
  }
}

module.exports = OutputView;
