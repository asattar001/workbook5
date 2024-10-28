let products = [
  { product: "Gummy Worms", price: 5.79 },
  { product: "Plain M&Ms", price: 2.89 },
  { product: "Peanut M&Ms", price: 2.89 },
  { product: "Swedish Fish", price: 3.79 },
  { product: "Sour Patch Kids", price: 4.49 },
  { product: "Haribo Goldbears", price: 3.99 },
  { product: "Skittles", price: 2.49 },
  { product: "Twizzlers", price: 3.29 },
  { product: "Reese's Peanut Butter Cups", price: 1.99 },
  { product: "Kit Kat", price: 1.89 },
  { product: "Starburst", price: 3.49 },
  { product: "Butterfinger", price: 1.79 },
  { product: "Milk Duds", price: 2.29 },
  { product: "Jolly Ranchers", price: 3.19 },
];

products
  .filter((candy) => candy.price < 4)
  .forEach((candy) => {
    // console.log(candy.product);
  });

products
  .filter((candy) => candy.product.includes("M&M"))
  .forEach((candy) => {
    // console.log(candy.product);
});

let swedish = products.find((candy) => candy.product == "Swedish Fish")
console.log(swedish)