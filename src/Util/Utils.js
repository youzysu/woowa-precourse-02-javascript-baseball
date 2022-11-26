const Utils = {
  convertNumber(userInput) {
    return userInput.split('').map((str) => Number(str));
  },
};

module.exports = Utils;
