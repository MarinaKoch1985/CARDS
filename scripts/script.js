/*ЗАДАЧА 1
Дан массив с числами.
let arr = [1, -6, 4, 0, 9, -5, 16];
Создайте новый массив, состоящий только из отрицательных чисел.
Создайте новый массив, состоящий только из четных чисел.
Напишите программу, высчитывающую количество отрицательных чисел в этом массиве.
ЗАДАЧА 2
Дан массив с числами.
let arr2 = [1, -6, 4, 0, 9, -5, 16];
Оставьте в нем только положительные числа. Затем извлеките квадратный корень из этих чисел.
ЗАДАЧА 3
Дан массив из разных типов данных.
let arr = [8, 'hello', true, false, 'bye', 122, undefined, 15];
Необходимо сформировать массив из чисел (если значение не число, то подставить -1)
ЗАДАЧА 4
Дан массив из массивов. Вложенные массивы хранят в себе данные о пользователе (имя, фамилия и активность).
Напишите filter, который оставляет только активных пользователей (true).
Добавьте map, который в отфильтрованном списке преобразует вложенные массивы в строки.
let arr = [
  ['Максим', 'Грибов', true],
  ['Антон', 'Куликов', true],
  ['Светлана', 'Иванова', false],
  ['Ольга', 'Петрова', true],
  ['Сидр', 'Сидоров', false]
]*/


let arr = [1, -6, 4, 0, 9, -5, 16];

//Создайте новый массив, состоящий только из отрицательных чисел.

let new_arr = arr.filter(el => el < 0);
console.log(new_arr);

//Создайте новый массив, состоящий только из четных чисел.

let new_arr2 = arr.filter(el => el >= 0);
console.log(new_arr2);

//Напишите программу, высчитывающую количество отрицательных чисел в этом массиве.

let new_arr3 = arr.filter(el => {
  let count = 0;
  for(let i = 0; i <= arr.length; i++){
    if(el < 0){
    }
    return Math.length;
  }
  }
  
 );
console.log(new_arr3);
  
