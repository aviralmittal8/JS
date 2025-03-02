const heroes = ["thor", "Ironman", "spiderman"];
const heroes2 = ["batman", "superman"];

// ❌ This pushes the entire heroes2 array as a single element
heroes.push(heroes2);
console.log("After push:", heroes);  
// Output: ["thor", "Ironman", "spiderman", ["batman", "superman"]]

// ✅ Correct way: Merge arrays using concat()
const mergedHeroes = heroes.concat(heroes2);
console.log("After concat:", mergedHeroes);

// ✅ Another clean way: Using the spread operator
const newheroes = [...heroes, ...heroes2];
console.log("After spread:", newheroes);


// 🏆 Flattening a nested array
const another_arr = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]];
const flattenedArray = another_arr.flat(Infinity);
console.log("Flattened array:", flattenedArray);
// Output: [1, 2, 3, 4, 5, 6, 7, 6, 7, 4, 5]


// 🔍 Check if something is an array
console.log("Is 'Hello' an array?", Array.isArray("Hello")); // false

// 🎭 Convert a string into an array
console.log("Convert string to array:", Array.from("Hello"));  
// Output: ["H", "e", "l", "l", "o"]

// 🚨 Attempt to convert an object (will return an empty array)
console.log("Convert object to array:", Array.from({ name: "hello" })); 
// Output: []


// 🎯 Creating an array from individual values
const score1 = 100;
const score2 = 200;
const score3 = 300;
console.log("Array.of() example:", Array.of(score1, score2, score3));  
// Output: [100, 200, 300]
