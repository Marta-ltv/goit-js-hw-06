let counterValue = 0;

const elementBtn = document.querySelector("#counter");
const decrementBtn = document.querySelector('button[data-action="decrement"]');
const incrementBtn = document.querySelector('button[data-action="increment"]');
const counter = document.querySelector("#value");

decrementBtn.addEventListener("click", countDecrement);
incrementBtn.addEventListener("click", countIncrement);

function countDecrement() {
  counterValue -= 1;
  counter.textContent = counterValue;
}
function countIncrement() {
  counterValue += 1;
  counter.textContent = counterValue;
}