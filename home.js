//------------- 1 - vazifa -------------------

//--------------- 2- vazifa ----------------

// function rotateArray(arr, n){
//     let sliced = arr.splice(0, n)
//     arr.splice(arr.length, 0, sliced)
//     return arr.flat()
// }
// console.log(rotateArray([1, 2, 3, 4, 5], 2));
// console.log(rotateArray([1, 2, 3, 4, 5], 3));

// -------------------3 - vazifa -------------------

// function findTwoSum (nums, n){
//    let filtered = nums.filter(numb => numb <= n) 
// let arr = []
// let indArr = []
// let sum = 0
// for (let i = 0; i < filtered.length; i++) {
//       sum += filtered[i]
//       arr.push(filtered[i])
//       if ( sum > n){
//         arr.pop(filtered[i])
//       }
// }
// for (let j = 0; j < arr.length; j++) {
//     indArr.push(nums.indexOf(arr[j]))
    
// }

//     return indArr
// }
// console.log(findTwoSum([8, 12, 10, 1, 9], 9));
// console.log(findTwoSum([90, 3, 8, 2], 5));

//------------------ 4 - vazifa ------------------

// function findSum(digits, n){
//     let sum = 0
//     for (const element of digits) {
//         sum += element
//     }
//   return sum === n
// }
// console.log(findSum([2, 4, 1], 7));
// console.log(findSum([2, 4, 2], 7));

//----------------- 5 - vazifa -------------------------

// function findDifference(arr1, arr2){
//    let bigArr = arr1.concat(arr2)
//   let result = bigArr.filter((item, index, self) => self.indexOf(item) === self.lastIndexOf(item))
// return result
//         }
// console.log(findDifference([2, 4, 1], [2, 3, 8]));
// console.log(findDifference([5, 1, 8, 90], [2, 5, 8, 10]));

//---------------------- 6 - vazifa ------------------


// function removeIfMoreThanThree(arrayNums) {
//   let obj = {};
//   let emptyArr = [];
//   let newArr = [];
//   for (const item of arrayNums) {
//     if (obj[item]) {
//       obj[item] += 1;
//     } else {
//       obj[item] = 1;
//     }
//   }
//   for (const key in obj) {
//      emptyArr.push(obj[key])
     
//   }
//  let max = Math.max(...emptyArr)
//   return Object.keys(obj).find(key => obj[key] === max)
//     }
// console.log(removeIfMoreThanThree([1, 2, 1, 1, 4, 2, 3]));
// console.log(removeIfMoreThanThree([5, 3, 0, 3, 3, 11, 11, 1]));

//------------------------- 7 - vazifa --------------------------

// function incrementDigits(str){
//    let array = str.split("")
//    for (let i = 0; i < array.length; i++) {
//     if(Number(array[i])){
//       array[i] = array[i] - 1 + 2
//     }
//    }
//    return array.join("")
// }
// console.log(incrementDigits("abc123"));
// console.log(incrementDigits("6 a 5 b 4"));

//--------------- 8-vazifA -------------------------

// function myFunc(arr) { 
//         let big = 0   
//         let a = 0
//         for (let i = 0; i < arr.length; i++) {
//             if (arr[i] < arr[i + 1]) {
//                 a += 1
//             }else if(big < a){
//                 big = a
//                 a = 0
//             }
//         }
//         return big + 1
//     }
//     console.log(myFunc([12,22, 30, 5,6,7,8,9, 3]));

//------------------ 9 - vazifa -----------------------


// function swapElements(numbers) {
//   let obj = {}
//   for (const item of numbers) {
//     if(obj[item]){
//       obj[item] += 1
//     }else {
//       obj[item] = 1
//     }
//   }
//   return obj
// }

// console.log(swapElements([1, 1, 2, 3, 4, 4, 5, 4]));
// console.log(swapElements([0, 0, 0, 2, 2, 1, 2]));

//---------------------- 10 - vazifa ------------------------

// function matrixSum(arrays){
//  let sumArrays =  arrays.flat().reduce((a, b) => a + b)
//     return sumArrays
// }
// console.log(matrixSum([[1, 2, 3], [4, 5, 6], [7, 8, 9]]));
// console.log(matrixSum([[1, 0, 1], [0, 1, 2], [3, 0, 2]]));

//----------------------

// let obj = {
//     name: "ali",
//     surname: "azizov",
//     age: 34,
//     11: "id",
//     15: "error"
// }
// console.log(obj[15]);

// let newMap = new Map()
// newMap.set(1, "alisher")
// console.log(newMap);
