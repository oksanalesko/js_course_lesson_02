"use strict"
// Крок 0. Введення даних

let amountSec = parseFloat(prompt('Введіть кількість секунд від початку доби', '1000'))

// Крок 1. Обчислення результатів

const amountHours = Math.floor(amountSec / 60 / 60)
const amountMinutes = Math.floor((amountSec / 60) % 60)

// Виведення результатів
document.write(`
   <p class="output-data">З початку доби минуло ${amountHours} годин, ${amountMinutes} хвилин</p>
`)