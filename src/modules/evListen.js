/* eslint-disable no-empty */
/* eslint-disable no-plusplus */
import cvPdf from '../assets/cv.pdf';

// HEADER ACTIVE STATUS
function headerListen() {
  const navLink = document.querySelectorAll('nav a');
  const sections = document.querySelectorAll('section');

  let index = sections.length;

  while (
    --index &&
    window.scrollY + window.innerHeight / 2 < sections[index].offsetTop
  ) {}

  navLink.forEach((link) => link.classList.remove('active'));
  navLink[index].classList.add('active');
}

// HERO SECTION BUTTONS
function heroListen() {
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
}

// CONTACT SECTION FORM LINK
function contactListen() {
  const linkToForm = document.querySelector('.link-form');
  const formName = document.getElementById('name');
  const cvBtn = document.querySelector('.cv-dwn');

  linkToForm.addEventListener('click', (event) => {
    event.preventDefault();
    formName.focus();
  });

  cvBtn.addEventListener('click', () => {
    const link = document.createElement('a');
    link.href = cvPdf;
    link.download = 'Anotida_CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  });
}

export default function listeners() {
  headerListen();
  heroListen();
  contactListen();
  window.addEventListener('scroll', headerListen);
}
