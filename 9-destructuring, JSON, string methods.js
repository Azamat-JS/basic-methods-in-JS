/////////////////////////////// without destructuring

// let sampleArr = [12, 44, 55]

// let a = sampleArr[0]

// let b = sampleArr[1]

// let c = sampleArr[2]

// console.log(c);

////////////////////////////////// with destructuring

// let [a, b, c] = sampleArr

// console.log(c);

// const restaurant = {
// 	name: 'Rayhon Milliy Taomlar',
// 	location: 'Tashkent',
// 	categories: ['national', 'fast food', 'european cuisine', 'turkish'],
// 	startMenu: ['somsa', 'lagman', 'salad', 'soup'],
// 	mainMenu: ['osh', 'norin', 'manti']
// }

//categories ichidan birinchi ikkita elementni desktruktsiya qilish
//categories ichidan birinchi va uchinchi elementni desktruktsiya qilish



// let [a,, c] = restaurant.categories

// console.log(a,c);

// const restaurant = {
// 	name: 'Rayhon Milliy Taomlar',
// 	location: 'Tashkent',
// 	categories: ['national', 'fast food', 'european cuisine', 'turkish'],
// 	startMenu: ['somsa', 'lagman', 'salad', 'soup'],
// 	mainMenu: ['osh', 'norin', 'manti'],

// 	order: function(startMenuIndex, mainMenuIndex) {
// 		return [this.startMenu[startMenuIndex], this.mainMenu[mainMenuIndex]]
// 	}
// 	}

// const [starter, main] = restaurant.order(3, 1)

// console.log(starter, main);

// const arr = [2, 4, [5, 6]]

// const [i, j] = arr
// console.log(i, j)
 
// const [i, , [j, k]] = arr
// console.log(i, j, k)


//////////////////// default value
// const [a, b, c = 5] = [8, 9]
// console.log(a, b, c)

// const restaurant = {
// 	name: 'Rayhon Milliy Taomlar',
// 	location: 'Tashkent',
// 	categories: ['national', 'fast food', 'european cuisine', 'turkish'],
// 	startMenu: ['somsa', 'lagman', 'salad', 'soup'],
// 	mainMenu: ['osh', 'norin', 'manti'],
// 	openingHours: {
// 		mon: {
// 			open: 8,
// 			close: 22
// 		},
// 		tue: {
// 			open: 8,
// 			close: 23
// 		},
// 		wed: {
// 			open: 9,
// 			close: 21
// 		},
// 	},
// 	order: function(startMenuIndex, mainMenuIndex) {
// 		return [this.startMenu[startMenuIndex], this.mainMenu[mainMenuIndex]]
// 	}
// }

// let {name: name2, location, categories} = restaurant

// console.log(name2);

// let obj = {a: 2, b: 4, c: 12}
// let a = 7
// let b = 10


// ({a, b} = obj)

// console.log(obj);

// const {mon} = restaurant.openingHours
// //ichidagi propertylarini qiymatini destruksiya qilmoqchimiz
// console.log(mon)

// const {mon: {open, close}} = restaurant.openingHours
// console.log(open, close)

////////////////////// Date

// console.log(new Date());

// let date = new Date()

// console.log(date.getFullYear());
// console.log(date.getDate());
// console.log(date.getDay());
// console.log(date.getHours());
// console.log(date.getSeconds());
// console.log(date.getMilliseconds());

// console.log((new Date().getTime() / 1000 )/ 3600 / 24 / 365);

//////////////////////////// timers

// setTimeout(() => {
//   console.log("ishladi");
// }, 3000)

// setInterval(() => {
//   console.log("ishladi");
// }, 1000)

// setTimeOut o'ziga callback funksiya qa'bul qiladi
// setTimeout(() => console.log("Here is your pizza"), 3000);

// // 1. Callback funksiya birinchi argument bo'lib keladi va uni birdan ishlatib yubormaydi
// // 2. Second

// // setTimeOut kodni o'qib kelganda to'xtatib qo'ymaydi, keyingi qatorga o'tib ketadi
// console.log("Waiting...")

// //With arguments:
// setTimeout((ing1, ing2) => console.log(`Here is your pizza with ${ing1}, ${ing2}`), 3000, "cheese", "chicken");

//Cancel timeout:
// const ingredients = ["cheese", "chicken"]
// const pizzaTimer = setTimeout((ing1, ing2) => console.log(`Here is your pizza with ${ing1}, ${ing2}`), 3000, ...ingredients);

// if(ingredients.includes("cheese")) clearTimeout(pizzaTimer)

// setInterval(function () {
//   const now = new Date();

//   console.log(`${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}`);
// }, 1000);

/////////////////////////// JSON

// let obj = {
//   name: "a",
//   surname: "b",
//   age: 12
// }

// console.log(typeof JSON.stringify(obj));



// const jsonStr = '{"ism":"Ali","yosh":25,"shahar":"Toshkent"}';
// const odam = JSON.parse(jsonStr);
// console.log(odam);


////////////////////////////// string methodlari

// let str = "I love JavaScript";

// let result = str.match(/JavaScript/);

// console.log(result);

// let str = "I love JavaScript";

// let result = str.match(/Java(Script)/g);

// console.log( result ); // JavaScript
// console.log( result.length ); // 1

// let str = "I love JavaScript";

// let result = str.match(/HTML/);

// console.log(result); //null
// console.log(result.length); 


// let str = '<h1>Hello, world!</h1>';
// let regexp = /<(.*?)>/g;

// let matchAll = str.matchAll(regexp);

// console.log(matchAll); 

// let str = '<h1>Hello, world!</h1>';
// let regexp = /<(.*?)>/g;

// let matchAll = str.matchAll(regexp);

// console.log(matchAll); 

// matchAll = Array.from(matchAll); // array now

// let firstMatch = matchAll[0];
// console.log( firstMatch[0] );  
// console.log( firstMatch[1] );  
// console.log( firstMatch.index ); 0
// console.log( firstMatch.input );

let str = "A drop of ink may make a million think";

console.log( str.search( /ink/i ) ); 

// console.log('12-34-56'.replaceAll("-", ":")) 

// console.log( '12-34-56'.replace( /-/g, ":" ) ) 

// let str = "sdfsd 12 dsfsd5sdf"

// console.log(str.match(/\d+/g));

//---------------------------------------- index of string

// let a = "lks sdflkjs sdfs sdf"
// let b = a.charAt(5)
// console.log(b);
//----------------------------------------------
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
