"use strict";

let result = 1;
let check = false;
let checkBox = document.querySelector("#doround");
let decimal = document.querySelector("#decimals");
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
  console.log(checkBox.checked);
  if (checkBox.checked) {
    console.log("checkbox is checked");
    getCheckbox();
  } else {
    console.log("checkbox is not checked");
    printResult();
  }
}

//check checkbox value and round result based on it
function getCheckbox() {
  console.log("getCheckBox()");
  let decimalPlaces = Number(decimal.value);
  //   if (decimalPlaces === 1) {
  //     result = Math.round(result * 10) / 10;
  //   }
  console.log(decimalPlaces);
  const rounded = (result, decimalPlaces) => {
    const factorOfTen = Math.pow(10, decimalPlaces);
    return Math.round(result * factorOfTen) / factorOfTen;
  };
  console.log(rounded(result, decimalPlaces));
  result = rounded(result, decimalPlaces);
  printResult();
}

//print result at the end of the list
function printResult() {
  console.log("printResult()");
  const template = document.querySelector("template").content;
  const copy = template.cloneNode(true);
  copy.querySelector("li").textContent = result;
  const parent = list;
  parent.appendChild(copy);
  updateFirstnumber();
}

//updates value in the first input field with the result
function updateFirstnumber() {
  console.log("updateFirstnumber()");
  firstnumber.value = result;
}
