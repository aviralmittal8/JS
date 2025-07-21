// // Example of a student object with method
// let student = {
//     name: "Rahul Kumar",
//     age: 20,
//     cgpa: 7.5,
//     ispass: true,
//     printmarks: function () {
//         console.log("marks:", this.cgpa);
//     },
// };

// // Prototypal inheritance example
// const employee = {
//     cacTax() {
//         console.log("Tax rate is 10%");
//     },
// };

// const KaranArjun = {
//     salary: 10000,
// };

// KaranArjun.__proto__ = employee;

// // Class example for a car
// class Toyotacar {
//     start() {
//         console.log("Start");
//     }

//     stop() {
//         console.log("Stop");
//     }

//     setBrandName(brand) {
//         this.brandName = brand;
//     }
// }

// let fortuner = new Toyotacar();
// fortuner.setBrandName("Toyota");

// let lexus = new Toyotacar();
// lexus.setBrandName("Lexus");

// // Inheritance example with User and Admin
// let Data = "Website Data";

// class User {
//     constructor(name, email) {
//         this.name = name;
//         this.email = email;
//     }

//     viewData() {
//         console.log(Data);
//     }
// }

// class Admin extends User {
//     constructor(name, email) {
//         super(name, email);
//     }

//     editData() {
//         Data = "New Data";
//     }
// }

// let Student1 = new User("Shradha", "abc@hotmail.com");
// let Student2 = new User("Aman", "def@hotmail.com");
// let teacher1 = new User("Dean", "Dean@college.com");
// let admin1 = new Admin("admin", "admin@college.com");
