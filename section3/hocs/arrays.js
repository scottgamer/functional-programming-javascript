// head and tail of an array
const arr = [1, 2, 3, 4];
const [head, ...tail] = arr;

const append = ([head1, ...tail1], array2) =>
  typeof head1 === "undefined" ? array2 : [head1, ...append(tail, array2)];

const arr1 = [1, 2, 3];
const arr2 = [4, 5];

// concat
console.log(arr1.concat(arr2));

// every
console.log(arr1.concat(arr2).every((x) => x % 2 === 1));

// some
console.log(arr1.concat(arr2).some((x) => x % 2 === 1));

// find
console.log(arr1.concat(arr2).find((x) => x % 2 === 1));

// join
console.log(arr1.concat(arr2).join(","));

// split
console.log(arr1.concat(arr2).join(",").split(","));

// reverse
console.log(arr1.concat(arr2).join(",").split(",").reverse());

// custom map implementation
const map = ([head, ...tail], f) =>
  typeof head === "undefined" ? [] : [f(head), ...map(tail, f)];

// custom reduce implementation
const reduce = ([head, ...tail], f, accumulator) =>
  typeof head === "undefined"
    ? accumulator
    : reduce(tail, f, f(accumulator, head));

// custom filter implementation
const filter = ([head, ...tail], predicate) =>
  typeof head === "undefined"
    ? []
    : predicate(head)
    ? [head, ...filter(tail, predicate)]
    : filter(tail, predicate);

// custom filter using reduce
const filterWithReduce = (array, filterFunction) => {
  const reducer = (acc, element) =>
    filterFunction(element) ? [...acc, element] : acc;

  return array.reduce(reducer, []);
};

const square = (x) => x ** 2;

console.log(map([1, 2, 3, 4], square));

const sum = (x, y) => x + y;

console.log(reduce([1, 2, 3, 4], (x, y) => x + y, 0));

const twoOrHigher = (x) => x >= 2;

console.log(filter([1, 2, 3, 4], (x) => x % 2 === 1));

// using arrays prototype map and reduce
console.log([1, 2, 3, 4].map(square).filter(twoOrHigher).reduce(sum, 0));
