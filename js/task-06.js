const textInput = document.querySelector('#validation-input');
textInput.addEventListener('blur', (event) => {
    let textLength = event.currentTarget.value.length
    console.log(textLength)
    
    if (textLength !== 6) {
        textInput.classList.add('invalid')
    } else  textInput.classList.replace('invalid', 'valid') 
})