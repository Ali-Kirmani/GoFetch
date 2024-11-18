document.addEventListener('DOMContentLoaded', function() {
    var verticalDots = document.querySelector('.vertical-dots');
    var dropdownMenu = document.querySelector('.dropdown-menu');

    if (verticalDots && dropdownMenu) {
        verticalDots.addEventListener('click', function(event) {
            event.stopPropagation();
            dropdownMenu.classList.toggle('show');
        });

        document.addEventListener('click', function() {
            if (dropdownMenu.classList.contains('show')) {
                dropdownMenu.classList.remove('show');
            }
        });
    }
});




/* Set the width of the side navigation to 250px */
function openNav() {
    document.getElementById("mySidenav").style.zIndex = "2";
    document.getElementById("mySidenav").style.width = "65%";

    // document.getElementById("main").style.marginLeft = "50%";
    // document.body.style.background = "rgba(0,0,0,0.4)";
    // var hambarElements = document.getElementsByClassName("bar");
    // for (var i = 0; i < hambarElements.length; i++) {
    //     hambarElements[i].style.background = "white";
    //     hambarElements[i].style.border = "2px solid white";
    // }
}
//     background: #000;
// border: 2px solid #000;
/* Set the width of the side navigation to 0 */
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";

    // document.getElementById("main").style.marginLeft = "0";
    // document.body.style.background = "#e88b3a";
    // var hambarElements = document.getElementsByClassName("bar");
    // for (var i = 0; i < hambarElements.length; i++) {
    //     hambarElements[i].style.background = "black";
    //     hambarElements[i].style.border = "2px solid black";
    // }
    document.getElementById("mySidenav").style.zIndex = "-1";

} 


function toggleNav() {
    var sidenav = document.getElementById("mySidenav");
    if (sidenav.style.width === "0px" || sidenav.style.width === "") {
        openNav();
    } else {
        closeNav();
    }
}
 

/* Set the width of the side navigation to 250px */
function openProf() {
    document.getElementById("viewProf").style.zIndex = "2";
    document.getElementById("viewProf").style.visibility = "visible";
    // document.getElementById("viewProf").style.display = "block";
    document.getElementById("viewProf").style.width = "65%";
    document.getElementById("hamburger-menu").style.zIndex = "-1";
}
//     background: #000;
// border: 2px solid #000;
/* Set the width of the side navigation to 0 */
function closeProf() {
    document.getElementById("viewProf").style.width = "0";
    document.getElementById("viewProf").style.visibility = "hidden";
    // document.getElementById("main").style.marginLeft = "0";
    document.body.style.background = "#e88b3a";
    document.getElementById("hamburger-menu").style.zIndex = "2";
    document.getElementById("viewProf").style.zIndex = "-1";

} 








