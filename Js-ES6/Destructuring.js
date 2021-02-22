//Object Destructuring:
//Ex: 01
let person = {
  Name: `Nayeem`,
  email: `mohammednayeem808@gmail.com`,
  address: {
    city: `dhaka`,
    country: `bangladesh`,
  },
};
let {
  Name,
  email,
  address: { city, country },
} = person;
console.log(Name, email, city, country);

//Ex: 02
let information = {
  Name2: `Muhammed Shakib`,
  email2: `shakib@gmail.com`,
  occupation: `student`,
  address: {
    city2: `B-baria`,
    country2: `Bangladesh`,
    post: `Chandura`,
  },
  contacts: {
    phone: `01703479326`,
    facebook: `Muhammed Shakib`,
  },
};
let {
  Name2,
  email2,
  occupation,
  address: { city2, country2, post },
  contacts: { phone, facebook },
} = information;
console.log(Name2, email2, occupation, city2, country2, post, phone, facebook);


//Object fromEntries Method using:
let obj = {
  a: 10,
  b: 20,
};
console.log(Object.entries(obj));

let objArr = [
  [`a`, 10],
  [`b`, 20],
  [`c`, 30],
];
console.log(Object.fromEntries(objArr));