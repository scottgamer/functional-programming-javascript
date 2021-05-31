const students = [
  { id: 1, name: "rich", birthDate: "1993-03-26" },
  { id: 3, name: "maria", birthDate: "2013-09-21" },
  { id: 2, name: "ariel", birthDate: "1993-11-28" },
];

const tests = [
  { id: 1, studentId: 1, title: "Fractals", score: 0.5 },
  { id: 2, studentId: 1, title: "Functional Programming", score: 0.75 },
  { id: 3, studentId: 2, title: "Functional Programming", score: 0.96 },
];

module.exports = {
  students,
  tests,
};
