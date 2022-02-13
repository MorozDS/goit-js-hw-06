let counterValue = 0;
const buttonDec = document.querySelector('button[data-action="decrement"]');
const buttonIncr = document.querySelector('button[data-action="increment"]');
const totalDisplay = document.querySelector('#value');

buttonDec.addEventListener('click', () => {
    counterValue -= 1;
    totalDisplay.textContent = counterValue;
})

buttonIncr.addEventListener('click', () => {
    counterValue += 1;
    totalDisplay.textContent = counterValue;
})