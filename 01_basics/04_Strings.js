const name = "Aviral";
const questions = 550;

// Using template literals for string interpolation
console.log(`Hello, my name is ${name} and my question count is ${questions}`);

// Creating a string using a constructor (not recommended)
const game = new String("Battle-field"); // Creates a String object instead of a primitive string

console.log(game[0]); // Accessing the first character ('B')

// Displaying the prototype of the String object (shows available methods)
console.log(Object.getPrototypeOf(game)); // Alternative to game.__proto__

console.log(game.length); // Length of the string (13)
console.log(game.toUpperCase()); // Transforms the string to uppercase ("BATTLE-FIELD")
console.log(game.charAt(4)); // Returns the character at index 4 ('l')
console.log(game.indexOf('t')); // Returns the index of the first occurrence of 't' (2)

// Extracts a substring from index 0 to 4 (excluding index 4)
const newString = game.substring(0, 4);
console.log(newString); // Output: "Batt"

// Corrected slice usage: Extracts characters from index -12 to 4
// Negative indices are allowed in slice(), meaning -12 refers to index 1 ('a')
const anotherString = game.slice(1, 4); // Equivalent to slice(-12, 4)
console.log(anotherString); // Output: "att"

const newStringone = "    levi    "
console.log(newStringone);
console.log(newStringone.trim()); //remove ampty spaces

const url = "https://gith%20ub.com"
console.log(url.replace('%20','-'))
console.log(url.includes('hello'))

console.log(game.split('-'))



