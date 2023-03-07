/**
 *? Write a program that will take an array of object and calculate the product price and return the result;
 */

const products = [
  {
    type: "Shirt",
    price: 2500,
    quantity: 5,
  },
  {
    type: "Pant",
    price: 1800,
    quantity: 3,
  },
  {
    type: "Belt",
    price: 1200,
    quantity: 2,
  },
  {
    type: "T-Shirt",
    price: 850,
    quantity: 4,
  },
];

function totalProductCost(clotheProducts) {
  let totalPrice = 0;
  let totalCost = 0;
  for (let i = 0; i < clotheProducts.length; i++) {
    let clothe = clotheProducts[i];
    totalCost = clothe.price * clothe.quantity;
    totalPrice += totalCost;
  }
  return totalPrice;
}

console.log("Total Price: " + totalProductCost(products));
