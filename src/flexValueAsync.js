import { isFunction, isPromise } from "./utils";
import { createFlexConverter } from "./utils";

function flexValueAsync(value) {
  if (value.flexConverter) {
    return createFlexConverter(x =>
      flexValueAsync(x).then(y => value.flexConverter(y))
    );
  }

  while (isFunction(value)) {
    value = value();
  }

  if (isPromise(value)) {
    return value.then(x => flexValueAsync(x));
  }

  return Promise.resolve(value);
}

export default createFlexConverter(flexValueAsync);
