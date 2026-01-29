function clearScreen() {
    document.getElementById("result").value = "";
}

function setScreenValue() {
    document.getElementById("result").value += value;
}

function calculateResult() {
    const resultElement = document.getElementById("result");
    const expression = resultElement.calue.trim();
    if (expression === '') {
        resultElement.value = 'Enter an expression';
        return;
    }

    try {
        resultElement.value = eval(expression);
    } catch (e) {
        resultElement.value = 'Invalid expression';
    }
}