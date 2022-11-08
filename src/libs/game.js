const { Console, Random } = require("@woowacourse/mission-utils");
const { MESSAGE, OUTPUT } = require("./const");

const game = {
  setAnswer: () => {
    const numberArr = [];
    while (numberArr.length < 3) {
      const number = Random.pickNumberInRange(1, 9);
      if (!numberArr.includes(number)) numberArr.push(number);
    }

    return Number(numberArr.join(""));
  },

  getAnswer: () => game.setAnswer(),

  getResult: (computerAnswer, playerAnswer) => {
    let ballCount = 0;
    let strikeCount = 0;

    [...playerAnswer].forEach((number, idx) => {
      if (![...(computerAnswer + "")].includes(number)) return;

      if ((computerAnswer + "")[idx] === number) strikeCount++;
      else ballCount++;
    });

    return { ballCount, strikeCount };
  },

  printResult: (ballCount, strikeCount) => {
    if (ballCount === 0 && strikeCount === 0) {
      Console.print(OUTPUT.NOTHING);
      return;
    }

    const ballCountPrint = ballCount !== 0 ? `${ballCount}${OUTPUT.BALL} ` : "";
    const strikeCountPrint =
      strikeCount !== 0 ? `${strikeCount}${OUTPUT.STRIKE}` : "";

    Console.print(ballCountPrint + strikeCountPrint);

    if (strikeCount === 3) Console.print(MESSAGE.SUCCESS);
  },

  quitWithException: () => {
    throw new Error(MESSAGE.ERROR);
  },
};

module.exports = game;
