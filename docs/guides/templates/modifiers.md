# Modifiers

Modifiers are the way to interact with the DOM.
May that be manipulationg properties, interacting with DOM behavior, etc..
The syntax is the same as for [helpers](./helpers.md) though they are explicitly place with an HTML element, as that's the one being interacted with.

Here is a <code v-pre>{{autofocus}}</code> modifier.

```gjs
import { modifier } from 'ember-modifier';

const autofocus = modifier(element => element.focus());

<template>
  <form>
    <input {{autofocus}}>
  </form>
</template>
```

## Arguments

Modifiers do support _positional arguments_ and _named arguments_, which looks like this:

```hbs
{{name pos1 pos2 named1=val1 named2=val2}}
```

and maps to the mental idea of writing a function similar to:

```js
function someFunction(pos1, pos2, { named1, named2 }) {
  // ...
}
```

Positional Arguments

: The order for positional arguments matter

Named Arguments

: Are last inside the curly braces
: Order doesn't matter
: Come in key=value pairs

Here is an audio player reacting to arguments:

```gts
import Component from '@glimmer/component';
import { on } from '@ember/modifier';
import { tracked } from '@glimmer/tracking';
import { modifier } from 'ember-modifier';

const playWhen = modifier((element, [playing]) => {
  if (playing) {
    element.play();
  } else {
    element.pause();
  }
});

export default class AudioPlayerComponent extends Component {
  @tracked playing = false;

  play = () => {
    this.playing = true;
  };

  pause = () => {
    this.playing = false;
  };

  <template>
    <audio src={{@srcURL}} {{playWhen this.playing}} />

    <button type="button" {{on "click" this.play}}>Play</button>
    <button type="button" {{on "click" this.pause}}>Pause</button>
  </template>
}
```

## Cleanup

When a modifier is attached to an HTML element and that element is destroyed, so is the modifier (see [lifetimes](../concepts/lifetimes.md)).
As part of the destruction, a modifier can run a cleanup function.
This is especially helpful, when a modifier adds event listeners and needs to remove them or other DOM APIs that need a cleanup.

A modifier can return a function that contains the cleanup code.

In the following example an element is observed to be scrolled into viewport using an [`IntersectionObserver`](https://developer.mozilla.org/en-US/docs/Web/API/IntersectionObserver).
The cleanup is unobserving the element, so garbage collection can do the rest.

```gts
import { modifier } from 'ember-modifier';

interface InViewportSignature {
  Element: HTMLElement;
  Args: {
    Positional: [() => {}];
    Named: IntersectionObserverInit;
  }
}

const inViewport = modifier((element, [callback], options = {}) => {
  const observer = new IntersectionObserver(
    (entries: IntersectionObserverEntry[]) => {
      for (const entry of entries) {
        if (entry.target === element
            && entry.isIntercepting
            && entry.intersectionRatio > 0.5) {
          callback();
        }
      }
    },
    options
  );

  observer.observe(element)

  return () => {
    observer.unobserve(element);
  }
});

function lookMa() {
  console.log('Look Ma, I\'m on TV!')
}

<template>
  <h1>Intersection Observer</h1>

  Lorem ipsum...

  <div {{inViewport lookMa}}></div>

  dolor sit amet ...
</template>
```

## Class-Based Modifiers

Modifiers can access Ember's [DI system](../concepts/dependency-injection.md).
Ember ships with class-based modifiers to give you common access to them.

Here is the same `InViewport` modifier, but with a central observer, hold in a service.

::: code-group

```gts [#/modifiers/in-viewport.ts]
import Modifier from 'ember-modifier';
import type ViepwortService from '#/services/viewport';
import { registerDestructor } from '@ember/destroyable';
import type { Owner } from '@ember/owner';

type Positional = [() => {}];

interface InViewportSignature {
  Element: HTMLElement;
  Args: {
    Positional: Positional;
  }
}

export class InViewport extends Modifier<InViewportSignature> {
  @service declare viewport: ViewportService;
  #element!: HTMLElement;

  constructor(owner: Owner) {
    super(owner);

    registerDestructor(this, () => this.viewport.removeWatcher(element);
  }

  modify(element: HTMLElement, [callback]: Positional) {
    this.#element = element;
    this.viewport.addWatcher(element, callback);
  }
}
```

```ts [#/services/viewport.ts]
import Service from '@ember/service';
import type { Owner } from '@ember/owner';

export default class ViewportService extends Service {
  #observer: IntersectionObserver;
  #watchers = new WeakMap<HTMLElement, () => {}>();

  constructor(owner: Owner, args: unknown) {
    super(owner, args);

    this.#observer = IntersectionObserver(this.handle.bind(this));
  }

  handle(entries: IntersectionObserverEntry[]) => {
    for (const entry of entries) {
      if (this.#watchers.has(entry.target)
          && entry.isIntercepting
          && entry.intersectionRatio > 0.5) {
        const callback = this.#watchers.get(entry.target);
        callback();
      }
    }
  }

  addWatcher(element: HTMLElement, callback: () => {}) {
    this.#watchers.put(element, callback);
  }

  removeWathcer(element: :HTMLElement) {
    this.#watchers.delete(element);
  }
}
```

:::

## Modifiers and `...attributes`

Modifiers can also be applied to components, and when they are, they are also
passed forward and applied to an element with `...attributes`:

```gjs
import doSomething from '#/modifiers/do-something';

<template>
  <Tooltip {{doSomething}}/>
</template>
```

```gjs [#/components/tooltip.gjs]
<template>
  <div ...attributes>
    ...
  </div>
</template>
```

In this example, the `div` within the Tooltip component will get the
`doSomething` modifier applied to it.
