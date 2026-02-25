# Components

Components in Ember are little pieces with a purpose and can be composed into a larger picture.

They can be written in different formats.

::: tabs

== Template Only Component

Here is an `<Avatar>` component:

```gjs [app/components/avatar.gjs]
<template>
  <aside>
    <div class="avatar" title={{@title}}>{{@initial}}</div>
  </aside>
</template>
```

The top-level `<template>` tag is exported as the default component from the file.
You _can_ write this export explicitly, but it's not necessary.
The following example is equivalent to the previous one.

```gjs [app/components/avatar.gjs]
export default <template>
  <aside>
    <div class="avatar" title={{@title}}>{{@initial}}</div>
  </aside>
</template>;
```

== Class-based Component

A `<template>` tag can also be embedded inside a class definition of a component.
This is useful when you need to add state or other logic to your component.
Take for example the following `<Avatar>` component, where a default title is added when the title argument is not provided.

```gjs [app/components/avatar.gjs]
import Component from '@glimmer/component';

export default class Avatar extends Component {
  get titleWithDefault() {
    return this.args.title ?? 'No avatar title provided';
  }

  <template>
    <aside>
      <div class="avatar" title={{this.titleWithDefault}}>
        {{@initial}}
      </div>
    </aside>
  </template>
}
```

:::

## Arguments

Arguments are the input to your component:

```gjs [application.gjs]
import Avatar from '#/components/avatar.gjs';

<template>
  <Avatar
    @img="https://avatars.githubusercontent.com/u/1253363?s=200&v=4"
    @name="Ember"
  />
</template>
```

Which can be accessed inside the component from markup as well as from code.

```gjs [#/components/avatar.gjs]
import Component from '@glimmer/component';

export default class Avatar extends Component {
  get initials() {
    return this.args.name.split(' ').map(compound => compound.charAt(0)).join(' ');
  }

  <template>
    {{#if @img}}
      <img src={{@img}} title={{@name}} alt="Avatar of {{@name}}" />
    {{else}}
      <span title={{@name}}>{{this.initials}}</span>
    {{/if}}
  </template>
}
```

### Fallback Values

Some arguments are optional and you provide a fallback value with a getter:

```gjs [#/components/avatar.gjs]
import Component from '@glimmer/component';
import { getImageFromName } from 'some/where';

export default class Avatar extends Component {
  get img() {
    return this.args.img ?? getImageFromName(this.args.name);
  }

  <template>
    <img sc={{this.img}} title={{@name}} alt="Avatar of {{@name}}" />
  </template>
}
```

## Attributes

_Attributes_ refer to HTML attributes that a component can forward to one or many elements with the special `...attributes` keyword.
They are unprefixed to give it the natural feeling we know from HTML and also for Ember to differentiate them from arguments.

Here is an example of forwarding HTML attributes to `...attributes`.

```gjs [#/components/avatar.gjs]
import Component from '@glimmer/component';

export default class Avatar extends Component {
  get initials() {
    return this.args.name.split(' ').map(compound => compound.charAt(0)).join(' ');
  }

  <template>
    {{#if @img}}
      <img src={{@img}} title={{@name}} alt="Avatar of {{@name}}" ...attributes/>
    {{else}}
      <span title={{@name}} ...attributes>{{this.initials}}</span>
    {{/if}}
  </template>
}
```

In either case of which element, the `<Avatar>` component is using, the attributes are forwarded.
You can have as many `...attributes` as you need, most often one is enough on the root of the component.
Not using `...attributes` disallows passing HTML attributes to the component.

```gjs [application.gjs]
import Avatar from '#/components/avatar.gjs';

<template>
  <Avatar
    @img="https://avatars.githubusercontent.com/u/1253363?s=200&v=4"
    @name="Ember"
    class="orange"
  />
</template>
```

This will put the `class="orange"` attribute on the `<img>` element.

## Blocks

Components can define areas that users can fill with their own HTML.
Here is an example:

