function createInvoice(invoiceNumber) {
  return {
    invoiceNumber,
    items: [],
  };
}

function clone(object) {
  return JSON.parse(JSON.stringify(object));
}

function addItem(invoice, quantity, price, description) {
  // approach 1
  // const invoiceItems = clone(invoice.items);
  // const newItem = {
  //   quantity,
  //   price,
  //   description,
  // };

  // return {
  //   invoiceNumber: invoice.invoiceNumber,
  //   items: [...invoiceItems, newItem],
  // };

  // approach 2
  const newInvoice = clone(invoice);
  newInvoice.items.push({
    quantity,
    price,
    description,
  });
  return newInvoice;
}

function calculateSum(invoice) {
  const reducer = (acc, item) => acc + item.quantity * item.price;
  return invoice.items.reduce(reducer, 0);
}

const invoice1a = createInvoice(1);
const invoice2a = createInvoice(2);

const invoice1b = addItem(invoice1a, 2, 10, "T-shirt");
const invoice1 = addItem(invoice1b, 3, 25, "Bag");

const invoice2b = addItem(invoice2a, 10, 1, "Light bulb");
const invoice2 = addItem(invoice2b, 2, 10, "Pillow");

console.log("Invoice 1 sum: ", calculateSum(invoice1));
console.log("Invoice 2 sum: ", calculateSum(invoice2));
