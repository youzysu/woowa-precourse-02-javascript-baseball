const { deepFreeze } = require("../src/utils");

describe("utils 함수 테스트", () => {
  test("deepForzen test", () => {
    const obejct = {
      deep: {
        deeper: 1,
      },
    };

    expect(Object.isFrozen(obejct)).toBeFalsy();

    deepFreeze(obejct);
    expect(Object.isFrozen(obejct)).toBeTruthy();
  });
});
