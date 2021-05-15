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

// Задание;
// Функция makeMessage(name, price) составляет и возвращает сообщение о покупке. Она объявляет два параметра, значения которых будут задаваться во время её вызова.

// name - название товара
// price - цена товара
// Дополни код функции так, чтобы в переменную message записывалась строка "You picked <product name>,
// price per item is < product price > credits", где <product name> и <product price> это значения параметров name и price. Используй синтаксис шаблонных строк.

// Внимание
// Обрати внимание на то, что в коде нет вызовов функции makeMessage.
// С этого задания и дальше мы сами будем вызывать твои функции и проверять то, как они работают.
// Результат наших проверок ты увидишь в блоке Результаты под редактором кода.

// Тесты
// Объявлена функция makeMessage(name, price)
// Вызов makeMessage('Radar', 6150) возвращает "You picked Radar, price per item is 6150 credits"
// Вызов makeMessage('Scanner', 3500) возвращает "You picked Scanner, price per item is 3500 credits"
// Вызов makeMessage('Reactor', 8000) возвращает "You picked Reactor, price per item is 8000 credits"
// Вызов makeMessage('Engine', 4070) возвращает "You picked Engine, price per item is 4070 credits"

// ____________________ ^ ____________________
// function makeMessage(name, price) {
//   // Change code below this line
//   const message = `You picked ${name}, price per item is ${price} credits`;
//   //   console.log(message);
//   // Change code above this line
//   return message;
// }
// makeMessage('Radar', 6150);
// makeMessage('Scanner', 3500);
// makeMessage('Reactor', 8000);
// makeMessage('Engine', 4070);

// ================================== ЗАДАЧА 11 ==================================
// Задача: математические операторы 2.0

// Задание;
// Функция calculateTotalPrice считает и возвращает общую сумму покупки. Она принимает два параметра, значения которых будут задаваться во время её вызова.
// orderedQuantity - количество единиц товара в заказе;
// pricePerItem - цена одной единицы товара.
// Дополни код функции так, чтобы в переменную totalPrice записывалась общая сумма покупки, результат умножения кол-ва товаров на цену одного.

// Тесты;
// Объявлена функция calculateTotalPrice (orderedQuantity, pricePerItem)
// Вызов calculateTotalPrice(5, 100) возвращает 500
// Вызов calculateTotalPrice(8, 60) возвращает 480
// Вызов calculateTotalPrice(3, 400) возвращает 1200
// Вызов calculateTotalPrice(1, 3500) возвращает 3500
// Вызов calculateTotalPrice(12, 70) возвращает 840
// Вызов функции со случайными, но валидными аргументами, возвращает правильное значение

// ____________________ ^ ____________________
// function calculateTotalPrice (orderedQuantity, pricePerItem) {
//   // Change code below this line
//   const totalPrice = orderedQuantity * pricePerItem;
//   // Change code above this line
//   return totalPrice;
// };

// ================================== ЗАДАЧА 12 ==================================
// Задача: заказ продукта 2.0

// Задание;
// Функция makeOrderMessage(orderedQuantity, pricePerDroid, deliveryFee) составляет и возвращает сообщение о покупке ремонтных дроидов. Она объявляет три параметра,
// значения которых будут задаваться во время её вызова.

// orderedQuantity - количество дроидов в заказе
// pricePerDroid - цена одного дроида
// deliveryFee - стоимость доставки
// Дополни код функции так, чтобы она возвращала сообщение о заказе в формате "You ordered droids worth <total price> credits.
// Delivery(<delivery fee> credits) is included in total price.". Не забудь о цене доставки при вычислениях общей стоимости.

// Тесты;
// Объявлена функция makeOrderMessage(orderedQuantity, pricePerDroid, deliveryFee)
// Вызов makeOrderMessage(2, 100, 50) возвращает "You ordered droids worth 250 credits. Delivery (50 credits) is included in total price."
// Вызов makeOrderMessage(4, 300, 100) возвращает "You ordered droids worth 1300 credits. Delivery (100 credits) is included in total price."
// Вызов makeOrderMessage(10, 70, 200) возвращает "You ordered droids worth 900 credits. Delivery (200 credits) is included in total price."

// ____________________ ^ ____________________
// function makeOrderMessage(orderedQuantity, pricePerDroid, deliveryFee) {
//   // Change code below this line
//   const add = orderedQuantity * pricePerDroid + deliveryFee;
//   const message = `You ordered droids worth ${add} credits. Delivery (${deliveryFee} credits) is included in total price.`;

//   // Change code above this line
//   return message;
// }

// const m1 = makeOrderMessage(2, 100, 50);
// const m2 = makeOrderMessage(4, 300, 100);
// const m3 = makeOrderMessage(10, 70, 200);
// console.log(m1);
// console.log(m2);
// console.log(m3);