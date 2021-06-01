const f = (a, b) => a * b;

console.log(f(2, 4));

const fCurried = (a) => (b) => a * b;
g = fCurried(2);
console.log(g(4));

console.log(fCurried(2)(4));

const prod = (a, b, c) => a * b * c;
console.log(prod(2, 3, 4));

const prodCurried = (a) => (b) => (c) => a * b * c;
console.log(prodCurried(2)(3)(4));

const mult6 = prodCurried(2)(3);
console.log(mult6(4));

// difference between curried and un-curried functions
const uncurriedGradeTest = (passGrade, failGrade, average, testScore) =>
  testScore >= average ? passGrade : failGrade;

console.log(uncurriedGradeTest("+", "-", 0.5, 0.46));
console.log(uncurriedGradeTest("+", "-", 0.5, 0.5));
console.log(uncurriedGradeTest("+", "-", 0.5, 0.55));
console.log(uncurriedGradeTest("+", "-", 0.5, 0.66));

const gradeTest = (passGrade) => (failGrade) => (average) => (testScore) =>
  testScore >= average ? passGrade : failGrade;

const tester = gradeTest("+")("-")(0.5);

console.log(tester(0.46));
console.log(tester(0.5));
console.log(tester(0.55));
console.log(tester(0.66));
