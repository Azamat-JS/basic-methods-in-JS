// let arr = [12, 44, 55, 11, 44]

///////////// slice

// console.log(arr.slice(0 ,2));

//////////// splice

// console.log(arr.splice(0, 2, 33));

// console.log(arr);

/////////////////// reverse

// console.log(arr.reverse());

/////////////////// concat

// let arr = [12, 44, 55, 11, 44];

// let arr2 = [122, 550, 112, 442]

// console.log(arr.concat(arr2));

// console.log(arr2);

////////////////// join

// console.log(arr.join("i"));

//////////////////// indexOf

// console.log(arr.indexOf(44));

// arr.forEach(function (item) {
//   console.log(item);
// })

///////////////////// this

// console.log(this);

// function korsatish() {
//   console.log(this);
// }
// korsatish()

// const avtomobil = {
//   model: "Toyota",
//   yili: 2020,
//   tafsilotlar: function() {
//       return `Bu ${this.model} ${this.yili}-yilda ishlab chiqarilgan.`;
//   }
// };

// console.log(avtomobil.tafsilotlar());

// function Mashina(model, yil) {
//   this.nom = model;
//   this.year = yil;
// }

// const mashina1 = new Mashina("BMW", 2021);
// console.log(mashina1);

/////////////////// call

// let uzbekistanAirways = {
//   title: "O'zbekiston havo yo'llari",
//   code: "HY",
//   booking: [],
//   book: function (name, seatNum) {
//     return this.booking.push(
//       `${this.title}da ${name} ismli inson ${seatNum}-o'rindiqda uchayapti`
//     );
//   },
// };

// let turkishAirlines = {
//   title: "O'zbekiston havo yo'llari",
//   code: "HY",
//   booking: [],
// }

// uzbekistanAirways.book("Shuhrat", 1)

// uzbekistanAirways.book("Shuhrat", 1)

// console.log(turkishAirlines)

// let book = uzbekistanAirways.book;

// book.call(turkishAirlines, "Behruzbek", 2)

// console.log(turkishAirlines);

// let behruzbekAirways = {
//   title: "Behruzbekninki",
//   code: "BH",
//   booking: [],
// };

// book.call(behruzbekAirways, "Muhammadali", 2)

///////////////////// apply
// book.apply(behruzbekAirways, ["Jaloliddin", 3])

///////////////////////// bind

// let newbind = book.bind(behruzbekAirways)

// newbind("murodbek", 1)

// console.log(behruzbekAirways);

////////////////////////// spread

// let arr = [3, 55, 3, 6]


///////////////////////// without spread
// let newArr = [11, 44, arr[0], arr[1], arr[2], arr[3]]

//////////////////////// with spread 

// let newArr = [33, 66, ...arr]

// console.log(newArr);

/////////////// with string

// const str = "Hello";

// const letters = [...str, ' ', 'S']
// console.log(letters)

/////////////////////// with object

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
// }

// const newRestaurant = {...restaurant, founder: "John Doe", year: 2017}

// console.log(newRestaurant)


//////////////////////// with function

// let animals = ["lion", "snake", "cola"]

// function myFunc(animal1, animal2, animal3) {
//   return `${animal1}, ${animal2}, ${animal3}`
// }

// console.log(myFunc(...animals));

///////////////////////////// rest

//SPREAD - because on RIGHT side of =
// const arr = [1,2, ...[3,4]]

//REST - because on LEFT side of =
// const [a, b, ...others] = [1, 2, 3, 4, 5]

//restaurant misolida:
//main bilan starter menu qo'shib ichidan birinchi va ikkinchi elementni
//o'zgaruvchiga olib qolganini alohida array solib bersin

// const {sat, ...weekdays} = restaurant.openingHours
// console.log(weekdays)
// const add = function(...numbers){
// 	console.log(numbers)
// }

// add(2, 3, 'sdf')
// add(5, 1, 2, 3)
// add(10, 50, 2, 3)

// 1-masala

// function start(n) {
//   let result = ""
//   for (let i = 0; i < n; i++) {
//     for (let j = 0; j < n; j++) {
//       if(i === 0 || j === 0 || i === n - 1 || j === n - 1) {
//         result += " *"        
//       }else if(i > n / 2 - 1 && (i === j || i + j === n - 1)) {
//         result += " *"  
//       }
//       else {
//         result += "  "
//       }
//     }
//     result += "\n"
//   }
//   return result
// }

// console.log(start(10));
