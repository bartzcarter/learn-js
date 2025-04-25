const display = document.getElementById('display');
const buttons = document.getElementById('buttons');
let currInput = "";


buttons.addEventListener('click', (e) => {
    // This gets the text inside the button that was clicked
    const value = e.target.textContent;

    // Only proceed if a button was clicked not the container
    if (e.target.tagName.toLowerCase() !== 'button') return;

    // Button clicked is clear
    if (value === "C"){
        currInput = "";
        display.textContent = "0";
        return;
    }

    // Evaluate the current input and display
    if (value === "="){
        try{
            currInput = eval(currInput).toString();
            display.textContent = currInput;
        }catch(e){
            display.textContent = "Error";
            currentInput = "";
        }
        return;
    }

    // Append current input e.g. 6+7
    currInput += value;
    // Update the display with the current input
    display.textContent = currInput;
})