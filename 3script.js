"use strict"
//function defining......
function namaskar(greetWord, name) {
    //double equals to means to check the value that is defined or not and single equals to means assinging the value to that function.
    if(greetWord == undefined) greetWord = "Hello,GoodMorning";
    if(name == undefined) name = "Sir";
    console.log(greetWord,  name);
}
// namaskar("GoodMorning ","Saheb");
// namaskar("GoodEvening ", "Madam");
namaskar();