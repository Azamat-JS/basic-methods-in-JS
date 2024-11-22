//------------------------- promise --------------------

// let newPromise = new Promise((resolve, reject) => {
//     let test = false
//     if (test){
//         resolve('muvaffaqiyatli bajarildi')
//     }else{
//         reject('xatolik')
//     }
// })
// // console.log(newPromise);

// newPromise.then(res => console.log(res)).catch(wrong => console.log({message: wrong})).finally(() => console.log('operation is finished'))

//--------------------- different options of creating promise-------------

//-------- ---------------promise resolve ---
// const resolvedPromise = Promise.resolve("this promise is done")
// resolvedPromise.then(console.log)

//---------------------- rejected promise-------
// const rejectedPromise = Promise.reject("this promise isn't done")
// rejectedPromise.catch(console.log)

//-------------- promise all---------------------

// const promise1 = Promise.resolve(3)
// const promise2 = Promise.resolve(34)
// const promise3 = Promise.resolve(78)
// Promise.all([promise1, promise2,promise3]).then((values) =>{
//  console.log(values)})
//----------------- promise race -------------------

// const promise4 = new Promise((resolve) => setTimeout(resolve, 500, '500ms'))
// const promise5 = new Promise((resolve) => setTimeout(resolve, 100, '100ms'))

// Promise.race([promise4, promise5]).then((value) => {console.log(value)})

//------------------------------ async funtion --------------------

// let myPromise = new Promise((resolve, reject) => {
//     let test = true
//     if (test){
//         resolve('muvaffaqiyatli bajarildi')
//     }else{
//         reject('xatolik')
//     }
// })
// async function getData() {
//     try {
//         const result = await myPromise
//         console.log(result);
//     }
//     catch(error){
//         console.error(error);

//     }
// }
// console.log(getData());

//--------------------------------

//-------------------------- await with setTimeout ----------------
// function delay(ms){
//     return new Promise(resolve => setTimeout(resolve, ms))
// }
// async function example(){
//     console.log('is being waited...');
//     await delay(2000);
//     console.log('launched after two seconds');

// }
// example()

//-------------------- this function emulates getting info from users -----

// function getUserData(){
//     return new Promise(resolve =>{
//         console.log('downloading info of a user');
//         setTimeout(() => {
//             resolve({name: "Ali", age: 24})
//         }, 2000)

//     })
// }
// async function processUserData() {
//     console.log('the process begins...');
//     const userData = await getUserData()
//     console.log('the info of the user is downloaded', userData);
//     await new Promise ( resolve => setTimeout(resolve, 2000))
//     console.log(`the user ${userData.name} yoshini 2 barobar qiladi`, userData.age * 2);
// }
// processUserData()

//---------------------- first and second orders --------------------

// async function firstTask() {
//     return new Promise(resolve => {
//         setTimeout(() => {
//             console.log("the first task is done");
//             resolve("first result")
//         }, 2000)
//     })
// }

// async function secondTask() {
//     return new Promise(resolve => {
//         setTimeout(() => {
//             console.log("the second task is done");
//             resolve("second result")
//         }, 1000)
//     })
// }
// async function runTasks() {
//     const result1 = await firstTask()
//     console.log(result1)

//     const result2 = await secondTask()
//     console.log(result2);
// }
// runTasks()

//-------------- run tasks ---------------
// async function task1() {
//     return new Promise (resolve => setTimeout(() => resolve("task 1 is done"), 2000))
// }

// async function task2() {
//     return new Promise(resolve => setTimeout(() => resolve("task 2 is done"), 1000))
// }

// async function task3() {
//     return new Promise(resolve => setTimeout(() => resolve("task 3 is done"), 500))
// }

// async function runAllTasks() {
//     const results = await Promise.all([task1(), task2(), task3() ])
//     console.log(results)}
// runAllTasks()

//----------------------- desreasing order --------------------

// async function countDown(num) {
//     if(num > 0){
//         console.log(num);
//         await new Promise(resolve => setTimeout(resolve, 1000))
//         await countDown(num - 1)
//     }else{
//         console.log("well done!");

//     }
// }
// countDown(5)

//------------------ increasing order -----------------------

