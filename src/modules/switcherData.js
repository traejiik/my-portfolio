/* eslint-disable import/no-dynamic-require */
/* eslint-disable global-require */
const technologies = ['html', 'css', 'javascript', 'git', 'figma'];
const certificates = [
  {
    imgSrc: '../assets/images/cert/itsWebApp.png',
    altText: 'its html5',
    title: 'HTML5 Web Applications',
    desc: 'Demonstrates the ability to use HTML5, CSS, and JavaScript to build responsive web applications that will run on a variety of touch-enabled devices, including PCs, tablets, and phones.',
  },
];

function createCertCard({ imgSrc, altText, title, desc }) {
  const certCard = document.createElement('div');
  certCard.className = 'cert-card';

  const imgContainer = document.createElement('div');
  imgContainer.className = 'cert-img-ctn';

  const img = document.createElement('img');
  img.src = require(imgSrc);
  img.alt = altText || 'Certificate Image';
  img.className = 'cert-img';

  imgContainer.appendChild(img);

  const textContainer = document.createElement('div');
  textContainer.className = 'cert-text';

  const heading = document.createElement('h3');
  heading.textContent = title || 'Certificate';

  const paragraph = document.createElement('p');
  paragraph.textContent = desc || 'Demonstrates proficiency.';

  textContainer.appendChild(heading);
  textContainer.appendChild(paragraph);

  certCard.appendChild(imgContainer);
  certCard.appendChild(textContainer);

  return certCard;
}

function createTechCard(element) {
  const techCard = document.createElement('div');
  techCard.className = 'tech-card';
  techCard.textContent = element;
}

function renderCert() {
  const cardContainer = document.querySelector('.certifications');
  certificates.forEach((cert) => {
    cardContainer.appendChild(createCertCard(cert));
  });
}

function renderTechs() {
  const cardContainer = document.querySelector('.technologies');
  technologies.forEach((techs) => {
    cardContainer.appendChild(createTechCard(techs));
  });
}

export default function renderData() {
  renderTechs();
  renderCert();
}
