'use strict';
// ================================== ЗАДАЧА 1 ==================================

// Задание
// Запиши условие в инструкции if так, чтобы функция работала правильно.

// function checkAge(age) {
//   if (age >= 18) {
//     // Change this line
//     return 'You are an adult';
//   }

//   return 'You are a minor';
// }

// ================================== ЗАДАЧА 2 ==================================
// Задание
// Функция checkPassword получает пароль пользователя в параметр password, проверяет его на совпадение с паролем администратора в переменной ADMIN_PASSWORD и возвращает сообщение о результате сравнения.
// Проведи рефакторинг кода функции checkStorage используя паттерн «ранний возврат»:
// удали переменную message
// удали else
// код должен работать так же, как и до оптимизации

// function checkPassword(password) {
//   const ADMIN_PASSWORD = 'jqueryismyjam';

//   if (password === ADMIN_PASSWORD) {
//     return 'Welcome!';
//   }
//   return 'Access denied, wrong password!';
// }

// ================================== ЗАДАЧА 3 ==================================
// Задание
// Функция checkStorage проверяет возможность оформления заказа и возвращает сообщение о результате. Она принимает два параметра, значения которых будут задаваться во время её вызова.

// available - доступное количество товаров на складе
// ordered - количество единиц товара в заказе
// Проведи рефакторинг кода функции checkStorage используя паттерн «ранний возврат».

// function checkStorage(available, ordered) {
//   // Change code below this line

//   if (ordered === 0) {
//     return 'Your order is empty!';
//   }
//   if (ordered > available) {
//     return 'Your order is too large, not enough goods in stock!';
//   }

//   return 'The order is accepted, our manager will contact you';
//   // Change code above this line
// }

// ================================== ЗАДАЧА 4 ==================================
// Задание
// Объяви переменную fruits и присвой ей массив фруктов - строк "apple", "plum", "pear" и "orange".

// const fruits = ['apple', 'plum', 'pear', 'orange'];
// console.log(fruits);

// ================================== ЗАДАЧА 5 ==================================
// Задание
// Объяви три переменные и присвой каждой из них значение, используя нотацию квадратных скобок.

// const fruits = ['apple', 'plum', 'pear', 'orange'];
// // Change code below this line
// const firstElement = fruits[0];
// const secondElement = fruits[1];
// const lastElement = fruits[3];

// ================================== ЗАДАЧА 6 ==================================
// Задание
// Переопредели значения элементов с индексами 1 и 3. Замени "plum" на "peach", а "orange" на "banana".

// const fruits = ['apple', 'plum', 'pear', 'orange'];

// // Write your code under this line
// fruits[1] = 'peach';
// fruits[3] = 'banana';
// console.log(fruits);

// ================================== ЗАДАЧА 7 ==================================
// Задание
// Объяви переменную fruitsArrayLength и присвой ей длину массива fruits используя свойство length.

// const fruits = ['apple', 'peach', 'pear', 'banana'];

// // Change code below this line
// const fruitsArrayLength = fruits.length;
// console.log(fruits.length);
// ================================== ЗАДАЧА 8 ==================================

// Задание
// Объяви две перемнные:
// lastElementIndex	Мндекс последнего элемента масcива fruits через длина_массива - 1
// lastElement	Значение последнего элемента массива

// const fruits = ['apple', 'peach', 'pear', 'banana'];

// // Change code below this line
// const lastElementIndex = fruits.length - 1;
// const lastElement = fruits[lastElementIndex];

// console.log(lastElementIndex);
// console.log(lastElement);

// ================================== ЗАДАЧА 9 ==================================
// Задание

// Напиши функцию getExtremeElements(array) которая принимает один параметр array -
// массив элементов произвольной длины.Функция должна возвращать массив из двух элементов -
// первого и последнего элемента параметра array.

// function getExtremeElements(array) {
//   // Change code below this line
//   const startArray = array[0];
//   const endArray = array[array.length - 1];
//   return [startArray, endArray];

//   // Change code above this line
// }
// ================================== ЗАДАЧА 10 ==================================
// Задание
// Дополни код функции splitMessage(message, delimeter) так,
// чтобы она возвращала в переменной words результат разделения строки message по разделителю delimeter - массив строк.

