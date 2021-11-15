var start = new Date();
var currentTime = start.getMilliseconds();

console.log(start);
console.log(currentTime);

function stopTime(){
  var stop = new Date;
  var todayMilliseconds = currentTime - stop.getMilliseconds();
  document.getElementById("time").innerHTML= todayMilliseconds;
}

//POPUPS

alert("You have been on the page for " + currentTime + " seconds");
