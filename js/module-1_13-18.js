// ================================== ЗАДАЧА 13 ==================================
// Операторы сравнения >, >=, < и <=

// Задание;
// Функция isAdult объявляет один параметр age(возраст), значение которого будет задаваться во время её вызова.
// Присвой переменной passed выражение проверки возраста пользователя на совершеннолетие.
// Человек считается совершеннолетним в возрасте 18 лет и старше.

// Тесты;
// Объявлена функция isAdult(age)
// В выражении проверки используется оператор >=
// Вызов isAdult(20) возвращает true
// Вызов isAdult(14) возвращает false
// Вызов isAdult(8) возвращает false
// Вызов isAdult(37) возвращает true

// ____________________ ^ ____________________
// function isAdult(age) {
//   // Change code below this line
//   const passed = age >= 18;

//   // Change code above this line
//   return passed;
// }
// const ageUser1 = isAdult(20);
// console.log('Совершенолетний ? ', ageUser1);

// const ageUser2 = isAdult(14);
// console.log('Совершенолетний ? ', ageUser2);

// const ageUser3 = isAdult(8);
// console.log('Совершенолетний ? ', ageUser3);

// const ageUser4 = isAdult(37);
// console.log('Совершенолетний ? ', ageUser4);

// ================================== ЗАДАЧА 14 ==================================
// Операторы сравнения === и !==

// Задание;
// Функция isValidPassword(password) проверяет равенство сохранённого и введённого паролей и возвращает результат проверки - буль true или false.
// Переменная SAVED_PASSWORD хранит значение ранее сохраненного пароля.Введённый пароль передаётся в параметр password.

// Присвой переменной isMatch выражение проверки равенства введённого и сохранённого ранее паролей.
// Результатом выражения проверки должно быть true, если значения совпадают, и false, если нет.

// Тесты;
// Объявлена функция isValidPassword(password)
// В выражении проверки паролей использован оператор ===
// Вызов isValidPassword("mangodab3st") возвращает false
// Вызов isValidPassword("kiwirul3z") возвращает false
// Вызов isValidPassword("jqueryismyjam") возвращает true

// ____________________ ^ ____________________
// function isValidPassword(password) {
//   const SAVED_PASSWORD = 'jqueryismyjam';
//   // Change code below this line
//   const isMatch = SAVED_PASSWORD === password;

//   // Change code above this line
//   return isMatch;
// }

// const p1 = isValidPassword('mangodab3st');
// const p3 = isValidPassword('jqueryismyjam');
// const p2 = isValidPassword('kiwirul3z');
// console.log('пароль:', p1);
// console.log('пароль:', p2);
// console.log('пароль:', p3);

// ================================== ЗАДАЧА 15 ==================================
// Инструкция if...else

// Задание;
// Добавь выражение проверки совершеннолетия пользователя, значения параметра age, в условие для инструкции if.

// Если пользователь совершеннолетний, должен выполняться блок if и в переменную message записывается строка "You are an adult".
// В противном случае должен выполняться блок else и записывается строка "You are a minor".

// Тесты;
// Объявлена функция checkAge(age).
// В выражении проверки возраста использован оператор >=
// Вызов checkAge(20) возвращает "You are an adult"
// Вызов checkAge(8) возвращает "You are a minor"
// Вызов checkAge(14) возвращает "You are an adult"
// Вызов checkAge(38) возвращает "You are a minor"

// ____________________ ^ ____________________
// function checkAge(age) {
//   let message;

//   if (age >= 18) {
//     // Change this line
//     message = 'You are adult';
//   } else {
//     message = 'You are minor';
//   }

//   return message;
// }

// const m1 = checkAge(20);
// const m2 = checkAge(8);
// const m3 = checkAge(14);
// const m4 = checkAge(38);

// console.log(m1);
// console.log(m2);
// console.log(m3);
// console.log(m4);

// ================================== ЗАДАЧА 16 ==================================
// Задача: склад товаров

// Задание;
// Функция checkStorage(available, ordered) проверяет возможность оформления заказа и возвращает сообщение о результате. Она объявляет два параметра, значения которых будут задаваться во время её вызова:

// available - общее количество товаров на складе
// ordered - единиц товара в заказе
// Используя ветвления дополни код функции так, что:

// Если в заказе указано число, превышающее количество товаров на складе, в переменную message записывается строка "Not enough goods in stock!".
// В противном случае записывается строка "Order is processed, our manager will contact you.".

// Тесты;
// Объявлена функция checkStorage(available, ordered).
// Вызов checkStorage(100, 50) возвращает "Order is processed, our manager will contact you."
// Вызов checkStorage(100, 130) возвращает "Not enough goods in stock!"
// Вызов checkStorage(200, 20) возвращает "Order is processed, our manager will contact you."
// Вызов checkStorage(200, 150) возвращает "Order is processed, our manager will contact you."
// Вызов checkStorage(150, 180) возвращает "Not enough goods in stock!"

