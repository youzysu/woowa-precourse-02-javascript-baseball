const { deepFreeze } = require("../utils");

const NUMBER_DIGITS = 3;

const COMMAND = {
  restart: 1,
  quit: 2,
};

const COUNT = {
  out: 3,
  initialization: {
    ball: 0,
    strike: 0,
  },
};

const exportsObject = {
  COMMAND,
  NUMBER_DIGITS,
  COUNT,
};
deepFreeze(exportsObject);

module.exports = exportsObject;
