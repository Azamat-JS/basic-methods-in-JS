// function findNemo(str){
//     let newStr = str.split(" ")
//     let arg = newStr.indexOf("Nemo")
//     return (`i found Nemo at ${arg + 1}`)
// }
// console.log(findNemo("i am finding Nemo"));

//--------------------------------------------

// function replaceWrod(word, a, b){
//         let newWord = new RegExp (a, "g")
//         let result = word.replace(newWord, b)
//         return result
//     }
//     console.log(replaceWrod("salom dunyo", "o", "a"));

//---------------------------------------------------

//     function encrypt(str){
//     let nStr = str.split("").join("")
//      let newStr = nStr.replace(/a/g, "o")
// return newStr
// }

// const result = encrypt("apple")
// console.log(result);

//--------------------------------------

// const getNums = (str) => str.match(/\d+/g);
// console.log(getNums("I am 4 years old, i have 2 sisters, i was born in 1996"));

//------------------------------------

// function exercise3(str){
//     const res = ['0', 'i',,,'a', 's']
//     let result = ''
//     for (let i = 0; i < str.length; i++) {
//       result += res.includes(str[i]) ? res.indexOf(str[i]) : str[i]

//     }
//     return result
// }

// console.log(exercise3("javascript is cool"));

//---------------------------------------------------------------- arrow function

// const myFunc = num => num >= 0 ? "positive number" : "negative number"
// console.log(myFunc(-9));

//---------------------------------------------------

// let mySort = (...arrays) => arrays.flat().reduce((a, b) => a + b, 0)

// console.log(mySort([15, 23, 33, 44], [5, 6, 7, 8], [11, 12, 13, 14]));

//--------------------------------------------------------------------

// let mySort = (...arrays) => arrays.flat().sort((a, b) => a - b).map(x => x+x)

// console.log(mySort([15, 23, 33, 44], [5, 6, 7, 8], [11, 12, 13, 14]));

//--------------------------------------------------------------------

// let mySort = (...arrays) => arrays.flat().filter(num => Number.isInteger(num) && num > 0).reduce((a, b) => a + b, 0)

// console.log(mySort([-15, 23, 33, -44], [5.98, 6, 7.7, 8], [11.12, 12, -13, 14]));

//----------------------------------------------------------------

// function missing(arr1, arr2) {
//     // Create a Set from arr2 for faster lookups
//     const set = new Set(arr2);

//     // Find the missing number from arr1
//     for (let num of arr1) {
//         if (!set.has(num)) {
//             return num;  // Return the first missing number
//         }
//     }

//     return null;  // Return null if no number is missing
// }

// // Test cases
// console.log(missing([1, 2, 3, 4], [1, 3, 4]));  // Output: 2
// console.log(missing([22, 33, 44, 55], [22, 44, 55]));  // Output: 33

//----------------------------------------------

// function missing(arr1, arr2) {
//     const countMap = {};
//     for (let element of arr2) {
//         countMap[element] = (countMap[element] || 0) + 1;
//     }
//     for (let element of arr1) {
//         if (!countMap[element] || countMap[element] <= 0) {
//             return element;
//         }
//         countMap[element]--;
//     }
//     return null
// }
// console.log(missing([1, 2, 3, 4], [1, 3, 4]))
// console.log(missing([22, 33, 44, 55], [22, 44, 55]))
// console.log(missing(["dog", "cat", "pig", "elephant"], ["dog", "cat", "pig"]))
// console.log(missing([true, false, true, false, false], [true, false, true, false]))

//-------------------------------------------------- destructuring
// const LOCAL_FORECAST = {
//     today: { min: 72, max: 83},
//     tomorrow: {min: 73.3, max: 84.7}
// }

// function getMaxOfTmrw(forecast){
//     const {tomorrow: {max : maxOfTomorrow}} = forecast
//     return maxOfTomorrow
// }
// console.log(getMaxOfTmrw(LOCAL_FORECAST));

//-----------------------------------------------------

// const LOCAL_PERSON = {
//     man: { name: "aziz", age: 34},
//     woman: {name: "nigora", age:23}
// }

// function findAge (howAge){
//     const {woman : {age : searchAge}} = howAge
//     return searchAge
// }
// console.log(findAge(LOCAL_PERSON));

//-------------------------------------------------

