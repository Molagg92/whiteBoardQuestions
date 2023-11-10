//without recursion

// let userInput = "This is a URL";
// let URL = "";

// for (let i = 0; i < userInput.length; i++) {
//   let indx = userInput[i];
//   if (indx === " ") {
//     URL += "%20";
//   } else {
//     URL += indx;
//   }
// }

// console.log(URL);

//========================================================================

//with recursion!

// function recURL(userInput){
//   if (userInput.length === 0){
//     return "Please Enter a String!"
//     } else if (userInput[0] === " ") {
//       return"%20" + recURL(userInput.slice(1));
//     } else {
//       return userInput[0] + recURL(userInput.slice(1));
//     }
//   }
  
// ========================================================================

//Question 2
//without recursion

// let repeaterBeater = [1, 2, 3, "Erik!", 1, 2, 4, "Erik!"];
// let newArray = [];

// for (let i = 0; i < repeaterBeater.length; i++) {
//   let indx = repeaterBeater[i];
//   let found = false;
//   for (let j = 0; j < newArray.length; j++) {
//     if (indx === newArray[j]) {   
//       found = true;
//       break;
//     }
//   }
//   if (!found) { 
//     newArray.push(indx);
//   }
// }

// console.log(newArray); 

// ========================================================================
//Question 2
//With recursion!!

// let repeaterBeater = [1, 2, 3, "Erik!", 1, 2, 4, "Erik!"];

// function removeDuplicates(arr) {
//   if (arr.length === 0) {  // base case - array is empty
//     return [];
//   }

//   let first = arr[0];
//   let rest = arr.slice(1);

//   // recursive call to remove duplicates from rest of array
//   let newArray = removeDuplicates(rest);

//   if (!newArray.includes(first)) {
//     newArray.push(first);
//   }

//   return newArray;
// }

// let newArray = removeDuplicates(repeaterBeater);
// console.log(newArray);

========================================================================
Question 3
no recursion

let userInput = "aaabccdddda";
let output = "";
let count = 1;

for (let i = 0; i < userInput.length; i++) {
  let currentChar = userInput[i];
  let nextChar = userInput[i + 1];

  if (currentChar === nextChar) {
    count++;
  } else {
    if (count > 1) {
      output += count + currentChar;
    } else {
      output += currentChar;
    }
    count = 1;
  }
}

console.log(output); 

========================================================================
Question3
Recursion!!

let string = "aaabccdddda";

function compressor(input){
  if (input.length === 0){ //base case, incase we get empty input
    return ""
  }

  let first = input[i];
  let next = input[i + 1];

}
let output = compressor(string)