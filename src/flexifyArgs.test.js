import flexifyArgs from "./flexifyArgs";
import flexValue from "./flexValue";

describe("flexifyArgs", () => {
  it("should not affect a function with no args", () => {
    const fn = flexifyArgs(() => 1);

    expect(fn()).toBe(1);
  });

  it("should handle args", () => {
    const fn = flexifyArgs(x => x, flexValue);

    expect(fn(1)).toBe(1);
  });

  it("should handle infinte args", () => {
    function sum() {
      return Array.from(arguments).reduce((sum, x) => sum + x, 0);
    }

    const flexifiedSum = flexifyArgs(sum, flexValue);

    expect(sum(1, 2, 3, 4)).toBe(10);
    expect(flexifiedSum(1, () => 2, 3, () => () => 4)).toBe(10);
  });

  it("should handle infinte args after a different type", () => {
    function sum() {
      return Array.from(arguments).reduce((sum, x) => sum + x, 0);
    }

    const flexifiedSum = flexifyArgs(sum, () => 0, flexValue);

    expect(sum(1, 2, 3, 4)).toBe(10);
    expect(flexifiedSum("zero", 1, () => 2, 3, () => () => 4)).toBe(10);
  });
});
