function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const button = document.querySelector(".change-color");
button.addEventListener("click", changeBgColor);

function changeBgColor(event) {
  const body = document.querySelector("body");
  body.style.backgroundColor = getRandomHexColor();
  document.querySelector(".color").textContent = body.style.backgroundColor;
}
