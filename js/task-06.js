const textInput = document.querySelector('#validation-input');
let inputLength = textInput.getAttribute('data-length')
let num = Number(inputLength)


textInput.addEventListener('blur', (event) => {
    let textLength = event.currentTarget.value.length
    console.log(textLength)
    
    if (textLength !== num) {
        textInput.classList.add('invalid')
    } else  textInput.classList.replace('invalid', 'valid') 
})