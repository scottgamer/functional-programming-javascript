console.log(
  ["functional", "programming", "is", "cool"]
    .map((word) => word.length)
    .filter((num) => num % 2 === 0)
    .reduce((a, b) => a + b, 0)
);
