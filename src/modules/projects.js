/* eslint-disable no-param-reassign */
function switchFunc() {
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
}

const slider = document.querySelector('.wide-frame');
const indexButtons = document.querySelector('.nav-circles').childNodes;
const arrowButtons = document.querySelectorAll('[data-index-change]');
let currIndex = 0;

function slide(nextIndex) {
  const imgs = document.querySelectorAll('img.slider-dimen');
  if (nextIndex < 0) nextIndex = imgs.length - 1;
  if (nextIndex >= imgs.length) nextIndex = 0;
  console.log(currIndex, indexButtons);
  indexButtons[currIndex].style.backgroundColor = '';
  indexButtons[nextIndex].style.backgroundColor = 'white';
  slider.style.transform = `translateX(-${nextIndex * 100}%)`;
  currIndex = nextIndex;
}

function btnFunction() {
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

  document.querySelectorAll('.card-img-ctnr').forEach((container) => {
    container.addEventListener('click', (event) => {
      event.stopPropagation();
      event.preventDefault();
    });
  });
}

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

function slideListener() {
  navContainer.addEventListener('mouseover', () => stopAutoSlide());
  navContainer.addEventListener('mouseout', () => startAutoSlide());

  document.addEventListener('touchstart', (e) => {
    if (e.target !== navContainer && !navContainer.contains(e.target))
      startAutoSlide();
  });
}

export default function projectListeners() {
  switchFunc();
  btnFunction();
  slideListener();
  startAutoSlide();
}
