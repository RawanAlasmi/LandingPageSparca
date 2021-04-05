
// Navigation bar
const nav = document.querySelector('.nav-bar')
window.addEventListener('scroll', fixNav)

function fixNav() {
    if(window.scrollY > nav.offsetHeight + 150) {
        nav.classList.add('active')
    } else {
        nav.classList.remove('active')
    }
}

// Input form
const t = document.getElementById("towing");
const w = document.getElementById("workshop");
const s = document.getElementById("spareParts");
const b = document.getElementById("btn");


function spareParts(){
    s.style.left = "50px";
    t.style.left = "-550px";
    w.style.left = "-550px";
    b.style.left = "285px";
}


function workshop(){
    w.style.left = "50px";
    t.style.left = "-550px";
    s.style.left = "550px";
    b.style.left = "135px";
}

function towing(){
    t.style.left = "50px";
    s.style.left = "550px";
    w.style.left = "-550px";
    b.style.left = "0";
}
