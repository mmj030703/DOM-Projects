const bmiForm = document.querySelector('.bmi-form');

const calculateBMI = (e) => {
    e.preventDefault();

    try {
        const resultContainer = document.querySelector('.bmi-calculator .result-container');
        resultContainer.style.display = "none";

        const heightInputValue = parseFloat(document.querySelector('.bmi-form .input input[id="height"]').value);
        const weightInputValue = parseFloat(document.querySelector('.bmi-form .input input[id="weight"]').value);
    
        if(isNaN(heightInputValue) || isNaN(weightInputValue) || heightInputValue < 0 || weightInputValue < 0) throw new Error('Enter a Valid Value!');
        
        const displayBMI = document.querySelector('.bmi-calculator .result-container .bmi-calculated');
        const displayBMIMessage = document.querySelector('.bmi-calculator .result-container .bmi-description'); 
    
        const BMI = parseFloat((weightInputValue / (heightInputValue ** 2))).toFixed(1);
        
        if(displayBMI.childNodes.length !== 0) displayBMI.childNodes[0].remove();
        if(displayBMIMessage.childNodes.length !== 0) displayBMIMessage.childNodes[0].remove();
        
        if(BMI < 18.6) {
            displayBMIMessage.appendChild(document.createTextNode('Under Weight'));
        }
        else if(BMI < 24.9) {
            displayBMIMessage.appendChild(document.createTextNode('Normal Range'));
        }
        else {
            displayBMIMessage.appendChild(document.createTextNode('Over Weight'));
        }
    
        resultContainer.style.display = "flex";
        displayBMI.appendChild(document.createTextNode(`${BMI}`));    
    } 
    catch(error) {
        const errorContainer = document.querySelector('.bmi-calculator .error-container');
        const errorMessageElement = errorContainer.querySelector('p');
        
        if(errorMessageElement.childNodes.length !== 0) errorMessageElement.childNodes[0].remove();

        errorContainer.style.display = "flex";
        setTimeout(() => {
            errorContainer.style.display = "none";
        }, 2000);
        errorMessageElement.appendChild(document.createTextNode(`${error.message}`));
    }
};

bmiForm.addEventListener('submit', calculateBMI);