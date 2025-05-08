import { createClient } from '@sanity/client';

const client = createClient({
  projectId: 'ws70jog7',
  dataset: 'production',
  useCdn: true,
  apiVersion: '2025-05-08',
});

async function fetchProjects() {
  return await client.fetch(`*[_type == "project"]{
    title,
    description,
    url,
    "imgs": gallery[].asset->url
  }`);
}

function createProjectCard({ href, title, desc, imgs }) {
  const link = document.createElement('a');
  link.href = href || '#';
  link.className = 'proj-live-prev';
  link.target = '_blank';

  const article = document.createElement('article');
  article.className = 'proj-card';

  const textContainer = document.createElement('div');
  textContainer.className = 'card-txt-ctnr';

  const heading = document.createElement('h3');
  heading.className = 'title';
  heading.textContent = title || '#';

  const paragraph = document.createElement('p');
  paragraph.className = 'dscrp';
  paragraph.textContent = desc || '#';

  textContainer.appendChild(heading);
  textContainer.appendChild(paragraph);

  const imgContainer = document.createElement('div');
  imgContainer.className = 'card-img-ctnr slider-dimen';

  const wideFrame = document.createElement('div');
  wideFrame.className = 'wide-frame';

  const navCircles = document.createElement('div');
  navCircles.className = 'nav-circles';

  if (imgs.length) {
    imgs.forEach((src, index) => {
      if (!src || typeof src !== 'string' || !src.startsWith('http')) return;

      const imgWrapper = document.createElement('div');
      imgWrapper.className = 'slide';

      const img = document.createElement('img');
      img.src = src;
      img.alt = `projectImage${index + 1}`;
      img.className = 'slider-dimen';

      imgWrapper.appendChild(img);
      wideFrame.appendChild(imgWrapper);

      const navButton = document.createElement('button');
      navButton.dataset.index = index;
      navCircles.appendChild(navButton);
    });
  } else {
    const placeholder = document.createElement('div');
    placeholder.className = 'img-placeholder';
    placeholder.textContent = 'No images available';
    wideFrame.appendChild(placeholder);
  }

  const controls = document.createElement('div');
  controls.className = 'controls slider-dimen';
  controls.tabIndex = 0;

  const prevButton = document.createElement('button');
  prevButton.dataset.indexChange = '-1';
  prevButton.innerHTML = '&lt;';

  const nextButton = document.createElement('button');
  nextButton.dataset.indexChange = '1';
  nextButton.innerHTML = '&gt;';

  controls.appendChild(prevButton);
  controls.appendChild(navCircles);
  controls.appendChild(nextButton);

  imgContainer.appendChild(wideFrame);
  imgContainer.appendChild(controls);

  article.appendChild(textContainer);
  article.appendChild(imgContainer);
  link.appendChild(article);

  return link;
}

export default async function renderProjs() {
  const cardContainer = document.querySelector('.card-ctnr');
  const projects = await fetchProjects();
  projects.forEach((project) => {
    cardContainer.appendChild(createProjectCard({
      href: project.url,
      title: project.title,
      desc: project.description,
      imgs: project.imgs || [],
    }));
  });
}
