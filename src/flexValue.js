import { isFunction } from "./utils";
import { createFlexConverter } from "./utils";

function flexValue(value) {
  if (value.flexConverter) {
    return createFlexConverter(x => value.flexConverter(flexValue(x)));
  }

  while (isFunction(value)) {
    value = value();
  }

  return value;
}

export default createFlexConverter(flexValue);
