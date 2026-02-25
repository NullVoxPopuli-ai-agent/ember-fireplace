# <code v-pre>{{fn ...}}</code>

```hbs
{{fn function ..args}}
```

<code v-pre>{{fn}}</code> allows you to pass parameters along to
functions in your templates:

```js
import { fn } from '@ember/helper';

function showAlert(message) {
  alert(`The message is: '${message}'`);
}

<template>
  <button type="button" {{on "click" (fn showAlert "Hello!")}}>
    Click me!
  </button>
</template>
```

> [!WARNING] TODO
> Make this a built-in helper
>
> - Tracking Issue: ?
