const text = "Modern Web Experiences";

let charIndex = 0;

const typing = document.getElementById("typing");

function type() {

    if (charIndex < text.length) {

        typing.textContent += text.charAt(charIndex);

        charIndex++;

        setTimeout(type, 100);

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
// ===========================
// Dark / Light Mode
// ===========================

const themeBtn = document.getElementById("theme-toggle");

// استرجاع آخر اختيار


themeBtn.addEventListener("click", function () {

    document.body.classList.toggle("light-mode");

    if (document.body.classList.contains("light-mode")) {

        themeBtn.textContent = "☀️";
        localStorage.setItem("theme", "light");

    } else {

        themeBtn.textContent = "🌙";
        localStorage.setItem("theme", "dark");

    }

});
