// задание 1
const userAge = 20;

/*
  напиши ниже условие, которое выведет в консоль текст "ты пацан" 
  если userAge меньше 35
*/
// const userAge = 20;
let text = 'ты пацан'
if(userAge<35)
  console.log(text)


//задание 2
const isAdmin = false;

/* 
  напиши ниже условие, которое выведет в консоль текст "доступ запрещен", 
  если значение константы isAdmin ложно
*/
// const isAdmin = false;
let text = 'доступ запрещен'
if(isAdmin === false)
  console.log(text)


//задание 3
const password = "sherlock";
const realPassword = "holmes";

/* 
   напиши ниже условие, которое выведет в консоль текст "правильный пароль" 
   только в том случае, если значения констант password и realPassword совпадают.
*/   
// const password = "sherlock";
const realPassword = "holmes";
let text = "правильный пароль"
if(password === realPassword )
console.log(text)



// задание 4
const myAge = "20";

/*
  напиши ниже условие, которое выведет в консоль текст "возраст указан верно" 
  только в том случае, если ТИПОМ переменной myAge является number.
  Тебе понадобится оператор typeof: https://learn.javascript.ru/types#type-typeof
*/
//const myAge = "20"
let text = "возраст указан верно"
if(typeof myAge === 'number')
  console.log(text)

// задание 5
const x = 2.7;
const y = -6;
/*
  напиши ниже условие, которое выведет в консоль "икс меньше игрик" только 
  в том случае, если значение переменной x меньше, чем значение переменной y
*/
// const x = 2.7;
const y = -6;
let text = "икс меньше игрик"
if(x<y)
  console.log(text)