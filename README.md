# flexValue

`flexValue` is simple. It lets you replace anywhere you need a value with
`(value | () => flexValue),` and lets you replace anywhere you need an async value
with `(value | () => FlexValueAsync | Promise<FlexValueAsync>)`. This is useful
for adding extra flexibility to your js apis.

You can convert any function into a function that takes flexible values with `flexifyArgs`.

```
import {flexifyArgs, flexValue, flexValueAsync} from 'flexValue';

const add = (a, b) => a + b;
const addToAsyncValue = flexifyArgs(myFn, flexValue, flexValueAsync);

flexibleAdd(() => 1, Promise.resolve(2)) // 3;
```

If your function takes infinite args, the last argument you pass to `flexifyArgs`
will be used to translate the rest of your arguments.

```
import {flexifyArgs, flexValue, flexValueAsync} from 'flexValue';

function sum() {
  return Array.from(arguments).reduce((sum, x) => sum + x, 0);
}

const sumValuesToAsyncValue = flexifyArgs(sum, flexValueAsync, flexValue);

sumAsyncValuesToSyncValue(Promise.resolve(1), 2, 3, 4) // 10
```
