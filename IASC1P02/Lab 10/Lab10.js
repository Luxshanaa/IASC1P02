function addValues(){
  var numOne = Number(document.getElementById("numOne").value);
  console.log(numOne);
  var numTwo = Number (document.getElementById("numTwo").value);
  console.log(numTwo);
  var add = numOne + numTwo
  console.log(add);
  document.getElementById("outcome").innerHTML= add;
}

function subtractValues(){
  var numOne = Number(document.getElementById("numOne").value);
  console.log(numOne);
  var numTwo = Number (document.getElementById("numTwo").value);
  console.log(numTwo);
  var subtract = numOne - numTwo
  console.log(subtract);
  document.getElementById("outcome").innerHTML= subtract;
}

function multiplyValues(){
  var numOne = Number(document.getElementById("numOne").value);
  console.log(numOne);
  var numTwo = Number (document.getElementById("numTwo").value);
  console.log(numTwo);
  var multiply = numOne * numTwo
  console.log(multiply);
  document.getElementById("outcome").innerHTML= multiply;
}

function divideValues(){
  var numOne = Number(document.getElementById("numOne").value);
  console.log(numOne);
  var numTwo = Number (document.getElementById("numTwo").value);
  console.log(numTwo);
  var divide = numOne / numTwo
  console.log(divide);
  document.getElementById("outcome").innerHTML= divide;
}
