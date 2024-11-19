// ////////// concat

// let myConcat = function (arr1, arr2){
//     return arr1.concat(arr2)
// }
// console.log(myConcat([1, 2], [3, 4]));

// ////////// arrow function

// let arrowFunc = (arr3, arr4) => arr3.concat(arr4)
// console.log(arrowFunc([1, 2], [4, 5]));

// let myArrow = (num1) => Math.sqrt(num1)
// console.log(myArrow(49));


// const realNumber = [4, -3, 6, -9.7, 3.25, -8.44, 9, 3.5]
// const squareList = (arr) => {
//     const squaredIntegers = arr.filter(arg => Number.isInteger(arg) && arg > 0).map(x => x*x)
//     return squaredIntegers
// }
// const squaredIntegers = squareList(realNumber)
// console.log(squaredIntegers);


// const NUMBERS = [[2.3, 4], [-8, -5.5], [3, -9, 7]]

// const multiply = (arr) => {
//     const squareNum = arr.flat().filter(num => Number.isInteger(num) && num > 0).reduce((a, b)=> a * b, 1)
//     return squareNum
// }
// const result = multiply (NUMBERS)
// console.log(result);


// const cuttingNum = (arr) => arr.splice(3)
// console.log(cuttingNum([2, 3, 1, 6, 7]));


/////////////// high order function

// const increment = (function() {
//     return function increment(number, value = 5){
//         return number + value
//     }
// })()
// console.log(increment(10, 9));
// console.log(increment(4));

//////////// rest

// const sum = (function() {
//     return function sum (...numbers){
//         return numbers.reduce((a, b) => a + b, 0)
//     }
// })()
// console.log(sum(1, 4, 3, 7, 9));


////////////// spread

// const arr1 = ['january', 'february', 'march', 'april', 'may']

// let arr2;

// (function () {
//     arr2 = [...arr1]
//     arr1[0] = 'potato'
// })()
// console.log(arr2);


/////////////// destructuring

// let voxel = {x: 3.5, y: 7.6, z: 8.9}
// const {x: a, y: b, z: c} = voxel

// const AVG_TEMPERATURES = {
//     today: 77.5,
//     tomorrow: 79.9
// }
// function getTempOfTomorrow (avgTemperatures){
//     const {tomorrow : tempOfTomorrow} = avgTemperatures
//     return tempOfTomorrow
// }
// console.log(getTempOfTomorrow(AVG_TEMPERATURES));



///-----------------------------------

// const increase = (function() {
//     return function increase(...digits){
//         return digits.reduce((s, c)=> s * c, 1)
//     }
// })()
// console.log(increase(11, 1, 2, 3, 2));


////////////////// ternary

// const numIntegerIf = (number) =>{
//  return number > 0 && Number.isInteger(number) ? "it is positive" : number < 0 || number === 0 ? "it is negative": "it is not number"
// }
// console.log(numIntegerIf("it"));




// function buildHouses(num){
//     return num > 0 ? 6 * num - (num -1) : 0
//     }
//     console.log(buildHouses(4));

////////////////// exercises

    // function commonElements(arr, arr1){
    //     let newArr = []
    //     for (let i = 0; i < arr.length; i++) {
    //         if(arr1.includes(arr[i])){
    //           newArr.push(arr[i])
    //         }
            
    //     }
    //    return new Set(newArr)
       
    // }
    // const result = commonElements([1, 5, 3], [1, 3, 5,5, 4, 3])
    // console.log(result);

    // function removeLeading(num){
    //     return parseFloat(num)
    // }
    // console.log((removeLeading("00400.00")));


    //////////////// 

    // const LOCAL_FORECAST = {
    //     today: {min: 72, max: 87},
    //     tomorrow: {min: 67, max: 78}
    // }
    
    // function getMaxOfTomorrow(forecast){
    //     const {tomorrow : {max: maxOfTmrw}} = forecast
    //     return maxOfTmrw
    // }
    // console.log(getMaxOfTomorrow(LOCAL_FORECAST));


    
    