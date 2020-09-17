# Functional Programming in Javascript

## Imperative vs Declarative

- Imperative

  - Example: OOP
  - Focus on How
  - Stateful
  - We can mutate state
  - Often rely on side-effects

- Declarative
  - Example: Functional Programming
  - Focus on What
  - Stateless
  - Constants, immutability
  - No side-effects

## Functional Style

- Break down the problem using functional decomposition
- Recursion instead of loops
- Higher order functions
- Functional Javascript constructs
- Currying and partial evaluation

## Advantages and disadvantages

### Advantages

- Testability
- Easy maintenance
- Reusable building blocks
- Parallel execution

### Disadvantages

- Rigor vs Understandability
- Use of a subset of Javascript
- Performance
  - Memoization
  - Tail call optimization
  - Lazy evaluation

## Deep and Shallow Cloning

- Shallow cloning

  - Using spread operator
  - Only copy top level values and references
  - Prevent mutability using `Object.assign({}, target, source)`
  - Performance over robustness

- Deep cloning
  - Copies all deep values and references
  - We need an intermediate parser `const deepClone = o => JSON.parse(Json.stringify(o));`
  - Robustness over performance

# Context Binding

