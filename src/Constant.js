const RANGE_OF_COMPUTER_NUMBER = {
  MAXIMUM: 9,
  MINIMUM: 1,
  LENGTH: 3,
};

const GAME_GUIDE_MESSAGE = {
  START_MESSAGE: "숫자 야구 게임을 시작합니다.",
  INPUT_MESSAGE: "숫자를 입력해주세요 : ",
  NEW_OR_CLOSE_MESSAGE:
    "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요. \n",
};

const GAME_RESULT = {
  BALL: "볼",
  STRIKE: "스트라이크",
  NOTHING: "낫싱",
  THREE_STRIKE: "3스트라이크\n3개의 숫자를 모두 맞히셨습니다! 게임 종료",
  ERROR: "잘못된 값을 입력하셨습니다. 게임을 종료합니다.",
};

const RESPONSE = {
  RESTART: "1",
  FINISH: "2",
};

module.exports = {
  RANGE_OF_COMPUTER_NUMBER,
  GAME_GUIDE_MESSAGE,
  GAME_RESULT,
  RESPONSE,
};
