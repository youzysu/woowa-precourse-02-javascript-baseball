const { Console } = require("@woowacourse/mission-utils");

const InputView = {
  readBridgeSize(threeDigistsNumber) {
    Console.readLine("숫자를 입력해주세요 : ", (threeDigistsNumber) => {});
  },
};

module.exports = InputView;
