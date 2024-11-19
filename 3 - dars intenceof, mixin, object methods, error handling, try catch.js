//---------------- instanceof

// class Animal {
//     constructor(name){
//         this.name = name
//     }
// }
// class Dog extends Animal{
//     constructor(name){
//         super(name)
//     }
// }
// let result = new Dog("Bobik")
// console.log(result instanceof Animal);
//---------------------------------------- mixin

// let newObj = {
//     type(){
//         console.log(`${this.name} salom`);
        
//     }
// }

// class Myclass {
//     constructor(name){
//         this.name = name
//     }
// }
// Object.assign(Myclass.prototype, newObj)

// let object1 = new Myclass("Aziz")
// object1.type()
//----------------------------------------
// let canFly = {
//     fly(){
//         console.log(`${this.name} is flying`);
//     }
// }

// class Bird{
//     constructor(name){
//         this.name = name
//     }
// }
// Object.assign(Bird.prototype, canFly)

// let eagle = new Bird("Eagle")
// eagle.fly()
//--------------------------------------------getters and setters

// const course = {
//     name: 'JavaScript for Beginners',
//     duration: '3 hours',
//     cost: "free",
//     get details(){
//         return `${this.name} is ${this.duration} and ${this.cost}`
//     },
//     set details(value){
//       let parts = value.split(' ')
//       this.name = parts[0],
//       this.duration = parts[1]
//       this.cost = parts[3]
//     }
// }
// // console.log(course.details);

// course.details = `Learn JavaScript with Free code camp`
// console.log(course.details);
//--------------------------------------------------  try and catch  = Error

// const course = {
//     name: 'JavaScript for Beginners',
//     duration: '3 hours',
//     cost: "free",
//     get details(){
//         return `${this.name} is ${this.duration} and ${this.cost}`
//     },
//     set details(value){
//         // if ( value !== 'string'){
//         //     throw new Error(`Value ${value} is not a string`)
//         // }
//       let parts = value.split(' ')
//       this.name = parts[0],
//       this.duration = parts[1]
//       this.cost = parts[3]
//     }
// }
// // course.details = "anvar"
// course.details = "Python 4 hours"
// console.log(course.name);
// console.log(course.duration);


//-------------------------------------------------- 

// try{
// let result = 10 / 0
// if (!isFinite(result)){
//     throw new Error("zero division Error")
// }}
// catch(xato){
//     console.log((`error: ${xato.message}`));
    
// }finally{
//     console.log(`finally always works`);
// }
//-----------------------------------------
// let obj = new Map([
//     ['orange', 220], 
//     ['apple', 100], 
//     ['pear', 50],
//     ['apricot', 120]]
// )
// const map = Object.fromEntries(obj)
// console.log(obj);
//--------------------------------------------
// const array = [['dog', 2], ['cat', 3], ['chicken', 1], ['rabbit', 5]]
// const newObj = Object.fromEntries(array)
// console.log(newObj);

//------------------------------------------------------

// let jet = {
//     apple: "100, 90, 102, 99",
//     pear: "120, 98, 76, 77"
// }
// function getPrices(list){
//     const {apple : showPrices} = list
//     return showPrices
// }
// const price = getPrices(jet)
// console.log(price);
//--------------------------------------------------

// function getPearPr(list){
//     const {pear : showPricePear} = list
//     return showPricePear
// }
// console.log(getPearPr(jet))
//---------------------------------------------

// const person = {
//     name: "Ali",
//     age: 34
// }
// Object.freeze(person)
// person.age = 30

// console.log(person);
//-----------------------------------

// let obj = {
//     fruit: "apple",
//     food: "sushi",
// }

// Object.defineProperty(obj, "name", {
//     value: "Kamol",
//     writable: true,
//     enumerable: true,
//     configurable: true
// })
// obj.age =  23
// obj.money = 400
// console.log(obj);

//-----------------------------------------------------------------

// let str

// let sliced1 = str.slice(0, str.length / 2)
// let sliced2 = str.slice(str.length / 2, str.length)

// let str1 = str.split("").reverse().join("")
// let str2 = '({(('

// str2.split("").reverse().join("")
// console.log(sliced2);


// let s = '('
// let a = ')'
// console.log(a == s);

// function getTwoLargest(arr) {
//     if (arr.length < 2) {
//       throw new Error("Массив должен содержать хотя бы два элемента.");
//     }
  
//     let max1 = -Infinity;
//     let max2 = -Infinity;
  
//     // Проходим по массиву один раз
//     for (let num of arr) {
//       if (num > max1) {
//         max2 = max1;  // старое максимальное становится вторым
//         max1 = num;   // новое максимальное
//       } else if (num > max2) {
//         max2 = num;  // обновляем второе максимальное
//       }
//     }
  
//     return [max1, max2];
//   }
  
//   const result = getTwoLargest([12, 4, 7, 10, 9]);
//   console.log(result);  // [12, 10]