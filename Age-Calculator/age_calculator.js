"use strict"

/*TODO:

hente inputs (DAY MONTH YEAR) fra bruker

validere inputs:
- tom input
- ugyldig input (over 31 day, 12 month, 2023 year)
- ugyldig input (date in future)
- ugyldig input (not valid date in calendar)

kalkulere alder (DAYS MONTHS YEARS)

sende variabler til HTML

sende eventuelle feilmeldinger

*/

// Inputs:
const day = document.getElementById("day");
const month = document.getElementById("month");
const year = document.getElementById("year");

const button = document.querySelector("button");

// Metode for å kalkulere alder
function calculate() {
    let invalidInput = false;
    validateInput(day, month, year);
}

// Metode for å validere input
function validateInput () {
    
}

button.addEventListener('click', calculate);