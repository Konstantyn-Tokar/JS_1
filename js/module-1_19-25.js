// ================================== ЗАДАЧА 19 ==================================
// Блок else...if

// Задание;
// Функция checkPassword(password) получает пароль пользователя в параметр password, проверяет его на совпадение с паролем администратора в переменной ADMIN_PASSWORD и возвращает сообщение о результате сравнения, хранящееся в переменной message.

// Если значение параметра password равно null, значит пользователь отменил операцию и в message записывается строка "Canceled by user!".
// Если значение параметра password совпадает со значением ADMIN_PASSWORD, в переменную message присваивается строка "Welcome!".
// Если ни одно из предыдущих условий не выполнилось, в переменную message записывается строка "Access denied, wrong password!".

// Тесты
// Объявлена функция checkPassword(password)
// Вызов checkPassword("mangohackzor") возвращает "Access denied, wrong password!"
// Вызов checkPassword(null) возвращает "Canceled by user!"
// Вызов checkPassword("polyhax") возвращает "Access denied, wrong password!"
// Вызов checkPassword("jqueryismyjam") возвращает "Welcome!"

// ____________________ ^ ____________________
// function checkPassword(password) {
//   const ADMIN_PASSWORD = 'jqueryismyjam';
//   let message;

//   if (password === null) {
//     // Change this line
//     message = 'Canceled by user!';
//   } else if (password === ADMIN_PASSWORD) {
//     // Change this line
//     message = 'Welcome!';
//   } else {
//     message = 'Access denied, wrong password!';
//   }

//   return message;
// }

// console.log(checkPassword('mangohackzor'));
// console.log(checkPassword(null));
// console.log(checkPassword('polyhax'));
// console.log(checkPassword('jqueryismyjam'));

// ================================== ЗАДАЧА 20 ==================================
// Задача: склад товаров 2.0

// Задание;
// Функция checkStorage(available, ordered) проверяет возможность оформления заказа и возвращает сообщение о результате. Она объявляет два параметра, значения которых будут задаваться во время её вызова.

// available - доступное количество товаров на складе
// ordered - единиц товара в заказе
// Используя ветвления дополни код функции так, что:

// Если в заказе еще нет товаров, то есть значение параметра ordered равно 0, в переменную message присваивается строка "There are no products in the order!".
// Eсли товаров в заказе больше чем доступно товаров на складе, то в переменную message присваивается строка "Your order is too large, there are not enough items in stock!".
// В противном случае в переменную message присваевается строка "The order is accepted, our manager will contact you".

// Тесты;
// Объявлена функция checkStorage(available, ordered)
// Вызов checkStorage(100, 50) возвращает "The order is accepted, our manager will contact you"
// Вызов checkStorage(100, 130) возвращает "Your order is too large, there are not enough items in stock!"
// Вызов checkStorage(70, 0)возвращает "There are no products in the order!"
// Вызов checkStorage(200, 20) возвращает "The order is accepted, our manager will contact you"
// Вызов checkStorage(200, 250) возвращает "Your order is too large, there are not enough items in stock!"
// Вызов checkStorage(150, 0) возвращает "There are no products in the order!"

// ____________________ ^ ____________________
// function checkStorage(available, ordered) {
//   let message;
//   // Change code below this line
//   if (ordered === 0) {
//     message = `There are no products in the order!`;
//   } else if (ordered > available) {
//     message = `Your order is too large, there are not enough items in stock!`;
//   } else {
//     message = `The order is accepted, our manager will contact you`;
//   }

//   // Change code above this line
//   return message;
// }

// console.log(checkStorage(100, 50));
// console.log(checkStorage(100, 130));
// console.log(checkStorage(70, 0));
// console.log(checkStorage(200, 20));
// console.log(checkStorage(200, 250));
// console.log(checkStorage(150, 0));

// ================================== ЗАДАЧА 20 ==================================
// Логическое «И» (оператор &&)
// !!!!!!!Запомните шесть значений, которые в булевом преобразовании приводятся к `false`:
// `0`, `NaN`, `null`, `undefined`, пустая строка`""` или`''` и само значение`false`.
// Абсолютно всё остальное приводится к`true`.!!!!!!!!!!!!!

// Задание;
// Функция isNumberInRange(start, end, number) проверяет, входит ли число в промежуток. Она объявляет три параметра, значения которых будут задаваться во время её вызова:
// number - число, вхождение которого проверяется
// start - начало числового промежутка
// end - конец числового промежутка
// Присвой переменной isInRange выражение проверки вхождения number в числовой промеждуток от start до end.
// То есть число должно быть больше либо равно start и меньше либо равно end.Результатом выражения проверки будет буль true или false.

// Тесты;
// Объявлена функция isNumberInRange(start, end, number)
// В выражении проверки использован оператор &&
// Вызов isNumberInRange(10, 30, 17) возвращает true
// Вызов isNumberInRange(10, 30, 5) возвращает false
// Вызов isNumberInRange(20, 50, 24) возвращает true
// Вызов isNumberInRange(20, 50, 76) возвращает false

// ____________________ ^ ____________________
// function isNumberInRange(start, end, number) {
//   const isInRange = number >= start && number <= end; // Change this line

//   return isInRange;
// }

// console.log(isNumberInRange(10, 30, 17));
// console.log(isNumberInRange(10, 30, 5));
// console.log(isNumberInRange(20, 50, 24));
// console.log(isNumberInRange(20, 50, 76));

// ================================== ЗАДАЧА 21 ==================================
