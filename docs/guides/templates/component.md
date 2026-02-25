# <code v-pre>{{component ...}}</code>

```hbs
{{component MyComponent}}
```

```hbs
{{component MyComponent arg1=val1}}
```

```hbs
{{component MyComponent arg1=val1 arg2=val2 ... argN=valN}}
```

The component [helper](./helpers.md) can [curry](https://en.wikipedia.org/wiki/Currying)
a component and allows for [partial application](https://en.wikipedia.org/wiki/Partial_application)
when building with components.

The component helper is very helpful when putting components into other component via arguments or yielding pre-configured components.
