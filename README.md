# flexValue

`flexValue` is simple. It lets you replace anywhere you need a value with
`(value | () => flexValue),` and lets you replace anywhere you need an async value
with `(value | () => FlexValueAsync | Promise<FlexValueAsync>)`. This is useful
for adding extra flexibility to your js apis.
