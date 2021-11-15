//POPUPS

var myPrompt = prompt("What is your age?");
console.log(myPrompt);

var fullYear = new Date();
var todayYear = fullYear.getFullYear();
var birthYear = todayYear - myPrompt;

console.log(fullYear);
console.log(todayYear);
console.log(birthYear);

function yearHere(){
document.getElementById("yearHere").innerHTML= birthYear;
}
