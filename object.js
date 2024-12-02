//------------------ sum object values -------------------

// let salaries = {
//     "John" : 100,
//     "Pete": 300,
//     "Mary": 250
// }
// function sumSalaries(obj){
//     let sum = 0
//     for (const element of Object.values(obj)) {
//         sum += element
//     }
//     return sum
// }
// console.log(sumSalaries(salaries));

//--------------- sum values of obj
// let salaries = {
//     "John" : 100,
//     "Pete": 300,
//     "Mary": 250,
//     name: "jasur",
//     adress: "Ikrom"
// }

// function countNums(obj1){
//     let sum1 = 0
//     for (const item of Object.values(obj1)) {
//         if(Number(item)){
//             sum1++
//         }
//     }
//     return sum1
// }
// console.log(countNums(salaries));

//----------------------- freezing method -----------------

// let object = {
//     name: "Ali",
//     age: 30,
//     address: "Kamol.street"
// }
// Object.freeze(object)   // you can't change the keys and values of the object but you can change nested objects

// object.name = "Karim"
// console.log(object);

//------------------- nested objects in freezing -----------------
// let objects = {
//     name: "Ali",
//     age: 30,
//     address: "Kamol.street",
//     family:{
//         married: 'No',
//         typeofHome: "flat"
//     }
// }

// Object.freeze(objects)

// objects.name = "Vali"
// objects.family.married = "yes"
// objects.family.typeofHome = "detached"
// console.log(objects);

//-------------------- sealing mehtod ------------------ 

// let objects = {
//     name: "Ali",
//     age: 30,
//     address: "Kamol.street"
// }
// Object.seal(objects)

// objects.name = "Karim"
// objects.money = 4000
// delete objects.age
// console.log(objects);

//-------------------- call method -----------------

// let uzbekistanAirways = {
//   title: "O'zbekiston havo yo'llari",
//   code: "HY",
//   booking: [],
//   book: function (name, seatNum) {
//     return this.booking.push(
//       `${this.title}da ${name} ismli inson ${seatNum}-o'rindiqda uchayapti`
//     );
//   },
// };

// let turkishAirlines = {
//   title: "Turkiya havo yo'llari",
//   code: "TR",
//   booking: [],
// }

// uzbekistanAirways.book("Shuhrat", 1)

// let book = uzbekistanAirways.book;

// book.call(turkishAirlines, "Sabit Car", 2)

// console.log(turkishAirlines);

// let behruzbekAirways = {
//   title: "Behruzbekninki",
//   code: "BH",
//   booking: [],
// };

// book.call(behruzbekAirways, "Muhammadali", 2)

//--------------------- object iterator -----------------

// let range = {
//     from: 1,
//     to: 5,

//     [Symbol.iterator](){
//         return {
//             current: this.from,
//             last: this.to,

//             next(){
//                 if(this.current <= this.last){
//                     return {done: false, value: this.current++}
//                 }else{
//                     return { done: true}
//                 }
//             }
//         }
//     }
// }
// for (const value of range) {
//     console.log(value);
    
// }

//---------------------- Async object iteration ---------------

// let range = {
//     from: 1,
//     to: 5,
  
//     [Symbol.asyncIterator]() { // (1)
//       return {
//         current: this.from,
//         last: this.to,
  
//         async next() { // (2)
  
//           // note: we can use "await" inside the async next:
//           await new Promise(resolve => setTimeout(resolve, 1000)); // (3)
  
//           if (this.current <= this.last) {
//             return { done: false, value: this.current++ };
//           } else {
//             return { done: true };
//           }
//         }
//       };
//     }
//   };
  
//   (async () => {
  
//     for await (let value of range) { // (4)
//       console.log(value); // 1,2,3,4,5
//     }
  
//   })()

//---------

// let range = {
//     from: 1,
//     to: 5,
  
//     *[Symbol.iterator]() { // a shorthand for [Symbol.iterator]: function*()
//       for(let value = this.from; value <= this.to; value++) {
//         yield value;
//       }
//     }
//   };
  
//   for(let value of range) {
//   console.log(value); // 1, then 2, then 3, then 4, then 5
//   }
  //-=---------------- Recall generators ---------------

//   function* generateSequence(start, end) {
//     for (let i = start; i <= end; i++) {
//       yield i;
//     }
//   }
  
//   for(let value of generateSequence(1, 5)) {
//     console.log(value); // 1, then 2, then 3, then 4, then 5
//   }

//------------ Async generators ------------------

