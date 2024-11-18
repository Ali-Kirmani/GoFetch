info_page1();

document.getElementById('next_button').onclick = function () {
    if (validateForm_1()) {
        window.location.href = "signup_screen2.html";
    } 
};

document.getElementById('cancel_button').onclick = function () {
    window.location.href = "login_screen.html";
};

function info_page1(){
    var person_name = sessionStorage.getItem('person_name');
    var email = sessionStorage.getItem('email');
    var birthday = sessionStorage.getItem('birthday');
    if (person_name != null)
        document.getElementById("name").value = person_name;
    if (email != null)
        document.getElementById("email").value = email;
    if (birthday != null)
        document.getElementById("birthday").value = birthday;
}


function getPersonName(){
    if (sessionStorage.getItem('person_name') == null)
        var person_name = sessionStorage.setItem('person_name', 'Little Tim'); // Set default person name    
    else 
        var person_name = sessionStorage.getItem('person_name');
    return person_name;
}

function validateForm_1() {
    var person_name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var birthday = document.getElementById("birthday").value;
    var password = document.getElementById("password").value;
    var confirm_password = document.getElementById("password_confirm").value;
    if (person_name == "" || email == "" || birthday == "" || password == "" || confirm_password == "") {
        alert('Please fill in all fields.')
        return false;
    }
    if (/\S+@\S+\.\S+/.test(email) == false) {
        alert('Invalid email address. Please try again.')
        return false;
    }
    if (password != confirm_password) {
        alert('Passwords do not match. Please try again.')
        return false;
    }
    if (birthday >= Date.now()) {
        alert('Invalid date of birth.')
        return false;
    }
    var age = new Date(Date.now() - new Date(birthday).getTime()).getUTCFullYear() - 1970;
    if (age < 18) {
        alert('You must be at least 18 years old to use this service.')
        return false;
    } 
    sessionStorage.setItem('person_name', person_name);
    sessionStorage.setItem('email', email);
    sessionStorage.setItem('birthday', birthday);
    return true;
}


