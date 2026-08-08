
const roles = [
    "Aspiring AI & ML Developer",
    "Front-End Developer",
    "Data Annotator",
    "Product Developer"
];

let roleIndex = 0;
let charIndex = 0;
let isDeleting = false;

const roleElement = document.getElementById("role-text");

function typeEffect() {
    const current = roles[roleIndex];

    if (isDeleting) {
        charIndex--;
    } else {
        charIndex++;
    }

    roleElement.textContent = current.substring(0, charIndex);

    let speed = isDeleting ? 50 : 100;

    if (!isDeleting && charIndex === current.length) {
        speed = 1500; // pause at full word
        isDeleting = true;
    } 
    else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        roleIndex = (roleIndex + 1) % roles.length;
        speed = 500; // pause before typing next
    }

    setTimeout(typeEffect, speed);
}

typeEffect();

document.querySelector(".contact-form").addEventListener("submit", function() {
    alert("Message sent successfully! Will Reply to you as soon as Possible.");
});

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-link");

window.addEventListener("scroll", () => {
    let current = "";

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (scrollY >= sectionTop - 100) {
            current = section.getAttribute("id");
        }
    });

    navLinks.forEach(link => {
        link.classList.remove("active");
        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active");
        }
    });
});
const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
        topBtn.style.display = "block";
    } else {
        topBtn.style.display = "none";
    }
});

topBtn.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});
function previewCert(file) {
    window.open(file, "_blank");
}
