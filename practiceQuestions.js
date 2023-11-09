//without recursion

let userInput = "This is a URL";
let URL = "";
for (i = 0; i < userInput.length; i++ ){
	let i = userInput[i];
	if (i === " ") {
	URL += "%20";
	} else {	
	URL += i;
	}
}
console.log(URL);

//========================================================================
