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

styling av siden + mobilversjon

*/

// Inputs:

const dayInput = document.getElementById("day");
const monthInput = document.getElementById("month");
const yearInput = document.getElementById("year");

const button = document.querySelector("button");

// Variabler:

const date = new Date();
const dateInput = new Date();

dateInput.setDate(Number.parseInt(dayInput.value));
dateInput.setMonth(Number.parseInt(monthInput.value));
dateInput.setFullYear(Number.parseInt(yearInput.value));

let validinput = true;

// Metode for å kalkulere alder

function calculate() {
    console.log("TODAY:");
    console.log(date.getDate());
    console.log(date.getMonth());
    console.log(date.getFullYear());
    console.log("INPUT:")
    console.log(dateInput.getDate());
    console.log(dateInput.getMonth());
    console.log(dateInput.getFullYear());

    document.querySelector("[data-years]").textContent = date.getDate();
    document.querySelector("[data-months]").textContent = date.getMonth();
    document.querySelector("[data-days]").textContent = date.getFullYear();
}

// Metode for å validere input
function validateInput(dateInput) {
    let day = dateInput.getDate();
    let month = dateInput.getMonth();
    let year = dateInput.getFullYear();

    if (day < 1 || day > 31) {
        validinput = false;
        return validinput;
    }
    else if (month < 1 || month > 12) {
        validinput = false;
        return validinput;
    }
    else if (year > date.getFullYear()) {
        validinput = false;
        return validinput;
    }
    else return validinput;
}

button.addEventListener('click', calculate);