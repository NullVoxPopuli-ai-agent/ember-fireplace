### Migrating from `.hbs` to `.gts`: the Mindset Shift (not just the syntax)

Ember’s move from standalone Handlebars templates (`.hbs`) to **first-class templates inside TypeScript** (`.gts`) can feel like a philosophical change, not a mechanical one. That reaction is valid—and it’s also the key to migrating successfully.

## 1) The biggest mental shift: from “ambient magic” to “local clarity”

Historically, Ember templates benefited from a lot of **ambient context**:

- components/helpers/modifiers could be available “because the resolver finds them”
- template scope could feel “global-ish” (especially in large apps with lots of conventions)
- addons could add behavior in ways that were hard to see from the call site (“spooky action at a distance”)

With `.gts`, the default direction is:

- **what you use is either right there** (local function/value/class)
- **or explicitly imported** (so you can see where it comes from)

That’s not “React-ification” for its own sake. It’s a deliberate trade:

- **slightly more explicit code**
- for **dramatically better ability to reason about large systems**, refactor safely, and get editor tooling that actually understands what’s happening.

This is exactly what first-class templates are designed to enable: templates become first-class citizens in TS/JS modules, which unlocks static analysis and tooling improvements that are not realistically possible with `.hbs` alone.

## 2) “But I loved that `.hbs` was just HTML-with-sprinkles”

Good news: **that part is still true**.

Inside a `.gts` file, the `<template>` block is still Glimmer template syntax. A valid file can be as small as:

```gts
<template>
  <h1>Hello World!</h1>
</template>
```

So the “HTML-first” mental model doesn’t go away. What changes is that the template now lives in a module where you can also define/import the things it uses.

That leads to a new, very practical rule of thumb:

> **In `.hbs`, you often had to “teach the template” what it could see via the app’s global registry.  
> In `.gts`, you teach the template by importing or defining values in the same file.**

This is why people often report that `.gts` reduces “template spaghetti”: instead of stacking helper addons and indirection, you can write a small function next to the template and keep the logic close to where it’s used.

## 3) Separation of concerns moves *up a level*

A common objection is:

> “I liked having one file where I think about HTML and another where I think about JS.”

That’s a real workflow preference. But `.gts` encourages a different interpretation of separation of concerns:

- not “HTML over here, JS over there”
- but **concerns separated by component boundaries**

In practice, this often means:

- smaller components
- more template-only components
- fewer “mega templates” that depend on a web of global knowledge

This is especially important once an app crosses a certain size: humans can’t keep the whole system in their head. The goal becomes making each piece understandable in isolation.

## 4) Imports feel like “more typing”… until you factor in what you gain

### What you lose
- The feeling that “everything is just available”
- Some “plug and play” ergonomics from implicit resolution

### What you gain
- **Jump-to-definition that works**
- **rename refactors that don’t break silently**
- **dead-code elimination and better bundling opportunities**
- **tooling fidelity**: editors can understand your template usage because it’s in a real module graph

This is the key trade: **explicit dependencies scale better than implicit ones**.

And it’s not just about developer preference—static analysis is what enables higher-quality tooling. If you want things like “generate a diagram of what depends on what”, imports are the raw material.

## 5) “Batteries included” doesn’t mean “everything is global”

It’s easy to conflate two ideas:

- **Batteries included**: Ember ships an integrated stack (router, testing, conventions, DI/services, etc.)
- **Global scope**: values are implicitly available everywhere

Ember’s “batteries included” promise is about the first one: a cohesive framework and tooling story out of the box—not that every dependency should be ambient.

In fact, modern Ember’s direction is to keep the batteries, while reducing hidden behavior that makes debugging hard.

## 6) Route templates in `.gts`: think “a constrained component”

One concrete place people get stuck is routes:

> “How does a `.gts` route template connect to controllers? Where do functions go?”

The mental model that helps:

> A route template authored as `.gts` is **basically a component**.

You can start with a template-only route:

```gts
import { pageTitle } from 'ember-page-title';

<template>
  {{pageTitle "Someroute"}}
  {{outlet}}
</template>
```

…and if you need state or methods, you wrap it in a class and keep the template colocated:

```gts
import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { pageTitle } from 'ember-page-title';

export default class SomerouteTemplate extends Component {
  @tracked nowIHaveState = 'wow!';

  <template>
    {{pageTitle "Someroute"}}
    {{this.nowIHaveState}}
    {{outlet}}
  </template>
}
```

This reduces the need for controllers in many cases, because the template itself can now be stateful in a straightforward way.

## 7) “Will `.hbs` be supported long term?”

From a migration-planning perspective, the important point is: **the ecosystem is investing in first-class templates as the future-facing path**, because it enables capabilities that `.hbs` cannot easily match (especially around tooling and static analysis).

Even if `.hbs` remains usable for some time, the direction of travel is clear: new features, best-in-class tooling, and the “strict mode” template story are centered on `.gjs/.gts`.

## 8) Practical migration guidance: how to shift your habits

Here are the habit changes that make `.gts` feel simpler instead of bulkier:

### 1) Prefer local functions over “template helper gymnastics”
If you previously reached for helper addons to express logic in `.hbs`, try moving that logic into a small function in the `.gts` module and call it from the template. This keeps templates readable and reduces indirection.

### 2) Treat imports as documentation
An import list is not just “extra lines”—it’s a manifest of what this file depends on. That’s valuable when onboarding, debugging, and refactoring.

### 3) Keep components small and composable
If a component needs “twenty disparate parts of the rest of the codebase” to explain, it’s a sign to split it. `.gts` makes this easier because the logic and template can move together.

### 4) Use the tooling that `.gts` unlocks
For `.gts`, typechecking is typically done with **Glint**, not plain `tsc`. Lean into that: the payoff is catching template mistakes earlier and getting better editor feedback.

## 9) Summary: what to tell your future self (and your team)

When moving from `.hbs` → `.gts`, you’re not abandoning “HTML-first templates”.

You’re adopting a new set of defaults:

- **Templates stay the same language**
- **Dependencies become explicit**
- **Logic moves closer to where it’s used**
- **Separation of concerns becomes component-oriented**
- **Tooling gets dramatically better because the code becomes statically analyzable**

That’s the core mindset shift: from “the framework makes things available” to “the module graph makes things understandable”.
