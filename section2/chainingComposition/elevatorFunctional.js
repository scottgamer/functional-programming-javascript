const elevator = { floor: 5 };

const up = (elevator) => {
  return {
    floor: elevator.floor + 1,
  };
};

const down = (elevator) => {
  return {
    floor: elevator.floor - 1,
  };
};

const sequence2 =
  (f1, f2) =>
  (...args) =>
    f2(f1(...args));

const sequence = (f1, ...fRest) => fRest.reduce(sequence2, f1);

const newFloor = up(down(up(up(elevator)))).floor;
console.log(newFloor);

const move = sequence(up, up, down, up);
const newElevator = move(elevator);

console.log(newElevator.floor);
