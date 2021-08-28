"use strict";

let result = 1;
let operator = document.querySelector("#operator");
const list = document.querySelector("#results");
const firstnumber = document.querySelector("#firstnumber");
const secondnumber = document.querySelector("#secondnumber");
const calculateBtn = document.querySelector("#calculate");

setup();

//add eventlistener for calculate button
function setup() {
  console.log("setup()");
  calculateBtn.addEventListener("click", readInput);
}

//read both input fields
function readInput(e) {
  console.log("readInput()");
  e.preventDefault();
  console.log(Number(firstnumber.value));
  console.log(Number(secondnumber.value));
  readOperator();
}

//read value of chosen operator
function readOperator() {
  console.log("readOperator()");
  console.log(operator.value);
  calculate();
}

//calculates first and second number together
function calculate() {
  console.log("calculate()");
  if (operator.value === "add") {
    result = Number(firstnumber.value) + Number(secondnumber.value);
  } else if (operator.value === "sub") {
    result = Number(firstnumber.value) - Number(secondnumber.value);
  } else if (operator.value === "mul") {
    result = Number(firstnumber.value) * Number(secondnumber.value);
  } else if (operator.value === "div") {
    result = Number(firstnumber.value) / Number(secondnumber.value);
  }
  console.log(result);
  printResult();
}

//print result at the end of the list
function printResult() {
  console.log("printResult()");
  list.lastElementChild.textContent = result;
  updateFirstnumber();
}

//updates value in the first input field with the result
function updateFirstnumber() {
  console.log("updateFirstnumber()");
  firstnumber.value = result;
  console.log(firstnumber.value);
}
