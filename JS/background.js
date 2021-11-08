const images = [
  "01.jpeg",
  "02.jpeg",
  "03.jpeg"
];

const jejuImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");

bgImage.src = `img/${jejuImage}`;

document.body.appendChild(bgImage);