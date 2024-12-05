// let company = {
//     sales: [{
//       name: 'John',
//       salary: 1000
//     }, {
//       name: 'Alice',
//       salary: 1600
//     }],
  
//     development: {
//       sites: [{
//         name: 'Peter',
//         salary: 2000
//       }, {
//         name: 'Alex',
//         salary: 1800
//       }],
  
//       internals: [{
//         name: 'Jack',
//         salary: 1300
//       }]
//     }
//   }

//   function sumSalaries(department){
//    if(Array.isArray(department)){
//     return department.reduce((prev, current) => prev + current.salary, 0);
//    }else{
//     let sum = 0
//     for (let subdep of Object.values(department)){
//         sum+= sumSalaries(subdep)
//     }
//     return sum
//    }
//   }
//   console.log(sumSalaries(company));
  //-----------------------------------

//   function sumTo(n){
//     if(n === 1){
//        return n
//     }else {
//       return n += sumTo(n - 1) 
//     }
//   }
//   console.log(sumTo(10));
  
//----------- fibonacci----
// function fib(n){
//     if(n <= 1){
//         return n
//     }else{
//       return fib(n -1) + fib(n - 2)
//     }
// }
// console.log(fib(7));

//----------------------------- callback function ---------------
// function walkDog(callback){

//     setTimeout(() => {
//         console.log("You walk the dog");
//         callback()
//     }, 1500)
// }

// function cleanKitchen(callback){

//     setTimeout(() => {
//         console.log("You clean the kitchen");
//         callback()
//     }, 2500)
// }
// function cleanKitchen(callback){

//     setTimeout(() => {
//         console.log("You clean the kitchen");
//         callback()
//     }, 2500)
// }

// function takeOutTrash(callback){

//     setTimeout(() => {
//         console.log("you take out the trash");
//         callback()
//    }, 500 )

// }
// walkDog(() => {
//     cleanKitchen(() => {
//         takeOutTrash(() => console.log('you finished all the chores'))
//     })
// })
//---------------- constructor function ------------

// function Car(name, brand){
// this.name = name;
// this.brand = brand
// return `${this.name} is made by ${this.brand}`
// }

// const auto = new Car("Ferrari", "REDBULL")
// console.log(auto);

//-------------- new function -----------------

// let sum = new Function('a', 'b', 'return a + b')
// console.log(sum(1, 2));
//^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
