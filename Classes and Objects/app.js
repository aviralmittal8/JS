// let student = {
//     name: "Rahul Kumar",
//     age: 20,
//     cgpa: 7.5,
//     ispass: true,
//     printmarks: function () {
//         console.log("marks: ", this.cgpa);
//     },
// };

// const employee = {
//     cacTax(){
//         console.log("Tax rate is 10%");
//     },
// }

// const KaranArjun = {
//     salary: 10000,

// }

// KaranArjun.__proto__ = employee;

class Toyotacar {
    start() {
        console.log("Start");
    }

    stop() {
        console.log("Stop");
    }

    setBrandName(brand) {
        this.brandName = brand;
    }
}
let fortuner = new Toyotacar();
fortuner.setBrandName("Toyata")
let lexus = new Toyotacar();
lexus.setBrandName("lexus")

