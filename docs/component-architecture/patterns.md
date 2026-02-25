# Patterns

**Patterns** are part of the engine that powers a component.

## Creational

_Abstract the instantiation process_

- Make the system independent of how components are created
- Class pattern: Uses inheritance to vary the class' instantiation
- Creational Pattern: Delegate instantiation
- Composition over Inheritance

<VpvContainerVertical>
  <VpvCardVertical
    title="Factory"
    excerpt="Creating families of components"
    url="/component-architecture/patterns/factory"
  />
  <VpvCardVertical
    title="Builder"
    excerpt="Construction kit"
    url="/component-architecture/patterns/builder"
  />
</VpvContainerVertical>

## Structural

_Concerned with how components are composed to form larger structures_

<VpvContainerVertical>
  <VpvCardVertical
    title="Decorator"
    excerpt="Adds a little something"
    url="/component-architecture/patterns/decorator"
  />
  <VpvCardVertical
    title="Adapter"
    excerpt="Connects incompatible components"
    url="/component-architecture/patterns/adapter"
  />
  <VpvCardVertical
    title="Bridge"
    excerpt="Make abstraction and implementation exchangeable"
    url="/component-architecture/patterns/bridge"
  />
  <VpvCardVertical
    title="Facade"
    excerpt="The entry to a subsystem"
    url="/component-architecture/patterns/facade"
  />
</VpvContainerVertical>

## Behavioral

_Concerned with algorithms and the assignment of responsibilities_

- Patterns of communication between behaviors
- Characterize complex control flow that's difficult to follow at run-time
- Shift focus from flow of control to how things are connected

<VpvContainerVertical>
  <VpvCardVertical
    title="Command"
    excerpt="Encapsulates a request/(trans)action"
    url="/component-architecture/patterns/command"
  />
  <VpvCardVertical
    title="Strategy"
    excerpt="Interchangeable algorithms family"
    url="/component-architecture/patterns/strategy"
  />
</VpvContainerVertical>
