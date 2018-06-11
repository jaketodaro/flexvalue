import FlexValue from "./flexValue";

export default function flexifyArgs() {
  const [fn, ...argConverters] = arguments;

  return function() {
    const args = Array.from(arguments).map((arg, i) => {
      const argConverter =
        i >= argConverters.length
          ? argConverters.slice(-1)[0]
          : argConverters[i];

      return argConverter(arg);
    });

    return fn.apply(this, args);
  };
}