```gjs
import Message from '#/components/message';

<template>
  <Message>
    This is the default <b>block content</b> that will
    replace `{{yield}}` (or `{{yield to="default"}}`)
    in the `Message` template.
  </Message>
</template>
```

inside of the `<Message>` component <code v-pre>{{yield}}</code> is used as "placeholder" for whatever a user is passing in:

```gjs [#/components/message.gjs]
<template>
  <div>
    {{yield}}
  </div>
</template>
```

The `yield` keyword makes sense, when writing the message component as a JavaScript function:

```js
export function* message() {
  const div = document.createElement('div');

  yield div;

  return div;
}

const msg = message();
const content = msg.next().value;

content.append(...);
```

### Conditional Blocks

Sometimes, we may want to provide some default content if the user of a component hasn't provided a block.
For instance, consider an error message dialog that has a default message in cases where we don't know what error occurred.
We could show the default message using the `(has-block)` syntax in an `<ErrorDialog>` component.

```gjs [#/components/error-dialog.gjs]
<template>
  <dialog>
    {{#if (has-block)}}
      {{yield}}
    {{else}}
      An unknown error occurred!
    {{/if}}
  </dialog>
</template>
```

Now, if we use our ErrorDialog component without a block, we'll get the default message.

```gjs
import ErrorDialog from '#/components/error-dialog';

<template>
  <ErrorDialog />
</template>
```

```html
<!-- rendered -->
<dialog>An unknown error occurred!</dialog>
```

If we had a more detailed message, though, we could use the block to pass it to the dialog.

```gjs
import ErrorDialog from '#/components/error-dialog';
import Icon from '#/components/icon';

<template>
  <ErrorDialog>
    <Icon @type="no-internet" />
    <p>You are not connected to the internet!</p>
  </ErrorDialog>
</template>
```

### Block Parameters

Blocks can also pass values back into the template, similar to a callback
function in JavaScript. Consider for instance a simple `<BlogPost>` component.

```gjs [#/components/blog-post.gjs]
<template>
  <h1>{{@post.title}}</h1>
  <h2>{{@post.author}}</h2>

  {{@post.body}}
</template>
```

```gjs
import BlogPost from '#/components/blog-post';

<template>
  <!-- usage -->
  <BlogPost @post={{@blogPost}} />
</template>
```

We may want to give the user the ability to put extra content before or after
the post, such as an image or a profile. Since we don't know what the
user wants to do with the body of the post, we can instead pass the body back
to them.

```gjs [#/components/blog-post.gjs]
<template>
  <h1>{{@post.title}}</h1>
  <h2>{{@post.author}}</h2>

  {{yield @post.body}}
</template>
```

```gjs
import BlogPost from '#/components/blog-post';
import AuthorBio from '#/components/author-bio';

<template>
  <!-- usage -->
  <BlogPost @post={{@blogPost}} as |postBody|>
    <img alt="" role="presentation" src="./blog-logo.png">

    {{postBody}}

    <AuthorBio @author={{@blogPost.author}} />
  </BlogPost>
</template>
```

We can yield back multiple values as well, separated by spaces.

```gjs [#/components/blog-post.gjs]
<template>
  {{yield @post.title @post.author @post.body }}
</template>
```

```gjs
import BlogPost from '#/components/blog-post';
import AuthorBio from '#/components/author-bio';

<template>
  <!-- usage -->
  <BlogPost @post={{@blogPost}} as |postTitle postAuthor postBody|>
    <img alt="" role="presentation" src="./blog-logo.png">

    {{postTitle}}

    {{postBody}}

    <AuthorBio @author={{postAuthor}} />
  </BlogPost>
</template>
```

### Named Blocks

If you want to yield content to different spots in the same component, you can use named blocks.
Specify a name for the yielded block, like this:

```gjs
<template>
  {{yield someThing to="somePlace"}}
</template>
```

> [!INFO]
> You could also want to pass some values. This is the same process as the default `yield`, but you just have to pass `to` as the last argument.

Here is an `<Alert>` component as an example, that has content and optionally a title or action block.

