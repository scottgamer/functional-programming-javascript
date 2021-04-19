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

const newFloor = up(down(up(up(elevator)))).floor;
console.log(newFloor);
