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

## Context Binding

- Properly access and mutate the internal state of an object

## Chaining and Function composition

- chaining comes from the OO world
- concatenates function calls

```javascript
["Functional", "programming", "is", "cool"]
  .map((word) => word.length)
  .filter((num) => num % 2 === 0)
  .reduce((a, b) => a + b, 0);
```

- composing vs sequence

  - `compose(f,g)(x) = f(g(x))`
  - `sequence(f,g)(x) = g(f(x))`
  - `sequence(f,g)(...args) = g(f(...args))`

  - `sequence(f1, f2)(x) === f2(f1(x))`

- function composition can help solve the issue of reading function calls as a sequence
- the `sequence` is just syntactic sugar for composing functions

## Higher Order Functions HOCs

- Functions can be passed as values
- Functions can return other functions

### Array HOCs

- **map:** transforms each element of an array and returns a new array of transformed values
- **filter:** iterates on all elements of an array, returns a new array with elements for which the function passed to filter yields a truthy value
- **reduce:** applies cb function on each element of an array one by one, accumulating a final return value
  - cb (prev, value): newValue
  - array.reduce(cb, initialValue)
- concat
