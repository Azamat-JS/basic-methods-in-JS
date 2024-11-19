//////// nested for

// function multiplyAll(arr){
// let product = 1
// for (let i = 0; i < arr.length; i++) {
//   for (let j = 0; j < arr[i].length; j++) {
//     product *= arr[i][j]
    
//   }
    
// }
// return product
// }
// const result = multiplyAll([[1, 2], [3, 2], [1, 3]])
// console.log(result);


// let contacts = [
//     {
//         firstName: "Aziz",
//         LastName: "Omonov",
//         number: 998909977887,
//         Likes: ["ball", "jam", "cola"]
//     },
//     {
//         firstName: "Akajon",
//         LastName: "Ortiqov",
//         number: 998909977887,
//         Likes: ["balloon", "jug", "fanta"]
//     },
//     {
//         firstName: "Anvar",
//         LastName: "Ochilov",
//         number: 998909977887,
//         Likes: ["bell", "camel", "eucola"]
//     },
//     {
//         firstName: "Adham",
//         LastName: "Oripov",
//         number: 998909977887,
//         Likes: ["baller", "jaming", "olcola"]
//     }
// ]
// function lookupFile(name, prop){
// for (let i = 0; i < contacts.length; i++) {
//     if(contacts[i].firstName === name){
//     return contacts[i][prop] || "no such property"

//     }
    
// }
// return "no such contact"
// }
// const result = lookupFile("Adham","Kerak")
// console.log(result);

//////////////// random

// let randomNumber0and19 = Math.floor(Math.random() * 20)
// function randomNum(){
//     return Math.floor(Math.random() * 10)
// }
// console.log(randomNum());

// function randomRange(minNum, maxNum){
//     return Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum
// }
// const myrandom = randomRange(5, 15)
// console.log(myrandom);


// function convertToInteger(str){
//         return parseInt(str, 2)
//     }
//   const result = convertToInteger("10011")
//   console.log(result);
  
// function checkSign(num){
//     return num > 0 ? "positive" : num < 0 ? "negative" : "zero"
// }
// console.log(checkSign(0));

/////////// const

// const S = [2, 3, 1]
// function editInPlace(){
//     S[0] = 3
//     S[1] = 4
//     S[2] = 7
// }
// editInPlace()
// console.log(S);


// let magic = () => new Date()

