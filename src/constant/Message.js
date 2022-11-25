const MESSAGE = {
  START_GAME: "숫자 야구 게임을 시작합니다.",

  INPUT: {
    NUMBER: "숫자를 입력해주세요 : ",
    COMMAND: "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n",
  },

  NUMBER_ERROR: {
    NOT_A_NUMBER: "[ERROR] 값은 숫자로만 이루어져야 합니다",
    INVALID_LENGTH: "[ERROR] 값은 3자리로만 이루어져야 합니다",
    INCLUDES_ZERO: "[ERROR] 0을 제외한 1~9의 숫자만 입력가능합니다",
    DUPLICATED: "[ERROR] 값이 중복되어선 안됩니다",
  },

  COMAND_ERROR: {
    INVALID_COMMAND: "[ERROR] 1과 2중 하나만 입력가능합니다.",
  },
};

module.exports = { MESSAGE };
