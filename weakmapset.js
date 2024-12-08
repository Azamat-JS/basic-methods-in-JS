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

//------------------ weakSet --------------

// const weakSet = new WeakSet()

// const obj1 = {name: 'lola'}
// const obj2 = {name: 'jasur'}

// weakSet.add(obj1)
// weakSet.add(obj2)

// console.log(weakSet.has(obj1));

// console.log(weakSet.delete(obj2))
// console.log(weakSet.has(obj2))

//-------- preventing object dublication ------------\

// const uniqueObjects = new WeakSet();

// function addObject(obj) {
//   if (!uniqueObjects.has(obj)) {
//     uniqueObjects.add(obj);
//     console.log("Object added:", obj);
//   } else {
//     console.log("Object already exists", obj);
//   }
// }

// const obj1 = { id: 1 };
// const obj2 = { id: 2 };
// const obj3 = { id: 3 };

// addObject(obj1);
// addObject(obj2);
// addObject(obj2);
// addObject(obj3);

//--------- managing weak references in Caches -----------

// const cache = new WeakSet()

// function addToCache (obj){
//     cache.add(obj)
// }

// function isCached(obj){
//     return cache.has(obj)
// }

// const cacheObj = { data: 'cached data' }
// addToCache(cacheObj)
// console.log(isCached(cacheObj));

// cacheObj = null;
// console.log(isCached(cacheObj));

