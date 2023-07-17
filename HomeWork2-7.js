// Задание 1
// Преобразуйте строку js в верхний регистр JS.
// let row = 'abcdef';
// console.log(row.toUpperCase());
// //
// row = row.toUpperCase();
// console.log(row);

// Задание 2
// Создайте функцию, которая в качестве параметров принимает массив строк и строку. Возвращать данная функция должна новый массив, содержащий только 
// те элементы переданного массива, которые начинаются с переданной строки. Регистр символов не должен влиять.

// Задание 3
// Округлите число 32.58884:

// До меньшего целого
// До большего целого
// До ближайшего целого


// console.log(Math.floor(32.58884));
// console.log(Math.ceil(32.58884));
// console.log(Math.round(32.58884));



// Задание 4
// Даны числа 52, 53, 49, 77, 21, 32. Необходимо найти среди этих чисел наименьшее и наибольшее числа и вывести их в консоль.


// console.log(Math.max(52, 53, 49, 77, 21, 32));
// console.log(Math.min(52, 53, 49, 77, 21, 32));



// Задание 5
// Создайте функцию, которая будет выводить в консоль рандомное число от 1 до 10.


// let arr = [];

// for (let i = 0; i < 1; i++) {
//     arr.push(Math.round(Math.random() * (10 - 1))+ 1);
// }

// console.log(arr);





// Задание 6
// Напишите функцию, которая будет принимать на вход целое число, 
// а возвращать массив случайных целых чисел от 0 до переданного числа. Длина массива должна быть в 2 раза меньше переданного числа.

// let arr = [];
// let num = Number(prompt('введите число'));
// numLen = Math.floor(num / 2);
// for (let i = 0; i < numLen; i++) {
//     arr.push(Math.round(Math.random() * num));
// }
// console.log(arr);




// Задание 7
// Напишите функцию, которая на вход принимает 2 целых числа, 
// а в качестве результата возвращает случайное целое число в этом диапазоне.
// function rando(a, b) {
//     return Math.round(Math.random() * (a - b)) + b;
// }
// console.log(rando(2, 5));





// Задание 8
// Выведите в консоль текущую дату в стандартном режиме. Используйте один из трех рассмотренных в уроке способов.


// let dateTo = new Date();
// console.log(dateTo);




// Задание 9
// Создайте переменную currentDate и сохраните в нее текущую дату. Выведите дату, которая наступит через 73 дня после текущей.
// Подсказка
// Решить эту задачу вам помогут 2 метода даты: getDate() и setDate(), один из методов должен быть передан в качестве параметра второму.

// let currentDate = new Date();

// currentDate.setDate(currentDate.getDate() + 73);
// console.log(currentDate);



// Задание 10
// Написать функцию, которая на вход принимает дату, а возвращает ее отображение в виде:

// Дата: <число> <месяц на русском> <год> - это <день недели на русском>.

// Время: <часы>:<минуты>:<секунды>

// Время, которое будет выведено, также хранится в объекте Date.

// const days = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];
// const months = ["Января", "Февраля", "Марта", "Апреля", "Мая", "Июня", "Июля", "Августа", "Сентября", "Октября", "Ноября", "Декабря"];


// function date(a, b, c, d, e, f) {
//      let inputDate = new Date(a, b, c, d, e, f)
//      let dateTo = inputDate.getDate() + " " + months[inputDate.getMonth()] + " " + inputDate.getFullYear() + " - это " + days[inputDate.getDay() ];
//      let time = inputDate.getHours() + ":" + inputDate.getMinutes() + ":" + inputDate.getSeconds();
//      console.log(`Дата: ${dateTo}, Время: ${time}`);
// }
// date(2024,0,3,612,15,25);