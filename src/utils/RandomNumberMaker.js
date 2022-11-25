const MissionUtils = require("@woowacourse/mission-utils");
const { RANGE_OF_COMPUTER_NUMBER } = require("../constant/Constant");

const RandomNumberMaker = () => {
  let pickedNumber = [];
  while (pickedNumber.length < RANGE_OF_COMPUTER_NUMBER.LENGTH) {
    let number = MissionUtils.Random.pickNumberInRange(
      RANGE_OF_COMPUTER_NUMBER.MINIMUM,
      RANGE_OF_COMPUTER_NUMBER.MAXIMUM
    );
    if (!pickedNumber.includes(number)) pickedNumber.push(number);
  }
  return pickedNumber;
};

module.exports = RandomNumberMaker;
