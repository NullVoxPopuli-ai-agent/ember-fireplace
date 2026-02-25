# <code v-pre>{{#each ...}}</code>

```hbs
{{#each collection as |item|}}...{{/each}}
```

```hbs
{{#each collection as |item index|}}...{{/each}}
```

```hbs
{{#each collection as |item|}}...{{else}}...{{/each}}
```

Iterating through lists can be done with an <code v-pre>{{#each}}</code> block.

```gjs
const fruits = ['Apple', 'Banana', 'Pineapple', 'Mango'];

<template>
  <ul>
  {{#each fruits as |fruit|}}
    <li>{{fruit}}</li>
  {{/each}}
  </ul>
</template>
```

## Item Indexes

You can access the index of an item as the second parameter of the each block.

```gjs
queue = [
  { name: 'Yehuda' },
  { name: 'Jen' },
  { name: 'Rob' }
];

<template>
  <ul>
  {{#each queue as |person index|}}
    <li>Hello, {{person.name}}! You're number {{index}} in line</li>
  {{/each}}
  </ul>
</template>
```

## Empty Lists

An <code v-pre>{{#each}}</code> block can have <code v-pre>{{else}}</code> clause, which is rendered when the list is empty.

```gjs
const shoppingList = [];

<template>
  {{#each shoppingList as |item|}}
    <p>{{item}}</p>
  {{else}}
    You got everything in your cart!
  {{/each}}
</template>
```

