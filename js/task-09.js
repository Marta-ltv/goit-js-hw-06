function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const body = document.body;
const textColor = document.querySelector(".color");
const changeBtnColor = document.querySelector(".change-color");

changeBtnColor.addEventListener("click", changeBackgroundColor);

function changeBackgroundColor() {
  const ourColor = getRandomHexColor();
  body.style.backgroundColor = `${ourColor}`;
  textColor.textContent = `${ourColor}`;
}
