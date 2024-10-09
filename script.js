let enteredAmount = 0; 
let selectedTip = 0; 

// Get references to the input fields and button
const billAmount = document.getElementById('bill_amount');
const tips = document.getElementsByClassName('select_tip');
const btnCalculate = document.querySelector('.calculate'); 
const numberOfPeople = document.getElementById('number_of_people'); 

// Function to get the selected tip percentage
function getSelectedTip() {
    for (let i = 0; i < tips.length; i++) {
        if (tips[i].checked) {
            return Number(tips[i].value);
        }
    }
    return 0; 
}

// Function to handle the calculation when the button is clicked
function updateButton(event) {
    event.preventDefault(); // Prevent the default form submission

    enteredAmount = Number(billAmount.value); // Get the entered bill amount
    selectedTip = getSelectedTip(); // Get the selected tip percentage
    const peopleCount = Number(numberOfPeople.value) || 1; // Default to 1 if no value is provided

    if (enteredAmount > 0) {
        let totalAmount = enteredAmount; // Start with the entered bill amount
        if (selectedTip > 0) {
            totalAmount += (enteredAmount * selectedTip); // Add the tip if selected
        }
        let finalAmount = totalAmount / peopleCount; // Divide the total by the number of people

        // Update the button text to show the final amount to pay
        btnCalculate.textContent = `Total amount to pay: $${Math.round(finalAmount)}`;
        btnCalculate.style.color = ''; // Reset the text color
    } else {
        // Show an error message if the entered amount is not valid
        btnCalculate.textContent = 'Please enter a valid bill amount!'; 
        btnCalculate.style.color = 'red'; // Set the text color to red for the error
    }
}

// Event listener for the button click
btnCalculate.addEventListener('click', updateButton);

// Reset button text when focusing on the bill amount input
billAmount.addEventListener('focus', () => {
    btnCalculate.textContent = 'Calculate'; 
    btnCalculate.style.color = ''; 
});

// Reset button text when focusing on the number of people input
numberOfPeople.addEventListener('focus', () => {
    btnCalculate.textContent = 'Calculate'; 
    btnCalculate.style.color = ''; 
});

// Reset button text when focusing on the radio buttons
for (let i = 0; i < tips.length; i++) {
    tips[i].addEventListener('focus', () => {
        btnCalculate.textContent = 'Calculate'; 
        btnCalculate.style.color = ''; 
    });
}
