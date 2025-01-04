// HEADER ACTIVE STATUS
const navLink = document.querySelectorAll("nav a");
const sections = document.querySelectorAll("section");

function updateActive() {
  let index = sections.length;

  while (
    --index &&
    window.scrollY + window.innerHeight / 2 < sections[index].offsetTop
  ) {}

  navLink.forEach((link) => link.classList.remove("active"));
  navLink[index].classList.add("active");
}
window.addEventListener("scroll", updateActive);

// HERO SECTION BUTTONS
const projBtn = document.querySelector(".hero-proj-btn");
const ctBtn = document.querySelector(".hero-ct-btn");
const projects = document.getElementById("projects");
const contacts = document.getElementById("contact");

projBtn.addEventListener("click", () => {
  projects.scrollIntoView();
});

ctBtn.addEventListener("click", () => {
  contacts.scrollIntoView();
});

// CONTACT SECTION FORM LINK
const linkToForm = document.querySelector(".link-form");
const formName = document.getElementById("name");

linkToForm.addEventListener("click", (event) => {
  event.preventDefault();
  formName.focus();
});

// trials
const switchC = document.querySelectorAll(".switch-btn");
const swtchSec = document.querySelectorAll(".switchers > div");

switchC.forEach((item, index) => {
  item.addEventListener("click", () => {
    switchC.forEach((btn) => btn.classList.remove("selected"));
    item.classList.add("selected");

    // Hide all sections
    swtchSec.forEach((section) => {
      section.style.opacity = "0"; // Fade out the previous section
      section.style.transform = "translateX(100%)"; // Move it out of view
      section.style.display = "none";
    });

    const selectedSec = swtchSec[index];
    selectedSec.style.display = "flex";
    setTimeout(() => {
      selectedSec.style.opacity = "1";
      selectedSec.style.transform = "translateX(0)"; // Slide it into view
    }, 50); // Delay to allow sliding animation
  });
});

// CALLING FUNCTIONS
updateActiveLink();
