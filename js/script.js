
// Get the counter variable from local storage or set it to 0 if it doesn't exist
let counter = parseInt(localStorage.getItem("counter")) || 0;

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

// Select all the counter buttons and add an event listener to each one
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

    // Update the counter value and check if it is negative, then save the counter variable to local storage
    counterValue.textContent = counter;
    checkCounter();
    parseInt(localStorage.setItem("counter", counter));

  });
});


// Function to check if the counter is negative and add or remove the negative class to the counter value
function checkCounter() {
  counter < 0 ? counterValue.classList.add("negative") : counterValue.classList.remove("negative");
}
