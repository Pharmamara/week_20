//Задание 1
//Создайте функцию makeOne, которая пытается вызвать функцию functionWithErrors
//При этом отлавливает ошибку с помощью блока try/catch

function makeOne() {
  const resultOne = document.getElementById("result1");
  //Блок try
  try {
    functionWithErrors(); //Попытка вызова несуществующей функции
    resultOne.textContent = "Функция вызвана без ошибок";
  } catch (error) {
    //Блок catch
    resultOne.textContent = "Ошибка была перехвачена: " + error.message;
    console.error("Ошибка была перехвачена:", error.message);
  }
}

document.querySelector(".b-1").addEventListener("click", makeOne);

//Задание 2
//Cоздайте функцию makeTwo, которая используя блок try/catch, создайте код, который пытается перезаписать константу e,
//и обрабатывает ошибку, если этот код не выполняется.

function makeTwo() {
  const resultTwo = document.getElementById("result2");
  //Ваш код
  try {
    const e = 2;
    console.log((e = 3));
    resultTwo.textContent = "Функция вызвана без ошибок";
  } catch (error) {
    resultTwo.textContent = "Ошибка 2 была перехвачена: " + error.message;
    console.error("Ошибка 2 была перехвачена:", error.message);
  }
}

document.querySelector(".b-2").addEventListener("click", makeTwo);

//Задание 3
//Cоздайте функцию makeThree, которая используя блок try/catch, который пытается выполнить код с оператором `throw new Error`,
//и обрабатывает ошибку, если происходит попытка выполнить этот оператор.
function div(a, b) {
  if (b !== 0) {
    return a / b;
  } else {
    throw new Error("ошибка деления на ноль");
  }
}
function makeThree() {
  const resultThree = document.getElementById("result3");
  try {
    alert(div(3, 0));
  } catch (error) {
    resultThree.textContent = "Ошибка была перехвачена: " + error.message;
    console.error("Вы пытаетесь делить на 0, что запрещено", error.message);
  }
}

document.querySelector(".b-3").addEventListener("click", makeThree);

//Задание 4
//Cоздайте функцию makeFour, которая использует блок try/catch. Ошибка не должна выводиться на экран, а должен быть выведен результат умножения в элемент с id "result4".
const multiply = (c, d) => {
  if (d < 10 && c !== 0) {
    return c * d;
  } else {
    throw new Error("не соблюдено условие на значение множителей!");
  }
};
function makeFour() {
  //Ваш код
  const resultFour = document.getElementById("result4");
  try {
    resultFour.textContent = multiply(3, 10);
  } catch (error) {
    resultFour.textContent = "Ошибка была перехвачена: " + error.message;
  }
}

document.querySelector(".b-4").addEventListener("click", makeFour);

//Задание 5
//Допишите функцю makeFive так, чтобы она использовала оператор throw для генерации исключения в случае ошибки

const inputData5 = (inputData) => {
  if (inputData < 0) {
    return inputData;
  } else {
    throw new Error("inputData не соответствует условию");
  }
};
function makeFive() {
  const resultFive = document.getElementById("result5");
  try {
    resultFive.textContent = inputData5(1);
  } catch (error) {
    resultFive.textContent = "Ошибка была перехвачена: " + error.message;
  }
}

/*let inputData = -1;
  if (inputData < 0) {
    console.log("верно");
  } else {
    throw new Error("ошибка!");
    console.log("ошибка");
     return inputData == 0 ? 1 : inputData * (inputData - 1);*/

document.querySelector(".b-5").addEventListener("click", makeFive);

//Задание 6
//Создайте функцию makeSix, которая дополнит код функции makeFive так, чтобы она использовала оператор throw для генерации исключения в случае ошибки, а затем перехватывала это исключение и выводила в консоль сообщение "Ошибка перехвачена".

const inputData6 = (inputData) => {
  let inputData1 = -1;
  //Ваш код
  if (inputData1 < 0) {
    return `Значение переменной inputData1: ${inputData1}`;
  } else {
    throw new Error("inputData1 не соответствует условию");
  }
};
function makeSix() {
  const resultSix = document.getElementById("result6");
  try {
    resultSix.textContent = inputData6(1);
  } catch (error) {
    resultSix.textContent = "Ошибка была перехвачена: " + error.message;
  }
}

document.querySelector(".b-6").addEventListener("click", makeSix);

//Задание 7
//Допишите функцию makeSeven так, что если делитель равен нулю, бросьте исключение с сообщением "Деление на ноль недопустимо".

