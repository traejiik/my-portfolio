/* eslint-disable import/no-dynamic-require */
/* eslint-disable global-require */
const projects = [
  {
    link: 'https://traejiik.github.io/weather-app/',
    title: 'Wezaria | Weather-App',
    desc: 'A weather app using the Visual Crossing API to request and render a users required weather for a location.',
    imgs: [
      '../assets/images/proj/weather/home.png',
      '../assets/images/proj/weather/dash1.png',
      '../assets/images/proj/weather/dash2.png',
      '../assets/images/proj/weather/dash3.png',
      '../assets/images/proj/weather/dash4.png',
    ],
  },
  {
    link: 'https://traejiik.github.io/tic-tac-toe/',
    title: 'TODOalot | Todo-List',
    desc: 'A project to add and track tasks in the form of a Todo-list.',
    imgs: [
      '../assets/images/proj/todo/Todo1.png',
      '../assets/images/proj/todo/Todo2.png',
      '../assets/images/proj/todo/Todo3.png',
    ],
  },
  {
    link: 'https://traejiik.github.io/todo-list/',
    title: 'Tic-Tac-Toe',
    desc: 'A simple, fun project to play tic-tac-toe in the browser, keep score and announce a winner',
    imgs: [
      '../assets/images/proj/tic/tic1.png',
      '../assets/images/proj/tic/tic2.png',
      '../assets/images/proj/tic/tic3.png',
    ],
  },
];

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

  imgs.forEach((src, index) => {
    const img = document.createElement('img');
    img.src = require(src);
    img.alt = `projectImage${index + 1}`;
    img.className = 'slider-dimen';
    wideFrame.appendChild(img);

    const navButton = document.createElement('button');
    navCircles.appendChild(navButton);
  });

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

export default function renderProjs() {
  const cardContainer = document.querySelector('.card-ctnr');
  projects.forEach((project) => {
    cardContainer.appendChild(createProjectCard(project));
  });
}
