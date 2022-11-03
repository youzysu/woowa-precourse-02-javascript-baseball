const { Console, Random } = require("@woowacourse/mission-utils");

const game = {
  start: () => {
    Console.print("숫자 야구 게임을 시작합니다.");
  },

  setAnswer: () => {
    const numArr = Random.pickUniqueNumbersInRange(1, 9, 3);

    return Number(numArr.join(""));
  },

  getAnswer: () => game.setAnswer(),
};

module.exports = game;
