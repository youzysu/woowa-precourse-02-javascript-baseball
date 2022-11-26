const { MESSAGE, OPTION } = require('../Util/Constants');
const { Console } = require('@woowacourse/mission-utils');
const Validator = require('../Model/Validator');

const InputView = {
  readNumber(callback) {
    Console.readLine(MESSAGE.TRIAL, callback);
  },

  readCommand(callback) {
    Console.readLine(MESSAGE.REPLAY, callback);
  },
};

module.exports = InputView;