```gjs
<template>
  <div role="alert">
    {{#if @icon}}
      <Icon @icon={{@icon}} part="icon" />
    {{/if}}

    {{#if (has-block "title")}}
      <span part="title">
        {{yield to="title"}}
      </span>
    {{/if}}

    <div part="content">
      {{#if (has-block "content")}}
        {{yield to="content"}}
      {{else}}
        {{yield}}
      {{/if}}
    </div>

    {{#if (has-block "actions")}}
      <div part="actions">
        {{yield to="actions"}}
      </div>
    {{/if}}
  </div>
</template>
```

Developing the component this way allows for some very friendly consumption.
Let's start with a title and some content:

```gjs
import { Alert } from '#/above';

<template>
  <Alert>
    <:title>A Magical Journey Takes Turns</:title>
    <:content>
      Here be dragons - ye'd be warned!
    </content>
  </Alert>
</template>
```

The `<:title>` and `<:content>` blocks are matched with `(has-block "<name>")` and then yielded to.
This form of constructing your components is very consumer friendly, as it allows a much simpler invocation:

```gjs
import { Alert } from '#/above';

<template>
  <Alert>
    Here be dragons - ye'd be warned!
  </Alert>
</template>
```

No title, but a content block, even without `<:content>` named block, as it falls back to `(has-block)` and <code v-pre>{{yield}}</code>.
When those two omit the name, it falls back to `default`.

- `(has-block)` is the equivalent to `(has-block "default")`
- <code v-pre>{{yield}}</code> is the equivalent to <code v-pre>{{yield to="default"}}</code>

This is a very powerful strategie to develop components.
Provide sensible defaults, then allow more verbose invocations that provide more customizations.

## Signature

Components accept a `Signature` type parameter as part of their definition, that contains the synopsis of your component.
This parameter is expected to be an object type with (up to) three members: `Args`, `Element` and `Blocks`.

Describing your component with a signature is for example used by an LSP and editor tooling to help you with intellisense.
TypeScript is the language of choice, you can do it directly in a `.gts` file or with a `.d.ts` file.

`Args` represents the arguments your component accepts. Typically this will be an object type mapping the names of your args to their expected type. If no `Args` key is specified, it will be a type error to pass any arguments to your component.

The `Element` field declares what type of element(s), if any, the component applies its passed `...attributes` to. This is often the component's root element. Tracking this type ensures any modifiers used on your component will be compatible with the DOM element(s) they're ultimately attached to. If no `Element` is specified, it will be a type error to set any HTML attributes or modifiers when invoking your component.

The `Blocks` field specifies the names of any blocks the component yields to, as well as the type of any parameter(s) those blocks will receive. If your component does not support block invocation, omit the `Blocks` field altogether to generate type errors when invoked in block form.

> [!INFO]
> Note that the `inverse` block is an alias for `else`. These should be defined in `Blocks` as `else`, though <code v-pre>{{yield to="inverse"}}</code> will continue to work.

::: tabs

== Template Only Components

```gts
import type { TOC } from '@ember/component/template-only';

export interface SimpleHelloSignature {
  // We have a `<div>` as our root element
  Element: HTMLDivElement;
  // We accept no arguments or block form, so don't specify them in the signature
}

const SimpleHello: TOC<SimpleHelloSignature> = <template>
  ...
</template>
```

== Class-based Component

```gjs
import Component from '@glimmer/component';

export interface SuperTableSignature<T> {
  // We have a `<table>` as our root element
  Element: HTMLTableElement;
  // We accept an array of items, one per row
  Args: {
    items: Array<T>;
  };
  // We accept two named blocks: a parameter-less `header` block
  // and a `row` block which will be invoked with each item and
  // its index sequentially.
  Blocks: {
    header: [];
    row: [item: T, index: number];
  };
}

export default class SuperTable<T>
    extends Component<SuperTableSignature<T>> {
  <template>
    ...
  </template>
}
```

Class-based components also accept generics.

:::
