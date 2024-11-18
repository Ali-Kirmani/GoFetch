info_page3();

function info_page3(){
    var personal_bio = sessionStorage.getItem('personal_bio');
    var dog_bio = sessionStorage.getItem('dog_bio');
    var tags = sessionStorage.getItem('tags');
    if (personal_bio != null)
        document.getElementById("personal_bio").value = personal_bio;
    if (dog_bio != null)
        document.getElementById("dog_bio").value = dog_bio;
    if (tags != null)
        document.getElementById("tags").value = tags;
}

document.getElementById('confirm_button').onclick = function () {
    if (validateForm_3()) {
        window.location.href = "home_screen.html";
    } 
};

document.getElementById('back2').onclick = function () {
    window.location.href = "signup_screen2.html";
};


function getPersonalBio(){
    if (sessionStorage.getItem('personal_bio') == null){
        var personal_bio = 'Just a guy trying to make some freinds :)';
        sessionStorage.setItem('personal_bio', personal_bio);
    }
    else 
        var personal_bio = sessionStorage.getItem('personal_bio');
    return personal_bio;
}

function getDogBio(){
    if (sessionStorage.getItem('dog_bio') == null)
        var dog_bio = 'Low energy dog looking for a friend to relax with and enjoy the sun :)';
    else 
        var dog_bio = sessionStorage.getItem('dog_bio');
    return dog_bio;
}

function validateForm_3(){
    var personal_bio = document.getElementById("personal_bio").value;
    var dog_bio = document.getElementById("dog_bio").value;
    if (personal_bio == "" || dog_bio == "") {
        alert('Please fill in a brief bio for both you and your dog.')
        return false;
    }
    sessionStorage.setItem('personal_bio', personal_bio);
    sessionStorage.setItem('dog_bio', dog_bio);
    return true;
}

// Get the tags and input elements from the DOM 
const tags = document.getElementById('tags'); 
const input = document.getElementById('input-tag'); 


function getTags(){
    if (sessionStorage.getItem('tags') == null) {
        var tag_info = ['low-energy', 'old', 'small', 'parks'];
        sessionStorage.setItem('tags', JSON.stringify(tag_info));
    }
    else{
        var session_storage_tags = sessionStorage.getItem('tags');
        var tag_info = session_storage_tags.split(',');
        for (var i = 0; i < tag_info.length; i++){
            tag_info[i] = tag_info[i].trim();
            tag_info[i] = tag_info[i].replace(/[^a-zA-Z0-9-]/g, '');
        }
    } 
    return tag_info;
}

// Referenced https://www.geeksforgeeks.org/how-to-create-tags-input-box-in-html-css-and-javascript/
input.addEventListener('keydown', function (event) { 
    if (event.key === 'Enter') { 
        // Prevent the default action of the keypress event
        event.preventDefault(); 
        const tag = document.createElement('li'); 
        const tagContent = input.value.trim(); 
        if (tagContent !== '') { 
            tag.innerText = tagContent; 
            if (tag.innerText.length > 10) { 
                alert('Tag is too long!'); 
            }
            else if (tag.innerText.length < 2) { 
                alert('Tag is too short!'); 
            }
            else if (tag.innerText.includes(',') || tag.innerText.includes(';') || tag.innerText.includes(':') || tag.innerText.includes('.') || tag.innerText.includes('!') || tag.innerText.includes('?')){ 
                alert('Tag cannot contain punctuation!'); 
            }
            else if (tag.innerText.includes(' ')) {
                alert('Tag cannot contain spaces!'); 
            }
            else if (tags.children.length >= 10) {    
                alert('You can only have 10 tags!'); 
            }
            else {
                // Add a delete button to the tag 
                if (sessionStorage.getItem('tags') == null) {
                    sessionStorage.setItem('tags', tag.innerText);
                } else {
                    sessionStorage.setItem('tags', sessionStorage.getItem('tags') + ',' + tag.innerText);
                }
                tag.innerHTML += '<button class="delete-button">X</button>'; 
                tags.appendChild(tag); 
                input.value = ''; 
            }
        }
    } 
}); 

// Add an event listener for click on the tags list 
tags.addEventListener('click', function (event) { 
    if (event.target.classList.contains('delete-button')) {  // If the clicked element has the class 'delete-button' 
        update_tags(event.target.parentNode.innerText);
        event.target.parentNode.remove(); // Remove the tag
    } 
}); 

function update_tags(tag_text) {
    tag_text = tag_text.replace('X', '');
    var tag_list = sessionStorage.getItem('tags');
    tag_list = tag_list.split(',');
    for (var i = 0; i < tag_list.length; i++) {
        if (tag_list[i].includes(tag_text)) {
            tag_list.splice(i, 1);
            break;
        }
    }
    sessionStorage.setItem('tags', JSON.stringify(tag_list));
}