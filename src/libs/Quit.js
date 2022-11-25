const { Console } = require('@woowacourse/mission-utils');

const Quit = {
  game: () => {
    Console.close();
  },

  withException: (error) => {
    throw new Error(error);
  },
};

module.exports = Quit;
