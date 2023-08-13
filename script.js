let currentInput = '';
function appendToScreen(value) {
    currentInput += value;
    document.getElementById('result').value = currentInput;
}

function clearScreen() {
    currentInput = '';
    document.getElementById('result').value = '';
}

function calculate() {
    try {
        const result = eval(currentInput);
        document.getElementById('result').value = result;
        currentInput = result.toString();
    } catch (error) {
        document.getElementById('result').value = 'Error';
    }
}
