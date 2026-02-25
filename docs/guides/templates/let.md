# <code v-pre>{{#let ...}}</code>

The `let` helper receives one or more positional arguments and yields
them out as block params.

```hbs
{{#let
    (concat post.title ' | The Ember.js Blog')
    post.content
    (hash
      theme="high-contrast"
      enableComments=true
    )
    as |title content options|
}}
  <MyPost @title={{title}} @content={{content}} @options={{options}} />
{{/let}}
```
