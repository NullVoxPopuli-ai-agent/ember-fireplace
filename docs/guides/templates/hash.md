# <code v-pre>{{hash}}</code>

Using the <code v-pre>{{hash}}</code> helper, you can pass objects directly from the template
as an argument to your components.

```gjs
import { hash } from '@ember/helper';

<template>
  {{#each-in (hash givenName='Jen' familyName='Weber') as |key value|}}
    <p>{{key}}: {{value}}</p>
  {{/each-in}}
</template>
```
