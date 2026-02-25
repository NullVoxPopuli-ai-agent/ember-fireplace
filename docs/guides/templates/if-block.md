# <code v-pre>{{#if ...}}</code>

```hbs
{{#if expression}}...{{/if}}
```

```hbs
{{#if expression}}...{{else if expression}}...{{/if}}
```

```hbs
{{#if expression}}...{{else}}...{{/if}}
```

Conditional content can be wrapped in an if block.

```gjs
const thingIsTrue = true;

<template>
  {{#if thingIsTrue}}
    Hello there!
  {{/if}}
</template>
```

Additionally more cases are possible with <code v-pre>{{else if expression}}</code> 
and a <code v-pre>{{else}}</code> clause for all other cases.

```gjs
const waterTemperature = 38;
const isBoiling = (temperature) => temperature >= 100;
const isFreezing = (temperature) => temperature < 0;

<template>
  {{#if (isBoiling waterTemparature)}}
    Water is boiling
  {{else if (isFreezing waterTemperature)}}
    It's freezing - <i>brrr!</i>
  {{else}}
    Liquidity liquid
  {{/if}}
</template>
```

> [!INFO]
> Just like in JavaScript, `0`, `false`, `null`, `undefined`, and the empty string are falsy in Ember templates. 
> Unlike in JavaScript, the empty array is also considered falsy in Ember templates.

