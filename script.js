"use strict";

let result = 1;
const list = document.querySelector("#results");
const firstnumber = document.querySelector("#firstnumber");
const secondnumber = document.querySelector("#secondnumber");
const calculateBtn = document.querySelector("#calculate");

setup();

function setup() {
  console.log("setup()");
  calculateBtn.addEventListener("click", readInput);
}

function readInput(e) {
  console.log("readInput()");
  e.preventDefault();
  console.log(Number(firstnumber.value));
  console.log(Number(secondnumber.value));
  calculate();
}

// function readOperator() {
//   console.log("readOperator()");
// }

// function decideCalculation() {
//   console.log("decideCalculation()");
// }

function calculate() {
  console.log("calculate()");
  result = Number(firstnumber.value) + Number(secondnumber.value);
  console.log(result);
  printResult();
}

function printResult() {
  console.log("printResult()");
  list.lastElementChild.textContent = result;
}
