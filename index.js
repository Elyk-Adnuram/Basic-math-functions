function addition() {
  num1 = parseInt(document.getElementById("num1").value); //num1 is converted to an integer with parseInt. The .value means that we use the input received from user in the input element.
  num2 = parseInt(document.getElementById("num2").value); // //num2 is converted to an integer with parseInt. The .value means that we use the input received from user in the input element.
  ansSum = num1 + num2; // ansSum is given the value of num1 plus num2
  document.getElementById("ansSum").innerHTML = ansSum;
}

function multiply() {
  num3 = parseInt(document.getElementById("num3").value); //num3 is converted to an integer with parseInt. The .value means that we use the input received from user in the input element.
  num4 = parseInt(document.getElementById("num4").value); // //num4 is converted to an integer with parseInt. The .value means that we use the input received from user in the input element.
  ansMultiply = num3 * num4; // ansMultiply is given the value of num3 multiplied by num4
  document.getElementById("ansMultiply").innerHTML = ansMultiply;
}

function modulus() {
  num5 = parseInt(document.getElementById("num5").value); //num5 is converted to an integer with parseInt. The .value means that we use the input received from user in the input element.
  num6 = parseInt(document.getElementById("num6").value); // //num6 is converted to an integer with parseInt. The .value means that we use the input received from user in the input element.
  ansMod = num5 % num6; // ansMultiply is given the value of num5 % num4
  document.getElementById("ansMod").innerHTML = ansMod;
}

function subtraction() {
  num7 = parseInt(document.getElementById("num7").value); //num7 is converted to an integer with parseInt. The .value means that we use the input received from user in the input element.
  num8 = parseInt(document.getElementById("num8").value); // //num8 is converted to an integer with parseInt. The .value means that we use the input received from user in the input element.
  ansSub = num7 - num8; // ansMultiply is given the value of num5 % num4
  document.getElementById("ansSub").innerHTML = ansSub;
}

function division() {
  num9 = parseInt(document.getElementById("num9").value); //num9 is converted to an integer with parseInt. The .value means that we use the input received from user in the input element.
  num10 = parseInt(document.getElementById("num10").value); // //num10 is converted to an integer with parseInt. The .value means that we use the input received from user in the input element.
  ansDiv = num9 / num10; // ansDivision is given the value of num9 divided by num10
  document.getElementById("ansDiv").innerHTML = ansDiv;
}
