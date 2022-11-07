const removeListDuplication = (list) => {
  return [...new Set(list)];
};

const throwErrorWrongInputValue = () => {
  throw new Error("잘못된 입력값입니다.");
};

exports.removeListDuplication = removeListDuplication;
exports.throwErrorWrongInputValue = throwErrorWrongInputValue;
