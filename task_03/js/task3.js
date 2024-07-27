"use strict"
// Крок 0. Введення даних

let userBirthYear = parseFloat(prompt('Введіть свій рік народження ', '1996'))
let currentYear = new Date().getFullYear()

// Крок 1. Обчислення результатів

const NumOfYears = currentYear - userBirthYear

// Виведення результатів
document.write(`
   <p class="output-data">${NumOfYears}</p>
`)