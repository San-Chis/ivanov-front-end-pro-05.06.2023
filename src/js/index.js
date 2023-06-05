// ДЗ 4. Практика на умовні оператори

// 1) Дано два різні числа. Визначити, яке з них більше, а яке менше.

let number1 = 5
let number2 = 3

if (number1 > number2) {
  console.log(number1 + ' є більшим числом.')
  console.log(number2 + ' є меншим числом.')
} else if (number2 > number1) {
  console.log(number2 + ' є більшим числом.')
  console.log(number1 + ' є меншим числом.')
} else {
  console.log('Числа рівні.')
}

// 2) Відомі дві відстані. Одне у кілометрах, інше – у футах (1 фут = 0,305м). Яка відстань менша?

let distanceInKilometers = 5 // в кілометрах
let distanceInFeet = 25 // в футах

// Переведемо відстань у футах в кілометри
let convertedDistanceInKilometers = distanceInFeet * 0.305

// Порівняємо дві відстані
if (distanceInKilometers < convertedDistanceInKilometers) {
  console.log('Відстань в кілометрах менша.')
} else if (distanceInKilometers > convertedDistanceInKilometers) {
  console.log('Відстань у футах менша.')
} else {
  console.log('Відстані рівні.')
}

//  3) Визначити, чи є число a дільником числа b? І навпаки. (Дати дві відповіді)

let a = 8
let b = 2

// Перевірка, чи є a дільником b
if (b % a === 0) {
  console.log(a + ' є дільником ' + b)
} else {
  console.log(a + ' не є дільником ' + b)
}

// Перевірка, чи є b дільником a
if (a % b === 0) {
  console.log(b + ' є дільником ' + a)
} else {
  console.log(b + ' не є дільником ' + a)
}

// 4) Дано число. Визначити, чи закінчується воно парною цифрою чи непарною? Вивести останню цифру.

let number = 287

function checkLastDigit(number) {
  let lastDigit = number % 10 // Отримуємо останню цифру числа

  if (lastDigit % 2 === 0) {
    console.log('Остання цифра є парною: ' + lastDigit)
  } else {
    console.log('Остання цифра є непарною: ' + lastDigit)
  }
}
//  виклик функції
checkLastDigit(number)

// 5) Дано двозначне число. Визначити, яка з його цифр більша: перша чи друга?

const numbers = 55

const firstDigit = Math.floor(numbers / 10)
const secondDigit = numbers % 10

if (firstDigit > secondDigit) {
  console.log('Перша цифра більша')
} else if (secondDigit > firstDigit) {
  console.log('Друга цифра більша')
} else {
  console.log('Обидві цифри рівні')
}

// 6) Дано тризначне число.
//Визначити чи є парною сума його цифр.
//Визначити, чи кратна сума цифр п'яти.
//Визначити чи є добуток його цифр більше 100.

//не зміг вирішити

//7) Дано тризначне число.
//Чи правда, що всі цифри однакові?
//Чи є серед цифр цифри однакові?

//не зміг вирішити

//8) Визначити, чи є задане шестизначне число дзеркальним? (123321, 147741)

//не зміг вирішити
