const arr = [1, 2, 3, 4, "hello"];
const arr2 = new Array(1, 2, 3, 4, 5);

arr2.push(6);
arr.push(6);
console.log(arr); // [1, 2, 3, 4, "hello", 6]
console.log(arr2); // [1, 2, 3, 4, 5, 6]

arr2.pop(); // Corrected (removes last element)
console.log(arr2); // [1, 2, 3, 4, 5]

console.log(arr.includes(4)); // true
console.log(arr.indexOf(3)); // 2

// slice vs splice
const myn1 = arr.slice(1, 3);
console.log(myn1); // [2, 3] (doesn't modify arr)
console.log(arr); // [1, 2, 3, 4, "hello", 6] (unchanged)

const myn2 = arr.splice(1, 3);
console.log(myn2); // [2, 3, 4] (removed elements)
console.log(arr); // [1, "hello", 6] (modified)
