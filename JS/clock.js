const clock = document.querySelector("h2#clock");

// function sayHello() {
//   console.log('hello');
// }

// setInterval(sayHello, 2000)  // (func, 반복되는 시간(ms))
// setTimeout(sayHello, 3000) // (func, 기다릴 시간(ms))


function getClock() {
  const date = new Date()
  const hours = String(date.getHours()).padStart(2, "0")
  const minutes = String(date.getMinutes()).padStart(2, "0")
  const seconds = String(date.getSeconds()).padStart(2, "0")
  clock.innerText = `${hours}:${minutes}:${seconds}`;
}

// 로드 되자마자 getClock 호출
// 이유는 그렇게 하지 않으면 1초 뒤에 시간이 나타나기 때문
getClock();
setInterval(getClock, 1000);