function makeSeven() {
  const resultSeven = document.getElementById("result7");
  //Ваш код
  try {
    let dividend = 10;
    let divisor = 0;
    if (divisor !== 0) {
      resultSeven.textContent = dividend / divisor;
    } else {
      throw new Error("Деление на ноль недопустимо");
    }
  } catch (error) {
    resultSeven.textContent = "Ошибка была перехвачена: " + error.message;
  }
}

document.querySelector(".b-7").addEventListener("click", makeSeven);

//Задание 8
//Добавьте в блок функции makeSeven блок try/catch, создайте новую функцию makeEight

function makeEight() {
  //Ваш код
  const resultEight = document.getElementById("result8");
  try {
    let dividend = 10;
    let divisor = 2;
    let division = dividend / divisor;
    if (divisor !== 0) {
      resultEight.textContent = `Вычисление выполнено с результатом: ${division}`;
    } else {
      throw new Error("Деление на ноль недопустимо");
    }
  } catch (error) {
    resultEight.textContent = "Ошибка была перехвачена: " + error.message;
  }
}

document.querySelector(".b-8").addEventListener("click", makeEight);

//Задание 9
//Добавьте в код функции makeNine блок try/catch так, чтобы вместо ошибки выводилось цифра 1 в элемент с id "result9"

function makeNine() {
  const resultNine = document.getElementById("result9");
  //Тут добавляете try
  try {
    let a = 22;
    let c = a + d;
    return c;
  } catch (error) {
    //Тут catch
    //Вывод цифры в элемент
    resultNine.textContent = "1";
  }
}

document.querySelector(".b-9").addEventListener("click", makeNine);

//Задание 10
//Добавьте в функцию makeTen блок try, в котором адрес будет проверяться на валидность и пробрасываться ошибка, если адрес некорректен
//Если проверка пройдена успешно, выведите сообщение "Email-адрес корректен" на страницу
//Если возникла ошибка (некорректный email), перехватите исключение с помощью блока catch
//В блоке catch выведите сообщение об ошибке на страницу

function makeTen() {
  let email = "example.com";
  let emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  const resultTen = document.getElementById("result10");
  try {
    if (!emailPattern.test(email)) {
      throw new Error("Некорректный email-адрес");
    } else {
      resultTen.textContent = "Email-адрес корректен";
    }
  } catch (error) {
    resultTen.textContent = "Ошибка была перехвачена: " + error.message;
  }
}

document.querySelector(".b-10").addEventListener("click", makeTen);

//Задание 11 ИЗМЕНИЛА ПАРАМЕТР ПРОВЕРКИ КОРРЕКТНОСТИ ВВОДА НА ДЛИНУ, ИЗНАЧАЛЬНО БЫЛ ПАТТЕРН /*!/^\d+$/.test(phoneNumber*/
//Допишите проверку телефона пользователя, если длина телефона менее 10 символов бросьте исключение throw new Error с сообщением "Некорректная длина телефонного номера"

function makeEleven() {
  phoneNumber = "066298207";
  phoneNumberLength = phoneNumber.length;
  const resultEleven = document.getElementById("result11");
  try {
    if (phoneNumberLength < 10) {
      throw new Error(
        "Некорректная длина телефонного номера - длина менее 10 цифр"
      );
    } else {
      resultEleven.textContent = "Номер телефона введен корректно";
    }
  } catch (error) {
    resultEleven.textContent = "Ошибка была перехвачена: " + error.message;
  }
}

document.querySelector(".b-11").addEventListener("click", makeEleven);

//Задание 12
//Создайте функцию makeTwelve, которая проверит возраст пользователя.
//Если возраст меньше 18 лет, необходимо бросить исключение типа Error с сообщением "Доступ запрещен для лиц младше 18 лет". В противном случае, выведите сообщение "Доступ разрешен".

function makeTwelve() {
  let age = 12;
  const resultTwelve = document.getElementById("result12");
  try {
    if (age < 18) {
      //Ваш код
      throw new Error("Доступ запрещен для лиц младше 18 лет");
    } else {
      //Ваш код
      resultTwelve.textContent = "Доступ разрешен";
    }
  } catch (error) {
    resultTwelve.textContent = "Ошибка была перехвачена: " + error.message;
  }
}

document.querySelector(".b-12").addEventListener("click", makeTwelve);

//Задание 13
//Добавьте в функцию makeTwelve блок try/catch

