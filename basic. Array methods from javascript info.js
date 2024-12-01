// -------------- array methods

// let arr = ['Apple', {name: 'John'}, true, function(){console.log('salom');
// }]
// console.log(arr[1].name);// John
// console.log(arr[3]());// salom
//----------------------------------------
// let fruits = ["Apple", "Orange", "Plum"];
// console.log( fruits[fruits.length-1] ); // Plum
//---------------------------------------
// let fruit = ["Apple", "Orange", "Plum"];
// console.log( fruit.at(-1) ); // Plum
//-------------------------------------
// let array = []
// array[0] = 1
// array[1] = 4
// array.age = 23
// console.log(array);

//---------------------------------------
// let fruit = ["Apple", "Orange", "Plum"];
// for (let i = 0; i < fruit.length; i++) {
//    console.log(fruit[i]);    
// }
//-------------------------------------
// for (const element of fruit) {
//     console.log(element);
// }
//-----------------------------------
// for (const key in fruit) {
// console.log(fruit[key]); } 

//---------------------------------
// ["Bilbo", "Gandalf", "Nazgul"].forEach((item, index, array) => {
//     console.log(`${item} is at index ${index} in ${array}`);
//   });
//--------------------------------

// Array.prototype.findNames = function(num){
//     return this.find(item => item.id == num)
// }

// let employees = [
//     {id:1, name: 'Ali'},
//     {id:2, name: 'vali'},
//     {id:3, name: 'jasur'},
//     {id:4, name: 'utkir'}
// ]
// console.log(employees.findNames(1));
//---------------------------------------------

// Array.prototype.lastIndexName = function(value) {
//     return this.findLastIndex(user => user.name == value)
// }
// let employees = [
//     {id:1, name: 'Ali'},
//     {id:2, name: 'umar'},
//     {id:3, name: 'jasur'},
//     {id:4, name: 'utkir'},
//     {id:5, name: 'umar'}
// ]
// console.log(employees.lastIndexName('umar'));
//------------------------------------------------------

// let countLength = ['apple', 'banana', 'pear'].map(item => item.length)
// console.log(countLength);
//-------------------------------------------------
// let countries = ['Österreich', 'Andorra', 'Vietnam'];
// console.log( countries.sort( (a, b) => a.localeCompare(b) ) );

//--------------------------------------------------
// let employees = [
//     {id: 1, name: 'vali'},
//     {id: 2, name: 'sherzod'},
//     {id: 3, name: 'Laziz'},
//     {id: 4, name: 'Jafar'},
// ]
// employees.sort((a, b)=> {
//     const lowercaseA = a.name.toLocaleLowerCase()
//     const lowercaseB = b.name.toLocaleLowerCase()
//     if(lowercaseA < lowercaseB) return -1
//     if(lowercaseA > lowercaseB) return 1;

// })
// console.log(employees);
//------------------------------------

// let employees = [
//     {id:1, name: 'Ali'},
//     {id:2, name: 'umar'},
//     {id:3, name: 'jasur'},
//     {id:4, name: 'utkir'},
//     {id:5, name: 'umar'}
// ]
// console.log(employees.findIndex(worker => worker.name == 'jasur'));
//----------------------------------------------

// let employees = [
//     {id:1, name: 'Ali', role: 'developer'},
//     {id:2, name: 'umar', role: 'manager'},
//     {id:3, name: 'jasur', role: 'developer'},
//     {id:4, name: 'utkir', role: 'security'},
//     {id:5, name: 'umar', role: 'developer'}
// ]
// const developers = employees.filter(worker => worker.role === 'developer')
// console.log(developers);
//-------------------------------------------

// let army = {
//     minAge: 18,
//     maxAge: 27,
//     canJoin(user) {
//       return user.age >= this.minAge && user.age < this.maxAge;
//     }
//   };
  
//   let users = [
//     {name: 'john', age: 16},
//     {name: 'ben', age: 20},
//     {name: 'alan', age: 23},
//     {name: 'hamet', age: 30}
//   ];
  
//   let soldiers = users.filter(army.canJoin, army);
  
