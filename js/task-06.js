function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const destroy = document.querySelector("[data-destroy]");
const input = document.querySelector("input");
const boxes = document.querySelector("#boxes");

input.addEventListener("input", (event) => {
  const amount = (Number(event.currentTarget.value));

  if (amount > 1 && amount < 100) {
    const create = document.querySelector("[data-create]");
    create.addEventListener("click", createBoxes);

    function createBoxes() {
      let boxesMarkup = "";
      for (let i = 0; i < amount; i++) {
        boxesMarkup += `<div style="width:30px; height:30px; background-color:${getRandomHexColor()}"></div>`
      }
      boxes.innerHTML = boxesMarkup;
    }
  }
});

destroy.addEventListener("click", deleteBoxes);
function deleteBoxes() {
  boxes.innerHTML = "";
}
