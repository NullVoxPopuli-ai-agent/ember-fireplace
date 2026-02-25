# <code v-pre>{{if ...}}</code>

```hbs
{{if expression value}}
```

```hbs
{{if expression truthyValue falsyValue}}
```

Place conditions inline with <code v-pre>{{if}}</code>.

```gjs
const thingIsTrue = true;

<template>
  <div class={{if thingIsTrue "value-if-true" "value-if-false"}}>
    This div used the inline "if" to calculate the class to use.
  </div>
</template>
```

