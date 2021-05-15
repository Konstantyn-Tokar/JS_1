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

// ================================== ЗАДАЧА 21 ==================================
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

// ================================== ЗАДАЧА 22 ==================================
// Логическое «ИЛИ» (оператор ||)

// Задание;
// Функция checkIfCanAccessContent(subType) проверяет, может ли пользователь получить доступ к контенту.
// Проверка происходит по типу подписки.Получить доступ могут только пользователи с подпиской pro или vip.

// Присвой переменной canAccessContent выражение проверки подписки.
// Если значение параметра subType равно строкам "pro" или "vip", пользователь получит доступ.Результатом выражения проверки будет буль true или false.

// Тесты;
// Объявлена функция checkIfCanAccessContent(subType)
// В выражении проверки использован оператор ||
// Вызов checkIfCanAccessContent("pro") возвращает true
// Вызов checkIfCanAccessContent("starter") возвращает false
// Вызов checkIfCanAccessContent("vip") возвращает true
// Вызов checkIfCanAccessContent("free") возвращает false

// ____________________ ^ ____________________
// function checkIfCanAccessContent(subType) {
//   const canAccessContent = subType === 'pro' || subType === 'vip'; // Change this line

//   return canAccessContent;
// }

// console.log(checkIfCanAccessContent('pro'));
// console.log(checkIfCanAccessContent('starter'));
// console.log(checkIfCanAccessContent('vip'));
// console.log(checkIfCanAccessContent('free'));

// ================================== ЗАДАЧА 23 ==================================
// Логическое «НЕ» (оператор !)

// Задание;
// Функция isNumberNotInRange(start, end, number) проверяет, не входит ли число в промежуток. То есть число должно быть меньше либо равно start и больше либо равно end. Результатом выражения проверки будет буль true или false.

// Она объявляет три параметра, значения которых будут задаваться во время её вызова:

// number - число, не вхождение которого проверяется
// start - начало числового промежутка
// end - конец числового промежутка
// Присвой переменной isNotInRange выражение инверсии значения переменной isInRange используя оператор !.

// Тесты;

// Объявлена функция isNumberNotInRange(start, end, number)
// В выражении использован оператор !
// Вызов isNumberNotInRange(10, 30, 17) возвращает false
// Вызов isNumberNotInRange(10, 30, 5) возвращает true
// Вызов isNumberNotInRange(20, 50, 24) возвращает false
// Вызов isNumberNotInRange(20, 50, 76) возвращает true

// ____________________ ^ ____________________
// function isNumberNotInRange(start, end, number) {
//   const isInRange = number >= start && number <= end;
//   const isNotInRange = !isInRange; // Change this line

//   return isNotInRange;
// }

// console.log(isNumberNotInRange(10, 30, 17));
// console.log(isNumberNotInRange(10, 30, 5));
// console.log(isNumberNotInRange(20, 50, 24));
// console.log(isNumberNotInRange(20, 50, 76));

// ================================== ЗАДАЧА 24 ==================================
// Задача: расчёт скидки

// Задание;
// Функция getDiscount(totalSpent) определяет значение скидки в зависимости от общей суммы потраченных денег (параметр totalSpent)
// в магазине за всё время(партнёрская программа).
// Скидка записывается в переменную discount и возвращается из функции как результат её работы.
// Используя ветвления и логические операторы, дополни код функции.
// Если потрачено от 50000 ( включительно ) или больше кредитов - скидка 10% (золотой партнёр)
// Если потрачено от 20000 (включительно) до 50000 кредитов - скидка 5% (серебрянный партнёр)
// Если потрачено от 5000 (включительно) до 20000 кредитов - скидка 2% (бронзовый партнёр)
// Если потрачено меньше чем 5000 кредитов - скидка 0 (базовый партнёр)
// Значения скидок каждого уровня хранятся в одноимённых константах BASE_DISCOUNT, BRONZE_DISCOUNT, SILVER_DISCOUNT и GOLD_DISCOUNT.

// Тесты;
// Объявлена функция getDiscount(totalSpent)
// Вызов getDiscount(137000) возвращает 0.1
// Вызов getDiscount(46900) возвращает 0.05
// Вызов getDiscount(8250) возвращает 0.02
// Вызов getDiscount(1300) возвращает 0
// Вызов getDiscount(5000) возвращает 0.02
// Вызов getDiscount(20000) возвращает 0.05
// Вызов getDiscount(50000) возвращает 0.1

// ____________________ ^ ____________________
// function getDiscount(totalSpent) {
//   const BASE_DISCOUNT = 0;
//   const BRONZE_DISCOUNT = 0.02;
//   const SILVER_DISCOUNT = 0.05;
//   const GOLD_DISCOUNT = 0.1;
//   let discount;
//   // Change code below this line
//   if (totalSpent >= 50000) {
//     discount = GOLD_DISCOUNT;
//   }
//   if (totalSpent >= 20000 && totalSpent < 50000) {
//     discount = SILVER_DISCOUNT;
//   }
//   if (totalSpent >= 5000 && totalSpent < 20000) {
//     discount = BRONZE_DISCOUNT;
//   }
//   if (totalSpent < 5000) {
//     discount = BASE_DISCOUNT;
//   }

//   // Change code above this line
//   return discount;
// }

// console.log(getDiscount(137000));
// console.log(getDiscount(46900));
// console.log(getDiscount(8250));
// console.log(getDiscount(1300));
// console.log(getDiscount(5000));
// console.log(getDiscount(20000));
// console.log(getDiscount(50000));
