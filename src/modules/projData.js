import home from '../assets/images/proj/weather/home.png';
import dash1 from '../assets/images/proj/weather/dash1.png';
import dash2 from '../assets/images/proj/weather/dash2.png';
import dash3 from '../assets/images/proj/weather/dash3.png';
import dash4 from '../assets/images/proj/weather/dash4.png';
import todo1 from '../assets/images/proj/todo/Todo1.png';
import todo2 from '../assets/images/proj/todo/Todo2.png';
import todo3 from '../assets/images/proj/todo/Todo3.png';
import tic1 from '../assets/images/proj/tic/tic1.png';
import tic2 from '../assets/images/proj/tic/tic2.png';
import tic3 from '../assets/images/proj/tic/tic3.png';

const projects = [
  {
    href: 'https://traejiik.github.io/weather-app/',
    title: 'Wezaria | Weather-App',
    desc: 'A weather app using the Visual Crossing API to request and render a users required weather for a location.',
    imgs: [home, dash1, dash2, dash3, dash4],
  },
  {
    href: 'https://traejiik.github.io/todo-list/',
    title: 'TODOalot | Todo-List',
    desc: 'A project to add and track tasks in the form of a Todo-list.',
    imgs: [todo1, todo2, todo3],
  },
  {
    href: 'https://traejiik.github.io/tic-tac-toe/',
    title: 'Tic-Tac-Toe',
    desc: 'A simple, fun project to play tic-tac-toe in the browser, keep score and announce a winner',
    imgs: [tic1, tic2, tic3],
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
    img.src = src;
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
