// Set the counter variable to 0
let counter = 0;

// Check if there is a counter value in local storage and set the counter variable to it
localStorage.getItem("counter") && (counter = localStorage.getItem("counter"));

// Select the main element and add the counter HTML to it
const main = document.getElementById("main");
main.innerHTML = `
  <div class="counter-container m-auto">
    <h1 class="display-4">Counter</h1>
    <div class="my-5 button-placement">
      <button id="decrease-btn" class="counter-button">
        <img src="img/minus-solid.svg" alt="minus" width="25" height="25" />
      </button>
      <span id="counter-value" class="display-4 m-5">${counter}</span>
      <button id="increase-btn" class="counter-button">
        <img src="img/plus-solid.svg" alt="plus" width="25" height="25" />
      </button>
    </div>
    <button id="reset-btn" class="counter-button">
      <img src="img/rotate-solid.svg" alt="reset-btn" width="25" height="25" />
    </button>
  </div>
`;

// Select the counter value and check if it is negative
const counterValue = document.getElementById("counter-value");
checkCounter();

// Select all the counter buttons and add an event listener to them
const counterButtons = document.querySelectorAll(".counter-button");
counterButtons.forEach((button) => {
  button.addEventListener("click", () => {

    if (button.id === "increase-btn") {
      counter++;
    } else if (button.id === "decrease-btn") {
      counter--;
    } else if (button.id === "reset-btn") {
      counter = 0;
    }

    // Update the counter value, check if it is negative and save the counter value to local storage
    counterValue.textContent = counter;
    checkCounter();
    localStorage.setItem("counter", counter);

  });
});

// Check if the counter value is negative and add the negative class to the counter value
function checkCounter() {
  counter < 0 ? counterValue.classList.add("negative") : counterValue.classList.remove("negative");
}
