function gameOne() {
    let month = Number(prompt('Введите номер месяца'))
    if (isNaN(month)) {
        alert('Введено некорректное значение.')
    } else if (month === 12 || month <= 2) {
        alert('Это зимний месяц')
    } else if (month >= 3 && month <= 5) {
        alert('Это весенний месяц')
    } else if (month >= 6 && month <= 8) {
        alert('Это летний месяц')
    } else if (month >= 9 && month <= 11) {
        alert('Это осенний месяц')
    }
}



let arr1 = [];

const gameTwo = () => {
    let arr = ['Яблоко', 'Груша', 'Дыня', 'Виноград', 'Персик', 'Апельсин', 'Мандарин'];
    arr = arr.sort(() => Math.random() - 0.5);

    alert(arr);
    for (let i = 0; i <arr.length; i++) {
        arr1[i] = arr[i].toLowerCase();
    }
    console.log(arr1);

    let userAnswerOne = prompt('Чему равнялся первый элемент массива?')
    let userAnswerTwo = prompt('Чему равнялся последний элемент массива?')
    userAnswerOne = userAnswerOne.toLowerCase();
    userAnswerTwo = userAnswerTwo.toLowerCase();
    console.log(userAnswerOne);
    console.log(userAnswerTwo);
    if (userAnswerOne === arr1[0] && userAnswerTwo === arr1[arr1.length - 1]) {
        alert('Оба слова были угаданы.')
    } else if (userAnswerOne === arr1[0] || userAnswerTwo === arr1[arr1.length - 1]) {
        alert('Вы были близки к победе!')
    } else alert('Оба слова не были угаданы.')

}