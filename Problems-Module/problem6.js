/**
 *? Write a function that will take an array of object and find the cheapest phones from this array of object and return the result;
 */

const phones = [
  {
    brand: "Samsung",
    storage: "32gb",
    ram: "8gb",
    camera: "12 mega pixel",
    price: 62000,
  },
  {
    brand: "Google Pixel",
    storage: "128gb",
    ram: "8gb",
    camera: "10 mega pixel",
    price: 55000,
  },
  {
    brand: "Readmi Note11",
    storage: "64gb",
    ram: "8gb",
    camera: "50 mega pixel",
    price: 19000,
  },
  {
    brand: "Huawi",
    storage: "32gb",
    ram: "6gb",
    camera: "10 mega pixel",
    price: 32000,
  },
  {
    brand: "Walton",
    storage: "28gb",
    ram: "8gb",
    camera: "12 mega pixel",
    price: 16000,
  },
  {
    brand: "Sony",
    storage: "32gb",
    ram: "8gb",
    camera: "30 mega pixel",
    price: 82000,
  },
];

function getCheapestPhone(phones) {
  let cheapest = phones[0];
  for (let i = 0; i < phones.length; i++) {
    let phone = phones[i];
    if (phone.price < cheapest.price) {
      // cheapest.price = phone.price;
      cheapest = phone;
    }
  }
  // return cheapest.price;
  return cheapest;
}

// console.log("Cheapest Phone: " + getCheapestPhone(phones));

//cheapest phone details and price:
const cheapestPhone = getCheapestPhone(phones);
console.log(
  `Cheapest Phone Details Below:\n-BRAND: ${cheapestPhone.brand}\n-ROM: ${cheapestPhone.storage}\n-RAM: ${cheapestPhone.ram}\n-CAMERA: ${cheapestPhone.camera}\n-PRICE: ${cheapestPhone.price}`
);
