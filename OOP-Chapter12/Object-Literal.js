var rect = {
  width: 100,
  height: 50,

  draw: function () {
    console.log("I am Rectangle!");
    console.log("My Height is : " + this.height);
    console.log("My Width is : " + this.width);
  },
};

rect.draw();

rect.height = 100;

rect.draw();