// async function* generateSequence(start, end) {
//     for(let i = start; i <= end; i++){
//         await new Promise(resolve => setTimeout(resolve, 1000));
//         yield i;
//     }
// }
// (async () => {
//     let generator = generateSequence(1, 5)
//     for await (let value of generator){
//         console.log(value)
//     }
// })();
//---------------------------

// async function* generateSequence(start, end) {

//     for (let i = start; i <= end; i++) {
  
//       // Wow, can use await!
//       await new Promise(resolve => setTimeout(resolve, 1000));
  
//       yield i;
//     }
  
//   }
  
//   (async () => {
  
//     let generator = generateSequence(1, 5);
//     for await (let value of generator) {
//       console.log(value); // 1, then 2, then 3, then 4, then 5 (with delay between)
//     }
  
//   })();

//---------------- Async iterable range ------------------

// let range = {
//     from: 1,
//     to: 5,
  
//     // this line is same as [Symbol.asyncIterator]: async function*() {
//     async *[Symbol.asyncIterator]() {
//       for(let value = this.from; value <= this.to; value++) {
  
//         // make a pause between values, wait for something
//         await new Promise(resolve => setTimeout(resolve, 1000));
  
//         yield value;
//       }
//     }
//   };
  
//   (async () => {
  
//     for await (let value of range) {
//       console.log(value); // 1, then 2, then 3, then 4, then 5
//     }
  
//   })();

//------------------- 
// let ranges = {
//     from: 1,
//     to: 5,

//     async *[Symbol.asyncIterator](){

//         for (let value = this.from; value <= this.to; value++) {

//             await new Promise(resolve => setTimeout(resolve, 1000))

//             yield value
            
//         }
//     }
// };
// (async () => {
//     for await (let value of ranges){
//         console.log(value);
//     }
// })();

//------------------------------- multiply values of Object --------------
// let menu = {
//   width: 200,
//   height: 300,
//   title: "My menu"
// };

// function multiply (object){
//   for (const key in object) {
//        if(typeof object[key] === typeof 3){
//        object[key] *= 2
//        }
//   }
//   return object
// }
// console.log(multiply(menu));

//------------------------------- Map iteration -------------

// let user = new Map()

// user.set("name", "John")
// user.set("age", "30")
// for(let [key, value] of user){
//   console.log(`${key}: ${value}`);
// }

//------------------------ Object entries iteration ----------

// let user = {
//   name: "Jane",
//   age: 20
// }
// for(let [key, value] of Object.entries(user)){
//   console.log(`${key}: ${value}`);
// }

//===================  object simple copying ============

// let user = {
//   name: "John",
//   age: 30
// }
// let clone = {}

// for (const key in user) {
//     clone[key] = user[key]
//   }
// console.log(Object.entries(clone));

//------------- object assign ------------------

// let user = {
//   name: "John",
//   age: 30
// }


// let clone = Object.assign({}, user)
// console.log(clone);
//---------- nested object assign --------------

// let person = {
//   name: "Jasur",
//   sizes:{
//     height: 182,
//     weight: 50
//   }
// }
// let clone = Object.assign({}, person)
// console.log(clone.sizes === person.sizes);

//--------------- copying objects -------------

// let obj = {a: 1, b: 2, c: 3, d: 4}

// let copyObj = { ...obj }
// console.log(copyObj);


//----------------- create a calculator ----------------

// let calculator = {
//   a: 10,
//   b:20,
//   read(){
//   return [this.a, this.b]
//   },
//   sum(){
//    return this.a + this.b
//   },
//   mul(){
//     return this.a * this.b
//   },

// }
// console.log(calculator.read());
// console.log(calculator.sum());
// console.log(calculator.mul());

//--------------------- chaining obj ---------------
// let chain = {
//   step: 0,
//   up(){
//     this.step++
//     return this
//   },
//   down(){
//     this.step--
//     return this
//   },
//   showStep: function(){
//     console.log(this.step);
//     return this
//   }
// }
// chain.up().up().up().down().down().showStep().up().showStep()

//--------------------- ladder

// let ladder = {
//   step: 0,
//   up(){
//     this.step++
//   },
//   down(){
//     this.step--
//   },
//   showStep: function(){
//     console.log(this.step);
//   }
// }
// ladder.up()
// ladder.up()
// ladder.up()
// ladder.down()
// ladder.showStep()
// ladder.down()
// ladder.showStep()

//------------ descriptors --------------

// let obj = {}

// Object.defineProperty(obj, "name", {
//     value: "Aziz",
//     writable: true,
//     enumerable: true,
//     configurable: true
// })
// obj.name = "Anvar"
// obj.age = 23
// obj.id = 1
// delete obj.age
// console.log(obj);
