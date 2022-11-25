const MissionUtils = require("@woowacourse/mission-utils");
const { GAME_RESULT } = require("../constant/Constant");

const OutputView = {
  printResult(ball, strike) {
    if (strike === 3) {
      MissionUtils.Console.print(GAME_RESULT.BALL_STRIKE(ball, strike));
      MissionUtils.Console.print(GAME_RESULT.CONGRATURATION);
    } else if (strike !== 3) {
      this.continue(ball, strike);
    }
  },
  continue(ball, strike) {
    ball || strike
      ? MissionUtils.Console.print(GAME_RESULT.BALL_STRIKE(ball, strike))
      : MissionUtils.Console.print(GAME_RESULT.NOTHING);
  },
};

module.exports = OutputView;
