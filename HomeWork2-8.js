/**
 * Задание 1
С помощью метода массива sort отсортируйте массив people по возрастанию возраста и выведите их в консоль.

Пример сортировки по свойству в массиве объектов вы можете найти в документации:
 */


// const people  = [
//   { name: 'Глеб', age: 29 },
//   { name: 'Анна', age: 17 },
//   { name: 'Олег', age: 7 },
//   { name: 'Оксана', age: 47 }
// ];
// people.sort((a, b) => {
//     if (a.age < b.age) return -1;
//     if(a.age > b.age) return 1; 
// });

// console.log(people.sort());


/**
*Задание 2
Реализуйте функцию 
filter, которая должна работать аналогично методу массива `filter. За основу возьмите функцию map, 
которую мы реализовывали на уроке.

Чтобы из функции map сделать filter, нужно, в зависимости от результата вызова 
ruleFunction
, принимать решение о том, добавлять в результирующий массив очередной элемент или нет.

Возьмите за основу код ниже. Задание считается выполненным, если два 
console.log
 в коде выводят правильное значение:
 */



// function isPositive(num) {
//     if (num > 0) {
//       return num;
//     }
//   }
//   function isMale(arr2) {
//     if (arr2.gender === 'male') {
//       return arr2;
//     };
//   }
//   function filter(arr, ruleFunction) {
//     const arr1 = [];
//     for (let i = 0; i < arr.length; i++) {
//       if (ruleFunction(arr[i])) {
//         arr1.push(ruleFunction(arr[i]));
//         // console.log(arr1);
//       }  
//     }
//     return arr1;
//   // писать код тут
//   }
  
//   console.log(filter([3, -4, 1, 9], isPositive)); // Должен выводить [3, 1, 9]
  
//   const people = [
//      {name: 'Глеб', gender: 'male'},
//      {name: 'Анна', gender: 'female'},
//      {name: 'Олег', gender: 'male'},
//      {name: 'Оксана', gender: 'female'}
//   ];
  
//   console.log(filter(people, isMale)); // Должен выводить [{name: 'Глеб', gender: 'male'},  {name: 'Олег', gender: 'male'}]






/**
Задание 3
Напишите программу, которая на протяжении 30 секунд каждые 3 секунды будет выводить в консоль текущую дату. 
Последней строкой должно выводиться сообщение «30 секунд прошло».
*/

// const timer = (deadline) => {
// 	const interval = setInterval(() => {
// 		console.log(new Date());
// 	}, 3000);

// 	setTimeout(() => {
//     clearInterval(interval);
//     console.log('Время истекло!')
//   }, deadline * 1000)
// };

// timer(30);







/**
 Задание 4
Сейчас код ниже выводит в консоль «Привет, Глеб!» сразу после запуска.

Допишите функцию 
delayForSecond так, чтобы приветствие выводилось в консоль не сразу, а спустя 1 секунду. Используйте setTimeout.
 */

// function delayForSecond(callback) {
//   // Код писать можно только внутри этой функции
//   setTimeout(function(){
//     callback();
//   }, 1000);
// };

// delayForSecond(function () {
//   console.log('Привет, Глеб!');
// })


/**
 * Задание 5
Посмотрите код. В нём допущена ошибка, и он выводит сообщения не в том порядке:

Привет, Глеб!
Прошла одна секунда
Правильный порядок:

Прошла одна секунда
Привет, Глеб!
Исправьте код, чтобы он выводил сообщения в правильном порядке:
 */




// // Функция delayForSecond через 1 секунду пишет в консоль «Прошла одна секунда», 
// // а затем вызывает переданный колбэк
// function delayForSecond(cb) {
//   setTimeout(() => {
//       console.log('Прошла одна секунда');
//       if(cb) { 	cb(); }

//   }, 1000)
// }

// // Функция sayHi выводит в консоль приветствие для указанного имени
// function sayHi (name) {
//   console.log(`Привет, ${name}!`);
// }

// // Код выше менять нельзя

// // Нужно изменить код ниже:
// delayForSecond(() => sayHi('Глеб'))