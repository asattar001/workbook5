let cart = [
  { item: "Bread", price: 3.29, quantity: 2 },
  { item: "Milk", price: 4.09, quantity: 1 },
  { item: "T-Bone Steak", price: 12.99, quantity: 2 },
  { item: "Baking Potato", price: 1.89, quantity: 6 },
  { item: "Iceberg Lettuce", price: 2.06, quantity: 1 },
  { item: "Ice Cream - Vanilla", price: 6.81, quantity: 1 },
  { item: "Apples", price: 0.66, quantity: 6 },
];


//a.
cart.map((item) => {return item.item})
.forEach((item) => console.log(item))

//b.
let totalCost = cart.reduce((total, item) => {
    total += item.price * item.quantity
    return total
},0)
console.log(totalCost);

// c.
cart.map((item) => {return item.item})
.sort().forEach((item) => console.log(item))
