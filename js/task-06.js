function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const destroy = document.querySelector("[data-destroy]");
const input = document.querySelector("input");

input.addEventListener("input", (event) => {
  const amount = (Number(event.currentTarget.value));

  const create = document.querySelector("[data-create]");

  if (amount > 1 && amount < 100) {
    create.addEventListener("click", createBoxes);

    function createBoxes() {
      const boxes = document.querySelector("#boxes");
      let boxesMarkup = "";
      for (let i = 0; i < amount; i++) {
        boxesMarkup += `<div style="width:30px; height:30px; background-color:${getRandomHexColor()}"></div>`
      }
      console.log(boxesMarkup);
      boxes.innerHTML = boxesMarkup;
      console.log(boxes);
    }
  }
});
