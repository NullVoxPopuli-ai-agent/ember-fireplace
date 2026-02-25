# <code v-pre>{{#each-in ...}}</code>

```hbs
{{#each-in object as |key value|}}...{{/each-in}}
```

```hbs
{{#each-in object as |key value|}}...{{else}}...{{/each-in}}
```

Iterating through objects can be done with the <code v-pre>{{#each-in}}</code> block,
similar to JavaScript's `for ... in` loop.

```gjs
const pokemon = {
  grass: ['Bulbasaur', 'Chikorita', 'Treecko'],
  water: ['Squirtle', 'Totodile', 'Mudkip'],
  fire: ['Charmander', 'Cyndaquil', 'Torchic']
}

<template>
  {{#each-in pokemon as |element pokemons|}}
    {{element}} pokemon:

    <ul>
    {{#each pokemons as |name|}}
      <li>{{name}}</li>
    {{/each}}
    </ul>
  {{/each-in}}
</template>
```

## Ordering 

An object's keys will be listed in the same order as the array returned from calling `Object.keys` on that object. 
If you want a different sort order, you should use `Object.keys` to get an array, sort that array with the built-in 
JavaScript tools, and use the [<code v-pre>{{#each}}</code>](./each.md) block instead.

## Empty Object

An <code v-pre>{{#each-in}}</code> block can have an <code v-pre>{{else}}</code> clause. The contents of this block will 
render if the object is `empty`, `null`, or `undefined`.

```gjs
const pokemon = {}

<template>
  {{#each-in pokemon as |element pokemons|}}
    ... (see above) ...
  {{else}}
    No pokemon to show.
  {{/each-in}}
</template>
```

