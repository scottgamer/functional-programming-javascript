// associativity
const compose = (f1, f2) => (x) => f1(f2(x));
const double = (x) => x * 2;
const plusOne = (x) => x + 1;
const toString = (x) => `Result ${x}`;

compose(compose(toString, double), plusOne)(5);

compose(toString, compose(double, plusOne))(5);
