//------------------------ string problems

// function strUpperFirst(str){
//     let strToArray = str.split(" ")
//     let newStr = ""
//     for (let i = 0; i < strToArray.length; i++) {
//         let chosen = strToArray[i][0]
//         let toUpper = chosen.toUpperCase()
//         let cutting = strToArray[i].slice(1)
//         newStr += toUpper + cutting + " "

//     }
//     return newStr
// }
// console.log(strUpperFirst("parents should be kind"));

//---------------------------------------------

// function countLetters(str){
//     let strToArr = str.split(" ")
//     for (let i = 0; i < strToArr.length; i++) {
//         console.log(strToArr[i].length);
//     }
// }
// countLetters("my name is Azamat")

//-------------------------------------------

// function oneTwo(srr){
//     let newSrr = ""
//     let first = srr.trim().slice(0, 1)
//     let changedSrr = srr.trim().slice(1)
//     newSrr += changedSrr += first
//     return newSrr
// }
// console.log(oneTwo("            tJavaScrip      "));

//--------------------------------------------

// function sortFunc(arr1, arr2){
//     let newArr = [...arr1, ...arr2]
//     let largest = Math.max(...newArr)
//     return largest

// }
// console.log(sortFunc([12, 23, 73, 44], [33, 55, 12, 32]));

//----------------------------------------------- sort method

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
//     returnm0
// })
// console.log(employees);

//--------------------------------------------------

// let employees = [
//     {id: 1, name: 'vali', position: 'developer'},
//     {id: 2, name: 'sherzod', position: 'manager'},
//     {id: 3, name: 'Laziz', position: 'developer'},
//     {id: 4, name: 'Jafar', position: 'designer'}
// ]
// employees.sort((a, b) => {
//     const lowercaseC = a.position.toLocaleLowerCase()
//     const lowercaseD = b.position.toLocaleLowerCase()
//     if(lowercaseC < lowercaseD) return -1
//     if(lowercaseC > lowercaseD) return 1
// })
// console.log(employees);

//--------------------------------------------- some method

// const numbers = [1, 2, 3, 4, 5]
// const hasEvenNumber = numbers.some(number => number % 2 ===0)
// console.log(`hasOneEven : ${hasEvenNumber}`);

//-------------------------- some

// const numbers = [1, 2, 3, 4, 5]
// const hasEvenNumber = numbers.some(number => console.log(number % 2 ===0))

//--------------------------------------------------  map method

// const characters = ['john', 'ben', 'joe', 'george']
// const changeToUpper = characters.map(names => names.toLocaleUpperCase())
// console.log(changeToUpper);

//-------------------------------------------------------

// const objInfo = [
//     {id: 1, name: 'valI', position: 'deVelOpEr'},
//     {id: 2, name: 'sheRzod', position: 'maNaGer'},
//     {id: 3, name: 'Laziz', position: 'DeveLopEr'},
//     {id: 4, name: 'Jafar', position: 'desiGner'}
// ]

// const newObj = objInfo.map(employee => ({
//     ...employee,
//     name: employee.name.toLocaleUpperCase(),
//     position: employee.position.toLocaleLowerCase()
// }))
// console.log(newObj);

//------------------------------------------- work with arguments

// function multiply(num1, num2){
// let total = 1
// for (const nums of arguments)   
// total *= nums
// return total
// }
// console.log(multiply(2, 3, 4, 5));

//----------------------------------------------rest with map

// function multiply(increment, ...digits){
//   return digits.map(num => increment * num)

// }
// console.log(multiply(3, 4, 5, 6, 7));

//----------------------------------------------

// function totalSum(addition, ...nums){
//    return nums.map(dig => addition + dig)
// }
// console.log(totalSum(3, 1, 4, 7, 9));

//-------------------------------------------- default

// function infoStudent(major = 'IT', grade = 1){
//      console.log(`students' major: ${major}, grade: ${grade}`);
     
// }
// infoStudent('engineer', 2)
// infoStudent()
// infoStudent('doctor')

//-------------------------------------------- get details from object and set them into string

// let obj = {
//      name: "Python",
//      createdTime: 1991,
//      author: "Guido van Rossume",
//     get details (){
//           return `${this.name} is created in ${this.createdTime} by ${this.author}`
//      },
//      set details(value) {
//       let parts = value.split(' is ')
//       this.name = parts[0]
//       this.createdTime[4]
//       this.author[5]
//      }
// }
// obj.details = 'Python is the easiest programming language'
// console.log(obj.details);

//-----------------------------------------------

// let obj = {
//      name: "Python",
//      createdTime: 1991,
//      author: "Guido van Rossume",
//     get details (){
//           return `${this.name} is created in ${this.createdTime} by ${this.author}`
//      },
//      set details(value) {
//           if(typeof value !== 'string'){
//                throw new Error(`value, ${value} is not a string`)
//           }
//       let parts = value.split(' is ')
//       this.name = parts[0]
//       this.createdTime[4]
//       this.author[5]
//      }
// }

// try {
//      obj.details = 42
// } catch (error) {
//      console.log(`caught an Error: ${error.message}`);
     
// }