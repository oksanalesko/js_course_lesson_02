"use strict"
// Крок 0. Введення даних

let a = parseFloat(prompt('a = ', '0'))
let b = parseFloat(prompt('b = ', '0'))

// Крок 1. Обчислення результатів

const sumNum = a + b
const multiplyNum = a * b
const divisionNum = a / b 

// Виведення результатів
document.write(`
   <table border="2px">
      <tr>
         <th>Шуканий результат</th>
         <th>Отримане значення</th>
      </tr>
      <tr>
         <th>Сума</th>
         <td>${sumNum}</td>
      </tr>
      <tr>
         <th>Добуток</th>
         <td>${multiplyNum}</td>
      </tr>
      <tr>
         <th>Частка</th>
         <td>${divisionNum}</td>
      </tr>
   </table>
`)