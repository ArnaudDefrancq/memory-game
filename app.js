const container = document.getElementById("container");
const arrayImg = [
  "canard",
  "chat",
  "chien",
  "cochon",
  "coq",
  "criquet",
  "dauphin",
  "dinde",
  "elephant",
  "grenouille",
  "lion",
  "poule",
  "singe",
  "vache",
  "ane",
  "canard",
  "chat",
  "chien",
  "cochon",
  "coq",
  "criquet",
  "dauphin",
  "dinde",
  "elephant",
  "grenouille",
  "lion",
  "poule",
  "singe",
  "vache",
  "ane",
];
let i = arrayImg.length;
console.log(arrayImg);

const generateRandomArray = () => {
  while (--i > 0) {
    let j = Math.floor(Math.random() * (i + 1));
    let temp = arrayImg[j];
    arrayImg[j] = arrayImg[i];
    arrayImg[i] = temp;
  }
};

generateRandomArray();

console.log(arrayImg);

const generateCard = () => {
  arrayImg.forEach((e) => {
    const imgContainer = document.createElement("div");
    imgContainer.classList.add("img-container");
    const img = document.createElement("img");
    img.setAttribute("src", `./images/img-${e}.png`);
    img.setAttribute("alt", e);
    img.classList.add("img-form");
    imgContainer.appendChild(img);
    container.appendChild(imgContainer);
  });
};

generateCard();
