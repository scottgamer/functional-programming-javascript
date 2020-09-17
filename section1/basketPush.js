const basket = [];

function addElement(name, price) {
  basket.push({
    name,
    price,
  });
}

addElement("Biscuits", 1);

console.log(basket);
