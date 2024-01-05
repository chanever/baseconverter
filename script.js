function validateInput(inputNumber, inputBase) {
    if (inputBase !== 16) {
        if (Math.sign(parseInt(inputNumber, inputBase)) === -1) return false;
    }
    for (let digit of inputNumber.split('')) {
        if (inputBase === 16) {
            if (!digit.match(/[0-9A-Fa-f]/)) return false;
        } else {
            if (parseInt(digit, inputBase) >= inputBase || isNaN(parseInt(digit, inputBase))) return false;
        }
    }

    return true;
}

function convert() {
    var inputNumber = document.getElementById('numberInput').value.trim();
    var inputBase = parseInt(document.getElementById('inputBase').value, 10);

    if (!validateInput(inputNumber, inputBase)) {
        document.getElementById('result').innerText = `Error: Invalid input for base ${inputBase}`;
        return;
    }

    var outputBase = parseInt(document.getElementById('outputBase').value, 10);
    var result = parseInt(inputNumber, inputBase).toString(outputBase).toUpperCase();
    document.getElementById('result').innerText = `Result: ${result}`;
}

function setLanguage(language) {
    if (language === 'en') {
        document.getElementById('title').innerText = 'Base Converter';
        document.getElementById('numberInput').placeholder = 'Enter number';
        document.getElementById('result').innerText = 'Result: ';
        updateSelectOptions('Binary', 'Octal', 'Decimal', 'Hexadecimal');
    } else if (language === 'ko') {
        document.getElementById('title').innerText = '진법 변환기';
        document.getElementById('numberInput').placeholder = '숫자 입력';
        document.getElementById('result').innerText = '결과: ';
        updateSelectOptions('2진수', '8진수', '10진수', '16진수');
    }
}

function updateSelectOptions(bin, oct, dec, hex) {
    var inputOptions = document.querySelectorAll('#inputBase option');
    var outputOptions = document.querySelectorAll('#outputBase option');
    
    inputOptions[0].text = bin;
    inputOptions[1].text = oct;
    inputOptions[2].text = dec;
    inputOptions[3].text = hex;
    
    outputOptions[0].text = bin;
    outputOptions[1].text = oct;
    outputOptions[2].text = dec;
    outputOptions[3].text = hex;
}

document.getElementById('inputBase').addEventListener('change', function(e) {
    var inputBase = parseInt(e.target.value, 10);
    var numberInput = document.getElementById('numberInput');
    var currentValue = numberInput.value.trim();
    var validChars = inputBase === 16 ? '0123456789ABCDEFabcdef' : '0123456789';
    
    numberInput.value = currentValue
        .split('')
        .filter(char => validChars.includes(char))
        .join('');
});

document.getElementById('numberInput').addEventListener('input', function(e) {
    var inputBase = parseInt(document.getElementById('inputBase').value, 10);
    var validChars = inputBase === 16 ? '0123456789ABCDEFabcdef' : '0123456789';
    e.target.value = e.target.value
        .split('')
        .filter(char => validChars.includes(char))
        .join('');
});

setLanguage('ko');