// function splitMessage(message, delimeter) {
//   let words;
//   // Change code below this line
//   words = message.split(delimeter);
//   // Change code above this line
//   return words;
// }
// ================================== ЗАДАЧА 11 ==================================

// Задание
// Сервису гравировки украшений нужна функция, которая бы автоматически считала цену гравировки, в зависимости от количества слов и цены за слово.
// Объявлена функция calculateEngravingPrice(message, pricePerWord). Эта функция принимает строку, состоящую из слов разделённых только пробелами (параметр message) и цену гравировки одного слова (параметр pricePerWord).
// Напиши тело функции, чтобы она возвращала общую стоимость гравировки всех слов в строке.

// function calculateEngravingPrice(message, pricePerWord) {
//   // Change code below this line
//   const phrase = message.split(' ');
//   const prisePer = phrase.length * pricePerWord;
//   return prisePer;

//   // Change code above this line
// }

// ================================== ЗАДАЧА 12 ==================================
// Задание
// Дополни код функции makeStringFromArray(array, delimeter) так,
// чтобы она возвращала в переменной string результат соединения элементов массива array c разделителем delimeter - строку.

// function makeStringFromArray(array, delimeter) {
//   let string;
//   // Change code below this line
//   string = array.join(delimeter);

//   // Change code above this line
//   return string;
// }

// ================================== ЗАДАЧА 13 ==================================

// Задание
// Термин slug - это человеко-понятный уникальный идентификатор, который используется в веб-разработке для создания читабельных URL-адесов.
// Например, вместо того чтобы пользователь увидел в адресной строке mysite.com/posts/1q8fh74tx, можно сделать slug из названия статьи. В результате адрес получится более приятным для восприятия: mysite.com/posts/arrays-for-begginers.
// Внимание
// Slug это всегда строка в нижнем регистре, слова которой разделены тире.
// Напиши функцию slugify(title) которая принимает заголовок статьи, параметр title, и возвращает slug, созданный из этой строки.
// Значением параметра title будут строки, слова которых разделены только пробелами
// Все символы slug должны быть в нижнем регистре
// Все слова slug должна быть разделены тире

// function slugify(title) {
//   // Change code below this line
//   const slug = title.split(' ').join('-');
//   return slug.toLowerCase();

//   // Change code above this line
// }

// ================================== ЗАДАЧА 14 ==================================
// Задание
// Дополни код так, чтобы переменные содержали частичные копии исходного массива fruits.
// firstTwoEls - массив из первых двух элементов
// nonExtremeEls - массив из всех элементов кроме первого и последнего
// lastThreeEls - массив из трёх последних элементов

// const fruits = ['apple', 'plum', 'pear', 'orange', 'banana'];

// // Change code below this line
// const firstTwoEls = fruits.slice(0, 2);
// const nonExtremeEls = fruits.slice(1, -1);
// const lastThreeEls = fruits.slice(-3);

// ================================== ЗАДАЧА 15 ==================================
// Задание
// Дополни код так, чтобы в переменной allClients получился массив всех элементов массивов oldClients и newClients.

// const oldClients = ['Mango', 'Ajax', 'Poly', 'Kiwi'];
// const newClients = ['Peach', 'Houston'];

// const allClients = oldClients.concat(newClients); // Change this line

// ================================== ЗАДАЧА 16 ==================================
// Задание
// Напиши функцию makeArray(firstArray, secondArray, maxLength)
// для создания нового массива со всеми элементами двух исходных firstArray и secondArray.Параметр maxLength содержит максимально допустимую длину нового массива.
// Если количество элементов нового массива больше maxLength,
// функция должна вернуть копию массива длиной maxLength элементов.В противном случае функция должна вернуть новый массив целиком.

// function makeArray(firstArray, secondArray, maxLength) {
//   // Change code below this line
//   let newArray = firstArray.concat(secondArray);
//   if (newArray.length < maxLength) {
//     return newArray7
//   }
//   return newArray.slice(0, maxLength);

//   // Change code above this line
// }
// console.log(makeArray(['Mango', 'Poly'], ['Ajax', 'Chelsea'], 3));

// ================================== ЗАДАЧА 17 ==================================
// Задание
// Дополни цикл for так, чтобы он логировал все целые числа в диапазоне от start до end включительно.

