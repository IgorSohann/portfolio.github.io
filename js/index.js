const menuBtn = document.querySelector('.menu__btn')
const menu = document.querySelector('.menu__list')

menuBtn.addEventListener('click', () => {
    menu.classList.toggle('menu__list--active');
  });
  
  menuBtn.addEventListener('click', () => {
    menuBtn.classList.toggle('open');
  });

var swiper = new Swiper(".mySwiper", {
    navigation: {
       nextEl: ".swiper-button-next",
       prevEl: ".swiper-button-prev",
   },
});

const links = document.querySelectorAll('a[href^="#"]');

links.forEach(link => {
  link.addEventListener('click', e => {

    e.preventDefault();

    const anchor = document.querySelector(link.getAttribute('href'));

    if (anchor) {

      const coords = anchor.getBoundingClientRect();

      window.scrollTo({
        top: coords.top,
        left: coords.left,
        behavior: 'smooth'
      });
    }
  });
});

const button = document.querySelector('.back-to-top');

button.addEventListener('click', e => {

  e.preventDefault();

  window.scrollTo({
    top: 0,
    left: 0,
    behavior: 'smooth'
  });
});