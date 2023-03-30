var rect = {
  width: 20,
  height: 50,

  print: function() {
    console.log("I am Rectangle!");
    this.printProperties();
  },
  printProperties: function(){
    console.log("Width: "+ this.width);
    console.log("Height: "+ this.height);
  },
};

rect.print();
