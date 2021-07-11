const images = ["0.jpeg", "1.jpeg", "2.jpeg"];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = `./img/${chosenImage}`;

const bgUrl = `url("${bgImage}")`;

document.body.style.backgroundImage = bgUrl;
