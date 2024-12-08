// function stars(dig) {
//     let result = ""
//     for (let i = 0; i < dig; i++) {
//         for (let j = 0; j < dig; j++) {
//             if (i === 0 || j === 0 || i===dig-1  ||j ===dig-1 ) {
//                 result += " *"
//             } 
//             else if (j > dig - 6 && (i === j || i + j === dig-1)) {
//                 result += " *"
//             }else {
//                 result += "  "
//             }

//         }
//         result += "\n"

//     }
//     return result;
// }
// console.log(stars(10));

//----------------------------------

// function stars(n){
// let result = ""
// for (let i = 0; i < n; i++) {
//   for (let j = 0; j < n; j++) {
//    if(i === 0 || j === 0 || i === n - 1 || j === n - 1 || i + j >= n / 2 + 4){
//      result += " *"
    
//    }else{
//     result += "  "
//    }
    
//   }
//     result += "\n"
//   }
  
//   return result
// }

// console.log(stars(10));

//------------------------------------

// function stars(n){
//     let result = ""
//     for (let i = 0; i < n; i++) {
//       for (let j = 0; j < n; j++) {
//        if(i === 0 || j === 0 || i === n - 1 || j === n - 1 || i + j <= n / 2 + 4){
//          result += " *"
        
//        }else{
//         result += "  "
//        }
        
//       }
//         result += "\n"
//       }
      
//       return result
//     }
    
//     console.log(stars(10));

//-------------------------------------------

// function stars(dig) {
//     let result = ""
//     for (let i = 0; i < dig; i++) {
//         for (let j = 0; j < dig; j++) {
//             if (i === 0 || j === 0 || i===dig-1  ||j ===dig-1 ) {
//                 result += " *"
//             } 
//             else if (i < dig && (i===j || i + j ===dig-1)) {
//                 result += " *"
//             }else {
//                 result += "  "
//             }

//         }
//         result += "\n"

//     }
//     return result;
// }
// console.log(stars(10));
