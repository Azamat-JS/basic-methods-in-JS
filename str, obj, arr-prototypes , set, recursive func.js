//-------------------------------- Set

// let arr = [1, 3, 4, 4, 3, 1, 5]
// let unique = new Set(arr)
// console.log(unique.add(34));
// unique.delete(3)
// let a = [...unique]
// a.forEach((num) => console.log(num += 2))

// console.log(unique.size);
// console.log(unique.has(15));
// console.log(unique.keys());




// function eachSum (array1){
//     return array1.forEach((item) => console.log(item += 2)        
//     )
// }
// console.log(eachSum([12, 13, 91, 11]));

//------------------------------------- Map

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

//------------------------------------ recursive function

// function pow(x, n){
//     if(n == 1){
//         return x
//     }else{
//         return x * pow(x, n-1)
//     }
// }
// console.log(pow(2, 4));


//------------------------------- prototype --> push method

// Array.prototype.myPush = function(num){
//     return [...this, num]
// }

// let arr = [1, 3, 4, 4, 3, 1, 5]
// console.log(arr.myPush(3));

//---------------------------------------- unshift method

// Array.prototype.myunShift = function(num1){
//     return [num1, ...this]
// }
// let arr = [1, 3, 4, 4, 3, 1, 5]
// console.log(arr.myunShift(3));

//-------------------------------------------

// function Automobile(brand, year){
//     this.brand = brand
//     this.year = year
// }
// Automobile.prototype.advertisement = function () {
//     console.log("this " + this.brand + " is produced in " + this.year);
    
// }    

// const car = new Automobile("BMW", 2023)
// car.advertisement()

//------------------------------------------------- array prototype

// Array.prototype.myReduce = function(){
//     let sum = 0
//     for (let i = 0; i < this.length; i++) {
//         sum += this[i]
        
        
//     }
//     return sum
// }
// let arr = [1, 2, 3, 4, 5]
// console.log(arr.myReduce());

//----------------------------------creating reverse method

// Array.prototype.myReverse = function(){
//     let middle = Math.round(this.length / 2)
//     for (let i = 0; i < middle; i++) {
//      let element = this[i]
//        this[i] = this[this.length - 1 - i]
//        this[this.length - 1 - i] = element
//        this
//     }
//     return this
// }
// let arr = [1, 2, 3, 4, 5]
// console.log(arr.myReverse());

//---------------------------------------- shift method

// Array.prototype.myShift = function(){

//  let sliced = this.slice(1, this.length)
//   return sliced
// }

// let arr = [1, 2, 3, 4, 5]
// console.log(arr.myShift());

//------------------------------------------ constructor prototype

// function Laptop(brand, ram){
//   this.brand = brand,
//   this.ram = ram
// }
// Laptop.prototype.upgradeRam = function(newRam){
//   this.ram = newRam;
// }
// const myLaptop = new Laptop("HP", "8GB")
// myLaptop.upgradeRam("15Gb")
// console.log(myLaptop.ram);

//--------------------------------------------- changing object in prototype

// function Student (name, age){
//   this.name = name;
//   this.age = age;
//   }
//   Student.prototype.grades = [90, 87, 44]
//   const student1 = new Student("John")
//   const student2 = new Student("Ben")

//   student2.grades.unshift(80)
// student1.grades.push(89)
//  console.log(student1.grades);
//  

//----------------------------------------- prototype with constructor function

// function Phone(mode1){
//   this.mode1 = mode1;
//   this.showModel = function(){
//     console.log(`Model is ${this.mode1}`);
    
//   }
// }
//  Phone.prototype.showBrand = function(brand){
//   console.log("brand is " + brand);
  
//  }
//  const phone = new Phone("Iphone 12")
//  phone.showModel()
//  phone.showBrand("apple")


//------------------------------------------- extra features

// function Car(){
//   const car1 = new Car()
//   console.log(Car.prototype.isPrototypeOf(car1));
// }
// const obj = {name: "john"}
// console.log(obj.hasOwnProperty("name"));
// console.log(obj.hasOwnProperty("age"));

//----------------------------------- class

// class Person {
//   constructor(name, age, position) {
//     this.name =name
//     this.age = age
//     this.position = position
//   }
// }
// console.log(new Person("Umar", 34, "developer"));

//------------------------------------ constructor function

// function officers(name, surname){
//   this.name = name
//   this.surname = surname
// }

// const newEmployee = new officers("Ben", "smith")
// console.log(newEmployee);


//------------------------------------

// function doctors(name, surname){
//   this.name = name
//   this.surname = surname
// }

// const newDoc = new doctors("Alan", "John")
// console.log(newDoc);

//----------------------------------------- string prototype

// String.prototype.addStar = function(){
//   let newArr = []
//   for (let i = 0; i < this.length; i++) {
//     newArr.push(this[i] + "*")
    
//   }
//   return newArr
// }
// let arr = "salom"
// console.log(arr.addStar());

//------------------------------------- object prototype

// function MyObj(name, address){
//   this.name = name
//   this.address = address
// }

// MyObj.prototype.getOrder = function(){
//   return `${this.name} ordered a pizza to location: ${this.address}`
// }
// const location1 = new MyObj("Bek", "Binokor street")
// console.log(location1.getOrder());

//------------------------- recursive

// function pow(x, n){
//     if(n===1){
//         return x
//     }else{
//         return x * pow(x, n-1)
//     }
// }
// console.log(pow(3, 5));
// console.log(pow(3, 1));
// console.log(pow(3, 3));


