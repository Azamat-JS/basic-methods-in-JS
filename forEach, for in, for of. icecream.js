// console.log(Math.max(12, 13, 14,34,1,2, 4));
// console.log(Math.round(4.5));
// console.log(Math.floor(1.9));
// let a = 1.2
// console.log(Math.ceil(a));
// let b = "0090"

// console.log(Math.abs(b));

//// pow

// console.log(Math.pow(2, 3));

// let a = "salom"
// console.log(a.split("").reverse().join(""));

// function myFunc(str){
//     let vowelLetters = ['i','o','a','e','u']
//     let letters = []
//     let indexes = []
//     for (let i = 0; i < str.length; i++) {
//         if(vowelLetters.includes(str[i].toLowerCase())){
//             letters.push(str[i])
//             indexes.push(i)
//         }
//     }
//     letters.reverse()
//     str = str.split('')
//     for (let i = 0; i < indexes.length; i++) {
//         str[indexes[i]] = letters[i]
//     }
//     return str.join("")
// }
// console.log(myFunc("IceCreAm"))
// console.log(myFunc("Najot Talim"))
// console.log(myFunc("Java Script"))

// let stri = "forgetName"
// let vowels = ['i','o','a','e','u']
// let ind = []
// let letters = []
// for (let i = 0; i < stri.length; i++) {
//     if(vowels.includes(stri[i].toLocaleLowerCase())){
//       letters.push(stri[i])
//       ind.push([i])
//     }    
// }
// letters.reverse()
// stri = stri.split('')
// for (let i = 0; i < ind.length; i++) {
//     stri[ind[i]] = letters[i]
//     stri.join("")
// }
// console.log(stri.join(""));

// let arr = [12, 44, 55, 11, 99]

// ///////// slice

// console.log(arr.slice(0 ,2));

// ////////// splice

// console.log(arr.splice(1));

// console.log(arr);

// ///////////////// reverse

// console.log(arr.reverse());

// ///////////////// concat

// let arr = [12, 44, 55, 11, 44];

// let arr2 = [122, 550, 112, 442]

// console.log(arr.concat(arr2));

// console.log(arr2);

// //////////////// join

// console.log(arr.join(""));

// ////////////////// indexOf

// console.log(arr.indexOf(44));


// //////////////////////// spread

// let arr = [3, 55, 3, 6]
// let newArr = [33, 66, ...arr]

// console.log(newArr);

// /////////// rest
// function restedNum(...c){
    
// }
// console.log(restedNum(12, 32, 45, 55, 1234, 523, 56));

// function nestedArr(arr){
//     return arr.flat()
// }
// console.log(nestedArr([[12,1, 3, 3], [2, 3, 1, 14, 4], {12: 4}, [1]]));

// ///////////////// for of


// function getSum(arr){
//     let sum = 0
//   let newArr =  arr.flat()
//     for (const element of newArr) {
//         sum += element
//     }
    
// return sum
// }

// console.log(getSum([
//     [1, 0, 1, 0],
//     [2, 1, 0, 1],
//     [1, 0, 1, 2],
//     [1, 2, 1, 2]
// ]));
// console.log(getSum([
//     [1, 3, 1, 0],
//     [2, 1, 0, 1],
//     [1, 0, 1, 2],
//     [1, 2, 1, 2]
// ]));

// // 2

// let arr = ["str", "abs", 7, 4, 8, true, 11]
// let sum = 0
// for (const element of arr) {
//     if(typeof element === typeof 3){
//       sum += element
//     }
    
// }console.log(sum);


// ///////// for in

// const obj = {
//     name: "Aziz",
//     surname: "Jalolov",
//     age: 25,
//     money: 400,
//     phone: 2
// }
// let sum = 0
// for (const key in obj) {
//     if(typeof obj[key] === typeof 3)
//      sum += obj[key]
//      }
   
    
// console.log(sum);

// //////// for in 2

// let arr = []
// for (const key in obj) {
//  arr.push(key)
//     arr.reverse()
//     }

// console.log(arr);

// /////// getting information from object

// const restaurant = {
//     	name: 'Rayhon Milliy Taomlar',
//     	location: 'Tashkent',
//     	categories: ['national', 'fast food', 'european cuisine', 'turkish'],
//     	startMenu: ['somsa', 'lagman', 'salad', 'soup'],
//     	mainMenu: ['osh', 'norin', 'manti']
//     }
    
//     // categories ichidan birinchi ikkita elementni desktruktsiya qilish
//     // categories ichidan birinchi va uchinchi elementni desktruktsiya qilish
    
    
    
//     let [a,,b] = restaurant.startMenu
    
//     console.log(a,b);
    
//     const restaurant = {
//     	name: 'Rayhon Milliy Taomlar',
//     	location: 'Tashkent',
//     	categories: ['national', 'fast food', 'european cuisine', 'turkish'],
//     	startMenu: ['somsa', 'lagman', 'salad', 'soup'],
//     	mainMenu: ['osh', 'norin', 'manti'],
    
//     	order: function(startMenuIndex, mainMenuIndex) {
//     		return [this.startMenu[startMenuIndex], this.mainMenu[mainMenuIndex]]
//     	}
//     	}
    
//     const [starter, main] = restaurant.order(3, 1)
    
//     console.log(starter, main);


//     const cafe = {
//         name: "Gilos",
//         location: "Urganch",
//         specialFood: ['Gumma', 'somsa', 'shashlik', 'gamberg'],
//         drinks: ['cola', 'sprite', 'fanta', 'dena'],
//         deserts:['ice cream', 'chocolate', 'cake'],

//         ordering: function(specialFoodIndex, drinksIndex ){
//             return [this.specialFood[specialFoodIndex], this.drinks[drinksIndex]]
//         }
//     }
//     const [food, drink] = cafe.ordering(2, 3)
//     console.log(food, drink);
    
// ///////////////// forEach

    function eachSum (array1){
        return array1.forEach((item) => console.log(item += 2)        
        )
    }
    console.log(eachSum([12, 13, 91, 11]));

//     ////// easy strucuture for function

//     let myFunc = age =>(age >= 18 ? "olasiz" : (age > 0) ? "olmaysiz" : ":)")

//     console.log(myFunc(18));