// async function countUp(dig) {
//     if(dig < 10){
//         console.log(dig);
//         await new Promise(resolve => setTimeout(resolve, 1000))
//         await countUp (dig + 1)
//     }else{
//         console.log("your order is ready!");

//     }
// }
// countUp(3)

//--------------- async with arrow function -------------

// const countDown = async (n) =>{
//     if(n < 100){
//         console.log(n);
//         await new Promise(resolve => setTimeout(resolve, 1000))
//         await countDown (n + 10)
// }else{
//     console.log("tayyor!");

// }
// }
// countDown(70)

//------------------

// const myPromise = new Promise((resolve, reject) => {
//     let res = true
//     return res ? resolve("it is working well") : reject("error")
// })
// myPromise.then((res) => console.log(res)).catch((err) => console.error(err))

//----------------- await doesn't wait setTimeOut -------------

// async function myFunc() {
//   await  setTimeout(() => {
//       console.log("setTimeOut ishladi");
//     }, 2000);
//     console.log('pasti ishladi');
    
// }
// console.log(myFunc());

//--------------------

// async function  ourFunc() {
//     await new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve()
//             console.log('setTimeOut ishlaD');    
//         }, 2000)
//         console.log('PASTI ishladi');
//     }
// )}
// ourFunc()

//-------------------------

// function waitTime(time){
//     return new Promise ((resolve) => {
//         setTimeout(() => {
//             resolve()
//         }, time)
//     })
    
// }
// async function doThis() {
//     console.log(("1: boshlanmoqda..."))
//     await waitTime(2000)
//     console.log("2 - tugadi");
// }
// doThis()

//--------------------------- simple setTimeOut

// async function wrongCode() {
//     console.log("1. this is starting...");
//     await setTimeout(() => {
//         console.log("2. finshed");
        
//     }, 2000)
//     console.log("3. ended");
    
// }
// wrongCode()

//----------------- promise 

// console.log("1. starting point");

// setTimeout(() => {
//     console.log("2 .setTimeout");
// },0)

// Promise.resolve().then(() => {
//     console.log("3.promise");   
// })

// console.log("4 oxiri");

//----------------
//  setTimeout(() => {
//     console.log("1, settimeout");
//     Promise.resolve().then(() =>{
//         console.log("2. promise inside")
//     })
//  }, 0)

//  Promise.resolve().then(() =>{
//     console.log("3. promise outside")
//  })
//  console.log("4.ending part");
 
//--------------------

// setTimeout(() =>{
//     console.log("1. first setTimeout");
//     setTimeout(() =>{
//         console.log("2.second setTimeout");
//     },0)   
// },0)

// Promise.resolve().then(() => {
//     console.log("3. promise")
// })
// console.log("4.finish");
//-------------------------

// console.log("1. starting");

// setTimeout(() => {
//     console.log("2. setTimeout");
//     Promise.resolve().then(() => {
//         console.log("3. promise inside");
//     })
// }, 0)

// Promise.resolve().then(() => {
//     console.log("4. promise outside");

//     setTimeout(() => {
//         console.log("5. setTimeout inside");
//     }, 0);
// })
// console.log("6 ending");

//--------------- withhout promises --------

function walkDog(callback){

    setTimeout(() => {
        console.log("You walk the dog");
        callback()
    }, 1500)
}

function cleanKitchen(callback){

    setTimeout(() => {
        console.log("You clean the kitchen");
        callback()
    }, 2500)
}

function takeOutTrash(callback){

    setTimeout(() => {
        console.log("you take out the trash");
        callback()
   }, 500 )

}
walkDog(() => {
    cleanKitchen(() => {
        takeOutTrash(() => console.log('you finished all the chores'))
    })
})

//------------- with promise ----------

function walkDog(){
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
          resolve("You walk the dog");
    
        }, 1500)
    })
}

function cleanKitchen(){

    return new Promise((resolve, reject) =>
    {
        setTimeout(() => {
           resolve("You clean the kitchen");
         
        }, 2500)
    })
}

function takeOutTrash(){

 return new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("you take out the trash");
   
   }, 500 )
 })

}

walkDog().then(value => {console.log(value); return cleanKitchen()})
                          .then(value => {console.log(value);return takeOutTrash()})
                           .then(value => { console.log(value); console.log('You finished all the chores');
                           
                           })