function makeThirteen() {
  let age = 10;
  //Ваш код
  const resultThirteen = document.getElementById("result13");
  try {
    if (age < 18) {
      //Ваш код
      throw new Error("Доступ запрещен для лиц младше 18 лет");
    } else {
      //Ваш код
      resultThirteen.textContent = "Доступ разрешен";
    }
  } catch (error) {
    resultThirteen.textContent = "Ошибка была перехвачена: " + error.message;
  }
}

document.querySelector(".b-13").addEventListener("click", makeThirteen);

//Задание 14
//Создайте функцию makeFourteen, которая будет подсчитывать размер скидки на товар
//Однако существует ограничение: скидка не может быть отрицательной и не может превышать 50%
//В случае нарушения этого ограничения, необходимо бросить исключение типа Error с сообщением "Некорректное значение скидки"
//В противном случае, выведите сообщение с размером скидки.
//Используйте блок try/catch

function makeFourteen() {
  let discount = 51;
  const resultFourteen = document.getElementById("result14");
  try {
    if (discount < 0 || discount > 50) {
      //Ваш код
      throw new Error("Некорректное значение скидки");
    } else {
      resultFourteen.textContent = `Размер скидки: ${discount}%`;
    }
  } catch (error) {
    resultFourteen.textContent = "Ошибка была перехвачена: " + error.message;
  }
}

document.querySelector(".b-14").addEventListener("click", makeFourteen);

//Задание 15
//Есть функция makeFifteen в неё передаются два параметра: переменная ("а") и некоторая функция ("func"). Вам необходимо запустить функцию "func", с переменной "а" в качестве аргумента
//В блоке catch вывести имя (свойство "name") с возникающей ошибки в элемент с id result15

function makeFifteen(a, func) {
  const resultFifteen = document.getElementById("result15");
  try {
    //Ваш код
    return func(a);
  } catch (error) {
    //Ваш код
    resultFifteen.textContent =
      "Ошибка была перехвачена, ее имя: " + error.name;
  }
}

document.querySelector(".b-15").addEventListener("click", makeFifteen);

//Задание 16
//Есть функция makeSixteen в неё передаются два параметра: число ("n") и некоторая функция ("func"). Вам необходимо запустить функцию "func", с числом "n" в качестве аргумента
//В блоке catch вывести сообщение с описанием ошибки в элемент с id result16

function makeSixteen(n, func) {
  const resultSixteen = document.getElementById("result16");
  //Ваш код
  try {
    //Ваш код
    return func(n);
  } catch (error) {
    //Ваш код
    resultSixteen.textContent =
      "Ошибка была перехвачена: " + error.name + "; " + error.message;
  }
}

document.querySelector(".b-16").addEventListener("click", makeSixteen);

//Задание 17
//Есть функция makeSeventeen в неё передаются два параметра: строка ("str") и некоторая функция ("func"). Вам необходимо запустить функцию "func", с строкой "str" в качестве аргумента
//В блоке catch вывести сообщение с описанием ошибки в элемент с id result17

function makeSeventeen(str, func) {
  const resultSeventeen = document.getElementById("result17");
  //Ваш код
  try {
    //Ваш код
    return func(str);
  } catch (error) {
    //Ваш код
    resultSeventeen.textContent =
      "Ошибка была перехвачена: " + error.name + "; " + error.message;
  }
}

// добавьте слушатель события
document.querySelector(".b-17").addEventListener("click", makeSeventeen);

//Задание 18
//Создайте функцию makeEighteen и добавьте try, catch, finnaly так, чтобы в элемент с id result18 выводился 0 при ошибке
//А в элемент с id result18a всегда выводилось слово finnaly

function makeEighteen() {
  const resultEighteen = document.getElementById("result18");
  const forWordFinally = document.getElementById("result18a");
  //Блок try
  try {
    //Некорректная операция деления для примера, может вызвать ошибку
    let dividend = 10;
    let divisor = 0;
    let division = dividend / divisor;
    if (divisor == 0) {
      throw new Error("Деление на ноль недопустимо");
    } else {
      resultEighteen.textContent = division;
    }
  } catch (error) {
    //Блок catch (error)
    resultEighteen.textContent = "0"; //Вывод '0' при ошибке
  } finally {
    //Блок finally
    forWordFinally.textContent = "finally";
  }
}

document.querySelector(".b-18").addEventListener("click", makeEighteen);

