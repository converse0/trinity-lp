const dropdowns = document.querySelectorAll('.dropdown');
const dropdownArray = [...dropdowns];
const wrapper = document.querySelector('.wrapper');

const menuBtn = document.querySelector('.menu-btn');
const mainMenu = document.querySelector('.main__menu');

menuBtn.addEventListener('click', () => {
  mainMenu.classList.toggle('menu--active');
  menuBtn.classList.toggle('active');
});

dropdownArray.forEach((item) => {
  const list = item.querySelector('.popup-list');
  const arrow = item.querySelector('.arrow-svg');

  item.onclick = (event) => {
    if (!list.classList.contains('show')) {
      list.classList.add('show');
      arrow.classList.add('active');
      wrapper.classList.add('wrapper--active');
      event.preventDefault();
    } else {
      list.classList.remove('show');
      arrow.classList.remove('active');
      wrapper.classList.remove('wrapper--active');
      event.preventDefault();
    }
  };
});
