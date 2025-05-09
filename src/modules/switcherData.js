import { createClient } from '@sanity/client';

const client = createClient({
  projectId: 'ws70jog7',
  dataset: 'production',
  useCdn: true,
  apiVersion: '2025-05-08',
});

async function fetchTechnologies() {
  return await client.fetch(`*[_type == "technology"]{
    name,
    category,
    "icon": icon.asset->url
  }`);
}

async function fetchCertificates() {
  return await client.fetch(`*[_type == "certificate"]{
    title,
    description,
    "imgSrc": file.asset->url
  }`);
}

function createCertCard({ imgSrc, title, description }) {
  const certCard = document.createElement('div');
  certCard.className = 'cert-card';

  const imgContainer = document.createElement('div');
  imgContainer.className = 'cert-img-ctn';

  const img = document.createElement('img');
  img.src = imgSrc;
  img.alt = title || 'Certificate Image';
  img.className = 'cert-img';

  imgContainer.appendChild(img);

  const textContainer = document.createElement('div');
  textContainer.className = 'cert-text';

  const heading = document.createElement('h3');
  heading.textContent = title || 'Certificate';

  const paragraph = document.createElement('p');
  paragraph.textContent = description || 'Demonstrates proficiency.';

  textContainer.appendChild(heading);
  textContainer.appendChild(paragraph);

  certCard.appendChild(imgContainer);
  certCard.appendChild(textContainer);

  return certCard;
}

function createTechCard({ name, icon }) {
  const techCard = document.createElement('div');
  techCard.className = 'tech-card';

  if (icon) {
    const img = document.createElement('img');
    img.src = icon;
    img.alt = name;
    img.className = 'tech-icon';
    techCard.appendChild(img);
  }

  const label = document.createElement('span');
  label.textContent = name;
  techCard.appendChild(label);

  return techCard;
}

async function renderTechs() {
  const techContainer = document.querySelector('.technologies');
  const techs = await fetchTechnologies();

  const grouped = techs.reduce((acc, tech) => {
    const cat = tech.category || 'Other';
    if (!acc[cat]) acc[cat] = [];
    acc[cat].push(tech);
    return acc;
  }, {});

  Object.entries(grouped).forEach(([category, techList]) => {
    const groupBlock = document.createElement('div');
    groupBlock.className = 'tech-category-block';

    const heading = document.createElement('h3');
    heading.textContent = category;
    heading.className = 'tech-category-title';
    groupBlock.appendChild(heading);

    const groupGrid = document.createElement('div');
    groupGrid.className = 'tech-group-grid';

    techList.forEach((tech) => {
      groupGrid.appendChild(createTechCard(tech));
    });

    groupBlock.appendChild(groupGrid);
    techContainer.appendChild(groupBlock);
  });
}

async function renderCert() {
  const cardContainer = document.querySelector('.certifications');
  const certs = await fetchCertificates();
  certs.forEach((cert) => {
    cardContainer.appendChild(createCertCard(cert));
  });
}

export default async function renderData() {
  await renderTechs();
  await renderCert();
}
