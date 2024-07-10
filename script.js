function clearBtn() {
    document.getElementById('displayInput').value = '';
}

function deleteLast() {
    let displayInput = document.getElementById('displayInput');
    displayInput.value = displayInput.value.slice(0, -1);
}

function displayBtn(value) {
    document.getElementById('displayInput').value += value;
}

function calculateResult() {
    let displayInput = document.getElementById('displayInput');
    try {
        displayInput.value = eval(displayInput.value);
    } catch (e) {
        displayInput.value = 'Error';
    }
}

document.addEventListener('keydown', function(event) {
    const key = event.key;
    if (key >= '0' && key <= '9' || key === '.') {
        displayBtn(key);
    } else if (key === '+' || key === '-' || key === '*' || key === '/' || key === '%') {
        displayBtn(key);
    } else if (key === 'Enter') {
        calculateResult();
    } else if (key === 'Backspace') {
        deleteLast();
    } else if (key === 'Escape') {
        clearBtn();
    }
});
