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

### Function composition

```javascript
const compose = (f, g) => (x) => f(g(x));
const double = (x) => 2 * x;
const plusOne = (x) => x + 1;

compose(double, plusOne)(5); // 12
double(plusOne(5)); // 12
```

## Higher Order Functions HOCs

- Functions can be passed as values
- Functions can return other functions

### Array HOF's

- **map:** transforms each element of an array and returns a new array of transformed values
- **filter:** iterates on all elements of an array, returns a new array with elements for which the function passed to filter yields a truthy value
- **reduce:** applies cb function on each element of an array one by one, accumulating a final return value
  - cb (prev, value): newValue
  - array.reduce(cb, initialValue)
- concat

## Currying - Definitions

### Arity

The number of arguments of a function

- f(a): unary function (arity=1)
- f(a,b): binary function (arity=2)
- f(a,b,c): ternary function (arity=3)

- f.length equals the arity of f
- exceptions apply:

  - rest parameters
  - default arguments

- functions with variable number of arguments are called **variadic functions**
- f(...args)

### Currying

- Transforms a function with multiple args to a chain of function applications with one argument each

`f = (a,b) => value` becomes `f = a => (b => value)`

- This can also be written as: `f = a => b => value`
- **Note:** the arity of a curry function must be always 1
- Benefits:
  - Shortens the argument list
  - Makes WET code DRY by factoring out common code

### Partial Application

- Process of fixing any number of args to reduce its arity
  `f = (x,y,z,u) => value` becomes `f_ab = (z,u) => value`
- Difference with **Currying**

  - Curry creates a chain of unary functions
  - curry(f) accepts one argument
  - curry(f) does not bind any argument

  - Partial application operates with functions of any arity
  - partial(f, ..args) accepts a variable number of args
  - partial(f, ...args) bind values in the args array to the args of f

```javascript
const volume = (a, b, c) => a * b * c;
volume(2, 3, 4); // 24

// using lodash
const curriedVolume = _.curry(volume);
curriedVolume(2)(3)(4); // 24

const partialVolume_2_3 = _.partial(volume, 2, 3);
partialVolume_2_3(4); // 24
```

- partial application can be used with `bind`

```javascript
const volume = (a, b, c) => a * b * c;

// the context in this case is null
volume.bind(null, 2, 3)(4); // 24

volume.bind(null, 2)(3, 4); // 24
```

## Recursive and Iterative solutions

### Recursion

- Mathematics: definition of a concept in terms of itself
- factorial
  - 0! is 1 (terminal condition)
  - n! is n \* (n-1)!
- Software development: a function that calls itself

```javascript
const factorial = (num) => (num <= 1 ? 1 : num * factorial(num - 1));
```

- Efficiency-wise, iterative solutions tend to be better
- For each function application, a new stack frame is created in memory

### Types of recursion

- single vs multiple recursion
- single: a function refers to itself once
- multiple: a function refers to itself multiple times

- direct vs indirect recursion
- direct: the function calls itself directly
- indirect: the function calls another function which then calls the initial function

## Memoization

- Deterministic functions: argument values determine the return value
- Build a lookup table:
  - key: argument list
  - value: return value
- if the key is in the lookup table, return the corresponding value without executing the function
- otherwise, execute the function

```javascript
const memo = (f) => {
  let memoMap = new Map();

  return (fArg) =>
    memoMap.has(fArg)
      ? memoMap.get(fArg)
      : memoMap.set(fArg, f(fArg)).get(fArg);
};
```

## Category theory

- A set of javascript values
  - Booleans (false, true)
  - Lamp states ("red", "yellow", "green")
- A set of morphisms (functions) defined on these values
- Morphisms are described by pure functions

### Properties of categories

- identity transformation
  `const identity = x => x`
- associativity
  `compose(compose(f,g), h) = compose(f, compose(g,h))`

## Functors

- mappings between categories
- example: map function of arrays
- arrays implementing the map function are functors
- containers - arrays
- morphism - square function

```javascript
[1, 2, 3, 4].map((x) => x * x); // [1,4,9,16]
// [1,2,3,4] and [1,4,9,16] are functors
```

- functors are contained with a map method
- the morphed values are placed in a new container
- **the new and old containers match in structure**

### Type signature of functors

```javascript
(a=>b) => (fa => fb)
// where
// a: original type
// b: morphed type
// f: container // array
```

## Monads

- are container just like functors
- can be objects, arrays, and even functions
- containers that implement:
  - a unit method: unit(value): monad
  - a **flatMap** method

### Axioms of monads

- flatMap(monad, unit) = monad
- flatMap(unit(value), f) = f(value)
- flatMap(flatMap(monad, f), g) = flatMap(monad, value => flatMap(f(value), g))

- Is Jquery a monad?
  - wrapped sets
  - ajax calls
  - promises
