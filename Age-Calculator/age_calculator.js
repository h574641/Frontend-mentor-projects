"use strict"

/*TODO:

hente inputs (DAY MONTH YEAR) fra bruker

validere inputs:
- tom input/null
- ugyldig input (over 31 day, 12 month, 2023 year)
- ugyldig input (date in future)
- ugyldig input (not valid date in calendar)

returnere eventuelle feilmeldinger

vise feilmeldinger i HTML-dokument

kalkulere alder (YEARS MONTHS DAYS)

vise variabler i HTML-dokument

*/

// Inputs:
const dayInput = document.getElementById("day");
const monthInput = document.getElementById("month");
const yearInput = document.getElementById("year");

const button = document.querySelector("button");

let day = 0;
let month = 0;
let year = 0;

// Metode for å kalkulere alder
function calculate() {
    console.log("CLICK!")
    day = Number.parseInt(dayInput.value);
    month = Number.parseInt(monthInput.value);
    year = Number.parseInt(yearInput.value);

    document.querySelector("[data-years]").textContent = year;
    document.querySelector("[data-months]").textContent = month;
    document.querySelector("[data-days]").textContent = day;

}

// Metode for å validere input
function validateInput(input) {    
}


button.addEventListener('click', calculate);