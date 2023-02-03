const swiper = new Swiper('.swiper', {
  direction: 'vertical',
  slidesPerView: 5,
  centeredSlides: true,
  speed: 800,
  loop: true,
  navigation: {
    nextEl: '.swiper-button-up',
    prevEl: '.swiper-button-down',
  },
});
