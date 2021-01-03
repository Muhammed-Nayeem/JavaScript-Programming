//Interpreted: It means, instantly run and execute the whole js program. But it is lengthy and slow process, bcz in this process necessary code should be run first and than others.

//Compiled: In means, At first build the whole program and create an execution file which contain the machine code that is run on the compiler , In this process at a time whole program will be executed, but in debugging area it may have some trouble.

function a() {
  console.log('Hello JavaScript!');
}

function b() {
  console.log('Are you Interpreted or Compiled?');
}

a();

b();

//JIT : It means 'Just In Time' compiler. At a time it contains Interpreted and Compiled;