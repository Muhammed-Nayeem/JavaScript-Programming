//Arrow function and this:
const person = {
  name: "Nayeem",
  age: 24,

  print: function() {
    setTimeout(() => {
      console.log(this);
      console.log(`Name: ${this.name}`);
      console.log(`Age: ${this.age}`);
    }, 2000);
  },
};

person.print();
