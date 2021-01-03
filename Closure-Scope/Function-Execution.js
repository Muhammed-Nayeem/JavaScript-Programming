//Execution Context and Function:
abc();

function abc() {
  console.log('I am Function');
}

abc();


//Creational Phase:
//abc() = reference Id will be stored in memory forever.

//Executional Phase:
//abc() = searching the reference Id if reference id exist than it execute the function;