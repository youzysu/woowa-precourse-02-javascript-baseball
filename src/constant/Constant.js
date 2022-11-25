const RANGE_OF_COMPUTER_NUMBER = {
  MAXIMUM: 9,
  MINIMUM: 1,
  LENGTH: 3,
};

const GAME_RESULT = {
  BALL_STRIKE: (ball, strike) =>
    ball && strike
      ? `${ball}볼 ${strike}스트라이크`
      : ball
      ? `${ball}볼`
      : `${strike}스트라이크`,
  NOTHING: "낫싱",
  CONGRATURATION: "3개의 숫자를 모두 맞히셨습니다! 게임 종료",
};

const COMMAND = {
  RESTART: "1",
  FINISH: "2",
};

module.exports = {
  RANGE_OF_COMPUTER_NUMBER,
  GAME_RESULT,
  COMMAND,
};
