
import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

import Accordion from 'accordion-js';
import 'accordion-js/dist/accordion.min.css';


// INITIALIZE ACCORDION

const container = document.querySelector('.about-accordion-container');

 new Accordion(container, {
  openOnInit: [0],
  showMultiple: false,
  duration: 500,
  elementClass: 'about-ac',
  panelClass: 'about-ac-panel',
  triggerClass: 'about-ac-btn',
});

// INITIALIZE SWIPER

new Swiper('.about-skills', {
  navigation: {
    nextEl: '.about-swiper-btn',
  },
  keyboard: {
    enabled: true,
    onlyInViewport: true,
    pageUpDown: true,
  },
  mousewheel: {
    invert: true,
  },
  grabCursor: true,
  touchEventsTarget: 'wrapper',
  slideClass: 'about-skills-item',
  slideActiveClass: 'about-skills-item-accent',
  wrapperClass: 'about-skills-list',
  slidesPerView: 2,
  loopedSlides: 2,
  spaceBetween:0,
  loop: true,
  breakpoints: {
    320: {
      slidesPerView: 2,
      spaceBetween: 0,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 0,
    },
    1440: {
      slidesPerView: 6,
      spaceBetween: 0,
    },
  
  },
});


