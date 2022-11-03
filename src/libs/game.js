const { Console, Random } = require("@woowacourse/mission-utils");
const validation = require("./validation");

const game = {
  start: () => {
    Console.print("숫자 야구 게임을 시작합니다.");
  },

  setAnswer: () => {
    const numberArr = [];
    while (numberArr.length < 3) {
      const number = Random.pickNumberInRange(1, 9);
      if (!numberArr.includes(number)) numberArr.push(number);
    }

    return Number(numberArr.join(""));
  },

  getAnswer: () => game.setAnswer(),

  progress: (answer) => {
    Console.readLine("숫자를 입력해주세요 : ", (input) => {
      const isValidPlayerInput = validation.playerInput(input);

      if (!isValidPlayerInput) return game.exitWithException();

      const { ball, strike } = game.getResult(answer, input);
      game.printResult(ball, strike);

      if (strike !== 3) return game.progress(answer);

      game.printEndSentence();
    });
  },

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
  },

  printEndSentence: () => {
    Console.readLine(
      "3개의 숫자를 모두 맞히셨습니다! 게임 종료\n게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n",
      (input) => {
        const isValidPlayerInput = validation.option(input);

        if (!isValidPlayerInput) return game.exitWithException();

        if (input === "1") return game.reset();

        game.end();
      }
    );
  },

  reset: () => {
    game.progress(game.getAnswer());
  },

  end: () => {
    Console.close();
  },

  exitWithException: () => {
    throw new Error("잘못된 값을 입력하여 애플리케이션이 종료합니다.");
  },
};

module.exports = game;
