document.addEventListener('DOMContentLoaded', function() {
    const inputBox = document.getElementById('inputbox');
    const buttons = document.querySelectorAll('.button');

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            if (button.classList.contains('operator')) {
                handleOperator(button.innerText);
            } else if (button.classList.contains('equalBtn')) {
                calculate();
            } else if (button.innerText === 'AC') {
                clearInput();
            } else if (button.innerText === 'DEL') {
                deleteLastCharacter();
            } else {
                inputBox.value += button.innerText;
            }
        });
    });

    function handleOperator(operator) {
        inputBox.value += ` ${operator} `;
    }

    function calculate() {
        try {
            inputBox.value = eval(inputBox.value);
        } catch (error) {
            inputBox.value = 'Error';
        }
    }

    function clearInput() {
        inputBox.value = '';
    }

    function deleteLastCharacter() {
        inputBox.value = inputBox.value.slice(0, -1);
    }
});
