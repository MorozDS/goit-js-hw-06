const rangeInput = document.querySelector('#font-size-control');
const spanText = document.querySelector('#text');
console.log(spanText)
rangeInput.addEventListener('input', () =>  spanText.style.fontSize =  rangeInput.value + 'px')