// argsList1 contains the bound arguments
// argsList2 contains the rest of the arguments
const partial =
  (f, ...argsList1) =>
  (...argsList2) =>
    f(...argsList1, ...argsList2);

const curry1 =
  (f) =>
  (a) =>
  (...rest) =>
    f(a, ...rest);

const curry2 =
  (f) =>
  (a) =>
  (b) =>
  (...rest) =>
    f(a, b, ...rest);

const curry = (f) => curryN(f, []);

const curryN = (f, acc) =>
  acc.length === f.length ? f(...acc) : (arg) => curryN(f, [...acc, arg]);

// application sequence:
// curry(volume)
// curryN(volume, [])
// a => curryN(volume, [a])
// a => b => curryN(volume, [a, b])
// a => b => c => curryN(volume, [a, b, c])

const volume = (a, b, c) => a * b * c;

console.log(partial(volume, 2, 3)(4));

console.log(partial(volume, 2)(4, 3));

// using currying and partial application to compose functions
console.log(partial(partial(volume, 2), 3)(4));
