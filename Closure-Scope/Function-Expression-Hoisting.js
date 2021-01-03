//Hoisting in Function Expression:
abc();

function abc() {
  console.log("I am abc function");
}


// newAbc();

var newAbc = function () {
  console.log("I am newABC function");
};

newAbc();


//Creational Phase:
//abc() =  ref id;
//newAbc = undefined;

//Executional Phase:
//abc() = ref id;
//newAbc() = ref id;
