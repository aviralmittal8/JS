// // ==============================
// // Looping through a string
// // This loop iterates over each character in the string and prints it individually.
// let str = "hello";
// for (let val of str) {
//     console.log(val);  // Output: h, e, l, l, o
// }

// // ==============================
// // Working with objects
// // An object containing basic student information.
// let student = {
//     name: "Rahul Kumar",
//     age: 20,
//     cgpa: 7.5,
//     ispass: true,
// };

// // Looping through the object's keys using a for-in loop.
// for (let key in student) {
//     console.log(key);             // Prints the key (e.g., name, age)
//     // console.log(student[key]); // Uncomment to print the value of each key
// }

// // ==============================
// // Practice Question 1: Print all even numbers from 1 to 100

// for (let i = 1; i <= 100; i++) {
//     if (i % 2 === 0) {
//         console.log(i);  // Only even numbers are printed
//     }
//     // To print odd numbers instead, use: if (i % 2 !== 0)
// }

// // ==============================
// // Practice Question 2: Number guessing game

// // A simple guessing game where the user has to guess the correct number.
// let gameNum = 25;  // You can replace this with a random number generator if needed
// let userNum = prompt("Guess the game number:");

// while (userNum != gameNum) {
//     userNum = prompt("Incorrect. Try again:");
// }
// console.log("Correct! You guessed the number.");

// // ==============================
// // Practice Question 3: Generate a username from full name
// // The user is asked to enter their full name.The program creates a username by removing spaces and appending the character count.

// let fullName = prompt("Enter your full name:");
// console.log(`@${fullName.replaceAll(" ", "")}${fullName.replaceAll(" ", "").length}`);

// // ==============================
// // Practice: Array manipulations

// let arr = ["Bloomberg", "Microsoft", "Uber", "Google", "IBM", "Netflix"];
// arr.shift();                     // Removes the first element
// console.log(arr);                // Output: ["Microsoft", "Uber", "Google", "IBM", "Netflix"]
// arr.splice(1, 1, "Ola");         // Replaces element at index 1 ("Uber") with "Ola"
// console.log(arr);                // Output: ["Microsoft", "Ola", "Google", "IBM", "Netflix"]
// arr.push("Amazon");              // Adds a new element at the end
// console.log(arr);                // Output: ["Microsoft", "Ola", "Google", "IBM", "Netflix", "Amazon"]

// // ==============================
// // Practice: Count number of vowels in a string

// // Function to count how many vowels are present in a given string.
// let vowels = ["a", "e", "i", "o", "u"];
// function CountVowels(str) {
//     let count = 0;
//     for (let val of str.toLowerCase()) {
//         if (vowels.indexOf(val) !== -1) {
//             count++;
//         }
//     }
//     return count;
// }
// let inputString = prompt("Enter a string to count vowels:");
// console.log(`Number of vowels: ${CountVowels(inputString)}`);

// // Create the arrow function to do the sam task 
// const CountVowels=(str)=>{
//     let count = 0;
//     for(let val of str.toLowerCase()){
//         if(vowels.indexOf(val)!== -1){
//             console.log(val);
//             count+=1;
//         }
//     }
//     return count;
// }
// let inputString = prompt("Enter a string to count vowels:");
// console.log(`Number of vowels: ${CountVowels(inputString)}`);

// let arr = [1, 2, 3, 4, 389];

// // forEach – Do something with every item (no return)
// arr.forEach(val => {
//   console.log(val * val); // prints square of each number
// });

// // map – Create a new array by changing each item
// let mappedArr = arr.map(val => {
//    return val * 2;
// });
// console.log(mappedArr); // [2, 4, 6, 8, 778]

// // filter – Create a new array with some items based on condition
// let evenArr = arr.filter(val => {
//    return  val % 2 === 0;
// });
// console.log(evenArr); // [2, 4]

// // reduce – Get one final value by combining all items
// let total = arr.reduce((sum, val) => {
//     return sum + val;
// });
// console.log(total); // 399

// // ==============================
// // Practice: we are given an array of marks of students. Filter out of the marjs of students greater than 90
// let marks = [97,64,32,48,92,86,97];
// let toppers = marks.filter(val =>{
//     return val > 90;
// });
// console.log(toppers);

// ==============================
// Practice: Take a number n as input from user. create an array of numbers from 1 to n. use reduce method to calculate the sum of all 
// numbers in the array . use the reduce method to calculate the product of all numbers in the array.
// let n = prompt("Enter a number:");
// let arr = [];
// for (let i = 1; i <= n; i++) {
//     arr[i - 1] = i;
// }
// console.log(arr);
// let total = arr.reduce((sum, num) => sum + num, 0);
// let multiple = arr.reduce((product, num) => product * num, 1);

// console.log(`Sum = ${total}, product = ${multiple}.`);


//Objects
const student = {
    
}