// const [z, x, ,, y] = [2, 3, 4, 8 ,5, 6, 3]
// console.log(z, x, y);

// let a = 8, b = 6;
// (() => {
// [a, b] = [b , a]
// })()

// console.log(a);
// console.log(b);

//----------------------------------------------------rest
// const source = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// function removeFirstTwo(list){
//     const [, , ...arr] = list
//     return arr
// }
// const arr = removeFirstTwo(source)
// console.log(arr);
// console.log(source);

//---------------------------------------------function in object
// const stats = {
//     max: 55.4,
//     standard_dev: 4.54,
//     median: 34.55,
//     mode: 23.43,
//     min: -0.54,
//     average: 35.88
// }
// const half = (function (){
//     return function half({ max, min }){
//         return (max + min) / 2.0
//     }
// })()
// console.log(stats);
// console.log(half(stats));
//----------------------------------------------function in object

// const result = {
//     success:["max-length", "no-amd", "prefer-arrow-functions"],
//     failure:["no-var", "var-on-top", "linebreak"],
//     skipped:["id-blacklist", "no-dub-keys"]

// function makeList(arr){
//     const resultDisplay = []
//     for (let i = 0; i < arr.length; i++) {
//         resultDisplay.push(`<li class="text-warning">${arr[i]}</li>`)

//     }
//     return resultDisplay
// }
// const resultDisplay = makeList(result.failure)
// console.log(resultDisplay);

//--------------------------------

// function dataList(arr){
//     const emptyArray = []
//     for (let i = 0; i < arr.length; i++) {
//         emptyArray.push(`<li class="text-mith">${arr[i]}</li>`)

//     }
//     return emptyArray
// }
// const emptyArray = dataList(result.success)
// console.log(emptyArray);

//------------------------------------------function in object

// const AVG_TEMPERATURES = {
//     today: 32.3,
//     tomorrow: 30.8
// }

// function getMaxOfTmrw(avgTemperatures){
//     const {tomorrow : tommorowAvg} = avgTemperatures;
//     return tommorowAvg;
// }
// console.log(getMaxOfTmrw(AVG_TEMPERATURES));

//-----------------------------------------------

// const createPerson = (name, age, gender) => ({name, age, gender})
// console.log(createPerson("Abbosov Zohid", 45, "male"));

//---------------------------------------------  function in object

// const bicycle = {
//     gear: 2,
//     wheels: 4,
//     seat: "red",
//     setGear : function(newGear){
//         this.wheels = newGear
//     }
// }
// bicycle.setGear(3)
// console.log(bicycle.wheels);

//--------------------------------------------------- Constructor function with object

// let spaceShuttle = function(targetPlanet){
//     this.targetPlanet = targetPlanet
// }
// let zeus = new spaceShuttle('Jupiter')
// console.log(zeus.targetPlanet);

//--------- ------------------------------ similar to above

// class spaceShuttle{
//     constructor(targetPlanet){
//         this.targetPlanet = targetPlanet
//     }
// }
// let zeus = new spaceShuttle('mercury')
// console.log(zeus.targetPlanet);

//----------------------------------

// function makeClass(){
//     class Vegetable{
//         constructor(name){
//             this.name = name
//         }
//     }
//     return Vegetable
// }
// const Vegetable = makeClass()
// const carrot = new Vegetable('carrot')
// console.log(carrot.name);

//-------------------------------------------

// class Book {
// constructor(author){
//     this._author = author;
// }
//  //getter
// get writer(){
//  return this._author
// }
//  //setter
//  set writer(updatedAuthor){
//     this._author = updatedAuthor;
//  }

// }
// function makeClass(){
//     class Thermostat{
//         constructor(temp){
//             this._temp = 5/9 * (temp - 32)
//         }
//         get temperature(){
//             return this._temp
//         }
//         set temperature(updatedTemp){
//           this._temp = updatedTemp
//         }
//     }
//     return Thermostat
// }
// const Thermostat = makeClass()
// const thermos = new Thermostat(76)
// let temp = thermos.temperature
// thermos.temperature = 26
// temp = thermos.temperature
// console.log(temp);

//------------------------------ callback funtion ---------------------

// function sum(calling, x, y){
//      let result = x + y
//      calling(result)
// }
// function displayRes(result){
//     console.log(result);
    
// }
// sum(displayRes, 4, 6)




// let timerId = setInterval(() => console.log('tick'), 1000)