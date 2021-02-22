//Arrow Function and this benefit:

// function test() {
//   console.log(this);
// }
// test.call({});

// let obj = {
//   Name: `Muhammed Nayeem`,
//   print: function () {
//     console.log(this);
//   },
// };
// obj.print();

//It will refer the parent based object:
// let obj = {
//   Name: `Muhammed Nayeem`,
//   print: () => {
//     console.log(this);
//   },
// };
// obj.print();

// let obj = {
//   Name: `Muhammed Shakib`,
//   print: function () {
//     console.log(this);
//     // let self = this;
//     setTimeout(function () {
//       console.log(`Hello ${this.Name}`);
//     }.bind(this), 1000);
//   },
// };
// obj.print();

let obj = {
  Name: `Muhammed Nayeem`,
  print: function () {
    setTimeout(() => {
      console.log(this);
      console.log(`Hello ${this.Name}`);
    }, 5000);
  },
};
obj.print();