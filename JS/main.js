import handleToggleTheme from "./handleToggleTheme.js";

// Elements Targeting
const inputEl = document.querySelector("[data-input-string]"); // Input field for the string
const buttonEl = document.querySelector("[data-button-copy]"); // Button to trigger reversal and copy
const chipEl = document.querySelector("[data-chip]"); // Element to show feedback (e.g., "Copied")
const toggleEl = document.querySelector("[data-toggle-theme]"); // Theme toggle button

// Core Functionality
function reverse(input) {
  return input.split("").reverse().join(""); // Reverses the input string
}

function handleReverse() {
  const currentValue = inputEl.value; // Get the current value of the input field

  if (!currentValue) return; // Exit if the input is empty

  const reversed = reverse(currentValue); // Reverse the input string
  inputEl.value = reversed; // Update the input field with the reversed string

  // Show the feedback chip and copy to clipboard
  chipEl.classList.add("show"); // Make the chip visible
  navigator.clipboard.writeText(reversed); // Copy the reversed string to clipboard

  // Hide the chip after 1.5 seconds
  setTimeout(() => {
    chipEl.classList.remove("show");
  }, 1500);
}

// Event listeners for input and button
inputEl.addEventListener("keypress", (event) => {
  if (event.key === "Enter") {
    handleReverse(); // Call handleReverse on Enter key press
  }
});

buttonEl.addEventListener("click", handleReverse); // Call handleReverse on button click

// ====== TOGGLE FUNCTIONALITY ======
toggleEl.addEventListener("click", () => {
  handleToggleTheme(); // Call the theme toggle function
});
