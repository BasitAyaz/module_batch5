// ECMA Script
// European Code Managemenr Administration

// ES6 Topics

// var,let,const
// hoisting
// Template Literals
// ternary operators
// Circuits
// Object Methods
// spread Operators
// rest operators
// destructuring
// promise
// async await
// Pass By value and Pass By Reference
// === Array Methods ===
// 1: map
// 2: filter
// 3: foreach
// 4: reduce
// 5: some
// 6: find
// 7: findIndex
// 8: flat
// === functions ===
// 1: higher order
// 2: callback function
// 3: Arrow function
// 4: Closures
// 5: lexical scoping
// 6: default peramter

// var a = {
//   mobiles: {
//     samsung: {
//       a30: {
//         name: "a30",
//         ram: "4gb",
//         rom: "64gb",
//         camera: "50px",
//         price: 2000,
//       },
//       note10: {
//         name: "note10",
//         ram: "6gb",
//         rom: "128gb",
//         camera: "50px",
//         price: 4000,
//       },
//       s10: {
//         name: "s10",
//         ram: "3gb",
//         rom: "128gb",
//         camera: "10px",
//         price: 5000,
//       },
//     },
//     iphone: {
//       iphone4: {
//         name: "iphone4",
//         ram: "4gb",
//         rom: "64gb",
//         camera: "50px",
//         price: 10000,
//       },
//       iphone4s: {
//         name: "iphone4s",
//         ram: "4gb",
//         rom: "64gb",
//         camera: "50px",
//         price: 20000,
//       },
//       iphone5: {
//         name: "iphone5",
//         ram: "4gb",
//         rom: "64gb",
//         camera: "50px",
//         price: 30000,
//       },
//       iphone6: {
//         name: "iphone6",
//         ram: "4gb",
//         rom: "64gb",
//         camera: "50px",
//         price: 30000,
//       },
//     },
//     xiomi: {
//       redminote10: {
//         name: "redminote10",
//         ram: "4gb",
//         rom: "64gb",
//         camera: "50px",
//         price: 10000,
//       },
//       redminote11: {
//         name: "redminote11",
//         ram: "4gb",
//         rom: "64gb",
//         camera: "50px",
//         price: 10000,
//       },
//       redmi10: {
//         name: "redmi10",
//         ram: "4gb",
//         rom: "64gb",
//         camera: "50px",
//         price: 10000,
//       },
//       redmi10pro: {
//         name: "redmi10pro",
//         ram: "4gb",
//         rom: "64gb",
//         camera: "50px",
//         price: 10000,
//       },
//     },
//   },
// };

// var brand = document.getElementById("brand");
// var model = document.getElementById("model");

// function searchVal() {
//   console.log(a['mobiles'][brand.value][model.value]);
// }

// === var ===
// redeclaration (y)
// reasignable (y)
// hiostable (y)
// block scope (y)

// === let ===
// redeclaration (n)
// reasignable (y)
// hiostable (n)
// block scope (y)

// === const ===
// redeclaration (n)
// reasignable (n)
// hiostable (n)
// block scope (y)

// === Template Literals ===

// var a = 10;

// var b = `kah skjd ${a * 2} k jalsjhajs`;
// console.log(b);

// === ternary operator ===
// var bool = true;

// if (bool) {
//   console.log("True Condition");
// } else {
//   console.log("false Condition");
// }

// bool
//   ? console.log("true condition")
//   : bool
//   ? console.log("false condition")
//   : null;

// var age = 15;
// var studentCard = true;

// if (age >= 18) {
//   console.log("allow");
// } else if (studentCard) {
//   console.log("allow on student card");
// } else {
//   console.log("not allowed");
// }

// === Circuits ===

// var num = "";
// let bool = false;

// let a = bool || "ABC";

// let name = "Basit Ahmed";
// let a = name == "Basit Ahmed" && 123456789;
// console.log(a);

// === Object Methods ===

// let c = {
//   name: "abc",
//   id: 1,
//   class: "1A",
//   inst: "SAIMS",
// };

// let a = Object.values(c);
// let a = Object.keys(c);
// let a = Object.entries(c);

// console.log(a);
 