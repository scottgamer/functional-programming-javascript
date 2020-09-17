function mapScoresToGrades(tests, average) {
  let gradeTest = (testScore) => (testScore >= average ? "A" : "F");
  return tests.map(gradeTest);
}

function getAverage(tests) {
  return tests.reduce((acc, elem) => acc + elem, 0) / tests.length;
}

function gradeTests(tests) {
  const average = getAverage(tests);
  return mapScoresToGrades(tests, average);
}

console.log(gradeTests([0.1, 0.5, 1, 1]));
