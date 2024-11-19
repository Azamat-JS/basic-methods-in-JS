///////////////////////// fulthy
// console.log(Boolean());
// console.log(Boolean(undefined));
// console.log(Boolean(''));
// console.log(Boolean(null));
// console.log(Boolean(NaN));

// if(1 == 1) {
//   console.log("bor");

// }else{
//   console.log("yo'q");

// }

///////////////////////// logical operator

// let a = !1;
// let b = !2;

// console.log(false * 1);

// if (a && b) {
//   console.log("yaxshi");
// } else {
//   console.log("yomon");
// }

// if (a || b) {
//   console.log("yaxshi");
// } else {
//   console.log("yomon");
// }

// console.log(Boolean(false) * Boolean(1));

// console.log(Boolean(1));

///////////////// array

// console.log([].length);

// let arr = [3, 12, false, true, undefined, null, "s", false]

// console.log(arr[arr.length - 1]);

/////////////////// qiymat o'zgartirish
// arr[1] = 44

// console.log(arr);

//////////////////////////////////// nested array

// let nestedArray = [12, false, [34, true, ["salom"]]]

// console.log(nestedArray[2][2][0]);

// let fantastik_array = [44, ["salom", [[[[44, {}, "salom", [66]]]]]]]

// console.log(fantastik_array[1][1][0][0][0][3][0]);

// let arr = []

/////////////////////////////// push

// arr.push(3)
// arr.push(false)
// console.log(arr);

////////////////////////////// unshift

// arr.unshift(12)
// console.log(arr);

////////////////////////////// pop

// arr.pop()
// console.log(arr);

///////////////////////////// shift

// arr.shift()

// console.log(arr);

/////////////////////////////// includes

// console.log(arr.includes(33));

////////////////////////////////////////////// object

// console.log(typeof {});

// let user = {
//   username: "Murodbek",
//   surname: "Ismoilov",
//   age: 16,
//   isMerried: true
// }

// user.username = "Behruzbek"
// user.id = "12"
// delete user.username

// console.log(user);

///////////////////////////////// dot notation
// console.log(user.isMerried);

/////////////////////////////////// bracket notation

// console.log(user["username"]);

// let str = "Salom"

// console.log(str.toLowerCase());
// console.log(str.toUpperCase());

// let superFantastikArray = [33, {name: "ali", obj: {arr: [44, "salom0", {o: 99}]}}]

// console.log(superFantastikArray[1].obj.arr[2].o);

// let arr1 = [1,2,3,4,5]
// for (let i = arr1.length-1; i >= 0 ; i--) {
// console.log(arr1[i]);
// }

///////////////// 2-masala

// let arr = [1, 4,2, 5, 1, 3, 2, 5]

// let newArr = []

// for (let i = 0; i < arr.length; i++) {
//  if(!newArr.includes(arr[i])) {
//   newArr.push(arr[i])
//  }
// }

// console.log(newArr);

//3
// let arr = [1,2,3,4,5,6,7,0, -1]
// let min = arr[0]
// for (let i = 0; i < arr.length; i++) {
//   if(arr[i] <= min){
//     min = arr[i]
//   }
// }
// console.log(min);

let arr = [
  {
    age: "15a",
    home: 1919,
    name: "Sherzod",
  },
  {
    age: 16,
    home: 1299,
    name: "Bekzod",
  },
  {
    age: 18,
    home: 1999,
    name: "Umidjon",
  },
];
let s = 0;
for (let i = 0; i < arr.length; i++) {
  s += arr[i].age;
}

console.log(s);
