'use strict';

// const x = 10;
// const y = 15;
// const z = 5;

// console.log('x + y = ', x + y);
// console.log('x - y = ', x - y);
// console.log('x * y = ', x * y);
// console.log('x / y = ', x / y);
// console.log('x % y =', x % y);
// console.log('y % x =', y % x);

// let value = 5;
// value += 3;
// console.log('value= :', value);

// console.log('10 > 15:', x > y);
// console.log('15 * 10 < 5:', y * x < z);
// console.log('15 * 10 < 5:', y * x, '< 5', y * x < z);

// console.log('x !== y - 10 строго не равно 15', x !== y);
// console.log('x != y - 10  не строго не равно 10', x != 10);
// console.log('x === y - 10  не строго  равно 10', x === 10);
// console.log(typeof NaN === typeof 10);
// console.log(typeof true === typeof false);

// console.log(true == 1);
// console.log(false == 0);
// console.log('1' == true);

// const numderString = '10';
// console.log(Number(numderString));
// console.log(typeof Number(numderString));
// const a1 = '1';
// console.log(Number(a1));
// const a2 = '2';
// console.log(Number(a2));
// const a3 = '3';
// console.log(Number(a3));
// const a4 = '4';
// console.log(Number(a4));
// const a5 = '5';
// console.log(Number(a5));
// const a6 = prompt('6');
// console.log(a6);
// confirm('What are you doing?');
// console.log(confirm);

// const a7 = '14.6lkdfgj';
// console.log(Number(a7)); //NaN

// const a1 = '1.567ldkgjf';
// console.log(Number.parseInt(a1));
// console.log(Number.parseFloat(a1));

// const x = '12.1sdfs';
// console.log(Number.parseInt(x));
// console.log(Number.parseFloat(x));

// const y = '145.546dkfg';
// console.log(Number.parseInt(y));
// console.log(Number.parseFloat(y));

// const x = 13;
// // Это не число?
// console.log(Number.isNaN(x)); // false
// // Переменная 13 это не не число -нет.

// const y = Number('skldf');
// // Это не число ?
// console.log(Number.isNaN(y));
// console.log(isNaN(x));

// console.log(0.1 + 0.2);
// console.log((0.1 * 10 + 0.2 * 10) / 10);

// console.log(Math.floor(0.1 + 0.2) == false);
// console.log(Math.ceil(0.1 + 0.2) == true);
// console.log('========================================');
// console.log(Math.round(1.1));
// console.log(Math.round(1.4));
// console.log(Math.round(1.5));
// console.log(Math.max(10, 20, 11, 21, 63));
// console.log(Math.min(10, 12, 13, 8));
// console.log('========================================');
// console.log(Math.pow(4, 3));
// console.log(Math.random());
// const r = Math.random() * (10 - 1) + 1;

// console.log(Math.ceil(r));

// console.log(2 + 2);

// const message = 'mango ' + 'is' + ' happy';
// console.log(message);

// let result;
// result = 5 + '5';
// console.log(result);
// console.log(typeof result);

// result = 5 + String(5) + 5 + Number('90');
// console.log(Number(result));
// console.log(typeof result);

// const x = 'skljghlkdasjgkdjfg';
// console.log(x.length);
// confirm(x);
// prom
//         012345
// const x = 'sldkfnsakldn';
// console.log(x.toUpperCase());
// console.log(x.toLowerCase());
// console.log(x.toLowerCase());
// console.log(x.toUpperCase());

// console.log(x.indexOf('f'));
// console.log(x.includes('nsa'));

// const age = 12;
// const name = 'Oleg';
// const mood = 'happy';

// const message = `My mane is ${name}, l'am ${age} years old and ${mood}`;
// console.log(message);

// console.log(typeof null);

// const number = 3;
// // Число 2
// const result = number > 2 && number < 4;
// // Число 3 больше 2 и 3 меньше 4
// console.log(result);
// // Да

// const num = 25;
// //Число 25
// const result1 = num > 26 && num < 27;
// console.log('25 больше 26 и мешьше 27', result1);

// const x = confirm(1);
// console.log(x);

