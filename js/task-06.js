function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const destroyBtn = document.querySelector("[data-destroy]");
const createBtn = document.querySelector("[data-create]");
const input = document.querySelector("input");
const boxes = document.querySelector("#boxes");

createBtn.addEventListener("click", () => {
  const amount = (Number(input.value));
  if (amount < 1 || amount > 100) {
    return;
  }
  createBoxes(amount);
});

function createBoxes(amount) {
  let num = 30;
  let boxesMarkup = "";
  for (let i = 0; i < amount; i++) {
    boxesMarkup += `<div style="width:${num}px; height:${num}px; background-color:${getRandomHexColor()}"></div>`
    num += 10;
  }
  boxes.innerHTML = boxesMarkup;
  input.value = "";
}

destroyBtn.addEventListener("click", destroyBoxes);
function destroyBoxes() {
  boxes.innerHTML = "";
}
