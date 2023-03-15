//function expression vs declaration:
abc();

function abc() {
  console.log("I am ABC function");
}

// newAbc();

var newAbc = function() {
  console.log("I am NEW ABC function");
};

newAbc();

//creation phase:
//abc = abc() -> ref;
//newAbc = undefined;

//execution phase:
//abc() = ref -> abc() => "I am ABC function";
//newAbc = newAbc() -> ref;
//newAbc() = ref -> newAbc() => "I am NEW ABC function";
