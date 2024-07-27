"use strict"
// Крок 0. Введення даних

let minMonthNumber = 1
let maxMonthNumber = 12

let minDayNumber = 0
let maxDayNumber = 6

// Крок 1. Обчислення результатів

let randomMonthNumber = Math.floor(Math.random() * (maxMonthNumber - minMonthNumber + 1)) + minMonthNumber
let randomDayNumber = Math.floor(Math.random() * (maxDayNumber - minDayNumber + 1))
let randomSum = randomMonthNumber + randomDayNumber

// Виведення результатів
document.write(`
   <p class="output-data">Сума випадкового номера місяця та випадкового номера дня складає (оновлюється при оновленні сторінки): ${randomSum}</p>
`)