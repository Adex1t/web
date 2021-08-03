
const userNameInput = document.getElementById("user-name")

const emailInput =  document.getElementById("email")

const passwordInput = document.getElementById("password")

const signUpBtn = document.getElementById("signup-btn")

signUpBtn.addEventListener("click", ()  => {
    let userName = userNameInput.value 
    let email = emailInput.value 
    let password = passwordInput.value
    
    console.log(userNAme, email, password);
})