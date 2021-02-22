let map = new Map([
  ['a', 10],
  ['b', 20],
  ['c', 30],
  ['d', 40],
]);
console.log(map);
map.set('e', 50);
map.set('f', 60);
console.log(map);
console.log(map.size);
map.delete('f');
console.log(map);
console.log(map.size);
console.log(map.get('b'));
map.set({Name: `Muhammed Nayeem`}, 22);
console.log(map);

console.log(map.keys());
console.log(map.values());
console.log(map.entries());

map.forEach(function(v, k) {
  console.log(k, v);
});

for (let [k, v] of map) {
  console.log(v, k);
}