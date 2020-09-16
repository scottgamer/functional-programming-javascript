class Invoice {
  constructor(invoiceNumber) {
    this.invoiceNumber = invoiceNumber;
    this.items = [];
  }

  addItem(quantity, price, description) {
    this.items.push({ quantity, price, description });
  }

  get sum() {
    let sum = 0;
    for (let i = 0; i < this.items.length; i++) {
      const item = this.items[i];
      sum += item.quantity * item.price;
    }
  }
}

const invoice1 = new Invoice(1);
const invoice2 = new Invoice(2);

invoice1.addItem(2, 10, "T-shirt");
invoice1.addItem(3, 25, "Bag");

invoice2.addItem(10, 1, "Light bulb");
invoice2.addItem(2, 10, "Pillow");

console.log("Invoice 1 sum: ", invoice1.sum);
console.log("Invoice 2 sum: ", invoice2.sum);
