# Template Basics

Templates in Ember are JavaScript files with a `<template>` tag for regular HTML with a handful of instructions (based on Handlebars).
File extensions are:

- `.gjs` (Glimmer + JavaScript)
- `.gts` (Glimmer + TypeScript)

> [!INFO]
> Glimmer is Ember's rendering engine.

Here is a sample template:

```gjs [some-template.gjs]
<template>
  ...
</template>
```

Many times a `<template>` is all the file needs, then it behaves like a superset of HTML.

> [!INFO]
> When there is only a `<template>` tag present in a file, it is the default export:
> 
> ```gjs
> export default <template>...</template>
> ```

## Tags

Tags work as they do in HTML and same white-space rules apply. 
[Non-void elements](https://html.spec.whatwg.org/multipage/syntax.html#void-elements) can use self-closing tags.


```gjs
<template>
  <main>
    Here be dragons
  </main>
</template>
```

### Restrictions

There are a few restrictions on the HTML that you can put in an Ember template:

- Only valid HTML elements in a `<body>` tag can be used
- No `<script>` tags

## Variable Interpolation

To show the value of a variable in the template use the "Mustache" syntax (double curly braces).

```gjs
const name = "world";

<template>
  <h1>Hello {{name}}</h1>
</template>
```

## Element Attributes

Attributes in Ember templates work as they do in HTML.

```gjs
<template>
  <img 
    src="https://media.tenor.com/GAMYf3psisEAAAAd/hamster-spinning.gif" 
    alt="A hamster is spinning within a fallen wheel"
  >
</template>
```

### Dynamic Attributes

Also you can use variables as attributes to make them dynamic.

```gjs
const gifURL = 'https://media.tenor.com/GAMYf3psisEAAAAd/hamster-spinning.gif';
const description = 'A hamster is spinning within a fallen wheel';

<template>
  <img src={{gifURL}} alt={{description}}>
</template>
```

Special treatment is made for truthy/falsy values. They will make the attribute appear or not in the rendered template.

```gjs
const welcomeHidden = false;

<template>
  <div hidden={{welcomeHidden}}>
    Weclome
  </div>
</template>
```

## Functions

A template can call functions.

```gjs
const name = "world";
const shout = (text) => text.toUpperCase(); 

<template>
  <h1>Hello {{(shout name)}}</h1>
</template>
```

We use wrapping `( )` to signify that that we are invoking a function with arguments. 
The `( )` are needed to disambiguate between rendering values, {{foo}}, and invoking 
functions: `{{ (foo) }}`. However, when there are arguments passed, there is no 
longer an ambiguity, and the `( )` are no longer needed.

So you could write the above call to the function, `shout`, like this:

```hbs
<h1>Hello {{shout name}}</h1>
```

### Nested Functions

Functions can be chained together, just like in other languages

```gjs
const name = "world";
const shout = (text) => text.toUpperCase();
const reverse = (text) => text.split('').reverse().join('');

<template>
  <h1>Hello {{reverse (shout name)}}</h1>
</template>
```

Unlike JavaScript, Ember templates use [Polish Notation](https://en.wikipedia.org/wiki/Polish_notation) or 
_Prefix Notation_ which means that functions precede their arguments. This simple language allows templates to be 
transformed into lightweight JSON objects to save bytes during network transfer and time during the browser's parse 
and evaluation phases. For more information, see this [announcement video](https://www.youtube.com/watch?v=nXCSloXZ-wc).

## Comments

You can use HTML comments, they will be rendered in the final output. Using Mustache comments suppresses them.

```gjs
<template>
  <!-- I am an HTML comment, I will be rendered -->
  {{! I am a Handlebars comment, I will not be shown }}
</template>
```

