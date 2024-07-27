"use strict"
// Крок 0. Введення даних

let a = parseFloat(prompt('a = ', '0'))
let b = parseFloat(prompt('b = ', '0'))
let c = parseFloat(prompt('c = ', '0'))

// Крок 1. Обчислення результатів

const S1 = a + 12 + b
const S2 = Math.sqrt((a + b) / (2 * a))
const S3 = Math.pow((a + b) * c, 1 / 3)
const S4 = Math.sin(a / -b)

// Виведення результатів
document.write(`
   <ul class="tasks-list">
      <li class="task-item">
         S1 = ${S1}
      </li>
      <li class="task-item">
         S1 = ${S2}
      </li>
      <li class="task-item">
         S1 = ${S3}
      </li>
      <li class="task-item">
         S1 = ${S4}
      </li>
   </ul>
`)