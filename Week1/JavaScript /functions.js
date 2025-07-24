// Passing a function as an argument is known as CallBack!!!

function sum(num1, num2, fnToCall) {
  let result = num1 + num2;
  fnToCall(result);
}

function displayresult(data) {
  console.log("Result of the sum is:- ", data);
}

function displayresultPassive(data) {
  console.log("Sum's result is:- ", data);
}

sum(23, 45, displayresultPassive);

function arithmetic(a, b, operator) {
  operator(a, b);
}

function addition(a, b) {
  let result = a + b;
  console.log("So the addition of a and b is:- ", result);
}

function subtraction(a, b) {
  let result = a - b;
  console.log("So the subtraction of a and b is:- ", result);
}

function multiplication(a, b) {
  let result = a * b;
  console.log("So the multiplication of a and b is:- ", result);
}

function division(a, b) {
  let result = a / b;
  console.log("So the division of a and b is:- ", result);
}

const rupees = arithmetic(100, 5, division);

function greet() {
  console.log("Hello World");
}

setTimeout(greet, 3 * 1000);
