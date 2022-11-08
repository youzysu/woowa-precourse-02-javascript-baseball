const { Console } = require("@woowacourse/mission-utils");
const { COUNT } = require("./constants");

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
    const ballSentence = ball ? COUNT.BALL(ball) : "";
    const strikeSentence = strike ? COUNT.STRIKE(strike) : "";
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
