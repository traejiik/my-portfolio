// HEADER ACTIVE STATUS
const navLink = document.querySelectorAll("nav a");
const sections = document.querySelectorAll("section");

function updateActive() {
  let index = sections.length;

  while (
    --index &&
    window.scrollY + window.innerHeight / 2 < sections[index].offsetTop
  ) {}

  navLink.forEach((link) => link.classList.remove('active'));
  navLink[index].classList.add('active');
}
window.addEventListener('scroll', updateActive);

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

// CALLING FUNCTIONS
updateActiveLink();