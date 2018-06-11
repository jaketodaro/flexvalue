import flexArray from "./flexArray";
import flexValue from "./flexValue";
import flexValueAsync from "./flexValueAsync";
import { plusOneConverter } from "./utils";

describe("flexArray", () => {
  it("should handle an array of flexValue", () => {
    expect(flexArray(flexValue)([() => 1, 2, () => 3])).toEqual([1, 2, 3]);
  });

  it("should handle an array of flexValueAsync", () => {
    expect(
      flexArray(flexValue)([Promise.resolve(() => 1), () => Promise.resolve(2)])
    ).toEqual([Promise.resolve(1), Promise.resolve(2)]);
  });

  it("should handle an array of arrays of flexValue", () => {
    expect(flexArray(flexArray(flexValue))([[() => 1]])).toEqual([[1]]);
  });

  it("should handle an array of a nested type", () => {
    expect(
      flexArray(flexValueAsync(plusOneConverter))([
        () => Promise.resolve(1),
        Promise.resolve(() => 2)
      ])
    ).toEqual([Promise.resolve(2), Promise.resolve(3)]);
  });
});
