// Задание 1
// Дан массив: 
// [1, 5, 4, 10, 0, 3]
// Необходимо создать цикл, который будет выводить элементы массива до тех пор, пока не встретит значение 10.
// После вывода значения 10 в консоль цикл должен прекратить свою работу.

// const arr = [1, 5, 4, 10, 0, 3];

// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === 10) {
//         console.log(arr[i]);
//         break;
//     }    
//     console.log(arr[i]);
// }









// Задание 2
// Дан массив: 
// [1, 5, 4, 10, 0, 3] Найдите позицию (индекс) числа 4 в этом массиве.
// Подсказка: Задачу можно решить методом перебора элементов или используя метод массива indexOf.


// const arr = [1, 5, 4, 10, 0, 3];
// console.log(`Индекс числа 4 равен: "${arr.indexOf(4)}"`);









// Задание 3
// Дан массив чисел: 
// [1, 3, 5, 10, 20]
// С помощью метода join выведите элементы массива через пробел (пустую строку ' ').
// const arr = [1, 3, 5, 10, 20];
// console.log(arr.join(" "));








// Задание 4
// С помощью вложенных циклов создайте многомерный массив вида: 
// [[1, 1, 1], [1, 1, 1], [1, 1, 1]]

// let arr = [];

// for (let i = 0; i < 3; i++) {
//     arr[i] = [];
//     for (let j = 0; j < 3; j++) {
//         arr[i][j] = 1;
//     }
// }
// console.log(arr);



// for (let i = 0; i < 3; i++) {
// 	arr[i] = []; 
// 	for (let j = 0; j < 3; j++) {
// 		arr[i][j] = [];
//     for (let n = 0; n < 3 ; n++) {
//         arr[i][j][n] = [];
//         for (let k = 0; k < 3; k++) {
//             arr[i][j][n][k] = 1;       
//          }
//     }

// 	}
// }
// console.log(arr);







// Задание 5
// Дан массив: 
// [1, 1, 1] Добавьте в конец массива значения 2, 2, 2.

// const arr = [1, 1, 1];
// arr.push(2, 2, 2);
// console.log(arr);







// Задание 6
// Дан массив: 
// [9, 8, 7, 'a', 6, 5]

// С помощью метода 
// sort отсортируйте массив и удалите букву 'a' из данного массива.
// В результате работы программы вывести массив, состоящий из цифр.

// const arr = [9, 8, 7, 'a', 6, 5];
// arr.sort();
// arr.pop();
// console.log(arr);


// let arr = [9, 8, 7, 'a', 6, 5];
// arr = arr.sort().filter(i => i != 'a');
// console.log(arr);





// Задание 7
// Дан массив: 
// [9, 8, 7, 6, 5]
// .

// Попросить пользователя угадать число (использовать prompt). 
// Если значение, которое ввёл пользователь, есть в массиве,
//  вывести в alert «Угадал», в противном случае вывести «Не угадал».

// const arr = [9, 8, 7, 6, 5];
// let answer = Number(prompt('Введите число'));
// if (arr.includes(answer) == true) {
//     alert('Угадал')
//  } else alert('Не угадал');







// Задание 8
// Дана строка: 'abcdef'
// Необходимо, чтобы программа вывела в консоль  'fedcba'

// let str = 'abcdef';
// console.log(str.split('').reverse().join(''));








// Задание 9
// Дан массив: 
// [[1, 2, 3,],[4, 5, 6]]
// .

// Выведите в консоль массив вида: 
// [1, 2, 3, 4, 5, 6]

// const arr = [[1, 2, 3,],[4, 5, 6]];
// for (let unEl of arr) {
//     for (let el of unEl) {
//         console.log(el);
//     }
// }






// Задание 10
// Создайте массив с произвольными числами (диапазон от 1 до 10). Переберите его с помощью цикла 
// for
//  и в каждой итерации выведите в консоль сумму текущего и следующего элементов массива.

// Следующий элемент массива можно получить с помощью индекса: 
// i + 1
// . Обратите внимание, что у последнего элемента нет следующего.

// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// let len = arr.length - 1;
// for (let i = 0; i < len; i++) {
//     let sum = arr[i] + arr[i + 1]
//     console.log(sum);
// }






// Задание 11
// Создайте функцию, которая принимает на 
// вход массив целых чисел, а возвращает массив квадратов этих чисел.

// const arr = [2, 3, 5];
// let mult = arr.map(item => item ** 2);
// console.log(mult);



// Задание 12
// Создайте функцию, которая принимает на вход массив строк, а возвращает массив длины слов.


// const strLength = (strLen) => strLen.map(str => str.length);

// console.log(strLength(['слово', '', 'слог', 'длинное предложение', 'буква']));




// Задание 13
// Создайте функцию, которая принимает на вход массив целых чисел, а возвращает массив содержащий только отрицательные значения.

// function filterPositive(array) {
//    console.log(array.filter(arr => arr < 0)); 
// // return array.filter(arr => arr < 0);
// }

// filterPositive([-25, 25, 0, -1000, -2]);
// filterPositive([-1, 0, 5, -10, 56]);




// Задание 14
// Создайте массив, состоящий из 10 значений. Значения массива необходимо сгенерировать с помощью метода 
// Math.random()
//  в диапазоне от 0 до 10.

// В данном массиве найдите все четные значения и добавьте их в новый массив. Результат работы программы необходимо вывести в консоль — 
// это будет два массива: исходный массив и массив с четными значениями.


// let arr = [];
// let arr1 = [];
// for (let i = 0; i < 10; i++) {
//     arr1.push(Math.ceil(Math.random() * 10 - 1 + 1));
//     if (arr1[i] % 2 == 0) {
//         arr.push(arr1[i]);
//     }
// }

// console.log(arr1);
// console.log(arr);




// Создайте массив, состоящий из 6 элементов. Элементы массива необходимо сгенерировать с помощью 
// Math.random()
//  в диапазоне от 1 до 10.

// Требуется найти среднее арифметическое этих цифр, результат программы вывести в консоль.

// Для получения среднего арифметического необходимо все значения массива сложить и разделить на количество элементов в массиве.




// let arr = [];
// let arr1 = [];

// for (let i = 0; i < 6; i++) {
//     arr1.push(Math.ceil(Math.random() * 10 - 1 + 1));
// }
// function average() {
//     const sumOfNumbers = arr1.reduce((a, b) => a + b);
//     //arr.push(sumOfNumbers / arr1.length);
//     let toF = sumOfNumbers / arr1.length;
//     arr.push(Number(toF.toFixed(2)));
//     console.log(arr);
// }
// console.log(arr1);
// average();