//Задание 19
//Создайте функцию makeNineteen и добавьте try, catch, finally так, чтобы в элемент с id result19 выводилась сумма элементов массива при успешном выполнении функции и сообщение "Ошибка" при ошибке
//А в элемент с id result19a всегда выводилась строка "finally19"

function makeNineteen() {
  const resultNineteen = document.getElementById("result19");
  const forWordFinally19 = document.getElementById("result19a");
  //Блок try
  try {
    const arr = [1, 2, 3];
    const sum = arr.reduce((acc, val) => acc + val, 0);
    resultNineteen.textContent = sum;
  } catch (error) {
    //Блок catch (error)
    console.error(error); //Вывод ошибки в консоль
    //Ваш код
    resultNineteen.textContent = "ошибка";
  } finally {
    //Блок finally
    forWordFinally19.textContent = "finally19";
  }
}

document.querySelector(".b-19").addEventListener("click", makeNineteen);

//Задание 20
//Создайте функцию makeTwenty и добавьте try, catch, finally так, чтобы в элемент с id result20 выводилось значение, возвращаемое функцией calculateValue, при успешном выполнении и сообщение "Ошибка" при ошибке
//А в элемент с id result20a всегда выводилась строка "finally20"

function makeTwenty() {
  //Ваш код
  const resultTwenty = document.getElementById("result20");
  const forWordFinally20 = document.getElementById("result20a");
  try {
    return calculateValue();
  } catch (error) {
    resultTwenty.textContent = "Ошибка";
  } finally {
    forWordFinally20.textContent = "finally20";
  }
}

// добавьте слушатель события
document.querySelector(".b-20").addEventListener("click", makeTwenty);

// Задание 21
// Создайте функцию makeTwentyOne и добавьте try, catch, finally так, чтобы в элемент с id result21 выводилось значение, возвращаемое функцией fetchData, при успешном выполнении и сообщение "Ошибка" при ошибке
// А в элемент с id result21a всегда выводилась строка "finally21"

function fetchData() {
  if (Math.random() < 0.5) {
    throw new Error("Произошла ошибка при получении данных");
  }
  return "Данные успешно получены";
}

function makeTwentyOne() {
  //Ваш код
  const resultTwentyOne = document.getElementById("result21");
  const forWordFinally21 = document.getElementById("result21a");
  try {
    return fetchData();
  } catch (error) {
    resultTwentyOne.textContent = "Ошибка";
  } finally {
    forWordFinally21.textContent = "finally21";
  }
}

// добавьте слушатель события
document.querySelector(".b-21").addEventListener("click", makeTwentyOne);

//Задание 22
//Создайте функцию makeTwentyTwo, которая получает json файл, который некорректен. Чтобы предотвратить ошибку, добавьте блок try/catch.

const json = "{ некорректный JSON }";

function makeTwentyTwo() {
  const resultTwentyTwo = document.getElementById("result22");
  //Блок try
  try {
    let user = JSON.parse(json); //Возникает ошибка
    console.log(user.name); //Не сработает
  } catch (e) {
    //Блок catch (e)
    resultTwentyTwo.textContent =
      "Извините, в данных ошибка, мы попробуем получить их ещё раз.";
    console.log(e.name);
    console.log(e.message);
  }
}

document.querySelector(".b-22").addEventListener("click", makeTwentyTwo);

//Задание 23
//Создайте функцию makeTwentyThree, которая получает JSON файл, который некорректен.
//Чтобы предотвратить ошибку, добавьте блок try/catch.

const jsonTwentyThree = "{ некорректный JSON }";

function makeTwentyThree() {
  const resultTwentyThree = document.getElementById("result23");
  //Ваш код
  try {
    let user = JSON.parse(json);
    console.log(user.name);
  } catch (error) {
    resultTwentyThree.textContent =
      "Извините, в данных ошибка, мы попробуем получить их ещё раз.";
    console.log(error.name);
    console.log(error.message);
  }
}

// Добавьте слушатель события
document.querySelector(".b-23").addEventListener("click", makeTwentyThree);

//Задание 24
//Создайте функцию makeTwentyFour, которая пытается выполнить некорректную операцию и использует оператор throw,
//ошибка обрабатывается в блоке catch

function makeTwentyFour() {
  const resultTwentyFour = document.getElementById("result24");
  try {
    let divisor = 0;
    let result = 24 / divisor;
    if (divisor === 0) {
      //Ваш код
      throw new Error("Деление на ноль недопустимо");
    } else {
      resultTwentyFour.textContent = result;
    }
  } catch (error) {
    resultTwentyFour.textContent =
      "Ошибка была перехвачена: " + error.name + "; " + error.message;
  }
}

