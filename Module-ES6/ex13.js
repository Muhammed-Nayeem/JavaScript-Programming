let testMap = new Map([
  ["a", 10],
  ["b", 20],
  ["c", 30],
]);

console.log(testMap);
console.log(testMap.size);

testMap.set("d", 40);
testMap.set("e", 50);
console.log(testMap);

console.log(testMap.get("b"));

// testMap.clear();
// console.log(testMap);

// console.log(testMap.has("c"));

// console.log(testMap.keys());
// console.log(testMap.values());
// console.log(testMap.entries());

let keyIterate = testMap.keys();

console.log(keyIterate.next());
console.log(keyIterate.next());
console.log(keyIterate.next());

for (let [v, k] of testMap) {
  console.log(k, v);
}

testMap.forEach((k, v) =>{
  console.log(v, k);
})
