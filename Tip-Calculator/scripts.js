"use strict"

const billInput = document.getElementById("bill");
const people = document.getElementById("people");
const custom = document.getElementById("custom");

let bill = 0;
let number = 0;
let tip = 0;
let tipAmount = 0;
let total = 0;

function deselect() {
    fivePercent.style.background = "";
    tenPercent.style.background = "";
    fifteenPercent.style.background = "";
    twentyfivePercent.style.background = "";
    fiftyPercent.style.background = "";
    // custom.value = "";
    custom.style.background = "";
    fivePercent.style.color = "";
    tenPercent.style.color = "";
    fifteenPercent.style.color = "";
    twentyfivePercent.style.color = "";
    fiftyPercent.style.color = "";
}

function select(e) {
    deselect();
    console.log("You selected tip %");
    if(e.target.tagName == "DIV") {
        tip = e.target.textContent;
        e.target.style.color = "hsl(183, 100%, 15%)";
    } else {
        tip = e.target.value;
    }
    
    tip = tip.replace("%", "");
    tip /= 100;
    e.target.style.background = "hsl(172, 67%, 45%)";
}

function checkZero() {
    if(people.value == 0) {
        people.style.border = "3px solid red";
    } else {
        people.style.border = "";
    }
}

function calculate() {
    checkZero();
    console.log("Calculate tip amount and total bill");
    if(billInput.value != 0 && people.value != 0) {
        bill = Number.parseFloat(billInput.value);
        number = people.value;
        tipAmount = (bill * tip) / number;
        total = (bill + bill * tip) / number;
        
        document.querySelector("[data-tip]").textContent = "$" + tipAmount.toFixed(2);
        document.querySelector("[data-total]").textContent = "$" + total.toFixed(2);
        console.log(tip);
        console.log(total);
    }
}

function reset() {
    console.log("reset all");
    billInput.value = "0";
    people.value = "0";
    deselect();
    document.querySelector("[data-tip]").textContent = "$0.00";
    document.querySelector("[data-total]").textContent= "$0.00";
}

const fivePercent = document.querySelector(".tipgrid div:nth-child(1)");
const tenPercent = document.querySelector(".tipgrid div:nth-child(2)");
const fifteenPercent = document.querySelector(".tipgrid div:nth-child(3)");
const twentyfivePercent = document.querySelector(".tipgrid div:nth-child(4)");
const fiftyPercent = document.querySelector(".tipgrid div:nth-child(5)");

fivePercent.addEventListener('click', select);
tenPercent.addEventListener('click', select);
fifteenPercent.addEventListener('click', select);
twentyfivePercent.addEventListener('click', select);
fiftyPercent.addEventListener('click', select);

fivePercent.addEventListener('click', calculate);
tenPercent.addEventListener('click', calculate);
fifteenPercent.addEventListener('click', calculate);
twentyfivePercent.addEventListener('click', calculate);
fiftyPercent.addEventListener('click', calculate);

billInput.addEventListener('change', calculate);
people.addEventListener('change', calculate);
custom.addEventListener('change', select);
custom.addEventListener('change', calculate);

const resetButton = document.getElementById("reset");
resetButton.addEventListener('click', reset);