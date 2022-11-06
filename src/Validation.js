class Validation {
  isValidInput(userInput) {
    this.typeValidity(userInput);
    this.lengthValidity(userInput);
    this.isDuplicate(userInput);
  }

  typeValidity(userInput) {
    if (!Number.isInteger(Number(userInput))) {
      throw new Error("숫자만 입력해주세요.");
    }
  }

  lengthValidity(userInput) {
    if (userInput.length !== 3) {
      throw new Error("3자리 숫자를 입력해주세요.");
    }
  }

  isDuplicate(userInput) {
    const removedSame = new Set(userInput);
    if (userInput.length !== removedSame.size) {
      throw new Error("중복된 숫자가 있습니다.");
    }
  }
}

module.exports = new Validation();
