const formRef = document.querySelector('.login-form')
formRef.addEventListener('submit', handleSubmit)

function handleSubmit(event) {
    event.preventDefault();
    const email = event.currentTarget.elements.email.value;
    const password = event.currentTarget.elements.password.value;
    

    if (email === '' || password === '') {
        alert('Все поля должны быть заполнены!')
        return;
    } 
   
    const formData = {
        email,
        password,
    };
    console.log(formData);
    
    formRef.reset();
}
