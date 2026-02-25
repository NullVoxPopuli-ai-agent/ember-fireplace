# Presentational

## Synopsis

TODO: Synopsis

<Haptics
@invocation="both"
@styled="yes"
@content="yes"
@structure="no"
@logic="no"
/>

## Principles

- Are concerned with _how things look_.
- Are isolated, have no dependencies to the rest of the app.
- Aren't responsible for data loading or mutating.
- Receive data and callbacks exclusively via arguments.
- Rarely have their own state - can only be UI state.
- Render as minimal elements as possible.

## Example

Presentational components take _explicit_ and _direct_ arguments and display them, as
such they don't take object (domain objects) and display properties.

### Avatar Component

The example is an avatar component that takes an url to an image as argument and
presents it in a circle with a border.

<<< ../../../examples/avatar.gjs

### Usage

Invoke the component with and pass down explicitely the arguments it needs to render.

```gjs live preview
import Avatar from '#examples/avatar.gjs'

<template>
  <Avatar
    @src="https://avatars.githubusercontent.com/u/283700"
    alt="gossi's Github Avatar"
  />
</template>
```

## References

- @abramov2015
- @eramo2019
- @haz2018
- @kwasniak2018