// ____________________ ^ ____________________
// function checkStorage(available, ordered) {
//   let message;
//   // Change code below this line
//   if (available < ordered) {
//     message = 'Not enough goods in stock!';
//   } else {
//     message = 'Order is processed, our manager will contact you.';
//   }
//   // Change code above this line
//   return message;
// }

// const m0 = checkStorage(100, 50);
// const m1 = checkStorage(100, 130);
// const m2 = checkStorage(200, 20);
// const m3 = checkStorage(200, 150);
// const m4 = checkStorage(150, 180);

// console.log('Твоё сообщение: ', m0);
// console.log('Твоё сообщение: ', m1);
// console.log('Твоё сообщение: ', m2);
// console.log('Твоё сообщение: ', m3);
// console.log('Твоё сообщение: ', m4);

// ================================== ЗАДАЧА 17 ==================================
// Комбинированный оператор присвоения

// Задание;
// Замени выражения со стандартными математеческими операторами на комбинированный оператор присвоения с добавлением, вычитанием, умножением и делением.

// Тесты;
// Значение переменной a равно 7
// Использован оператор +=
// Значение переменной b равно 6
// Использован оператор -=
// Значение переменной c равно 45
// Использован оператор *=
// Значение переменной d равно 2
// Использован оператор /=

// ____________________ ^ ____________________
// let a = 5;
// let b = 10;
// let c = 15;
// let d = 20;

// // Change code below this line
// a += 2;
// b -= 4;
// c *= 3;
// d /= 10;

// console.log(a);
// console.log(b);
// console.log(c);
// console.log(d);

// ================================== ЗАДАЧА 18 ==================================
// Задача: проверка баланса

// Задание;
// Станция по продаже ремонтных дроидов готова к запуску, осталось написать программное обеспечение для отдела продаж.

// Функция makeTransaction(pricePerDroid, orderedQuantity, customerCredits) выполняет транзакцию по продаже дроидов и возвращает сообщение о результате операции. Она объявляет три параметра, значения которых будут задаваться во время её вызова:

// pricePerDroid - цена одного дроида
// orderedQuantity - кол-во заказанных дроидов
// customerCredits - сумма средств на счету клиента
// Дополни её следующим функционалом:

// Объяви переменную totalPrice для хранения общей суммы заказа и присвой ей выражение расчёта этой суммы.
// Добавь проверку сможет ли клиент оплатить заказ:
// если сумма к оплате превышает количество кредитов на счету клиента, запиши в переменную message строку "Insufficient funds!";
// в противном случае, вычти сумму покупки со счёта клиента и запиши в переменную message сообщение: "You ordered <число> droids, you have <число> credits left".

// Тесты;
// Объявлена функция makeTransaction(pricePerDroid, orderedQuantity, customerCredits)
// Вызов makeTransaction(3000, 5, 23000) возвращает "You ordered 5 droids, you have 8000 credits left"
// Вызов makeTransaction(1000, 3, 15000) возвращает "You ordered 3 droids, you have 12000 credits left"
// Вызов makeTransaction(5000, 10, 8000) возвращает "Insufficient funds!"
// Вызов makeTransaction(2000, 8, 10000) возвращает "Insufficient funds!"
// Вызов makeTransaction(500, 10, 5000) возвращает "You ordered 10 droids, you have 0 credits left"
// ____________________ ^ ____________________
// function makeTransaction(pricePerDroid, orderedQuantity, customerCredits) {
//   let totalPrice = pricePerDroid * orderedQuantity;
//   let message;
//   // Change code below this line
//   if (totalPrice > customerCredits) {
//     message = 'Insufficient funds!';
//   } else {
//     message = `You ordered ${orderedQuantity} droids, you have ${
//       customerCredits - totalPrice
//     } credits left`;
//   }
//   // Change code above this line
//   return message;
// }

// console.log(makeTransaction(3000, 5, 23000));
// console.log(makeTransaction(1000, 3, 15000));
// console.log(makeTransaction(5000, 10, 8000));
// console.log(makeTransaction(2000, 8, 10000));
// console.log(makeTransaction(500, 10, 5000));

// ___________________то же самое ___________________________
// const m0 = makeTransaction(3000, 5, 23000);
// const m1 = makeTransaction(1000, 3, 15000);
// const m2 = makeTransaction(5000, 10, 8000);
// const m3 = makeTransaction(2000, 8, 10000);
// const m4 = makeTransaction(500, 10, 5000);

// console.log(m0);
// console.log(m1);
// console.log(m2);
// console.log(m3);
// console.log(m4);
