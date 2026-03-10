# Motivation

Hi, this is gossi telling you about my motivation for this Ember documentation experiment.

I started writing these docs for two reasons.

1. Have quick-to-the-point docs (minimal but necessary content for certain aspects)
2. Feed them into an AI (I heard people do this now)

Both under the constraint Ember on vite (everything on classic I consider migration).

## Contents

What aspects make up Ember? A long time people consider [Ember as Component-Service Framework](https://medium.com/@pzuraq/emberjs-2018-ember-as-a-component-service-framework-2e49492734f1). 
I think this has shifted over the years. 
All frameworks align closer, try to settle on the same standards, such as [Signals](https://github.com/tc39/proposal-signals).

### The Three Major Pillars of Ember

I rethought of what Ember is *to me* and I come down to three things:

- Reactivity (shared amongst major FE frameworks, Ember has it, too)
- Template System (Ember has the best Template System)
- Routing (that makes frameworks meta, no?)

### Ember Specific Concepts

These are specific to Ember:

- Dependency Injection (DI)/Owner System
- Resources
- Lifetimes
- Services

Though they exist, this is barely vocab of Emberenos, yet we all do use it in our daily work.
We do that mostly _implicitely_ rather than consciously.
I think major notice happened in a [talk by Ed](https://www.youtube.com/watch?v=sWGyJR6P-V0&list=PLN4SpDLOSVkTA8pYgcgKlo5AsQnZ0fiWV&index=8).

> [!NOTE] 
> You can make an Ember app without using these concepts. 
> You cannot make an Ember app without using the beforementioned three pillars.

### App/Library Concepts

Ember is done in a project: Library (addon) or full application.
In either way there are two more concepts around operating a project:

- Configuration (runtime + build)
- Testing (I've become a fan of vitest - sorry qunit)

### Tooling

For quite some time I play with the idea in my head: What are essential tools for operating a frontend project?
I don't have a proper answer, but that sort of tooling that gives a pleasent place to develop your app in, gives you the "engineering metrics" and channels a good development flow.
Also that sort of tooling that people nowadays _expect_ to be present when considering a framework.
(Testing is a fuzzy match here, tbh - but this is Ember and we always have a good testing strategy)

I'm speaking about that sort of tooling that actually is not necessary at all but when present massively increases developer productivity.

As the amount of tooling is increasing and also agentic tooling changing frequently, I extracted this to its own section.

### Community Resources

The community has created plenty wonderful resources, but they follow "out of sight, out of mind".
I myself have been going through other projects, that [showcased those resources much better](https://better-auth.com/docs/reference/resources). 
(That also includes Ember's own resources as I learned 😭)

## Authoring

While I was writing, I couldn't hold my curiousity and tried out a couple of things:

- What would it look like, when all resources I know off _blend together_?
- What would it look like, when third-party contributions fit into the "Ember website" directly?
- How the guides look, when things are documented, that are currently still in development (eg. truth helpers)?

To test this, I used vitepress to plug things together, feel free to check out this repo and spin it up.

### Documentation Driven Development

There is the methodology of writing the documentation/press release at first and _then_ develop your software towards that goal.
I followed that practice to verify some of my authoring ideas above (eg. the template syntax docs are a result of this).
It helped very much to understand, organize and develop the structure I mention in this document.

### References / Other Projects?

I also looked into Svelte and Vue for their documentation. 
I especially liked how precise and short the svelte docs are and saw myself taking notes from there.
Interestingly, this is the first time (and place) that has the most "complete" listing of all template syntax for Ember (and I do like it very much).

### Diataxis

The [diataxis](https://diataxis.fr/) framework is a very good teacher for structuring your documentation. 
These docs mostly follow them, for syntax the reference and guides blend together - this is where I copied Svelte, it balances the two aspects very well together.
Apart from that Ember already follows the diataxis framework quite well.

### Cookbook

The [cookbook is an accepted RFC already](https://rfcs.emberjs.com/id/0786-ember-cookbook).
I took on the idea and used the proposed [agentic skills](https://github.com/emberjs/rfcs/pull/1165) ([source](https://github.com/NullVoxPopuli/agent-skills/tree/main/skills/ember-best-practices/rules)) for making up the cookbook.
That seems a reasonable way to start this library, then let the community manage this through PRs.
At the same time use this as source to feed the proposed agentic skills.

From the book: How to hit two birds with one stone.

### Handbook

I myself have written a handbook about component architecture (and I still follow it by today).
I also have another one in mind to write about: Enterprise Architecture (how to organize your code)

Resources as such are in-depth explanation guides (as per diataxis).
Some yield best practices that can be put under cookbook.

## Next Steps

Despite the technological challenges (Ember's website is very much fragmented in tiny little projects) and it is tempting to bring those together. 
But the technology discussion is for another time at another place.

This experiment is about the contents.
It serves as a playground to take note of what you want to see documented (TOC in the document) up until writing the docs (if you feel to).

I did it to get the discussion going. 
To contribute it back to Ember.
To make it a community effort.

-gossi
