export function isFunction(value) {
  return typeof value === "function";
}

export function isPromise(value) {
  return value instanceof Promise;
}

export function createFlexConverter(fn) {
  fn.flexConverter = fn;
  return fn;
}

export const plusOneConverter = createFlexConverter(x => x + 1);
