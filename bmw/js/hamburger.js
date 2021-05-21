const menu = document.querySelector('.menu'), 
      hamburger = document.querySelector('.humburger-menu');

hamburger.addEventListener('click', (e) => {
  menu.classList.toggle('menu-active');
  menu.style.cssText = 'background-color: orange';
  hamburger.classList.toggle('humburger-menu-active');
});

menu.addEventListener('click', (e) => {
  if(e.target.classList.contains('menu-list__link')) {
    menu.classList.remove('menu-active');
    hamburger.classList.remove('humburger-menu-active');
  };
});