//   console.log(soldiers.length); // 2
//   console.log(soldiers[0].age); // 20
// console.log(soldiers[1].age); // 23
// console.log(soldiers[0].name);
// console.log(soldiers[1].name);

//-----------------------------

// let variors = [
//     {name: 'john', age: 16},
//     {name: 'ben', age: 18},
//     {name: 'alan', age: 23},
//     {name: 'hamet', age: 30},
//     {name: 'jim', age: 15}
//   ];

// const readyToWar = variors.filter(man => man.age >= 18)
// console.log(readyToWar);
//--------------------------------------- comparison

// function arraysEqual(arr1, arr2){
//     return arr1.length === arr2.length && arr1.every((value, index) => value === arr2[index])
// }
// const checkEquality = arraysEqual([1, 2, 3], [1, 2, 3])
// console.log(checkEquality);

// function camelize(str) {
//     return str
//       .split('-') // splits 'my-long-word' into array ['my', 'long', 'word']
//       .map(
//         // capitalizes first letters of all array items except the first one
//         // converts ['my', 'long', 'word'] into ['my', 'Long', 'Word']
//         (word, index) => index == 0 ? word : word[0].toUpperCase() + word.slice(1)
//       )
//       .join(''); // joins ['my', 'Long', 'Word'] into 'myLongWord'
//   }  
//   console.log(camelize('-get-into-as-many-as-let'));
//----------------------------------------------------------------------

// function filterRangeInPlace(arr, a, b) {

//     for (let i = 0; i < arr.length; i++) {
//       let val = arr[i];
  
//       // remove if outside of the interval
//       if (val < a || val > b) {
//         arr.splice(i, 1);
//         i--;
//       }
//     }
  
//   }
  
//   let arr = [5, 3, 8, 1];
  
//   filterRangeInPlace(arr, 1, 4); // removed the numbers except from 1 to 4
  
//   alert( arr ); // [3, 1]
 
  //-----------------------------------------------

// let arr = [2, 12, 4]
// console.log(Array.from(arr, num => num + num));
//------------------------------------------------------------

// let employees = [
//     {id:1, name: 'Ali', role: 'deVelOpeR'},
//     {id:2, name: 'umar', role: 'maAnaGer'},
//     {id:3, name: 'jasur', role: 'deveLoPer'},
//     {id:4, name: 'utkir', role: 'securITy'},
//     {id:5, name: 'umar', role: 'dEveloPer'}
// ]

// let updatedObj = employees.map((employee) => ({
//   ...employee,
//   role: employee.role.toLocaleUpperCase()
// }))
// console.log(updatedObj);

//----------------------------------------------

// let schoolAdmission = {
//   minAge: 6,
//   maxAge: 17,
//  check(child){
//   return child.age >= this.minAge && child.age <= this.maxAge
//  }
// }

// let children = [
//   {name: "bek", age: 7},
//   {name: "nurbek", age: 4},
//   {name: "alibek", age: 5},
//   {name: "umarbek", age: 17},
//   {name: "jasurbek", age: 9},
//   {name: "anvarbek", age: 10},
//   {name: "umidbek", age: 15},
// ]
// let readyChild = children.filter(schoolAdmission.check, schoolAdmission)
// console.log(readyChild);

//------------------------------------------------------

// Array.prototype.myReverse = function(){
//   let middle = Math.round(this.length / 2)

//   for (let i = 0; i < middle; i++) {
//     let element = this[i]
//     this[i] = this[this.length - 1 - i]
//     this[this.length - 1 - i] = element
//   }
//   return this
// }
// let arr = [1, 2, 3, 4, 5]
// console.log(arr.myReverse());
//--------------------------------

// let arr = [12, 22, 34, 2, 7]
// let ha = []

// let myArr = arr.map((item, index, array) => {
//     console.log(item + index);
    
// })

//---------splice--------------

// let arr = [1, 2, 6, 7, 8]
// arr.splice(2, 0, 3, 4, 5)
// console.log(arr);

let array = [10, 90, 100, 30, 40, 50]
array.splice(1, 2, 20)

console.log(array);