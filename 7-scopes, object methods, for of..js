// 'use strict'

// var x
// var b

// var x = 5;
// var b = 44
// console.log(x); // undefined
// // console.log(x); // 5

// sayHello();

// var sayHello = function name(params) {
//   console.log('Hello, world!');

// }

// var greeting = getGreeting();

// function getGreeting() {
//   return 'Hello!';
// }

// console.log(greeting); // "Hello!"

// var x = 10;

// function foo() {
//   console.log(x); // 10
// }

// foo();
// let x = 4

// function myFunc() {
//   function nextFunc() {
//     let other = 15
//    }
//    console.log(other);

// }

// myFunc()

// console.log(x);

// console.log(this); // window

// function foo() {
//   console.log(this); // global object (window in browser)
// }

// foo();

///////////////// global scope

// let a = 12

////////////////// function or local scope

// function myFunc(){
//   var a = 33

// }
// console.log(a);
// myFunc()

// function foo() {
//   var y = 20;
//   console.log(y);
// }

// foo();
// console.log(y);

////////////// block scope

// if(1 === 1) {
//   var a = 44
// }
// console.log(a);

// {
//   var a = 12
// }

// console.log(a);

// for (let i = 0; i < 11; i++) {
//   var a = 12
// }

// console.log(a);

// console.log(1 || "");

// console.log(3 || "hello")
// console.log("" || "hello")
// console.log(true || 0)
// console.log(undefined || null || NaN || 0 || false)

// 3
// " "
// true
// undifined

// console.log(false && "hello")
// console.log("" || "hello")
// console.log(true || 0)
// console.log(undefined || null || NaN || 0 || false)

///////////////////////// Object

// let obj = {
//   name: "Behruzbek",
//   age: 17
// }

// console.log(Object.keys(obj));
// console.log(Object.values(obj));
// console.log(Object.entries(obj));

///// example

// const restaurant = {
// 	name: 'Rayhon Milliy Taomlar',
// 	location: 'Tashkent',
// 	categories: ['national', 'fast food', 'european cuisine', 'turkish'],
// 	startMenu: ['somsa', 'lagman', 'salad', 'soup'],
// 	mainMenu: ['osh', 'norin', 'manti'],
// 	openingHours: {
// 		mon: {
// 			open: 8,
// 			close: 22
// 		},
// 		tue: {
// 			open: 8,
// 			close: 23
// 		},
// 		wed: {
// 			open: 9,
// 			close: 21
// 		},
// 	},
// }

// const entries = Object.entries(restaurant.openingHours)
// console.log(entries)

// for(const [key, {open, close}] of entries) {
// 	console.log(`On ${key}, we open at ${open} and close at ${close}`)
// }

// for(const day of Object.entries(restaurant.openingHours)){
// 	console.log(day)
// }

//Object.keys orqasi nima bor:
// const properties = Object.keys(openingHours)
// console.log(properties)

// let hasDriversLicence = false;
// let passTest = true;

// if(passTest) hasDriverLicence = true;
// if(hasDriversLicence) console.log('I can drive!')

//Reserved words
// const interface = 'book'

// function myFunc(arr, num) {
//   let res = []
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] != num) {
//       res.push(arr[i])   
//     }    
//   }
//   return res
// }
// console.log(myFunc([1,2,3], 1));


// function exercise2(object, num){
//   let numContain = false
//   let array = []
//   for (const key in object) {
//     if (Object.prototype.hasOwnProperty.call(object, key)) {
//       if(object[key] === num){
//         numContain = true
//       }
//       array.push(object[key])
//     }
//   }
//   array.push(numContain)
//   return array
// }
// console.log(exercise2({a: 2, b: 3, c: 4, d:5}, 10));



// function exercise3(array, value){
//   let counter = 0
//   array.forEach(element => {
//     if(element === value){
//       counter ++
//     }
//   })
//   return counter
// }
// console.log(exercise3(["hi","hi","def"],"hi"));




// function secondLargest(a) {
//   let res = a.sort((a, b) => a - b)
//   return res[res.length - 2]
// }

// console.log(secondLargest([4,5, 11, 6,4,3,5,9,6,54]));


// function getLength(arr) {
//   let sum = 0
//   for (const item of arr) {
//     if(Array.isArray(item)) {
//       sum += getLength(item)
//     }else {
//       sum ++
//     }
//   }
//   return sum
// }

// console.log(getLength([[3, [23, 3, 5, [[23]]]]]));
