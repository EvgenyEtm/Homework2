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