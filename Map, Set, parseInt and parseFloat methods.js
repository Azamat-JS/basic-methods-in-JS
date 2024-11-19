//////////////////////// Map

// let map = new Map()
// console.log(map.set('1', 'str1'));
// console.log(map.set(1, 'num1'));
// console.log(map.set(true, 'bool1'));
// console.log(map.get(1));
// console.log(map.get('1'));
// console.log(map.size);
//------------------------------

// let john = {name: "John"}
// let ben = {name: "Ben"}
// let visitsCountMap = new Map()
// visitsCountMap.set(john, 123)
// console.log(visitsCountMap.get(john));
//-------------------------------------------

// let recipeMap = new Map([
//   ['cucumber', 230], 
//   ['potatoes', 400],
//   ['tomato', 340], 
//   ['onion', 60]
// ])
// for(let vegetable of recipeMap.keys()){
//   console.log(vegetable);
// }
//-------------------------------------------
// for(let amount of recipeMap.values()){
//   console.log(amount)}
  //-----------------------------------------------
  // for (const entry of recipeMap.entries()) {
  //   console.log(entry); }
  //-----------------------------------------------
  // recipeMap.forEach((value, key, map) => {
  //   console.log(`${key}:${value}`);
  // })

  //---------------------------------------------

  // const object1 = {
  //   name: "john", 
  //   age: 30, 
  //   role: "manager"
  // }
  // for(const [key, value] of Object.entries(object1)){
  //   console.log(`${key}, ${value}`);
  // }
  //--------------------------------------------
  // let prices = Object.fromEntries([
  //   ['cucumber', 230], 
  //   ['potatoes', 400],
  //   ['tomato', 340], 
  //   ['onion', 60]
  // ])
  // console.log(prices.onion);
//------------------------------------------------

// let map = new Map()
// map.set('banana', 100)
// map.set('orange', 300)
// map.set('cherry', 140)
// let obj = Object.fromEntries(map)
// console.log(obj.cherry);
//-------------------------------------------------
// let obj = {
//   name: "john",
//   age: 30
// }
// let map = new Map(Object.entries(obj))
// console.log(map.get('name'));

////////////////// /////////////////// Set


// let arr = [12,23, 11, 43, 11, 23]

// let unique = new Set(arr)

// console.log([...unique]);

// unique.add("asd")
// unique.add("12")
// unique.add(90)
// console.log([...unique]);

// console.log(unique.has(1));
// console.log(unique.entries());
// unique.delete(11)
// console.log(unique.keys());
// console.log(unique.values());

//-------------------------------------

// let set = new Set()
// let john = {name: "John", id: 2}
// let pete = {name: 'Peter', id: 3}
// let mary = {name: 'Mary', id: 5}

// set.add(john)
// set.add(john)
// set.add(mary)
// set.add(pete)
// set.add(pete)
// // console.log(set.size);

// for(let user of set){
//   console.log(user.name);}

//---------------------------------------
// let sett = new Set(["oranges", "apples", "pears"])
// for(let value of sett) console.log(value);
//---------------------------------------------
// sett.forEach((value, valueAgain,sett) =>{
//   console.log(value)})
//-------------------------------------------
// let fruits = new Set(["oranges", "apples", "pears", "mango"])
// console.log(fruits.keys())
// console.log(fruits.values())
// console.log(fruits.entries())

//----------------------------------------------- parseInt -- parseFloat

// let number = parseInt("123as")
// console.log(number);

// function convertToInteger(str){
//     return parseInt(str, 2)
// }
// convertToInteger("10011")


// let number2 = parseInt(-123)
// console.log(number2);
// let number3 = parseFloat("0003.140000")
// console.log(number3);


// let obj = {
//     name: {
//         a:"Salim"},
//     surname: "karimov", 
//     age:34
// }

// delete obj.name

// console.log(obj.name?.a);


// function removeTra(str){
//     return parseFloat(str)
// }
// const result = removeTra("2300.000")
// console.log(result);


// localStorage.setItem('nima', 'gap')
// localStorage.setItem('urg', '345')
// localStorage.removeItem('urg')
// console.log(localStorage.getItem("nima"));

// sessionStorage.setItem('kamol', 'urganch')