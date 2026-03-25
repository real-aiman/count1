const increaseButtonEl = document.querySelector(".counter__button--increase");
const decreaseButtonEl = document.querySelector(".counter__button--decrease");
const counterValueEl = document.querySelector(".counter__value");
const resetButtonEl = document.querySelector(".counter__reset-button");

// RESET
resetButtonEl.addEventListener("click", function () {
  counterValueEl.textContent = 0;
});

// INCREASE (max = 5)
increaseButtonEl.addEventListener("click", function () {
  let currentValue = +counterValueEl.textContent;
  let newValue = currentValue + 1;

  if (newValue > 5) {
    newValue = 5;
  }

  counterValueEl.textContent = newValue;
});

// DECREASE (min = 0)
decreaseButtonEl.addEventListener("click", function () {
  let currentValue = +counterValueEl.textContent;
  let newValue = currentValue - 1;

  if (newValue < 0) {
    newValue = 0;
  }

  counterValueEl.textContent = newValue;
});