let passwordField = document.querySelector('#password');
let confirmPasswordField = document.querySelector('#confirm_password');
let mainContent = document.querySelector('.main-content');

confirmPasswordField.addEventListener('keyup', (event) => {
        if (passwordField.value != confirmPasswordField.value){
            confirmPasswordField.classList.add('invalid')
        } else {
            confirmPasswordField.classList.remove('invalid')
        }
    }
)