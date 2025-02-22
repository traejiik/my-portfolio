import './styles.css';

// HEADER ACTIVE STATUS
const navLink = document.querySelectorAll('nav a');
const sections = document.querySelectorAll('section');

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
const projBtn = document.querySelector('.hero-proj-btn');
const ctBtn = document.querySelector('.hero-ct-btn');
const projects = document.getElementById('projects');
const contacts = document.getElementById('contact');

projBtn.addEventListener('click', () => {
  projects.scrollIntoView();
});

ctBtn.addEventListener('click', () => {
  contacts.scrollIntoView();
});

// CONTACT SECTION FORM LINK
const linkToForm = document.querySelector('.link-form');
const formName = document.getElementById('name');

linkToForm.addEventListener('click', (event) => {
  event.preventDefault();
  formName.focus();
});

// trials for about switcher
const switchC = document.querySelectorAll('.switch-btn');
const swtchSec = document.querySelectorAll('.switchers > div');

switchC.forEach((item) => {
  item.addEventListener('click', () => {
    switchC.forEach((btn) => btn.classList.remove('selected'));
    item.classList.add('selected');

    const sectionName = item.getAttribute('data-section');

    swtchSec.forEach((section) => {
      section.style.opacity = '0';
      section.style.transform = 'translateX(100%)';
      section.style.display = 'none';
    });

    const selectSec = document.querySelector(`.${sectionName}`);
    selectSec.style.display = 'flex';
    setTimeout(() => {
      selectSec.style.opacity = '1';
      selectSec.style.transform = 'translateX(0)';
    }, 50);
  });
});

const imgs = document.querySelectorAll('img.slider-dimen');
const navBtn = document.querySelector('.nav-circles');

for (let i = 0; i < imgs.length; i++) {
  const navBtns = document.createElement('button');
  navBtn.appendChild(navBtns);
}

document.querySelectorAll('.card-img-ctnr').forEach((container) => {
  container.addEventListener('click', (event) => {
    event.stopPropagation();
    event.preventDefault();
  });
});

const slider = document.querySelector('.wide-frame');
const indexButtons = document.querySelectorAll('.nav-circles > button');
const arrowButtons = document.querySelectorAll('[data-index-change]');
let currIndex = 0;

function slide(nextIndex) {
  if (nextIndex < 0) nextIndex = imgs.length - 1;
  if (nextIndex >= imgs.length) nextIndex = 0;
  indexButtons[currIndex].style.backgroundColor = '';
  indexButtons[nextIndex].style.backgroundColor = 'white';
  slider.style.transform = `translateX(-${nextIndex * 100}%)`;
  currIndex = nextIndex;
}

indexButtons[0].style.backgroundColor = 'white';
indexButtons.forEach((button, index) => {
  button.addEventListener('click', () => {
    slide(index);
  });
});

arrowButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const indexChange = +button.getAttribute('data-index-change');
    slide(currIndex + indexChange);
  });
});

const navContainer = document.querySelector('.controls');
let id;
let isSliding = false;

function startAutoSlide() {
  if (!isSliding) {
    id = setInterval(() => slide(currIndex + 1), 5000);
    isSliding = true;
  }
}

function stopAutoSlide() {
  clearInterval(id);
  isSliding = false;
}

navContainer.addEventListener('mouseover', () => stopAutoSlide());
navContainer.addEventListener('mouseout', () => startAutoSlide());

document.addEventListener('touchstart', (e) => {
  if (e.target !== navContainer && !navContainer.contains(e.target))
    startAutoSlide();
});

startAutoSlide();

// CALLING FUNCTIONS
updateActive();
