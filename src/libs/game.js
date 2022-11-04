const { Console, Random } = require("@woowacourse/mission-utils");

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
    if (ball === 0 && strike === 0) return Console.print("낫싱");

    const ballPrint = ball !== 0 ? `${ball}볼 ` : "";
    const strikePrint = strike !== 0 ? `${strike}스트라이크` : "";
    const resultPrint = `${ballPrint}${strikePrint}`;

    Console.print(resultPrint);

    if (strike === 3)
      Console.print("3개의 숫자를 모두 맞히셨습니다! 게임 종료");
  },

  end: () => {
    Console.close();
  },

  exitWithException: () => {
    throw new Error("잘못된 값을 입력하여 애플리케이션이 종료합니다.");
  },
};

module.exports = game;
