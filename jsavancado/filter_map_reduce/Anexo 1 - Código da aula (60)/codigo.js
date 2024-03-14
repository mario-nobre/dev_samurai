/* Introdução ao método filter()

O método filter() é uma função de array em JavaScript que cria um novo array com todos os elementos que passam em um teste implementado por uma função fornecida.
 */

const number = [10, 18, 1, 15]

// let res = []
// for (const n of numbers) {
//   if (n > 10) {
//     res.push(n)
//   }
// }
// console.log(res)

let res = number.filter((n) => n > 10)
console.log(res)

const people = [
  { name: "Felipe", gender: "M", age: 40 },
  { name: "Paulo", gender: "M", age: 14 },
  { name: "Amanda", gender: "F", age: 18 },
]

const m = people.filter((p) => p.age >= 18)
console.log(m)

const n = people.filter((p) => p.age >= 18 && p.gender === "M")
console.log(n)

const x = people.filter(
  (p) => p.age >= 18 && p.age <= 25 && p.gender === "M"
)
console.log(x)


// https://chat.openai.com/c/91cffba4-0dc7-4cb8-ba8c-4dfb2ccf925b

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const evenNumbers = numbers.filter(num => num % 2 === 0);
console.log(evenNumbers); // Saída: [2, 4, 6, 8, 10]


const words = ['apple', 'banana', 'grape', 'orange', 'kiwi'];

const fruitsWithA = words.filter(word => word.includes('a'));
console.log(fruitsWithA); // Saída: ['apple', 'banana', 'grape', 'orange']

