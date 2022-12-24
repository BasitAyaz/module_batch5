// ECMA Script
// European Code Managemenr Administration

// ES6 Topics

// {date : 17-12-2022}
// var,let,const
// hoisting
// Template Literals
// ternary operators
// Circuits
// Object Methods

// {date : 24-12-2022}
// spread Operators
// rest operators
// destructuring
// Pass By value and Pass By Reference
// promise
// async await

// === functions ===
// 1: higher order
// 2: callback function
// 3: Arrow function
// 4: Closures
// 5: lexical scoping
// 6: default peramter
// === Array Methods ===
// 1: map
// 2: filter
// 3: foreach
// 4: reduce
// 5: some
// 6: find
// 7: findIndex
// 8: flat

// === ES9 ===
// optional chaining
// nullish

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
//     oppo: {
//       a3s: {
//         name: "a3s",
//         ram: "4gb",
//         rom: "64gb",
//         camera: "50px",
//         price: 10000,
//       },
//     },
//   },
// };
// var brandDropDown = document.getElementById("brand");
// var model = document.getElementById("model");

// let brands;
// let models;

// function init() {
//   brands = Object.keys(a.mobiles);
//   console.log(brands);
//   brandDropDown.innerHTML = "";
//   for (var i = 0; i < brands.length; i++) {
//     brandDropDown.innerHTML += `<option value="${brands[i]}" >${brands[i]}</option>`;
//   }
// }
// init();

// function fillModels() {
//   models = Object.keys(a.mobiles[brandDropDown.value]);
//   console.log(models);
//   model.innerHTML = "";
//   for (var i = 0; i < models.length; i++) {
//     model.innerHTML += `<option value="${models[i]}" >${models[i]}</option>`;
//   }
// }

// function searchVal() {
//   console.log(a["mobiles"][brandDropDown.value][model.value]);
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

// let a = Object.assign([], {
//   id: 1,
//   fullName: "ABC ",
//   name: "ABC ",
// });

// console.log(a);

// let a = {
//   id: 1,
//   fullName: "ABC",
// };
// Object.freeze(a);
// a.fullName = "XYZ";
// console.log(a);

// === Spread Oerator ===
// let arr = ["A", "B", "C", "D"];

// let arr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, ...arr];

// console.log(arr2);

// let configObj = {
//   inst: "SAIMS",
//   batch: "b4",
//   year: "2022",
//   instAddress: {
//     street: "ABC",
//     city: "KHI",
//   },
// };
// let obj = {
//   ...configObj,
//   id: 1,
//   fullName: "ABC",
//   officeAddres: { ...configObj.instAddress },
// };

// console.log(obj);

// function abc(...rest) {
//   console.log(rest);
// }

// abc("ABdul Basit", 10, 45, 1, 5, 5, 1, 2, 3, 4, 85, 8);

// function abc(...a) {
//   console.log(a);
// }
// abc(1,2,2,3,4,5,6);

// === Destructuring ===

// let a = [
//   "abc",
//   true,
//   function () {
//     console.log("any Value");
//   },
// ];

// let [val, bool, func] = a;
// a[1] = false;
// console.log(a);

// let obj = {
//   id: 1,
//   name: "ABC",
//   marks: 79,
//   isClear: true,
// };

// let { marks, name } = obj;
// console.log(name);

// let a = [
//   1,
//   2,
//   "a",
//   "b",
//   {
//     id: 1,
//     name: "ABC",
//     details: [
//       "hg1",
//       "hg2",
//       {
//         id: 2,
//         fullName: "hg ABC",
//       },
//     ],
//   },
// ];

// let [val1, val2] = a[4].details;
// let { fullName } = a[4].details[2];

// let a = ["a", "b", "c", "d"];
// a[1] = 1;
// console.log(a);

// let b = "abc";
// b = 123;

// let c = ["a", "b", "c"];

// let d = [...c];
// d[1] = 1;

// console.log(c);
// console.log(d);

// let obj = {
//   id: 1,
//   name: "ABC",
// };

// obj.name = "XYZ";
// let a = { ...obj };

// === Promise ===

// let AbdullahKaRishta = new Promise(function (resolve, reject) {
//   if (
//     abdullahKijob == true &&
//     abdulahKiSallary > 80 &&
//     abdullahKaApnaGhar == true
//   ) {
//     resolve("Rishta Pakka");
//   } else {
//     reject("Dusra Dhondo");
//   }
// });

// AbdullahKaRishta.then((success) => {
//   console.log(success);
// }).catch((err) => {
//   console.log(err);
// });

// function xyz() {
//   setTimeout(function () {
//     return "B";
//   }, 3000);
// }

// async function abc() {
//   console.log("A");
//   await new Promise(function () {
//     setTimeout(function () {
//       console.log("B");
//     }, 300);
//   });
//   console.log("C");
// }
// abc();

// === Functions ===

// function abc() {
//   return "First Value";
// }

// function xyz(a) {
//   console.log(a);
// }

// xyz(abc());
