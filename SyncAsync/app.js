// // -----------------------------------------
// // Basic Synchronous Logs
// // -----------------------------------------
// console.log("one");
// console.log("two");

// // Asynchronous log using setTimeout (executes after 4 seconds)
// setTimeout(() => {
//     console.log("Hello");
// }, 4000);

// console.log("three");
// console.log("four");

// // -----------------------------------------
// // Callback Functions
// // -----------------------------------------

// // Function to perform addition
// function sum(a, b) {
//     console.log(a + b);
// }

// // Higher-order function that accepts a callback
// function calculator(a, b, callback) {
//     callback(a, b);
// }

// // Using 'calculator' with 'sum' as callback
// calculator(2, 3, sum);

// // -----------------------------------------
// // Callback Hell Example
// // -----------------------------------------

// // Function simulating asynchronous data fetch using callbacks
// function getData(dataId, getNextData) {
//     setTimeout(() => {
//         console.log("data", dataId);
//         if (getNextData) getNextData(); // Call next if provided
//     }, 2000);
// }

// // Deeply nested callbacks - callback hell pattern
// getData(1, () => {
//     console.log("Getting data 2...........");
//     getData(2, () => {
//         console.log("Getting data 3...........");
//         getData(3, () => {
//             console.log("Getting data 4...........");
//             getData(4, () => {
//                 console.log("Getting data 5...........");
//                 getData(5, () => {
//                     console.log("Getting data 6...........");
//                     getData(6);
//                 });
//             });
//         });
//     });
// });

// // -----------------------------------------
// // Promise-Based Async Flow (Chained Promises)
// // -----------------------------------------

// Updated getData function using Promise
// function getData(dataId) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("data", dataId);
//             resolve("Success");
//         }, 2000);
//     });
// }

// // Sequential async calls using promise chaining
// getData(1)
//     .then(() => getData(2))
//     .then(() => getData(3))
//     .then(() => getData(4))
//     .catch((err) => console.log("Error:", err));

// // -----------------------------------------
// // Chaining Promises - Realistic Simulation
// // -----------------------------------------

// // Simulates a delayed async task (e.g., API call)
// function asyncFunc1() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("Some data 1");
//             resolve("Success");
//         }, 4000);
//     });
// }

// // Simulates another delayed async task
// function asyncFunc2() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("Some data 2");
//             resolve("Success");
//         }, 4000);
//     });
// }

// // Start of chained async calls
// console.log("Fetching data 1");
// let p1 = asyncFunc1();

// p1.then((res) => {
//     console.log(res); // logs "Success"
//     console.log("Fetching data 2");
//     asyncFunc2().then((res) => {
//         console.log(res); // logs "Success"
//     });
// });

// // -----------------------------------------
// // Using async/await - Cleaner and Sequential
// // -----------------------------------------

// // Simulate an API call returning after 2 seconds
// function api() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("weather API");
//             resolve(200);
//         }, 2000);
//     });
// }

// // Async function calling the API twice in sequence
// async function getweatherData() {
//     await api(); // First call
//     await api(); // Second call
// }

// // Re-define getData for consistent 4s delay
// function getData(dataId) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("data", dataId);
//             resolve("done");
//         }, 2000);
//     });
// }

// // Async function using await to get data sequentially
// async function getAllData() {
//     console.log("getting data 1.....");
//     await getData(1);
//     console.log("getting data 2.....");
//     await getData(2);
//     console.log("getting data 3.....");
//     await getData(3);
//     console.log("getting data 4.....");
//     await getData(4);
// }

// // Execute async/await function
// getAllData();

