"use strict"
const name = prompt("Enter Your Full name: ");

if (name.includes(" ")) {
    if(name.at(-1) !==' '){ 
    console.log("It's a Full Name.");
} else {
    console.log("There's a Space.");
}
}
else {
    console.log("It's not a Full Name.");
    
}


