const text = [
    "Front-End Developer",
    "HTML Developer",
    "CSS Learner",
    "Future JavaScript Developer"
];

let index = 0;
let charIndex = 0;

const typing = document.getElementById("typing");

function type() {

    if (charIndex < text[index].length) {

        typing.textContent += text[index].charAt(charIndex);

        charIndex++;

        setTimeout(type, 100);

    } else {

        setTimeout(erase, 1500);

    }

}

function erase() {

    if (charIndex > 0) {

        typing.textContent = text[index].substring(0, charIndex - 1);

        charIndex--;

        setTimeout(erase, 50);

    } else {

        index++;

        if (index >= text.length) {

            index = 0;

        }

        setTimeout(type, 300);

    }

}

document.addEventListener("DOMContentLoaded", function () {

    if (typing) {

        type();

    }

});
// ===========================
// Scroll Animation
// ===========================

const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

});

sections.forEach(section=>{

    section.classList.add("hidden");

    observer.observe(section);

});
// ===========================
// Back To Top Button
// ===========================

const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", function(){

    if(window.scrollY > 400){

        topBtn.style.display = "block";

    } else {

        topBtn.style.display = "none";

    }

});


topBtn.addEventListener("click", function(){

    window.scrollTo({

        top: 0,
        behavior: "smooth"

    });

});
// ===========================
// Mobile Menu
// ===========================

const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");


if(menuBtn){

    menuBtn.addEventListener("click",()=>{

        navLinks.classList.toggle("active");

    });

}

