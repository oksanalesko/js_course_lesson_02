"use strict"
// Крок 0. Введення даних

let price = parseFloat(prompt('Введіть ціну товару у гривнях', '0'))
let quantity = parseFloat(prompt('Введіть кількість товару', '1'))

// Крок 1. Обчислення результатів

const totalPrice = price * quantity
const addedTax = 5
const totalTax = totalPrice * addedTax / 100

// Виведення результатів
document.write(`
   <p class="output-data">Загальна вартість товару: ${totalPrice} грн.</p>
   <p class="output-data">ПДВ на загальну вартість товару: ${totalTax} грн.</p>
`)