// const y = prompt('Введите свой возраст');
// console.log(+);
// console.log(Number(y));

// const num1 = 5;
// //Число 5
// const result1 = num1 < 10 || num1 > 30;
// // Число 5 меньше 10 или 5 больше 30
// console.log('Число 5 меньше 10 или 5 больше 30: ', result1); //да

// const num2 = 40;
// //Число 40
// const result2 = num2 < 10 || num2 > 30;
// //Число 40 меньше 10 или больше 30
// console.log('Число 40 меньше 10 или 40 больше 30: ', result2); // да

// const num3 = 20;
// //Число 20
// const result3 = num3 < 10 || num3 > 30;
// //Число 20 меньше 10 или 20 больше 30
// console.log('Число 20 меньше 10 или 20 больше 30: ', result3); // нет

// let cost = 'Это плохая подписка';
// const subscription = 'free';

// if (subscription === 'pro') {
//   cost = 'Это крутая подписка)';
// }

// console.log(cost);

// let x;
// const y = 'pro';

// if (y === 'free') {
//   x = 'Yes';
// } else {
//   x = 'No';
// }

// console.log(x);

// let x;
// const y = 15;
// if (y < 15 && y > 9) {
//   // Если -да
//   x = 'Совершенно верно'; //Оператор блока Если
// } else {
//   // Иначе - нет
//   x = 'Никак нет '; // Оператор блока Иначе
// }

// console.log(x);

// let x;
// const y = '1';

// if (y === '2') {
//   //если 1=2
//   x = 0; //то 0
// } else if (y === '3') {
//   // иначе если 1=3
//   x = 100; //то 3
// } else if (y === '1') {
//   // иначе если 1=1
//   x = 500; // то 300
// } else {
//   // Иначе 0
//   console.log('0');
// }

// console.log(x); // 500

// let type;
// const age = prompt('ВВедите свой возраст что бы узнать совершенолетние ли вы');

// if (age >= 18) {
//   //если 20 больше или равно 18
//   type = 'Да'; //это
// } else {
//   //иначе
//   type = 'Нет'; //это
// }
// console.log(type);
// confirm(type);

// const x = prompt('you age');
// const y = x >= 18 ? 'Вы совершенолетний ' : 'прощай';
// console.log(y);

// const i1 = prompt('Введите число');
// const i2 = prompt('Введите второе число');
// const i1 = 10;
// const i2 = 15;
// let result;

// if (i1 > i2) {
//   result = i1;
// } else {
//   result = i2;
// }
// confirm('sdfsdf', result);
// console.log(result);

// const i1 = 10;
// const i2 = 15;
// const i3 = i1 > i2 ? i1 : i2;
// console.log(i3);

// let cost;
// const subscription = 'premium';

// switch (subscription) {
//   case 'free':
//     cost = 0;
//     break;

//   case 'pro':
//     cost = 100;
//     break;

//   case 'premium':
//     cost = 500;
//     break;

//   default:
//     console.log('Invalid subscription type');
// }

// console.log(cost); // 500

// let x;
// const i1 = 2;

// switch (i1) {
//   case 10:
//     x = 'это число 10';
//     break;

//   case 1:
//     x = 'это число 1';
//     break;

//   case 15:
//     x = 'Это число 15';
//     break;

//   default:
//     console.log('нет такого числа ');
// }

// console.log(x);

// const global = 'global';

// if (true) {
//   const blockA = 'block A';
//   console.log(global); // 'global'
//   console.log(blockA); // block A
//   console.log(blockB); // ReferenceError: blockB is not defined
//   console.log(blockC); // ReferenceError: blockC is not defined

//   if (true) {
//     const blockB = 'block B';
//     console.log(global); // global
//     console.log(blockA); // block A
//     console.log(blockB); // block B
//     console.log(blockC); // ReferenceError: blockC is not defined
//   }
// }

// if (true) {
//   const blockC = 'block C';
//   console.log(global); // global
//   console.log(blockC); // block C
//   console.log(blockA); // ReferenceError: blockA is not defined
//   console.log(blockB); // ReferenceError: blockB is not defined
// }
// console.log(global); // global
// console.log(blockA); // ReferenceError: blockA is not defined
// console.log(blockB); // ReferenceError: blockB is not defined
// console.log(blockC); // ReferenceError: blockC is not defined

