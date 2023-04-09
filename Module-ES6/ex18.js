class Person {
  constructor(name, age, email) {
    this.name = name;
    this.age = age;
    this.email = email;
  }

  print() {
    console.log(`Name: ${this.name}`);
    console.log(`Age: ${this.age}`);
    console.log(`Email: ${this.email}`);
  }

  static createPerson(str) {
    let person = JSON.parse(str);
    return new Person(person.name, person.age, person.email);
  }
}

let str = '{"name": "Muhammed Nayeem", "age": 24, "email": "mnayem97@gmail.com"}';

let p1 = Person.createPerson(str);
console.log(p1);
