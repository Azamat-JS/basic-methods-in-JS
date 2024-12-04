//---------------1 - vazifa----------------------

// const promise1 = new Promise((resolve) => setTimeout(resolve, 1000, "last promise"))
// const promise2 = new Promise((resolve) => setTimeout(resolve, 400, "the second but first order"))
// const promise3 = new Promise((resolve) => setTimeout(resolve, 700, "the first one"))

// Promise.race([promise1, promise2, promise3]).then((value) => {console.log(value);
// })

//------------------- 2 - vazifa ------------------

// class Animal {
//   constructor(name, food) {
//     this.name = name;
//     this.food = food;
//   }
//   eats() {
//     console.log(`${this.name} eats ${this.food}`);
//   }
// }

// class Dog extends Animal {
//   constructor(name, food) {
//     super(name);
//     this.food = food;
//   }
//   eats() {
//     super.eats();
//   }
// }

// class Sheep extends Animal {
//   constructor(name, food) {
//     super(name);
//     this.food = food;
//   }
//   eats() {
//     super.eats();
//   }
// }
// class Panda extends Animal {
//   constructor(name, food) {
//     super(name);
//     this.food = food;
//   }
//   eats() {
//     super.eats();
//   }
// }

// let dog = new Dog("pitbul", "bones");
// let sheep = new Sheep("Qo'zi", "forage");
// let panda = new Panda("Jeck", "bamboo");

// dog.eats();
// sheep.eats();
// panda.eats();

//------------- 3 - vazifa ----------------

// class Automobiles {
//     constructor(brand, price){
//         this.brand = brand;
//         this.price = price;
//     }
//     static getInfo(){
//         return new this('BMW', '$500')
//     }
// }
// let info = Automobiles.getInfo();
// console.log(info.brand, info.price);




