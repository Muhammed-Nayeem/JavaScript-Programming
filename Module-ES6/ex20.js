//private data with weakmap:
const _radius = new WeakMap();
const _name = new WeakMap();
const _resize = new WeakMap();

class Circle {
  constructor(radius, name) {
    this.size = 100;
    _radius.set(this, radius);
    _name.set(this, name);
    _resize.set(this, () => {
      console.log(this.size);
    })
  }

  draw() {
    console.log("Drawing.....");
    console.log(`Radius : ${_radius.get(this)}`);
    console.log(`Name : ${_name.get(this)}`);
    _resize.get(this)();
  }
}

let c1 = new Circle(10, "CRED")
c1.draw()
