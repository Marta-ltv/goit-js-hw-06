let counter = 0;

const buttonRef = document.querySelector("#counter");
const decrementBtn = buttonRef.firstElementChild;
const incrementBtn = buttonRef.lastElementChild;
const counterValue = document.querySelector("#value");

decrementBtn.addEventListener("click", countDecrement);
incrementBtn.addEventListener("click", countIncrement);


function countIncrement() {
  counter += 1;
  counterValue.textContent = counter;
}

function countDecrement() {
  counter -= 1;
  counterValue.textContent = counter;
}
