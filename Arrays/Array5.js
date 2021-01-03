//How to insert and remove value from the certain index from an array:
var num = [1, 2, 3, 4, 5, 6, 7, 8];

//num[3] = 9; // Updated value for in certain index
//num.push(9); // insert value at last index
//num.unshift(9); // insert value at first index
//num.splice(3, 0, 9, 10); // insert value at given index

//num[3] = undefined; //It's not the right way to remove data;
//num.pop(); // removed last value
//num.shift(); //removed first value
//num.splice(3, 1); // removed given index value
num.splice(3, 1, 44);
console.log(num);