// ================================== ЗАДАЧА 6 ==================================
// Задача: заказ продукта

// Задание;
// Магазин по продаже ремонтных дроидов готов к открытию, осталось написать скрипт для их заказа. Объяви переменные и присвой им соответствующие значения:
// pricePerDroid - цена одного дроида, значение 800
// orderedQuantity - количество дроидов в заказе, значение 6
// deliveryFee - стоимость доставки, значение 50
// totalPrice - общая сумма заказа к оплате, не забудь о стоимости доставки
// message - сообщение о состоянии заказа в формате "You ordered droids worth <total price> credits. Delivery (<delivery fee> credits) is included in total price."

// Тесты;
// Объявлена переменная orderedQuantity
// Значение переменной orderedQuantity это число 6
// Объявлена переменная pricePerDroid
// Значение переменной pricePerDroid это число 800
// Объявлена переменная deliveryFee
// Значение переменной deliveryFee это число 50
// Объявлена переменная totalPrice
// Значение переменной totalPrice это число 4850
// Объявлена переменная message
// Значение переменной message это строка "You ordered droids worth 4850 credits. Delivery (50 credits) is included in total price."

// ____________________ ^ ____________________
// const pricePerDroid = 800;
// const orderedQuantity = 6;
// const deliveryFee = 50;
// const totalPrice = pricePerDroid * orderedQuantity + deliveryFee;
// const message = `You ordered droids worth ${totalPrice} credits. Delivery (${deliveryFee} credits) is included in total price.`;

// console.log(message);

// ================================== ЗАДАЧА 7 ==================================
// Объявление и вызов функции

// Задание;
// Объяви функцию sayHi, внутри которой добавь console.log() со строкой "Hello, this is my first function!". После объявления вызови функцию sayHi.

// Тесты;
// Ожидается объявление функции
// Функции присвоено имя sayHi
// В теле функции sayHi есть console.log("Hello, this is my first function!")
// После объявления есть вызов функции sayHi

// ____________________ ^ ____________________
// Change code below this line
// function sayHi() {
//   console.log('Hello, this is my first function!');
// }
// sayHi();

// ================================== ЗАДАЧА 8 ==================================
// Параметры и аргументы

// Задание;
// Функция add должна уметь складывать три числа и выводить результат в консоль. Добавь функции add три параметра a, b и c,
// которые будут получать значения аргументов при её вызове.
// Дополни console.log() так, чтобы он логировал строку "Addition result equals <result>", где <result> это сумма переданных чисел.

// Тесты;Объявлена функция add(a, b, c)
// Вызов add(15, 27, 10) выводит в консоль "Addition result equals 52"
// Вызов add(10, 20, 30) выводит в консоль "Addition result equals 60"
// Вызов add(5, 10, 15) выводит в консоль "Addition result equals 30"

// ____________________ ^ ____________________
// Change code below this line
// function add(a, b, c) {
//   console.log(`Addition result equals ${a + b + c}`);
// Change code above this line
// }

// add(15, 27, 10);
// add(10, 20, 30);
// add(5, 10, 15);

// ================================== ЗАДАЧА 9 ==================================
// Возврат значения

// Задание;
// Дополни код функции add так, чтобы она возвращала результат сложения значений трёх параметров a, b и c.

// Тесты;
// Объявлена функция add(a, b, c)
// В функции add есть оператор return
// Вызов add(15, 27, 10) возвращает 52
// Вызов add(10, 20, 30) возвращает 60
// Вызов add(5, 10, 15) возвращает 30
// Вызов функции со случайными, но валидными аргументами, возвращает правильное значение

// ____________________ ^ ____________________
// function add(a, b, c) {
// Change code below this line
//   return a + b + c;

// Change code above this line
// }

// add(2, 5, 8); // 15

// console.log(add(15, 27, 10));
// console.log(add(10, 20, 30));
// console.log(add(5, 10, 15));

// ================================== ЗАДАЧА 10 ==================================
// Задача: шаблонные строки 2.0
