import html5 from '../assets/images/cert/itsWebApp.png';
import nvDLF from '../assets/images/cert/nvdLF.png';

const technologies = ['html', 'css', 'javascript', 'git', 'figma'];
const certificates = [
  {
    imgSrc: html5,
    altText: 'its html5',
    title: 'HTML5 Web Application Development',
    desc: 'Demonstrates the ability to use HTML5, CSS, and JavaScript to build responsive web applications that will run on a variety of touch-enabled devices, including PCs, tablets, and phones.',
  },
  {
    imgSrc: nvDLF,
    altText: 'nvidia dlf',
    title: 'Fundamentals of Deep Learning',
    desc: 'Demonstrates competency in the completion in Fundamentals of Deep Learning by NVIDIA Deep Learning Institute.',
  },
];

function createCertCard({ imgSrc, altText, title, desc }) {
  const certCard = document.createElement('div');
  certCard.className = 'cert-card';

  const imgContainer = document.createElement('div');
  imgContainer.className = 'cert-img-ctn';

  const img = document.createElement('img');
  img.src = imgSrc;
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

  return techCard;
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