// let a = 0;

// while (a < 10) {
//   console.log('число: ', a);
//   a += 1;
// }

// let client = 18;
// const maxClients = 25;

// while (client < maxClients) {
//   console.log(client);
//   client += 1;
// }
// let clientCounter = 18;
// const maxClients = 25;

// while (clientCounter < maxClients) {
//   console.log(clientCounter);
//   clientCounter += 1;
// }

// let x = 0;

// while (x < 10) {
//   console.log('число :', x);
//   x = x + 1; // x+=1
// }

// let client = 18;
// const maxClient = 25;

// while (client < maxClient) {
//   console.log(client);
//   client += 1;
// }

// let password = '';
// do {
//   password = prompt('Введите пароль длинее 4-х символов', '');
// } while (password.length < 5); //

// console.log('Ввели пароль', password);

// const max = 10;

// for (let i = 1; i <= max; i += 1) {
//   console.log(i);
// }

// const target = 8;
// let sum = 0;

// for (let i = 0; i <= target; i += 1) {
//   sum += i;
// }
// console.log(sum);

// const target = 3;
// let sum = 0;

// for (let i = 0; i <= target; i += 1) {
//   sum += i;
// }

// console.log(sum);

// const max = 10;
// for (let i = 0; i < max; i += 1) {
//   console.log(`${max} % ${i} = `, max % i);
// }

// вывести в консоль остаток от деления 10 на числа от 0-9

// const max = 10;

// for (let i = 0; i < max; i += 1) {
//   console.log(`${max} % ${i}=`, max % i);
// }

// for (let i = 1; i <= 10; i += 1) {
//   console.log(i);
//   if (i === 5) {
//     console.log('Дошли до 5-й строки ');
//     break;
//   }
// }

// const number = 10;

// for (let i = 1; i <= number; i += 1) {
//   if (i % 2 === 0) {
//     continue;
//   }
//   console.log('НЕЧетное і:', i);
// }

// const max = 38;

// for (let i = 0; i <= max; i += 1) {
//   if (i % 2 !== 0) {
//     continue;
//   }
//   console.log('Четные числа:', i);
// }

// const maxNumber = 12;
// for (let i = 0; i <= maxNumber; i += 1) {
//   if (i % 2 !== 0) {
//     continue;
//   }
//   console.log('нечетные числа :', i);
// }
// ================================ МАССИВЫ ================================
// const arr = [];

// const clients = ['Mango', 'Poly', 'Ajax'];
// console.log(clients[2]);

// const clients = ['Mango', 'Poly', 'Ajax'];

// clients[0] = 'Kiwi';

// clients[3] = 'Alex';
// console.log(clients);

// const clients = ['Mango', 'Poly', 'Ajax'];

// console.log('Длина', clients.length);

// clients.length = 5;
// console.log('Длина после присвоении значения 5', clients.length);
// console.log('Вызов массива после присвояния ему еще 2 елементов', clients);
// console.log('какой 4 елемент', clients[4]);

// clients.length = 2;
// console.log('Вызов массива после присвоения ему длины 2', clients);

// const clients = ['Mango', 'Poly', 'Ajax'];
// const arr = ['Дарина ', 'Костя', 'Наталия'];
// for (let i = 0; i < arr.length; i += 1) {
//   console.log(arr[i]);
// }

// const number = [];

// for (let i = 0; i < 3; i += 1) {
//   number.push(`number-${i}`);
//   console.log(`numbers:`, number[i]);
// }

// const clients = ['Mango', 'Ajax', 'Poly'];

// for (const client of clients) {
//   console.log(client);
// }

// const string = 'javascript';

// for (const symbol of string) {
//   console.log(symbol);
// }

// const clients = ['Mango', 'Ajax', 'Poly'];
// const clientNameToFind = 'Ajax';
// let message;

// for (const client of clients) {
//   if (client === clientNameToFind) {
//     message = 'Клиент с таким именем есть в базе данных!';
//     break;
//   }

