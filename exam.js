// // 콘솔에 메세지 보는 것
// // xx.xx(값)
// // 괄호 안에 있는 값을 출력

// // number type
// console.log(555); // 555

// // string type
// console.log("hello"); // "hello"

// // variable(변수)
// console.log(5 + 2); // 7
// console.log(5 * 2); // 10
// console.log(5 / 2); // 2.5

// // 변경해야 할 값을 변수로 선언해 반복되는 작업을 줄일 수 있다.
// // number
// let num1 = 10;
// let num2 = 2;

// console.log(num1 + num2); // 12
// console.log(num1 * num2); // 20
// console.log(num1 / num2); // 5

// // string
// let myName = "Hoon";

// console.log("Hi " + myName); // Hi Hoon


// // const와 let 의 차이


// // boolean
// const amIFat = false;
// console.log(amIFat);

// const a = null;
// // a 라는 변수에 아무것도 없는 상태로 채워짐
// // null = 아무것도 없다

// let b;
// console.log(b)  // undefined = 정의되지 않은, 공간은 있는데 값은 없는

// // Array
// const daysOfWeek = ["mon", "tue", "wed", "thu", "fri", "sta"]
// console.log(daysOfWeek);
// // 컴퓨터는 1이 아닌 0부터 숫자를 센다
// console.log(daysOfWeek[0]) // "mon"
// console.log(daysOfWeek[3]) // "thu"
// console.log(daysOfWeek[5]) // "sta"

// // add one more day to the array
// daysOfWeek.push("sun");

// console.log(daysOfWeek); // ['mon', 'tue', 'wed', 'thu', 'fri', 'sta', 'sun']
// console.log(daysOfWeek[6]) // "sun"

// // delete one day to the array
// daysOfWeek.pop("sun");
// // 리스트에 마지막을 제거
// console.log(daysOfWeek); // ['mon', 'tue', 'wed', 'thu', 'fri', 'sta']


// // Object
// const player = {
//   name: 'hoon',
//   points: 10,
//   fat: true
// }

// console.log(player)
// console.log(player.name)
// player.points = 15;
// console.log(player)
// player.points = player.points + 10;
// console.log(player)


// function
// function sayHello(nameOfPerson, age) {  // argument
//   console.log(`Hello my name is ${nameOfPerson} and I'm ${age}`);
// }

// sayHello('hoon', 33);
// sayHello('bo-young', 35);
// sayHello('ha-seong', 1);


// function plus(firstNum, secondNum) {
//   console.log(firstNum + secondNum)
// }

// plus(60, 10)

// function divide(a, b) {
//   console.log(a / b);
// }

// divide(10, 5);

// const player = {
//   name: 'hoon',
//   sayHello: function (otherPersonName) {
//     console.log(`Hello ${otherPersonName}, nice to meet you!`)
//   }
// }

// console.log(player.name);
// player.sayHello("jin");


// // calculator

// const calculator = {
//   plus: function (a, b) {
//     return a + b;
//   },
//   minus: function (a, b) {
//     return a - b;
//   },
//   multiply: function (a, b) {
//     return a * b;
//   },
//   divide: function (a, b) {
//     return a / b;
//   },
//   power: function (a, b) {
//     return a ** b;
//   }
// }

// const plusResult = calculator.plus(2, 3);
// const minusResult = calculator.plus(plusResult, 10);
// const multiplyResult = calculator.plus(10, minusResult);
// const divideResult = calculator.plus(multiplyResult, plusResult);
// const powerResult = calculator.plus(divideResult, minusResult);



// const age = 96;

// function calculateKrAge(ageOfForeigner) {
//   return ageOfForeigner + 2;
// }

// const krAge = calculateKrAge(age);

// console.log(krAge);


// // 조건문
// const age = prompt("How old are you?")

// console.log(age, parseInt(age)) //(string, number)
// // parseInt() 는 "15"를 number로 바꿀 수 있지만 "abc"는 바꾸지 못해 NaN이 된다.

// const age2 = parseInt(prompt("How old are you?"))

// if (isNaN(age2) || age2 < 0) {
//   console.log("Please write a number")
// } else if (age2 < 18) {
//   console.log("You are too young")
// } else if (age2 >= 18 && age2 <= 50) {
//   console.log("You can drink")
// } else if (age2 > 50 && age2 <= 80) {
//   console.log("you should exercise")
// } else if (age2 === 100) {
//   console.log("Wow you are wise")
// } else if (age2 > 80) {
//   console.log("You can do whatever you want.")
// }


// // and
// true && true === true
// true && false === false
// false && true === false
// false && false === false

// // or
// true || true === true
// true || false === true
// false || true === true
// false || false === false


// Events


// function handleMouseEnter() {
//   h1.innerText = "Mouse is here!"
// }

// function handleMouseLeave() {
//   h1.innerText = "Mouse is gone!"
// }

// function handleWindowResize() {
//   document.body.style.backgroundColor = "yellowgreen"
// }

// function handleWindowCopy() {
//   alert("copier!")
// }

// function handleWindowOffline() {
//   alert("SOS no Wifi")
// }

// function handleWindowOnline() {
//   alert("Good!")
// }

// h1.onclick = handleTitleClick
// h1.addEventListener("mouseenter", handleMouseEnter)
// h1.onmouseenter = handleMouseEnter
// h1.addEventListener("mouseleave", handleMouseLeave)
// h1.onmouseleave = handleMouseLeave


// window.addEventListener("resize", handleWindowResize)
// window.addEventListener("copy", handleWindowCopy)
// window.addEventListener("offline", handleWindowOffline)
// window.addEventListener("online", handleWindowOnline)



// CSS

// const h1 = document.querySelector("div.hello:first-child h1")

// function handleTitleClick() {
//   const clickedClass = "clicked";
//   if (h1.classList.contains(clickedClass)) {
//     // className 는 과거의 것을 생각하지 않고 바꿔버림
//     // classList.contains 는 기존의 클래스이름을 그대로 둠
//     h1.classList.remove(clickedClass) = "";
//     // classList.contains 는 기존의 클래스이름을 그대로 두고 clicked 만 제거한다.
//   } else {
//     h1.classList.add(clickedClass)
//     // classList.contains 는 기존의 클래스이름을 그대로 두고 clicked 만 추가한다.
//   }
//   h1.classList.toggle("clicked")
// }

// h1.addEventListener("click", handleTitleClick)