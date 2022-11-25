const OutputView = require('../View/OutputView');
const { MESSAGE, OUTPUT } = require('./const');

const game = {
  printResult: (ballCount, strikeCount) => {
    if (ballCount === 0 && strikeCount === 0) {
      OutputView.printMessage(OUTPUT.NOTHING);
      return;
    }

    const ballCountPrint = ballCount !== 0 ? `${ballCount}${OUTPUT.BALL} ` : '';
    const strikeCountPrint =
      strikeCount !== 0 ? `${strikeCount}${OUTPUT.STRIKE}` : '';

    OutputView.printMessage(ballCountPrint + strikeCountPrint);

    if (strikeCount === 3) OutputView.printMessage(MESSAGE.SUCCESS);
  },

  quitWithException: (error) => {
    throw new Error(error);
  },
};

module.exports = game;
