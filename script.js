const unitsInSeconds = {
    ms: 0.001,
    s: 1,
    min: 60,
    h: 3600,
    d: 86400,
    sem: 604800
};

const unitNames = {
    ms: "milissegundo(s)",
    s: "segundo(s)",
    min: "minuto(s)",
    h: "hora(s)",
    d: "dia(s)",
    sem: "semana(s)"
};

function convertTime() {
    const amountInput = document.getElementById('amount');
    const fromUnit = document.getElementById('fromUnit').value;
    const toUnit = document.getElementById('toUnit').value;
    const resultText = document.getElementById('resultText');

    const value = parseFloat(amountInput.value);

    if (isNaN(value) || value < 0) {
        resultText.innerText = "Por favor, insira um valor numérico válido.";
        return;
    }

    const valueInSeconds = value * unitsInSeconds[fromUnit];
    const convertedValue = valueInSeconds / unitsInSeconds[toUnit];
    const formattedValue = Number(convertedValue.toFixed(6)).toString();

    resultText.innerHTML = `<strong>${value}</strong> ${unitNames[fromUnit]} = <strong>${formattedValue}</strong> ${unitNames[toUnit]}`;
}

document.getElementById('convertBtn').addEventListener('click', convertTime);
document.getElementById('amount').addEventListener('input', convertTime);
document.getElementById('fromUnit').addEventListener('change', convertTime);
document.getElementById('toUnit').addEventListener('change', convertTime);
