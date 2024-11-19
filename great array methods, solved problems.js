// class Product {
//     constructor(name, price, category){
//         this.name = name
//         this.price = price
//         this.category = category
//     }
// }

// class Products{
//     constructor(categoryList){
//         this.categoryList = categoryList
//     }
//     filterBYCategory(categoryname){
//         let list = []
//         this.categoryList.map(element =>{
//             if(element.category == categoryname){
//                 list.push(element)
//             }
//         })
//         return list
//     }
//     filterByMinPrice(minPrice){
//         let list = []
//         this.categoryList.map(element =>{
//             if(element.price >= minPrice){
//                 list.push(element)
//             }
//         })
//         return list
//     }
//     filterByMaxPrice(maxPrice){
//         let list = []
//         this.categoryList.map(element =>{
//             if(element.price >= maxPrice){
//                 list.push(element)
//             }
//         })
//         return list
//     }
// }
// const products = new Products([
//    new Product('MacBook Pro', 1500, "Laptop"),
//    new Product('MacBook Air', 1300, "Laptop"),
//    new Product('MacBook Premium', 1600, "Laptop"),
//    new Product('MacBook XXN', 1900, "Laptop")
// ])

//     console.log(products.filterBYCategory('ptop'))
//     console.log(products.filterByMinPrice(1300))
//     console.log(products.filterByMaxPrice(1900))

//---------------------------------------------------
// function removeDuplicates(nums) {
//     if (nums.length === 0) return [];

//     let uniqueIndex = 0;

//     for (let i = 1; i < nums.length; i++) {
//         if (nums[i] !== nums[uniqueIndex]) {
//             uniqueIndex++;
//             nums[uniqueIndex] = nums[i];
//         }
//     }
//     for (let i = uniqueIndex + 1; i < nums.length; i++) {
//         nums[i] = '_';
//     }

//     return nums;
// }
// let nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4, 4, 4];
// const result = removeDuplicates(nums);
// console.log(result)

//-----------------------

// function sum(a, b){
//     return a + b
// }

// console.log(`33 + 5 = ${sum(33, 5)}`);

//----------------------

// let guestLList = `Guests:
// * John
// * Ben
// * Lisa`
// console.log(guestLList);

//-------------------------

// function unique(arr){
//  return new Set(arr)
// }
// const result = unique(["hare", "jorj", "hare", "jorj", ":-O", "hare"])
// console.log(result);

//----------------------------------------
// function unique(arr){
//   return Array.from(new Set(arr))
// }
// let values = ["hare", "jorj", "hare", "jorj", ":-O", "hare"]
// console.log(unique(values));

//----------------------------------

// function aclean(array1){
// let map = new Map()
// for(let word of array1){
//   let sorted = word.toLowerCase().split('').join('')
//   map.set(sorted, word)
// }
// return Array.from(map.values())
// }
// let array1 = ['nap', 'teachers', 'cheaters', 'PAN', 'hectares', 'era', 'ear']
// console.log(aclean(array1));
//--------------------------------------------------
// function aclean(arr) {
//   let obj = {};

//   for (let i = 0; i < arr.length; i++) {
//     let sorted = arr[i].toLowerCase().split("").sort().join("");
//     obj[sorted] = arr[i];
//   }

//   return Object.values(obj);
// }

// let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

// console.log(aclean(arr));

//-------------------------------

// let str = "As sly as a fox, as strong as an ox";
// let target = "as";

// let pos = -1;
// while ((pos = str.indexOf(target, pos + 1)) != -1) {
//   console.log( pos )}
//------------------------------------------------------

// let str = 'As sly as a fox, as strong as an ox'
// let target = "as"
// let pos = 0
// while(true){
//     let foundPos = str.indexOf(target, pos)
//     if(foundPos == -1)break
//     console.log(foundPos);
//     pos = foundPos + 1}
//////////////

// function findWords(word, a, b){
//     let regEX = new RegExp(a, "g")
//  let result = word.replace(regEX, b)
//  return result

