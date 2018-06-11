import flexValue from "./flexValue";
import { plusOneConverter } from "./utils";

describe("flexValue", () => {
  it("should handle a simple value", () => {
    expect(flexValue(1)).toBe(1);
  });

  it("should handle a value provided by a function", () => {
    expect(flexValue(() => 1)).toBe(1);
  });

  it("should handle a value provided by a nested function", () => {
    expect(flexValue(() => () => () => 1)).toBe(1);
  });

  it("should handle nested types", () => {
    expect(flexValue(plusOneConverter)(() => 1)).toBe(2);
  });
});
