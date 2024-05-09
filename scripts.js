const form = document.querySelector("[data-form]");
const result = document.querySelector("[data-result]");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  // Get the values from the form inputs
  const entries = new FormData(event.target);
  const { dividend, divider } = Object.fromEntries(entries);

  // Check if both inputs are not empty
  if (!dividend || !divider) {
    result.innerText = "Division not performed. Both values are required in inputs. Try again";
    return; // Exit the function if inputs are missing
  }

  // Convert inputs to numbers
  const dividendNumber = parseFloat(dividend);
  const dividerNumber = parseFloat(divider);

  // Check if inputs are valid numbers
  if (isNaN(dividendNumber) || isNaN(dividerNumber)) {
    result.innerText = "Something critical went wrong. Please reload the page";
    console.error("Invalid input provided");
    return; // Exit the function if inputs are not numeric
  }

  // Check if divider is zero
  if (dividerNumber === 0) {
    result.innerText = "Division not performed. Invalid number provided. Try again";
    console.error("Invalid division: Division by zero");
    return; // Exit the function if division by zero
  }

  // Perform division and display the result
  const divisionResult = dividendNumber / dividerNumber;
  result.innerText = divisionResult % 1 === 0 ? divisionResult : divisionResult.toFixed(2);
});
