//---------------------------------------  map method

// const characters = ['a', 'b', 's', 'd']
// const upperCase = characters.map(char => char.toLocaleUpperCase())
// console.log(upperCase);

//-----------------------------------------

// const employees = [
//     {id:1, name: "Anvar", email: "AnVaR@gmail.com"},
//     {id:2, name: "Aziz", email: "AzIZ@gmail.com"},
//     {id:3, name: "Ali", email: "AlI@gmail.com"}
// ]
// const newEmails = employees.map(worker => ({
//     ...worker,
//     email: worker.email.toLocaleLowerCase()
// }))
// console.log(newEmails);

//-----------------------------------

// const personnelInfo = [
//     {id: 1, name:"Jasur", surname: "bekov", position: "secretary"},
//     {id: 2, name:"Javlon", surname: "ismatbekov", position: "secury"},
//     {id: 3, name:"Jamol", surname: "azimbekov", position: "accountant"}
// ]
// const changedInfo = personnelInfo.map(worker => ({
//     ...worker,
//     name: worker.name.toLocaleUpperCase(),
//     surname:worker.surname.toLocaleUpperCase(),
//     position:worker.position.toLocaleUpperCase()
// }))
// console.log(changedInfo);

//-----------------------------------------

//    function oneCount(...arrays){
//     let sum = 0

//     arrays.forEach(array => {array.forEach(item => {
//       if (item === 1)
//         sum++
//     })
//   })
//    let holdbet = "more than five"
//    if (sum == 3){
//     holdbet = "three"
//    }else if(sum == 4){
//     holdbet = "four"
//    }else if(sum == 5){
//     holdbet = "five"
//    }else if (sum < 3){
//     holdbet = "less than three"
//    }
//   return  holdbet
// }
// console.log(oneCount([1, 2, 1], [3, 12, 7], [23, 3, 1], [1]));

//--------------------------------
// let sum = []
// const divisionableThree = (arr3) => arr3.forEach(nums => {
//     if(nums % 3 == 0){
//   sum.push(nums)}
// })
// const result = divisionableThree([1, 2, 3, 4, 5, 6, 7, 8, 12])
// console.log(total);

//--------------------------------------------------------------

// function checkSum (array){
//     let total = array.reduce((a, b)=> a + b, 0);
//     let countItems = "other quantity"
//     if(total === 20){
//         countItems = "twenty"
//     }else if(total === 30){
//         countItems = "thrity"
//     }else if(total === 40){
//         countItems = "forty"
//     }else if(total === 50){
//         countItems = "fifty"
//     }else if(total < 20){
//         countItems = "less than twenty "
//     }else if(total > 50){
//         countItems = "more than fifty"
//     }
// return countItems

// }
// const result = checkSum([2, 2, 21, 4])
// console.log(result);

//------------------------------------------------ every method

// function answerCell(...keys){
//     let numb = keys.every(num => num === keys[0])
// return numb
// }
//     console.log(answerCell(true, true, true, true, true));

//-------------------------------------------------------

// function everyCheck(...array) {
//   let nums = array.every((a) => a % 3 == 0 || a % 5 == 0);
//   return nums;
// }
// console.log(everyCheck(33, 45, 42, 50));
// console.log(everyCheck(34, 45, 44, 89));

//-------------------------------------------------------- string method

// function reverseStr(a, b){
//     let words = a.split(" ")
//     let result = {}
//     words.forEach(word => {
//         if(word.startsWith(b)){
//             result[word] = word.split("").reverse().join("")
//         }
//     });
//     return result
// }
// console.log(reverseStr("world is chasing money", "c"));

//----------------------------------

// function sortByIndex(strings){
//     let ferds = strings.split(" ")
//     let emptyObj = {}
//     ferds.forEach(item => {
//       emptyObj[item] = item.length
//     })
//     return emptyObj
// }
// console.log(sortByIndex("my father is working in Russia"));

// function sortByIndex(strings){
//     let ferds = strings.split(" ")
//     let emptyObj = {}
//     ferds.forEach(item => {
//       emptyObj[item] = ferds.indexOf(item)
//     })
//     return emptyObj
// }
// console.log(sortByIndex("my father is working in Russia"));

//---------------------------------------------------------

// function blackjack (num1, num2) {

//     let max = Math.max(num1, num2)
//     max  = String(max)
  
//     arr = max.split("")
  
//     let words = {
//       ONE : 1,
//       TWO : 2,
//       THREE : 3,
//       FOUR : 4,
//       FIVE : 5,
//       SIX: 6,
//       SEVEN : 7,
//       EIGHT : 8,
//       NINE : 9,
//       ZERO : 0
//     }
//     for (let val of arr) {
//     for (let key in words) {
//       if (words[key] == val) {
//         arr.push(key)
//       }
//     }
//   }
  
//    return  {
//       max_number : max,
//       arr : arr,
//       arr_length : arr.length,
//       type : typeof max,
  
//     }
//   }
  
//   console.log(blackjack(19,21));
  
//-------------------------------------------------------

// function getSumm(array) {
//     let sum = array.flat().reduce((a, b) => a + b, 0);
  
//     let wordNum = ["ONE", "TWO", "THREE", "FOUR", "FIVE", "SIX", "SEVEN", "EIGHT", "NINE", "TEN"];
  
//     if (sum <= 10) {
//       return {sum : wordNum[sum-1]}
//     } else {
//       return {sum : sum};
//     }
// }
// console.log(getSumm([
//     [0, 1, 0, 0],
//     [2, 0, 0, 1],
//     [0, 1, 1, 0], 
//     [0, 1, 0, 1]
// ]));
// console.log(getSumm([
//     [0, 1, 0, 5],
//     [2, 0, 0, 1],
//     [2, 1, 1, 0], 
//     [0, 1, 0, 1]
// ]));

//--------------------------------------------

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

//---------------------------------------------

// let str = "A drop of ink may make a million think";

// console.log( str.search( /ink/i ) ); 

// console.log('12-34-56'.replaceAll("-", ":")) 

// console.log( '12-34-56'.replace( /-/g, ":" ) ) 

// let str = "sdfsd 12 dsfsd5sdf"

// console.log(str.match(/\d+/g));

//-------------------------------------

// let arr = ['A', 'B', 'C', 'B', true, false, true]

// function count(arr) {
//   let obj = {}
//   for (const item of arr) {
//     if(obj[item]){
//       obj[item] += 1
//     }else {
//       obj[item] = 1
//     }
//   }
//   return obj
// }

// console.log(count(arr));

//----------------------------------------

// const mutable = ['abs', "abd", "abs", true, true, false, true, "abd"]

// function countElements(mutable){
//     let object = {}
//     for(item of mutable){
//         if(object[item]){
//             object[item] += 1
//         }else {
//             object[item] = 1
//         }
//     }
//     return object
// }
// console.log(countElements(mutable));

//---------------------------------------------- filter method

// const numbers = [1, 2, 3, 5, 4, 6, 7, 8, 9, 11, 12]
// const evenNumbers = numbers.filter(even => even % 2 === 0)
// console.log(evenNumbers);

//-------------------------------------------------

// const employees = [
//     {id: 1, name: 'Ali', role: 'developer'},
//     {id: 1, name: 'Alisher', role: 'developer'},
//     {id: 1, name: 'Aziz', role: 'manager'},
//     {id: 1, name: 'Azamat', role: 'accountant'},
//     {id: 1, name: 'Anvar', role: 'developer'},
// ]
// const developers = employees.filter(worker => worker.role === 'developer')
// console.log(developers);
