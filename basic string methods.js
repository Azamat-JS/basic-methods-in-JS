//-------------------- String methods

// function sum(a, b){
//     return a + b
// }

// console.log(`33 + 5 = ${sum(33, 5)}`);
//----------------------

// let guestLList = `Guests:
// * John
// * Ben
// * Lisa`
// console.log(guestLList);
//----------------------
// let partyList = `Invited people:\n * Ben\n * John\n * Matt`
// console.log(partyList);

//---------------------

// let str1 = "Salom\nDunyo"
// console.log(str1);

// let str2 = `Salom
// Dunyo`
// console.log(str1 == str2);
//----------------------------

// console.log(`the backslash: \\`);
// console.log(`I\'m 28!`);
//-------------------------------

// console.log("\x7a");// z
// console.log("\xA9");// copyright symbol
// console.log("\u00A9");// copyright symbol
//---------------------------------------

// console.log("\u{20331}");//chinese character
// console.log("\u{1F60D}");//smile face

//-------------------------------------

// console.log(`My\n`.length);
//---------------------------

// let str = `Salom`
// console.log(str[0]);//first letter
// console.log(str.at(0));//first letter
// console.log(str[str.length - 1]);//last letter
// console.log(str.at(-1));//last letter
// console.log(str.at(-2));//o
// console.log(str.at(-3));//l
//----------------------------------------

// let str = "Hi"
// str = 'h' + str[1]
// console.log(str);
//---------------------------------------

// let str = "Salom Dunyo"
// console.log(str.indexOf('Dunyo', 2));
//-----------------------------------

// let str = 'As sly as a fox, as strong as an ox'
// let target = 'as'
// let pos = 0
// while(true) {
//     let foundPos = str.indexOf(target, pos)
//     if(foundPos == -1) break
//     console.log(`Found at ${foundPos}`);
//     pos = foundPos + 1
// }
//----------------------------------------

// let str = "stringify"
// console.log(str.substring(2, 6));//ring
// console.log(str.substr(2, 4));//ring
//------------------------------------

// function ucFirst(name){
// console.log(name[0].toUpperCase()+name.slice(1));
// }
// ucFirst('john')
//--------------------------------------------

// function checkSpam(str){
//     let newStr = str.toLowerCase()
//     if(newStr.includes('xxx') || newStr.includes('viagra')){
//  console.log(true);
//     }else{
//         console.log(false);
        
//     }
// }
// checkSpam("SDFsdf")
// checkSpam("buy ViAgRa now")
// checkSpam("free xxxxx")

//-------------------------------------------------
// function truncate(str, maxlength) {
//     return (str.length > maxlength) ?
//       str.slice(0, maxlength - 1) + '…' : str;
//   }
//   const result = truncate("you are 20 years old now", 20)
// console.log(result);

//-----------------------------------------

// function currentValue(str){
//   return +str.slice(1)
// }
// console.log(currentValue('$120'));

//----------------------------------------

// function isBalance(str) {
//     // Create an empty stack
//     const stack = [];
    
//     // Map to store matching pairs
//     const matchingPairs = {
//       '(': ')',
//       '{': '}',
//       '[': ']'
//     };
    
//     // Iterate through each character in the string
//     for (let char of str) {
//       // If the character is an opening bracket, push it to the stack
//       if (char === '(' || char === '{' || char === '[') {
//         stack.push(char);
//       }
//       // If the character is a closing bracket
//       else if (char === ')' || char === '}' || char === ']') {
//         // Check if the stack is empty or if the top of the stack doesn't match
//         if (stack.length === 0 || matchingPairs[stack.pop()] !== char) {
//           return false; // If not balanced, return false
//         }
//       }
//     }
    
//     // If the stack is empty, all brackets matched, otherwise, return false
//     return stack.length === 0;
//   }
  
//   // Test cases
//   console.log(isBalance("({[()]})")); // true
//   console.log(isBalance("({[(]]})")); // false
  
//------------------ repeat method

// const mood = 'Happy '
// console.log(`I feel ${mood.repeat(3)}`);