document.querySelector(".b-24").addEventListener("click", makeTwentyFour);

//Задание 25
//Создайте функцию makeTwentyFive, которая с вероятностью 90% выбрасывает ошибку,
//и обрабатывает эту ошибку в блоке catch.

function makeTwentyFive() {
  const resultTwentyFive = document.getElementById("result25");
  try {
    const randomValue = Math.random();
    if (randomValue <= 0.9) {
      throw new Error("Искусственная ошибка");
    }
    resultTwentyFive.textContent = "Операция успешно выполнена";
  } catch (error) {
    resultTwentyFive.textContent = "Ошибка";
  }
}

document.querySelector(".b-25").addEventListener("click", makeTwentyFive);

//Задание 26
//Создайте функцию makeTwentySix, которая использует setTimeout с блоком try/catch,
//чтобы обработать ошибку, которая может возникнуть при асинхронном выполнении кода.

function makeTwentySix() {
  const resultTwentySix = document.getElementById("result26");

  setTimeout(() => {
    try {
      throw new Error("Ошибка при асинхронном выполнении кода!");
    } catch (error) {
      console.error(error);
    }
  }, 1000);
}
document.querySelector(".b-26").addEventListener("click", makeTwentySix);

//Задание 27
//Создайте функцию makeTwentySeven, которая использует async/await для асинхронной операции
//и блок try/catch, чтобы обработать ошибку, которая может возникнуть при этой асинхронной операции.

const resultTwentySeven = document.getElementById("result27");

function simulateAsyncOperation() {
  return new Promise((resolve, reject) => {
    if (Math.random() < 0.9) {
      reject(new Error("Произошла ошибка при асинхронной операции"));
    } else {
      resolve("Асинхронная операция успешно выполнена");
    }
  });
}

//Добавить название функции и ключевое слово async
//Подумайте, в каком месте нужно добавить await
// resultTwentySeven.textContent = 'Ожидание...';
// try {
// 	const result = simulateAsyncOperation();
// 	resultTwentySeven.textContent = 'Результат: ' + result;
// } catch (error) {
// 	resultTwentySeven.textContent = 'Произошла ошибка: ' + error.message;
// 	console.error(error.name);
// }

// document.querySelector('.b-27').addEventListener('click', makeTwentySeven);

//Задание 28
//Создайте функцию makeTwentyEight, которая содержит код с использованием Promise.reject и setTimeout,
//демонстрирующий, что ошибки внутри этих операций не попадают в блок catch на том же уровне.

function makeTwentyEight() {
  const resultTwentyEight = document.getElementById("result28");
  resultTwentyEight.textContent = "Ожидание...";
  try {
    Promise.reject("err")
      .then((result) => {
        resultTwentyEight.textContent = "Успешное завершение: " + result;
      })
      .catch((error) => {
        resultTwentyEight.textContent = "Ошибка в Promise.reject: " + error;
        console.error(error);
      });

    //Код с setTimeout
    setTimeout(() => {
      throw Error("ошибка");
    }, 1000);
  } catch (e) {
    resultTwentyEight.textContent = "Ошибка на верхнем уровне: " + e;
    console.log("Ошибка на верхнем уровне:", e);
  }
}

document.querySelector(".b-28").addEventListener("click", makeTwentyEight);

//Задание 29
//Создайте функцию handlePromise, которая содержит асинхронную операцию с использованием async/await
//и блок try/catch для обработки ошибки.

const resultTwentyNine = document.getElementById("result29");

function handlePromise() {
  //Блок try
  Promise.reject("это точно ошибка");
  //Блок catch (e)
  resultTwentyNine.textContent = "Ошибка перехвачена: " + e;
  console.log(e); //err
}

function makeTwentyNine() {
  handlePromise();
}

document.querySelector(".b-29").addEventListener("click", makeTwentyNine);

//Задание 30
//Выполнение функции упадёт в блок catch?
//Ответ будет доступен при нажатии на кнопку "Узнать ответ"

function makeThirty() {
  const resultTwentyThirty = document.getElementById("result30");
  resultTwentyThirty.textContent = string;
  return;
  try {
    while (true) {
      // Бесконечный цикл
    }
  } catch (error) {
    resultTwentyThirty.textContent = "Произошла ошибка: " + error.message;
    console.error("Произошла ошибка:", error.message);
  }
}

document.querySelector(".b-30").addEventListener("click", makeThirty);
