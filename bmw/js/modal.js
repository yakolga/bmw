const buttons = document.querySelectorAll('.more'), 
      modalClose = document.querySelector('.modal__close'),
      modalWindow = document.querySelector('.modal');


const openModal = () => {
 modalWindow.classList.remove('hidden');
};

const closeModal = () => {
  modalWindow.classList.add('hidden');
};

buttons.forEach((button) => {
  button.addEventListener('click', openModal);
});

modalWindow.addEventListener('click', (event) => {
  const target = event.target;
  if(target.classList.contains('overlay') || 
    target.classList.contains('modal__close')) {
    closeModal();
  }
});
