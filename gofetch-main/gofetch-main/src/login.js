var email;
var password;

function validateLogin() {
    email = document.getElementById("email").value;
    password = document.getElementById("password").value;
    if (email == "" || password == "") {
        alert('Please fill in all fields.')
        return false;
    }
    if (/\S+@\S+\.\S+/.test(email) == false){ // use regular expression to check if email is valid
        alert('Invalid email address. Please try again.')
        return false;
    }
    return true;
}