//   message = 'Клиента с таким именем нету в базе данных!';
// }

// console.log(message);

// const clients = ['Mango', 'Ajax', 'Poly'];
// const clientNameToFind = 'Ajax';
// let message = 'Клиента с таким именем нету в базе данных!';

// for (const client of clients) {
//   if (client === clientNameToFind) {
//     message = 'Клиент с таким именем есть в базе данных!';
//     break;
//   }
// }

// console.log(message);

// const number = [1, 3, 14, 18, 4, 7, 29, 6, 34];
// const threshold = 15;

// for (let i = 0; i < number.length; i += 1) {
//   if (number[i] < threshold) {
//     continue;
//   }
//   console.log(`Число больше чем ${threshold}: ${number[i]}`);
// }

// const matrix = [
//   // 0  1  2
//   [1, 2, 3], //0
//   [4, 5, 6], //1
//   [7, 8, 9], //2
// ];
// console.log(matrix[2][1]);

// const matrix = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9],
// ];

// let total = 0;

// for (let i = 0; i < matrix.length; i += 1) {
//   console.log('Подмассив матрицы matrix[i]: ', matrix[i]);
//   for (let j = 0; j < matrix[i].length; j += 1) {
//     console.log('Элемент подмассива матрицы matrix[i][j]: ', matrix[i][j]);
//     total += matrix[i][j];
//   }
// }
// console.log(total);

// let a = 1;
// let b = a;
// console.log(a);
// console.log(b);

// a = 10;
// console.log(a);
// console.log(b);

// const message = 'Welcome to Kiev';
// console.log(message.split(' '));

// console.log(message.split(''));

// //Join

// const array = ['Mango', 'Ajax', 'Poly'];
// console.log(array.join(' '));
// console.log(array.join(''));
// console.log(array.join(','));
// console.log(array.join('-'));

// const clients = ['Mango', 'Kostia', 'Darina'];
// console.log('Index Darina', clients.indexOf('Darina'));
// console.log('index Kosttok', clients.indexOf('Kosttok'));

// const clients = ['Mango', 'Kostia', 'Darina'];
// const nameToFind = 'Darina';
// const nameToFind1 = 'Kosttok';
// for (let i = 0; i < clients.length; i += 1) {
//   console.log(clients[i]);
// }
// console.log(
//   `Есть ли в массиве имя ${nameToFind}`,
//   clients.includes(nameToFind),
// );
// console.log(
//   `Есть ли в массиве имя ${nameToFind1}`,
//   clients.includes(nameToFind1),
// );

// const clients = ['Mango', 'Kostia', 'Darina'];
// console.log(clients);
// console.log(clients.includes('Kostia'));
// console.log(clients.includes('Darina'));
// console.log(clients.includes('Roma'));

// const redFruits = ['apple', 'strawberry', 'cherry', 'cranberries'];
// const fruit = 'cherry';

// if (redFruits.includes(fruit)) {
//   console.log('It is a red fruit!');
// }

// const add = function (a, b, c) {
//   return a + b + c;
// };

// const fnA = function () {
//   console.log('Начала выполняться [fnA]');
//   fnB();
//   console.log('Продолжила выполняться [fnA] после выхода из [fnB]');
// };

// const fnB = function () {
//   console.log('Выполняется [fnB]');
// };

// console.log('Начал выполнение [main]');
// fnA();
// console.log('Продолжил выполняться [main] после выхода из [fnA]');

// const count = function (countFrom = 0, countTo = 10, step = 1) {
//   console.log(`countFrom = ${countFrom}, countTo = ${countTo}, step = ${step}`);

//   for (let i = countFrom; i <= countTo; i += step) {
//     console.log(i);
//   }
// };

// count(1, 2);
// count(2);
// count(undefined, 5, 2);
// count();

// function checkPassword(password) {
//   const ADMIN_PASSWORD = 'jqueryismyjam';
//   // Change code below this line

//   let message = 'Access denied, wrong password!';

//   if (password === ADMIN_PASSWORD) {
//     message = 'Welcome!';
//   }

//   return;
// } // Change code above this line
