const MESSAGE = {
  START: '숫자 야구 게임을 시작합니다.',
  TRIAL: '숫자를 입력해주세요 : ',
  SUCCESS: '3개의 숫자를 모두 맞히셨습니다! 게임 종료',
  REPLAY: '게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.',
};

const ERROR = {
  TYPE: '숫자가 아닌 값을 입력하여 게임을 종료합니다.',
  LENGTH: '3자리 숫자가 아닌 값을 입력하여 게임을 종료합니다.',
  DUPLICATE: '중복된 숫자를 입력하여 게임을 종료합니다.',
  NOT_OPTION: '유효하지 않은 값을 입력하여 게임을 종료합니다.',
};

const OPTION = {
  RESTART: '1',
  END: '2',
};

const RESULT = {
  NOTHING: '낫싱',
  BALL: '볼',
  STRIKE: '스트라이크',
};

module.exports = {
  MESSAGE,
  OPTION,
  ERROR,
  RESULT,
};