// const start = 3;
// const end = 7;

// for (let i = start; i <= end; i += 1) {
//   // Change this line
//   console.log(i);
// }

// ================================== ЗАДАЧА 18 ==================================
// Задание
// Напиши функцию calculateTotal(number), которая принимает целое число(параметр number)
// и возвращает сумму всех целых чисел от единицы и до этого числа.Например, если number равно 3, то сумма это 1 + 2 + 3, то есть 6.

// function calculateTotal(number) {
//   // Change code below this line
//   let sum = 0;
//   for (let i = 0; i <= number; i += 1) {
//     sum += i;
//   }
//   return sum;

//   // Change code above this line
// }
// console.log(calculateTotal(3));

// ================================== ЗАДАЧА 19 ==================================
// Задание
// Дополни код цикла for так, чтобы он последовательно логировал все элементы массива fruits.

// const fruits = ['apple', 'plum', 'pear', 'orange'];

// for (let i = 0; i < fruits.length; i +=1) { // Change this line
//   const fruit = fruits[i]; // Change this line
//   console.log(fruit);

// ================================== ЗАДАЧА 20 ==================================
// Задание
// Напиши функцию calculateTotalPrice(order), которая принимает один параметр order - массив чисел, и рассчитывает общую сумму его элементов.
// Общая сумма элементов должна сохраняться в переменной total, которая возвращается, как результат работы функции.

// function calculateTotalPrice(order) {
//   let total = 0;
//   // Change code below this line
//   for (let i = 0; i < order.length; i += 1) {
//     total += order[i];
//   }
//   // Change code above this line
//   return total;
// }
// console.log(calculateTotalPrice([12, 85, 37, 4]));

// ================================== ЗАДАЧА 21 ==================================
// Задание
// Напиши функцию findLongestWord(string) которая
// принимает произвольную строку состоящую только из слов разделённых
// пробелом(параметр string) и возвращает самое длинное слово в этой строке.

// function findLongestWord(string) {
//   const stringSplit = string.split(' ');
//   let longestWord = '';
//   for (let i = 0; i < stringSplit.length; i += 1) {
//     if (longestWord.length < stringSplit[i].length) {
//       longestWord = stringSplit[i];
//     }
//   }
//   return longestWord;
// }
// console.log(findLongestWord('The quick brown fox jumped over the lazy dog'));

// ================================== ЗАДАЧА 22 ==================================
// Задание
// Дополни код функции createArrayOfNumbers(min, max) так, чтобы она возвращала массив всех целых чисел от значения min до max.

// function createArrayOfNumbers(min, max) {
//   const numbers = [];
//   // Change code below this line
//   for (let i = min; i <= max; i += 1) {
//     numbers.push(i);
//   }
//   // Change code above this line
//   return numbers;
// }

// ================================== ЗАДАЧА 23 ==================================

// Задание
// Напиши функцию filterArray(numbers, value), которая принимает массив чисел(параметр numbers) и возвращает новый массив,
// в котором будут только те элементы массива numbers, которые больше чем значение параметра value(число).

// function filterArray(numbers, value) {
//   // Change code below this line
//   const newnumders = [];
//   for (let i = 1; i < numbers.length; i += 1) {
//     if (numbers[i] > value) {
//       newnumders.push(numbers[i]);
//     }
//   }
//   return newnumders;
//   // Change code above this line
// }
// ================================== ЗАДАЧА 24 ==================================
// Задание
// Функция checkFruit(fruit) принимает строку с названием фрукта (параметр fruit), и проверяет есть ли такой фрукт в массиве fruits.
// Дополни код функции так, что если:
// фрукт есть в массиве, то функция возвращает true;
// фрукта нет в массиве, то функция возвращает false.

// function checkFruit(fruit) {
//   const fruits = ['apple', 'plum', 'pear', 'orange'];

//   return fruits.includes(fruit); // Change this line
// }

