# <code v-pre>{{element ...}}</code>

```ts
import { element } from "ember-element-helper";
```

```hbs
{{element "tagName"}}
```

Use it for dynamic elements.

```gjs
import { element } from 'ember-element-helper';

<template>
  {{#let (element @tagName) as |Tag|}}
    <Tag class="my-tag">hello world!</Tag>
  {{/let}}
</template>
```

> [!WARNING] TODO
> Make this a built-in helper
>
> - [RFC 389](https://rfcs.emberjs.com/id/0389-dynamic-tag-names)
> - Tracking Issue: ?
