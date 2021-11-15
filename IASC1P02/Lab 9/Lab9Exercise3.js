function addValues(){
  var numOne = Number(document.getElementById("numOne").value);
  console.log(numOne);
  var numTwo = Number (document.getElementById("numOne").value);
  console.log(numTwo);
  var add = numOne + numTwo
  console.log(add);
  document.getElementById("sum").innerHTML= add;
}

function addValuesTwo(){
  var numThree = Number(document.getElementById("numThree").value);
  console.log(numThree);
  var numFour = Number (document.getElementById("numFour").value);
  console.log(numFour);
  var add = numThree + numFour
  console.log(add);
  document.getElementById("sumTwo").innerHTML= add;
}
