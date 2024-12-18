//-------------------- mix ------------------
// let newObj = {
//     petty(){
//         console.log(`${this.name} salom`);

//     }
// }
// class MyClass {
//     constructor(name){
//         this.name = name
//     }
// }
// Object.assign(MyClass.prototype, newObj)

// let obj1 = new MyClass("Aziz")
// obj1.petty()

//^^^^^^^^^^^^^^^^^^^

// let obj2 = {
//   tech() {
//     console.log(`${this.name} is tech savvy`);
//   },
// };

// class MyTech {
//   constructor(name) {
//     this.name = name;
//   }
// }

// Object.assign(MyTech.prototype, obj2);

// let techno = new MyTech("Temur");

// techno.tech();

//-----------------

let ariphm = {
multiply(){
console.log(`${this.n * this.m}`);
},
division(){
    console.log(`${this.n * this.m}`);  
}
}

class Nums {
    constructor(n, m){
        this.n = n;
        this.m = m
    }
}
Object.assign(Nums.prototype, ariphm)
let result = new Nums(12, 3).multiply()
console.log(result);