// ================================== ЗАДАЧА 25 ==================================
// Задание
// Общими элементами массивов называют те элементы, которые присутствуют во всех массивах.
// Например, в двух массивах [1, 3, 5] и [0, 8, 5, 3] общими будут числа 3 и 5, т.к. они
// присутствуют в обоих исходных массивах.А числа 0, 1 и 8 присутствуют только в одном из массивов.
// Напиши функцию getCommonElements(array1, array2) которая получает два массива
// произвольной длины в параметры array1 и array2, и возвращает новый массив, состоящий из тех элементов,
// которые присутствуют в обоих исходных массивах.

// function getCommonElements(array1, array2) {
//   // Change code below this line
//   const newArray = [];
//   for (const arr3 of array1) {
//     if (array2.includes(arr3)) {
//       newArray.push(arr3);
//     }
//   }

//   return newArray;
//   // Change code above this line
// }

// ================================== ЗАДАЧА 26 ==================================
// Задание
// Выполни рефакторинг кода функции calculateTotalPrice(order) заменив цикл for на for...of.

// function calculateTotalPrice(order) {
//   let total = 0;
//   // Change code below this line

//   for (const ord of order) {
//     total += ord;
//   }

//   // Change code above this line
//   return total;
// }

// ================================== ЗАДАЧА 27 ==================================
// Задание
// Выполни рефакторинг функции filterArray(numbers, value) заменив цикл for на for...of.

// function filterArray(numbers, value) {
//   // Change code below this line
//   const filteredNumbers = [];

//   for (const number of numbers) {
//     if (number > value) {
//       filteredNumbers.push(number);
//     }
//   }

//   return filteredNumbers;
//   // Change code above this line
// }

// ================================== ЗАДАЧА 28 ==================================
// Задание
// Выполни рефакторинг функции filterArray(numbers, value) заменив цикл for на for...of.
// Change code below this line
// const a = 3 % 1 ;
// const b = 4 % 3;
// const c = 11 % 8;
// const d = 12 % 7;
// const e = 8 % 6;

// 5 % 1 = 0;
// // 5, разделенное на 1, равно 5, а остаток - 0

// 5 % 2 = 1;
// //  5, разделенное на 2, равно 2, а остаток - 1

// 5 % 3 = 2;
// //  5, разделенное на 3, равно 1, а остаток - 2

// 5 % 4 = 1;
// //  5, разделенное на 4, равно 1, а остаток - 1

// 5 % 5 = 0;
// //  5, разделенное на 5, равно 1, а остаток - 0

// ================================== ЗАДАЧА 29 ==================================
// Задание
// Напиши функцию getEvenNumbers(start, end) которая возвращает массив всех чётных чисел от start до end.
// Чётным считается число которое делится на 2 без остатка(10 % 2 === 0).

// function getEvenNumbers(start, end) {
//   const array = [];
//   for (let i = start; i <= end; i += 1) {
//     if (i % 2 === 0) {
//       array.push(i);
//     }
//   }
//   return array;
// }

// ================================== ЗАДАЧА 30 ==================================
// Задание
// Дополни код так, чтобы в переменную number записывалось первое число от start до end, которое делится на 5 без остатка.

// const start = 6;
// const end = 27;
// let number;

// for (let i = start; i < end; i += 1) {
//   if (i % 5 === 0) {
//     number = i;
//     break;
//   }
// }

// ================================== ЗАДАЧА 31 ===============================
// Задание
// Выполни рефакторинг функции findNumber(start, end, divisor) так, чтобы она:

// возвращала первое число от start до end, которое делится на divisor без остатка
// не использовала оператор break
// не использовала переменную number

// function findNumber(start, end, divisor) {
//   // Change code below this line
//   let number;

//   for (let i = start; i < end; i += 1) {
//     if (i % divisor === 0) {
//       return (number = i);
//     }
//   }

//   return number;
//   // Change code above this line
// }

// ================================== ЗАДАЧА 31 ===============================
// Задание
// Напиши функцию includes(array, value), которая делает тоже самое, что и метод массива массив.includes(значение) - проверяет, есть ли в массиве array значение value, возвращая true если есть и false в противном случае.

// При выполнении этой задачи в теле функции includes() нельзя использовать метод массив.includes(значение).

// function includes(array, value) {
//   // Change code below this line
//   for (let i = 0; i <= array.length; i += 1) {
//     if (array[i] === value) {
//       return true;
//     }
//   }
//   return false;
//   // Change code above this line
// }
