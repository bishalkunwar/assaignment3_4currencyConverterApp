// script.js

// CSS color codes
const borderColor = "#a49f9f";
const errorColor = "red";

// DOM Elements
const USCurrency = document.getElementById("USCurrency");
const CADCurrency = document.getElementById("CADCurrency");
const USDError = document.getElementById("USDError");
const CADError = document.getElementById("CADError");

// Input change logic
function inputChanged(currencyType) {
  if (currencyType === 'USD') {
    CADCurrency.value = null;
    if (!event.target.value || event.target.value === "") {
      showErrorMessage(USDError, "Please Enter USD amount to convert!!!");
      USCurrency.style.borderColor = errorColor;
    } else {
      USDError.innerHTML = '';
      USCurrency.style.borderColor = borderColor;
    }
  } else if (currencyType === 'CAD') {
    USCurrency.value = null;
    if (!event.target.value || event.target.value === "") {
      showErrorMessage(CADError, "Please Enter CAD amount to convert!!!");
      CADCurrency.style.borderColor = errorColor;
    } else {
      CADError.innerHTML = '';
      CADCurrency.style.borderColor = borderColor;
    }
  }
}

// Display error message
function showErrorMessage(errorElement, message) {
  errorElement.innerHTML = message;
  setTimeout(() => {
    errorElement.innerHTML = '';
  }, 3000); // Clear the message after 3 seconds
}

// onButtonToConvertClick Event Listener
function onButtonToConvertClick() {
  const usdValue = parseFloat(USCurrency.value);
  const cadValue = parseFloat(CADCurrency.value);

  if (isNaN(usdValue) && isNaN(cadValue)) {
    alert("Please enter a valid currency value!");
  } else if (!isNaN(usdValue) && !isNaN(cadValue)) {
    alert("Please provide only one currency value for conversion!!!");
  } else if (!isNaN(usdValue)) {
    convertCurrency(usdValue, 'USD');
  } else if (!isNaN(cadValue)) {
    convertCurrency(cadValue, 'CAD');
  }
}

// Convert currency function
function convertCurrency(inputValue, currencyType) {
  if (currencyType === 'USD') {
    CADCurrency.value = (inputValue * 0.75).toFixed(3); // Basic conversion: 1 USD = 0.75 CAD
  } else if (currencyType === 'CAD') {
    USCurrency.value = (inputValue / 0.75).toFixed(3); // Basic conversion: 1 CAD = 1.33 USD
  }
}
