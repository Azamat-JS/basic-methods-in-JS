// for(let i = 1; i <= 10; i++) {
//   console.log("turnik " + i);
// }

//////////////// nested for

// for (let i = 1; i <= 3; i++) {
//   console.log("mashq " + i);
//   for (let j = 1; j <= 5; j++) {
//     console.log("urinish " + j);
//   }
// }

// let rep = 1

// while(rep <= 10) {
// 	console.log(`Og'irliklarni ko'tarish ${rep}`)
// 	rep++
// }


// let dice = Math.round(Math.random() * 6) + 1

// while(dice !== 6) {
// 	console.log(`Sizda ${dice} raqami`)
// 	dice = Math.round(Math.random() * 6) + 1 //infinite loop oldini olish

// 	if (dice === 6) {
// 	console.log("Sizda 6 raqami tushdi!")
// 	}
// }

// let i = 1;

// do {
//   console.log(i);
//   i++;
// } while (i < 5);


///////////// break
// for (let i = 1; i <= 10; i++) {
//   console.log(i);
//   if (i === 5) {
//     break;
//   }
// }

////////// continue

// for (let i = 1; i <= 10; i++) {
//   if (i === 5) {
//     continue;
//   }
//   console.log(i);
// }

//////////////////////// convertion
// let a = String(3)

// console.log(typeof a);

//////////////////////// coersion

// let a = "salom" + 2

// console.log(a);

// console.log("Men" + 23 + " yoshdaman");
// console.log("23" - "10" - 3);
// console.log(11 + 23 + 10 + "3" + "3");
// console.log("a12" * "2a")

// console.log(2 * 3 + "12" - 5)

// let str = "salom"

// console.log(str[0]);



// for (let i = str.length - 1; i >= 0; i--) {
//   console.log(str[i]);
  
// }

// let a = 4432

// console.log(a.toString());



// for (let i = 0; i < 6; i++) {
  
// }


// amaliy - 1

// let userValue = 2842

// let changedValue = userValue.toString()

// let sum = 1

// for (let i = 0; i < changedValue.length; i++) {
//   sum *= changedValue[i]
// }

// console.log(sum);

// amaliy - 2

// for (let i = 1; i <= 10; i++) {
//   let result = ""
//   for (let j = 1; j <= 10; j++) {
//     result += (i * j) + "\t"
//   }
//   console.log(result);
// }





// for (let i = 1; i < 10; i++) {

//   if(i %2 !=0) {
    
//     if (i == 9) {
//       continue
//     }
//     console.log(i)
//   }  
// }

//----------------------------

// function squareDigits(num){
//   let arr = []
//   let str = ""
//   let nums = num.toString().split("")
//   for(let i = 0; i < nums.length; i++){
//     n = nums[i] - 0
//     arr.push(n)
//   }
//  let a = arr.map(x => x * x)
//  for (let i = 0; i < a.length; i++) {
//   str += a[i]
  
//  }
//  return str
// }
// console.log(squareDigits(8324))

//----------------------------------------
// for (let i = 1; i < 10; i++) {

//   if(i %2 ==0 || i ==9) {
//     continue 
//   }  
//   console.log(i)

// }
