# Builder

## Intent

Builder is a creational pattern providing you a construction code to produce
different types and representations of an object.

## Structure

A _Builder_ interface describes the construction pieces common to all types of
builders. A concrete implementation of that interface provides the shapes and
faces relative for that builder. A _Director_ knows how to use the pieces and
assemble the representation for the given object.

The **participants** are (Gamma, Helm, Johnson and Vlissidies, 1994, p. 99):

Builder
: Specifies an abstract interface for the creating parts of a Product object.

ConcreteBuilder
: Knows how to build individual pieces by implementing the Builder interface.

Director
: Constructs an object using the Builder interface.

Product
: The complex object that is represented with the Builder interface. The product
knows its internal representation and includes classes that define the
constituent parts, including interfaces for assembling parts to the final result.
