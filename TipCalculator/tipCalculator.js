// Store calculate button, reset button, result div, bill amount display, and tip display  as variables
const calculateBtn = document.getElementById("calculate");
const resetBtn = document.getElementById("reset");
const result = document.getElementById('result');
const billAmtDisplay = document.getElementById("bill_amount");
const tipPercentDisplay = document.getElementById("tip_percent");

// Variables to calculate bill amount, tip percent, and the amount to tip
let billAmount = 0;
let tipPercent = 0;
let tipAmount = 0;

// Calculate has been clicked
calculateBtn.addEventListener("click", () => {

    // Get the bill amount and tip percent entered by user
    billAmount = parseInt(document.getElementById("bill_amount").value);
    tipPercent = parseInt(document.getElementById("tip_percent").value);

    // If no bill amount was entered then alert user
    if(!billAmount) {
        alert("Please enter bill amount");
    }
    // If no tip amount was entered then alert the user
    else if(!tipPercent) {
        alert("Please enter tip percentage");
    }
    // Do the calculation
    else{
        // Calculation
        tipAmount = Math.round((billAmount * (tipPercent/100)) * 100) / 100;

        // Inject the result into the page
        result.innerHTML = `For a bill of $${billAmount} and 
        a ${tipPercent}% tip, you should tip $${tipAmount}`;
    }
});

// Handle the reset button
resetBtn.addEventListener("click", () => {
    billAmtDisplay.value = "";
    tipPercentDisplay.value = "";
    result.innerHTML = "";
})
