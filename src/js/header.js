const mobileMenu = document.querySelector('.js-menu-container');
const openMenuBtn = document.querySelector('.js-open-menu');
const menuCloseBtn = document.querySelector('.js-close-menu');

const menuClick = document.querySelector('.menu-click');
const headerMenuClick = document.querySelector('.header-menu-click');
const navLinks = document.querySelectorAll('.mobile-nav-link');

const header = document.querySelector('.header');

// Функції для відкриття і закриття мобільного меню
function openMobileMenu() {
  mobileMenu.classList.add('is-open');
}

function closeMobileMenu() {
  mobileMenu.classList.remove('is-open');
}

// Функція для закриття меню
function closeMenu() {
  menuClick.classList.remove('open');
}

// Відкриття мобільного меню при натисканні на кнопку
openMenuBtn.addEventListener('click', openMobileMenu);
menuCloseBtn.addEventListener('click', closeMobileMenu);

// Плавна прокрутка до секцій при натисканні на навігаційні посилання
navLinks.forEach(link => {
  link.addEventListener('click', event => {
    const targetSection = event.target.getAttribute('href');
    document
      .querySelector(targetSection)
      .scrollIntoView({ behavior: 'smooth' });
    closeMobileMenu();
  });
});

// Перемикання класу 'open' на menuClick при натисканні на headerMenuClick
headerMenuClick.addEventListener('click', () => {
  menuClick.classList.toggle('open');
});

// Закриття menuClick при натисканні поза межами menuClick і headerMenuClick
document.addEventListener('click', event => {
  if (
    !menuClick.contains(event.target) &&
    !headerMenuClick.contains(event.target)
  ) {
    closeMenu();
  }
});

// Оновлення класу header в залежності від прокрутки
function updateHeader() {
  if (window.scrollY > 50) {
    header.classList.add('fixed');
    localStorage.setItem('headerState', 'fixed');
  } else {
    header.classList.remove('fixed');
    localStorage.setItem('headerState', 'default');
  }
}

// Встановлення збереженого стану хедера при завантаженні сторінки
window.addEventListener('load', () => {
  const savedState = localStorage.getItem('headerState');
  if (savedState === 'fixed') {
    header.classList.add('fixed');
    window.scrollTo(0, window.scrollY);
  } else {
    header.classList.remove('fixed');
  }
});

// Прив'язка функцій до подій
window.addEventListener('scroll', updateHeader);
