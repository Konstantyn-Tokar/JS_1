// текст написанный ботом___(Change code below this line-----)
// ================================== ЗАДАЧА 1 ==================================
// Объявление переменных

// Задание
// Объяви две переменные, productName для названия товара и pricePerItem для хранения цены за штуку. При объявлении присвой переменным следующие характеристики товара:
// название - строка "Droid"
// цена за штуку - число 2000

// Тесты
// Объявлена переменная productName
// Значение переменной productName это строка "Droid"
// Объявлена переменная pricePerItem
// Значение переменной pricePerItem это число 2000

// ____________________ ^ ____________________
// Change code below this line-----
// const productName = 'Droid';
// console.log(productName);
// console.log(productName);-----
// 'Droid'-----
// const pricePerItem = 2000;
// console.log(pricePerItem);
// console.log(pricePerItem);-----
// 2000-----

// ================================== ЗАДАЧА 2 ==================================
// Переопределение значения переменной

// Задание
// Имя товара изменили на "Repair droid" и увеличили его цену на 1500 кредитов. Переопредели значения переменных pricePerItem и productName после их объявления.

// Тесты
// Переменная pricePerItem объявлена с помощью let
// При объявлении переменной pricePerItem присвоено значение - число 2000
// Переменной pricePerItem присвоено новое значение, больше чем предыдущее на 1500
// Переменная productName объявлена с помощью let
// При объявлении переменной productName присвоено значение - строка "Droid"
// Переменной productName присвоено новое значение - строка "Repair droid"

// ____________________ ^ ____________________Способ 1
// let productName = "Droid";-----
// let pricePerItem = 2000;-----

// productName = "Repair droid";
// pricePerItem = (pricePerItem + 1500);
// console.log(productName);
// console.log(pricePerItem);
// // Change code below this line-----

// ____________________ ^ ____________________Способ 2
// let productName = 'Droid';-----
// let pricePerItem = 2000;-----

// productName = 'Repair droid';
// pricePerItem = 3500;
// console.log(productName);
// console.log(pricePerItem);-----

// ================================== ЗАДАЧА 3 ==================================
// Типы примитивов (числа, строки, були)

// Задание
// Объяви следующие переменные используя ключевое слово const или let и присвой им соответствующие значения.

// topSpeed - число 160.
// distance - число 617.54.
// login - строка "mango935".
// isOnline - буль true.
// isAdmin - буль false.

// Тесты
// Объявлена переменная topSpeed
// Значение переменной topSpeed это число 160
// Объявлена переменная distance
// Значение переменной distance это число 617.54
// Объявлена переменная login
// Значение переменной login это строка "mango935"
// Объявлена переменная isOnline
// Значение переменной isOnline это буль true
// Объявлена переменная isAdmin
// Значение переменной isAdmin это буль false

// ____________________ ^ ____________________
// Change code below this line-----
// const topSpeed = 160;
// const distance = 617.54;
// const login = 'mango935';
// const isOnline = true;
// const isAdmin = false;
// ______не обязательно_______
// console.log(topSpeed);
// console.log(distance);
// console.log(login);
// console.log(isOnline);
// console.log(isAdmin);

// ================================== ЗАДАЧА 4 ==================================
// Математические операторы

// Задание;
// Дополни код, присвоив переменной totalPrice выражение для подсчёта общей суммы заказа.
// Переменная pricePerItem хранит цену одной единицы товара, а orderedQuantity - количество единиц товара в заказе.

// Тесты;
// Объявлена переменная pricePerItem
// Значение переменной pricePerItem это число 3500
// Объявлена переменная orderedQuantity
// Значение переменной orderedQuantity это число 4
// Объявлена переменная totalPrice
// Значение переменной totalPrice это число 14000
// Использован оператор *

// ____________________ ^ ____________________
// const pricePerItem = 3500;
// const orderedQuantity = 4;

// // Change code below this line
// const totalPrice = pricePerItem * orderedQuantity;
// console.log(totalPrice);

// ================================== ЗАДАЧА 5 ==================================
// Шаблонные строки

// Задание
// Объяви перемнную message и запиши в неё сообщение о покупке, строку в формате: "You picked <имя товара>, price per item is <цена товара> credits".
// Где < имя товара > и < цена товара > это значения переменных productName и pricePerItem.Используй синтаксис шаблонных строк.

// Тесты;
// Объявлена переменная productName
// Значение переменной productName это строка "Droid"
// Объявлена переменная pricePerItem
// Значение переменной price это число 3500
// Объявлена переменная message
// Значение переменной message это строка "You picked Droid, price per item is 3500 credits"

// ____________________ ^ ____________________
// const productName = 'Droid';
// const pricePerItem = 3500;

// // Change code below this line
// const message = `You picked ${productName}, price per item is ${pricePerItem} credits`;
// console.log(message);
