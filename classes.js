//----------------------- class

// class Animal{
//       constructor(name, specie, sound){
//         this.name = name
//         this.specie = specie
//         this.sound = sound
//       }
//       speak(){
//         console.log(`${this.name} ${this.sound}`);
        
//       }
//     }
//     class Dog extends Animal{
//         constructor(name, specie, sound){
//             super(name, specie, sound)
//         }
//     }
//     let dog = new Dog ("Rex", "Predator", "wooof")
//     dog.speak()

//-------------------------------------------------------

// class Product{
//     constructor(name, price, category){
//         this.name = name
//         this.price = price
//         this.category = category
//     }
//     filterPrice(){
//        console.log(Math.max(...this.price));
//        console.log(Math.min(...this.price));
       
//     }
// }

// const categorisedPrice = new Product("Iphone", [500, 600, 1000, 1300])
// categorisedPrice.filterPrice()

//---------------------------------------------------------

// class User {
//     #token
//     constructor(username, password){
//         this.username = username
//         this.password = password
//     }
//     login(username, password){
//         if(username, password){
//             if(username === this.username && password && this.password)
//                 return true
//             }
//             return false
//         }
//         logOut(){
//             this.#token = false
//             console.log("logout");
            
//         }
//     }
// const user = new User("Kamol", 1234)
// console.log(user.login("jamol", 234));
// console.log(user.login("Kamol", 1234));
// user.logOut()

//------------------------------------------------------

// class Animal{
//   constructor(name, specie){
//     this.name = name
//     this.specie = specie
//   }
//   speak(){
//     console.log(`${this.name} is native to ${this.specie}`);
    
//   }
// }
// class Dog extends Animal{
//   speak(){
//     console.log(`${this.name} barks`);
    
//   }
// }
// const dog1 = new Dog("buddy")
// dog1.speak()

// class Insect extends Animal{
// speak(){
//   console.log(`${this.name} is native to ${this.specie}`);
// }
// }
// const insect1 = new Insect("mosquito", "black pests")
// insect1.speak()

//------------------------------------------------------

// class CalcAge {
//   static calculator(birthyear){
//     return 2024 - birthyear
//   }
// }
// console.log(CalcAge.calculator(2012));

// let set = Object.getOwnPropertyNames(Person.prototype)
// console.log(set);

//-------------------------------------------------------

//  class Company {
//     constructor(product, year, price){
//         this.product = product
//         this.price = price
//         this.year = year
//     }
//     getProduct(){
//         console.log(this.product);
        
//     }
//     getYear(){
//         console.log(this.year);
        
//     }
//     getPrice(){
//         console.log(this.price);
        
//     }
//  }
// const productInfo = new Company("headphone", 2024, "$50")
// productInfo.getProduct()
// productInfo.getYear()
// productInfo.getPrice()

//---------------------------------------------------------

// class Person {
//   constructor(name, age, position) {
//     this.name =name
//     this.age = age
//     this.position = position
//   }
//   getPosition(){
//     console.log(this.position);
    
//   }
//   getName(){
//     console.log(this.name);
    
//   }
// }
// const worker = new Person("Umar", 34, "developer")
// worker.getPosition()
// worker.getName()

//------------------------------------------ Parent and Child classes

// class Person {
//     constructor(name, age){
//         this.name = name
//         this.age = age
// }
// description(){
//     console.log(`I am ${this.name} and I am ${this.age}`);
// }
// }

// class Developer extends Person{
//  constructor(name, age, experience){
//     super(name, age)
//     this.experience = experience
//  }
//  java(){
//     console.log(`${this.name} has ${this.experience} experience in coding`);
    
// }
// }
// let person1 = new Person("Azamat", 28)
// let developer1 = new Developer("SHerzod", 30, "3 years")

// person1.description()
// developer1.description()
// developer1.java()

//------------------------------------------  Abstraction

// class Person {
//     constructor(name, age){
//         this.name = name
//         this.age = age
// }
// description(){
//     console.log(`I am ${this.name} and I am ${this.age}`);
// }
// }

// class Developer extends Person{
//  constructor(name, age, experience){
//     super(name, age)
//     this.experience = experience
//  }
//  java(){
//     console.log(`${this.name} has ${this.experience} experience in coding`);
    
// }
// }

// const developers = [
//     new Developer("Jalol", 22, 4),
//     new Developer("Murod", 19, 2)
// ]

// function developSoftWare (developers){
// for(let programmer of developers){
//   programmer.java()
// }
// }
// developSoftWare(developers)
//--------------------------------------- polymorphism

// class Laptop {
//     constructor(model, price){
//         this.model = model
//         this.price = price
//     }
//     aboutPrice(){
//     console.log(`${this.model} costs ${this.price}`);
//     }
// }
// class Macbook extends Laptop{
//     constructor(model, price, brand){
//         super(model, price)
//         this.brand = brand
//     }
//     aboutPrice(){
//         super.aboutPrice()
//         console.log(`${this.model} is produced by ${this.brand}`);
        
//     }
// }
// const a1 = new Laptop("HP", "$500")
// const a2 = new Macbook("MacPro", "$1300", "Apple Co")
// a1.aboutPrice()
// a2.aboutPrice()

//------------------------------------------------- encapsulation

// class Vehicle {
//     constructor(model, price){
//         this.model = model
//         this.price = price
//     }
//     aboutPrice(){
//     console.log(`${this.model} costs ${this.price}`);
//     }
// }
// class Car extends Vehicle{
//     #engine = 0
//     constructor(model, price, brand, engine){
//         super(model, price)
//         this.brand = brand
//         this.#engine = engine
//     }
//     aboutPrice(){
//         super.aboutPrice()
       
//         console.log(this.engine);
//     }
// }
// const a2 = new Car("Merc", "$130000", "Mercedes CO", "1.9L")
// console.log(a2.aboutPrice());



///////////////////// Exercise 2
class Product {
        constructor(name, price, category) {
            this.name = name
            this.price = price
            this.category = category
        }
    }
    

class Products {
    constructor(categoryList){
        this.categoryList = categoryList
    }
    filterByCategory(categoryName) {
        let list = []
        this.categoryList.map(element => {
            if (element.category == categoryName) {
                list.push(element)
            }
        })
        return list
    }

    filterbyMinPrice(minPrice){
        let list = []
        this.categoryList.map(element => {
            if (element.price >=minPrice) {
                list.push(element)
            }
        })
        return list
    }

    filterbyMaxPrice(maxPrice){
        let list = []
        this.categoryList.map(element => {
            if (element.price <=maxPrice) {
                list.push(element)
            }
        })
        return list
    }
}
const products = new Products([
    new Product(
        'Macbook pro',
        1600,
        'Notebook'
    ),

    new Product(
        'Macbook air',
        1600,
        'Notebook'
    ),

    new Product(
 'Iphone 15',
1200,
    'Phone'
    ),

    new Product(
        'Iphone 16',
        1600,
        'Phone'
    ),
])

console.log(products.filterByCategory('Phone'))
console.log(products.filterbyMinPrice(1200))
console.log(products.filterbyMaxPrice(1200))


// Object.prototype.ObjProtiotype = function () {
//     return salom mening ismim ${this.name}
// }
// let obj = {
//     name: "Murod"
// }

// console.log(obj.ObjProtiotype());

// prototype o'chirish

// delete Object.prototype.ObjProtiotype

// console.log(obj.ObjProtiotype());