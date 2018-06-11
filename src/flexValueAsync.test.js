import flexArray from "./flexArray";
import flexValue from "./flexValue";
import flexValueAsync from "./flexValueAsync";
import { plusOneConverter } from "./utils";

describe("flexValueAsync", () => {
  it("should handle a simple value", () => {
    return flexValueAsync(1).then(value => expect(value).toBe(1));
  });

  it("should handle a value provided by a function", () => {
    return flexValueAsync(() => 1).then(value => expect(value).toBe(1));
  });

  it("should handle a value provided by a nested function", () => {
    return flexValueAsync(() => () => () => 1).then(value =>
      expect(value).toBe(1)
    );
  });

  it("should handle a value provided by a promise", () => {
    return flexValueAsync(Promise.resolve(1)).then(value =>
      expect(value).toBe(1)
    );
  });

  it("should handle a value provided by promise -> function -> promise", () => {
    return flexValueAsync(Promise.resolve(() => Promise.resolve(1))).then(
      value => expect(value).toBe(1)
    );
  });

  it("should handle a value provided by function -> promise -> function", () => {
    return flexValueAsync(() => Promise.resolve(() => 1)).then(value =>
      expect(value).toBe(1)
    );
  });

  it("should handle nested types", () => {
    return flexValueAsync(plusOneConverter)(() => Promise.resolve(1)).then(
      value => {
        expect(value).toBe(2);
      }
    );
  });

  it("should handle a nested array type", () => {
    return flexValueAsync(flexArray(flexValue))(() =>
      Promise.resolve([() => 1, () => 2])
    ).then(value => expect(value).toEqual([1, 2]));
  });
});
