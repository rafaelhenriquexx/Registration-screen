
const button = document.getElementById('button')

button.addEventListener('click', (event) =>{
    event.preventDefault()

    const email = document.getElementById('email')
    const password = document.getElementById('password')
    const name = document.getElementById('name')
    const date = document.getElementById('date')
    const tel = document.getElementById('tel')


    if(email.value === ''){
        email.classList.add('errorInput')
        
    }
    else{
        email.classList.remove('errorInput') 
    }

    if(password.value === '' || password.value.length < 7){
        password.classList.add('errorInput')
    }
    else{
      password.classList.remove('errorInput')  
    }

    if(name.value === ''){
        name.classList.add('errorInput')
    }
    else{
        name.classList.remove('errorInput')

    }

    if(date.value === ''){
        date.classList.add('errorInput')
    }
    else{
        date.classList.remove('errorInput')

    }
    if(email.value.indexOf('@') == -1 || email.value.indexOf('.') == -1){
        email.classList.add('errorInput')
    }
    else{
        email.classList.remove('errorInput')

    }
    if(tel.value === '' || isNaN(tel.value) == false && tel.value.length === 11){
        tel.classList.remove('errorInput')
    }
    else{
        tel.classList.add('errorInput')

    }

   
})
