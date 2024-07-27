"use strict"
// Крок 0. Введення даних

let bagPrice = parseFloat(prompt('Введіть ціну сумки, грн', '1000'))
let bagAmount = parseFloat(prompt('Введіть кількість сумок', '1'))
let hatPrice = parseFloat(prompt('Введіть ціну капелюха, грн', '500'))
let hatAmount = parseFloat(prompt('Введіть кількість капелюхів', '1'))
let dressPrice = parseFloat(prompt('Введіть ціну сукні, грн', '800'))
let dressAmount = parseFloat(prompt('Введіть кількість суконь', '1'))

// Крок 1. Обчислення результатів

const totalBagPrice = bagPrice * bagAmount
const totalHatPrice = hatPrice * hatAmount
const totalDressPrice = dressPrice * dressAmount
const totalSum = totalBagPrice + totalHatPrice + totalDressPrice

// Виведення результатів
document.write(`
   <table border="2px">
      <tr>
         <th>Товар</th>
         <th>Ціна товару</th>
         <th>Кількість товару</th>
         <th>Разом</th>
      </tr>
      <tr>
         <th>Сумка</th>
         <td>${bagPrice}</td>
         <td>${bagAmount}</td>
         <td>${totalBagPrice}</td>
      </tr>
      <tr>
         <th>Капелюх</th>
         <td>${hatPrice}</td>
         <td>${hatAmount}</td>
         <td>${totalHatPrice}</td>
      </tr>
      <tr>
         <th>Сукня</th>
         <td>${dressPrice}</td>
         <td>${dressAmount}</td>
         <td>${totalDressPrice}</td>
      </tr>
      <tr>
         <th>До оплати</th>
         <td></td>
         <td></td>
         <td>${totalSum}</td>
      </tr>
   </table>
`)