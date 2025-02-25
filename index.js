document.addEventListener("DOMContentLoaded", function () {
  const outputScreen = document.getElementById("outputScreen");
  const errorMessage = document.getElementById("errorMessage");
  const buttons = document.querySelectorAll("button");

  buttons.forEach((button) => {
    button.addEventListener("click", handleInput);
    button.addEventListener("touchstart", handleInput);
  });

  function handleInput(event) {
    event.preventDefault();
    const value = event.target.textContent;

    if (value !== "=" && value !== "Cl" && value !== "DEL") {
      outputScreen.value += value;
    } else if (value === "=") {
      calculate();
    } else if (value === "Cl") {
      clearScreen();
    } else if (value === "DEL") {
      deleteLastCharacter();
    }
  }

  function calculate() {
    try {
      outputScreen.value = math.evaluate(outputScreen.value);
      errorMessage.textContent = "";
    } catch (err) {
      errorMessage.textContent = "Invalid Expression";
      outputScreen.value = "";
    }
  }

  function clearScreen() {
    outputScreen.value = "";
    errorMessage.textContent = "";
  }

  function deleteLastCharacter() {
    outputScreen.value = outputScreen.value.slice(0, -1);
  }
});
