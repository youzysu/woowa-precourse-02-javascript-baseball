const { Console } = require("@woowacourse/mission-utils");
const { BASEBALL } = require("./constants");

class BallStrike {
  static getCount(playerNumbers, answerNumbers) {
    const ballStrikeCount = playerNumbers.reduce(
      (ballStrikeCount, playerNumber, playerNumberIndex) => {
        const answerNumberIndex = answerNumbers.indexOf(playerNumber);
        if (answerNumberIndex !== -1) {
          if (answerNumberIndex === playerNumberIndex) {
            ballStrikeCount["strike"]
              ? ballStrikeCount["strike"]++
              : (ballStrikeCount["strike"] = 1);
          } else {
            ballStrikeCount["ball"]
              ? ballStrikeCount["ball"]++
              : (ballStrikeCount["ball"] = 1);
          }
        }
        return ballStrikeCount;
      },
      {}
    );
    return ballStrikeCount;
  }

  static printResultSentence({ ball, strike }) {
    const ballSentence = ball ? `${ball}${BASEBALL.BALL}` : "";
    const strikeSentence = strike ? `${strike}${BASEBALL.STRIKE}` : "";
    if (ball && !strike) {
      Console.print(ballSentence);
      return;
    }
    if (strike && !ball) {
      Console.print(strikeSentence);
      return;
    }
    Console.print(`${ballSentence} ${strikeSentence}`);
  }
}

exports.BallStrike = BallStrike;
