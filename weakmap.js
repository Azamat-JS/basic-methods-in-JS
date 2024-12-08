// agar siz katta loyihalarda yoki real vaqtda ishlov
//  beruvchi dasturlarda resurslardan samarali boshqarish
//   bilan shug'ullansangiz, WeakMap juda foydali bo'ladi.
//    Masalan, vaqtinchalik kesh(cache ) yoki DOM 
//    elementlariga dinamik ravishda  havola qilishda 
//    qo'llanilishi mumkin. WeakMap bu JavaScriptda 
// maxsus turdagi Map bo'lib u xotira boshqaruvi bilan 
// yanada optimallishitirilgan ishlaydi.

//------------ weakmap creating -----------

// let weakmap = new WeakMap()

//---- adding keys and values ----------

// const user1 = {id: 1}
// const user2 = {id: 2}

// weakmap.set(user1, 'Jasur')
// weakmap.set(user2, 'Anvar')
// weakmap.delete(user1)

// console.log(weakmap.has(user1))

//----------- weakmap with class ----------

// const privateData = new WeakMap()

// class MyData {
//     constructor(){
//         privateData.set(this, {secret: 'my secret data'})
//     }
//     getSecretData(){
//         return privateData.get(this).secret
//     }
// }
// const obj = new MyData()
// console.log(obj.getSecretData());


