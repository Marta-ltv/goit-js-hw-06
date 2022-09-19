function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const input = document.querySelector("input");
const addButton = document.querySelector("[data-create]");
const delButton = document.querySelector("[data-destroy]");
const divElts = document.querySelector("#boxes");

addButton.addEventListener("click", addButtonHandler);
function addButtonHandler() {
  createBoxes(input.value);
}

delButton.addEventListener("click", () => {
  input.value = "";
});

function createBoxes(number) {
  
  for (var divs = [], i = 0, size = 30; i < number; i+=1, size += 10) {
    const div = document.createElement("div");
    div.style.backgroundColor = getRandomHexColor();
    div.classList.add("box");
    div.style.height = `${size}px`;
    div.style.width = `${size}px`;
    divs.push(div);
  }
  divElts.append(...divs);
}