// }
// console.log(findWords(amr, 'you', 'she'));
//-----------------------------
// let obj = {
//     info: "you and you but you",
//     ge: 34
// }
// console.log(findWords(obj.info, 'you', 'she'));

//----------------------------

//  let john = {name: "John"}
// let ben = {name: "Ben"}
// let visitsCountMap = new Map()
// visitsCountMap.set(john, 123)
// console.log(visitsCountMap.get(john));
//---------------------------------
// let employees = [
//     {id:1, name: 'Ali', role: 'developer'},
//     {id:2, name: 'umar', role: 'manager'},
//     {id:3, name: 'jasur', role: 'developer'},
//     {id:4, name: 'utkir', role: 'security'},
//     {id:5, name: 'umar', role: 'developer'},
//     {id:6, name: 'umid', role: 'manager'}
// ]

// function findDev(obj){
//  const developers = obj.filter(worker => worker.role == 'developer')
//  return developers
// }
// function findMan(obj){
//     const managers = obj.filter(worker => worker.role == 'manager')
//     return managers
//    }
// function findById (obj, num){
//     const id = obj.find(worker => worker.id = num)
//     return id
// }
//    console.log(findMan(employees));
//    console.log(findDev(employees));
//    console.log(findById(employees, 5));
   //----------------------------------------------

//      const object1 = {
//     name: "john", 
//     age: 30, 
//     role: "manager",
//     money: 400

//   }
//   let sumObj = 0
//   for(const key of Object.values(object1)){
//     if(Number(key)) {
//      sumObj += key}
// }
   
//    console.log(sumObj);

//---------------------------------------
// let variors = [
//     {name: 'john', age: 16},
//     {name: 'ben', age: 18},
//     {name: 'alan', age: 23},
//     {name: 'hamet', age: 30},
//     {name: 'jim', age: 15}
//   ];

// const readyToWar = variors.filter(man => man.age >= 18)
// console.log(readyToWar);
   
//------------------------------------------------
// let schoolAdmission = {
//     minAge: 6,
//     maxAge: 17,
//    check(child){
//     return child.age >= this.minAge && child.age <= this.maxAge
//    }
// }

// let children = [
//     {name: "bek", age: 7},
//     {name: "nurbek", age: 4},
//     {name: "alibek", age: 5},
//     {name: "umarbek", age: 17},
//     {name: "jasurbek", age: 9},
//     {name: "anvarbek", age: 10},
//     {name: "umidbek", age: 15},
// ]
// let readyChild = children.filter(schoolAdmission.check, schoolAdmission)
// console.log(readyChild);


// let employees = [
//    {id:1, name: 'Ali', role: 'deVelOpeR'},
//    {id:2, name: 'umar', role: 'maAnaGer'},
//    {id:3, name: 'jasur', role: 'deveLoPer'},
//    {id:4, name: 'utkir', role: 'securITy'},
//    {id:5, name: 'umar', role: 'dEveloPer'}
// ]

// let updatedObj = employees.map((employee) => ({
//  ...employee,
//  role: employee.role.toLowerCase()
// }))
// console.log(updatedObj);

// const restaurant = {
// 	name: 'Rayhon Milliy Taomlar',
// 	location: 'Tashkent',
// 	categories: ['national', 'fast food', 'european cuisine', 'turkish'],
// 	startMenu: ['somsa', 'lagman', 'salad', 'soup'],
// 	mainMenu: ['osh', 'norin', 'manti'],

//    order: function(startMenuIndex, mainMenuIndex)
// 	}


// function arraysEqual(arr1, arr2){
//     return arr1.length === arr2.length && arr1.every((value, index) => value === arr2[index])
// }
// const checkEquality = arraysEqual([1, 2, 3], [1, 2, 3])
// console.log(checkEquality);
// //--------------------------------------------

// let obj = {
//    Greeting(){
//       console.log(`${this.name} salom`);
//    }
// }
// class Myclass {
//    constructor(name){
//       this.name = name
//    }
// }
// Object.assign(Myclass.prototype, obj)

// let result = new Myclass("Kamol")
// result.Greeting()

