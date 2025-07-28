const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("b");

hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("show");
    if (navLinks.classList.contains("show")) {
        hamburger.textContent = "✖";
    } else {
        hamburger.textContent = "☰";
    }
});
