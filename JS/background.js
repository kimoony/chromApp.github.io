const images = [
  "01.jpg",
  "02.jpeg",
  "03.jpeg",
  "04.jpg",
  "05.jpg",
  "06.jpg",
  "07.jpg",
  "08.jpg",
  "09.jpg",
  "10.jpg",
];

// const bgImage = document.createElement("img");
const body = document.querySelector("body");
body.classList.add('bgImage')

const bgImages = images[Math.floor(Math.random() * images.length)];
body.style.backgroundImage = `url(img/${bgImages})`;