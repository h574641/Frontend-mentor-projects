"use strict"

/*TODO:

hente inputs (DAY MONTH YEAR) fra bruker

validere inputs:
- tom input
- ugyldig input (over 31 day, 12 month, 2023 year, under 0)

kalkulere alder (DAYS MONTHS YEARS)

sende variabler til HTML

vise feilmeldinger


*/

const button = document.querySelector("button");

button.addEventListener('click', calculate);