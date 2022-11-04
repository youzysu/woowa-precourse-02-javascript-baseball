const MissionUtils = require("@woowacourse/mission-utils");

class Game {
  setAnswerNumber() {
    const numbers = MissionUtils.Random.pickUniqueNumbersInRange(1, 9, 3)
    return numbers.join('')
  }
}