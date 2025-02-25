document.addEventListener("DOMContentLoaded", function () {
  const outputScreen = document.getElementById("outputScreen");
  const errorMessage = document.getElementById("errorMessage");
  const buttons = document.querySelectorAll("button");

  // event listeners to buttons
  buttons.forEach((button) => {
    button.addEventListener("click", function () {
      const value = button.textContent;

      // If the clicked button is an operator or number, append to the outputScreen
      if (value !== "=" && value !== "Cl" && value !== "DEL") {
        outputScreen.value += value;
      }
      // Calculate result when "=" is clicked
      else if (value === "=") {
        calculate();
      }
      // Clear the screen when "Cl" is clicked
      else if (value === "Cl") {
        clearScreen();
      }
      // Delete last character when "DEL" is clicked
      else if (value === "DEL") {
        deleteLastCharacter();
      }
    });
  });

  function calculate() {
    try {
      outputScreen.value = math.evaluate(outputScreen.value);
    } catch (err) {
      errorMessage.textContent = "Invalid Expression";
      outputScreen.value = "";
    }
  }

  function clearScreen() {
    outputScreen.value = "";
    errorMessage.textContent = ""; // Clear any error message when clearing the screen
  }

  function deleteLastCharacter() {
    // Remove last character from the output screen
    outputScreen.value = outputScreen.value.slice(0, -1);
  }
});
