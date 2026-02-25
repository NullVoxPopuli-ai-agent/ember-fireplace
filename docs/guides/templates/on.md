# <code v-pre>{{on ...}}</code>

```hbs
{{on "eventName" callback}}
```

```hbs
{{on "eventName" callback ..options}}
```

The <code v-pre>on</code> modifier lets you easily add event listeners (it uses
[EventTarget.addEventListener](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener)
internally).

For example, if you'd like to run a function on your component when a `<button>`
in the components template is clicked you might do something like:

```gjs
import { on } from '@ember/modifier';

function likePost = () => {
  // someone likes your post!
  // better send a request off to your server...
}

<template>
  <button type="button" {{on 'click' likePost}}>Like this post!</button>
</template>
```

## Arguments

<code v-pre>{{on}}</code> accepts two positional arguments, and a few named arguments.

The positional arguments are:

- `event` -- the name to use when calling `addEventListener`
- `callback` -- the function to be passed to `addEventListener`

The named arguments are:

- `capture` -- a `true` value indicates that events of this type will be dispatched
  to the registered listener before being dispatched to any EventTarget beneath it
  in the DOM tree.
- `once` -- indicates that the listener should be invoked at most once after being
  added. If true, the listener would be automatically removed when invoked.
- `passive` -- if `true`, indicates that the function specified by listener will never
  call preventDefault(). If a passive listener does call preventDefault(), the user
  agent will do nothing other than generate a console warning. See
  [Improving scrolling performance with passive listeners](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener#Improving_scrolling_performance_with_passive_listeners)
  to learn more.

The callback function passed to <code v-pre>on</code> will receive any arguments that are passed
to the event handler. Most commonly this would be the `event` itself.

If you would like to pass additional arguments to the function you should use
the <code v-pre>fn</code> helper.

For example, in our example case above if you'd like to pass in the post that
was being liked when the button is clicked you could do something like:

```gjs [like-post.gjs]
<template>
  <button {{on 'click' (fn likePost @post)}}>Like this post!</button>
</template>
```

In this case, the `likePost` function will receive two arguments: the click event
and the value of `@post`.

> [!WARNING] TODO
> Make this a built-in helper
>
> - Tracking Issue: ?
