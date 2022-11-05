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

  getResult: (answer, input) => {
    let ball = 0;
    let strike = 0;

    [...input].forEach((item, idx) => {
      if (![...(answer + "")].includes(item)) return;

      if ((answer + "")[idx] === item) strike++;
      else ball++;
    });

    return { ball, strike };
  },

  printResult: (ball, strike) => {
    if (ball === 0 && strike === 0) {
      Console.print(OUTPUT.NOTHING);
      return;
    }

    const ballPrint = ball !== 0 ? `${ball}${OUTPUT.BALL} ` : "";
    const strikePrint = strike !== 0 ? `${strike}${OUTPUT.STRIKE}` : "";
    const resultPrint = `${ballPrint}${strikePrint}`;

    Console.print(resultPrint);

    if (strike === 3) Console.print(MESSAGE.SUCCESS);
  },

  quitWithException: () => {
    throw new Error(MESSAGE.ERROR);
  },
};

module.exports = game;
