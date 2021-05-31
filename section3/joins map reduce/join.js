const { students, tests } = require("./students");

const studentTests = tests.map((test) => {
  const student = students.find((student) => student.id === test.studentId);
  return {
    studentName: student.name,
    testTitle: test.title,
    testScore: test.score,
  };
});

console.log(studentTests);

const studentTestsCount = students.map((student) => {
  const reducer = (count, test) =>
    test.studentId === student.id ? count + 1 : count;

  const testCount = tests.reduce(reducer, 0);
  return {
    studentName: student.name,
    testCount,
  };
});

console.log(studentTestsCount);
