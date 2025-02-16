document.addEventListener("DOMContentLoaded", () => {
    const menuToggle = document.createElement("button");
    menuToggle.classList.add("menu-toggle");
    menuToggle.innerHTML = `<div class="bar"></div><div class="bar"></div><div class="bar"></div>`;

    const navbar = document.querySelector(".navbar");
    navbar.appendChild(menuToggle);

    const navLinks = document.querySelector(".nav-links");

    menuToggle.addEventListener("click", () => {
        navLinks.classList.toggle("active");
        menuToggle.classList.toggle("active");
    });
});