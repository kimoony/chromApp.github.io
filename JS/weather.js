const city = document.querySelector('#weather span:nth-child(1)');
const img = document.querySelector('#weather img');
const weather = document.querySelector('#weather span:nth-child(3)');
const API_KEY = '8b4400e8424eb03dac3f2ff4dc6ae6e1'

function onGeoOk(position) {
  // 위도와 경도를 각가 변수에 담아준다.
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
  // fetch를 사용해 얻고자 하는 정보를 받아온다.
  fetch(url)
    .then(res => res.json())
    .then(data => {
      city.innerText = data.name
      weather.innerText = `${data.weather[0].main} / ${data.main.temp}`
      img.textContent = '';
      img.setAttribute('src', `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`)
    })
}
function onGeoErr() {
  alert("Can't find you. No weather for you")
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoErr)