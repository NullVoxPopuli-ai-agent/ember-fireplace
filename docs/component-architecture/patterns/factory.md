# Factory

The factory pattern has different variations, called
_factory, creation method, static creation/factory method, simple
factory, factory method_ or _abstract factory_ (see [factory
comparison](https://refactoring.guru/design-patterns/factory-comparison) by
Shvets (n.d.)).

In this article, the **simple factory** is described.

## Intent

The simple factory pattern is described as an with creation method
that instantiates a new object based on passed parameters.

## Structure

At first a creation function finds a component based on criteria.
Any returned component implements the same [signature](../../guides/templates/components.md#signature).

```ts [#/components/-user-profile.ts]
import { UserType, type User } from "#/domain/user";
import { ComponentLike } from "@glint/template";

interface UserProfileSignature {
  Args: {
    user: User;
  };
}

export function createProfile(type: UserType): ComponentLike<UserProfileSignature> {
  switch (type) {
    case UserType.User:
      return User;
    case UserType.Customer:
      return Customer;
    case UserType.Admin:
      return Admin;
    default:
      throw new Exception("Wrong user type passed.");
  }
}
```

Using the _bare_ factory pattern is enough with [<code v-pre>{{#let}}</code>](../../guides/templates/let.md)

```glimmer-ts [#/components/user-profile.gts]
import { createProfile, type UserProfileSignature } from '#/components/-user-profile';
import type { TOC } from '@ember/component/template-only';

const UserProfile: TOC<UserProfileSignature> = <template>
  {{#let (createProfile (@user.type)) as |Profile|}}
    {{! do sth with `Profile` }}

    <Profile @user={{@user}}/>
  {{/let}}
</template>
```

You may decide to yield that component or invoke it in place.
As much as `<UserProfile>` implements the `UserProfileSignature` so would any of the created components.

Invoking the component:

```hbs
<UserProfile @user={{@user}} />
```

The `<UserProfile>` component becomes the **simple factory** by using the `type`
of a `User` object to distinguish which specific subcomponent to "create".

## Applicability

- Use it to create components to an object that has a dynamic type.
- Perfectly usable on a list/stream of those objects.

## References

<!-- <l.WebPage @title="Factory Comparison" @url="https://refactoring.guru/design-patterns/factory-comparison" as -->
<!-- |r|> -->
<!-- <r.Author @given="Alexander" @family="Shvets"/> -->
<!-- </l.WebPage> -->
<!-- </References> -->
