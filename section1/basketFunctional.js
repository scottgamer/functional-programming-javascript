const basket = [];

function deepClone(object) {
  return JSON.parse(JSON.stringify(object));
}

function addElement(basket, name, price) {
  return deepClone(basket).concat([
    {
      name,
      price,
    },
  ]);
}

const basket1 = addElement(basket, "Biscuits", 1);
const basket2 = addElement(basket1, "Tea", 2);
console.log(basket1);
console.log(basket2);

