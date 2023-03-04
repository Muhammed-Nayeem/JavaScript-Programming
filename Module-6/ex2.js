//Access object properties by (.)dot notation or ['']array notation:
var me = {
  name: "Muhammed Nayeem",
  age: 25,
  profession: "Software Developer",
};

console.log(me.name);

me.email = "nayeem80@yahoo.com";
me['phone'] = "01703479326";
console.log(me);

var show = 'title';
me[show] = "Student";
console.log(me);
