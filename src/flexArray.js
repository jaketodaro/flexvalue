import flexValue from "./flexValue";
import flexValueAsync from "./flexValueAsync";
import { createFlexConverter } from "./utils";

export default function flexArray(converter) {
  return createFlexConverter(array => array.map(converter));
}
