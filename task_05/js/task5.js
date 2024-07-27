"use strict"
// Крок 0. Введення даних

let lengthSm = parseFloat(prompt('Введіть довжину у сантиметрах', '1000'))

// Крок 1. Обчислення результатів

const lengthM = lengthSm / 100
const lengthKm = lengthM / 1000

// Виведення результатів
document.write(`
   <p class="output-data">${lengthM} м</p>
   <p class="output-data">${lengthKm} км</p>
`)