info_page2(); 

function info_page2(){
    var dog_name = sessionStorage.getItem('dog_name');
    var age_range = sessionStorage.getItem('age_range');
    var reproductive_status = sessionStorage.getItem('reproductive_status');
    var vaccine_status = sessionStorage.getItem('vaccine_status');
    if (dog_name != null)
        document.getElementById("dog_name").value = dog_name;
    if (age_range != null)
        document.getElementById("age_range").value = age_range;
    if (reproductive_status != null)
        document.getElementById("reproductive_status").value = reproductive_status;
    if (vaccine_status != null)
        document.getElementById("vaccine_status").checked = vaccine_status;
}

document.getElementById('next_button2').onclick = function () {
    if (validateForm_2()) {
        window.location.href = "signup_screen3.html";
    } 
};

document.getElementById('back1').onclick = function () {
    window.location.href = "signup_screen.html";
};

function getDogName(){
    if (sessionStorage.getItem('dog_name') == null)
        var dog_name = sessionStorage.setItem('dog_name', 'benny'); // Set default dog name    
    else 
        var dog_name = sessionStorage.getItem('dog_name');
    return dog_name;
}

function validateForm_2(){
    var dog_name = document.getElementById("dog_name").value;
    var age_range = document.getElementById("age_range").value;
    var reproductive_status = document.getElementById("reproductive_status").value;
    var vaccine_status = document.getElementById("vaccine_status").value;
    if (dog_name == "" || age_range == "" || reproductive_status == "" || vaccine_status == "") {
        alert('Please fill in all fields.')
        return false;
    }
    if (age_range == "Select an age range") {
        alert('Invalid age range. Please try again.')
        return false;
    }
    if (reproductive_status == "Select reproductive status") {
        alert('Invalid reproductive status. Please try again.')
        return false;
    }
    if (!document.getElementById("vaccine_status").checked) {
        alert('Your dog must be vaccinated to use this app. Please try again.')
        return false;
    }
    sessionStorage.setItem('dog_name', dog_name);
    sessionStorage.setItem('age_range', age_range);
    sessionStorage.setItem('reproductive_status', reproductive_status);
    return true;
}


