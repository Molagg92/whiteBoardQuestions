//without recursion

let userInput = "This is a URL";
let URL = "";

for (let i = 0; i < userInput.length; i++) {
  let indx = userInput[i];
  if (indx === " ") {
    URL += "%20";
  } else {
    URL += indx;
  }
}

console.log(URL);

//========================================================================

//with recursion!

function recURL(userInput){
  if (userInput.length === 0){
    return "Please Enter a String!"
    } else if (userInput[0] === " ") {
      return"%20" + recURL(userInput.slice(1));
    } else {
      return userInput[0] + recURL(userInput.slice(1));
    }
  }
  
// ========================================================================

//Question 2
//without recursion

let repeaterBeater = [1, 2, 3, "Monster!", 1, 2, 4, "Monster!"];
let newArray = [];

for (let i = 0; i < repeaterBeater.length; i++) {
  let 

}