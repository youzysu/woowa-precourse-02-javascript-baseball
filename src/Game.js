const MissionUtils = require("@woowacourse/mission-utils");

class Game {
  constructor() {
    this.strikeCount = 0
    this.ballCount = 0
  }

  setAnswerNumber() {
    const numbers = MissionUtils.Random.pickUniqueNumbersInRange(1, 9, 3)
    return numbers
  }

  counterStrikeBall(userInput) {
    const userNumber = userInput.toString().split('').map(str => Number(str))
    const answerNumber = this.setAnswerNumber()

    for (let index = 0; index < userNumber.length; index++) {
      if (userNumber[index] === answerNumber[index]) this.strikeCount++
      else {
        if (answerNumber.includes(userNumber[index])) this.ballCount++
      }
    }
    
    const hint = { strike: this.strikeCount, ball: this.ballCount }
    return hint
  }
}