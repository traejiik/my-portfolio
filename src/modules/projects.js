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

function initializeProjectSliders() {
  document.querySelectorAll('.card-img-ctnr').forEach((container) => {
    const slider = container.querySelector('.wide-frame');
    const imgs = container.querySelectorAll('img.slider-dimen');
    const indexButtons = container.querySelectorAll('.nav-circles > button');
    const arrowButtons = container.querySelectorAll('[data-index-change]');
    let currIndex = 0;
    let autoSlideInterval;
    let isSliding = false;

    function slide(nextIndex) {
      if (nextIndex < 0) nextIndex = imgs.length - 1;
      if (nextIndex >= imgs.length) nextIndex = 0;
      indexButtons[currIndex]?.classList.remove('active');
      indexButtons[nextIndex]?.classList.add('active');
      slider.style.transform = `translateX(-${nextIndex * 100}%)`;
      currIndex = nextIndex;
    }

    function startAutoSlide() {
      if (!isSliding) {
        autoSlideInterval = setInterval(() => slide(currIndex + 1), 5000);
        isSliding = true;
      }
    }

    function stopAutoSlide() {
      clearInterval(autoSlideInterval);
      isSliding = false;
    }

    indexButtons.forEach((button, index) => {
      button.addEventListener('click', () => slide(index));
    });

    arrowButtons.forEach((button) => {
      button.addEventListener('click', () => {
        const indexChange = +button.getAttribute('data-index-change');
        slide(currIndex + indexChange);
      });
    });

    container.addEventListener('mouseover', stopAutoSlide);
    container.addEventListener('mouseout', startAutoSlide);

    container.addEventListener('click', (event) => {
      event.stopPropagation();
      event.preventDefault();
    });

    startAutoSlide();
  });
}

export default function projectListeners() {
  switchFunc();
  initializeProjectSliders();
}
