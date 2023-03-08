//execution context and function:
abc();

function abc() {
  console.log("I am abc function");
}

abc();


//creation phase:
//abc = abc() -> ref;

//execution phase:
//abc() = ref -> abc();
//abc() = ref -> abc();
