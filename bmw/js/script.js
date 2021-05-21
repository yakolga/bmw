document.addEventListener('DOMContentLoaded', () => {
  //accardion 
  const button = document.querySelectorAll('.feature__link'), 
        content = document.querySelectorAll('.feature-sub');

  // for(let i = 0; i < button.length; i++) {
  //   button[i].addEventListener('click', () => {
  //     content[i].classList.toggle('hidden');
  //     button[i].classList.toggle('feature__link_active');
  //   });
  // }

  // button.forEach((btn, index) => {
  //   btn.addEventListener('click', () => {
  //     content[index].classList.toggle('hidden');
  //     button[index].classList.toggle('feature__link_active');
  //   });
  // });

  button.forEach((btn, index) => {
    btn.addEventListener('click', () => {
      if (btn.classList.contains('feature__link_active')) {
        content[index].classList.add('hidden');
        btn.classList.remove('feature__link_active');
      }
    });
  });

  button.forEach((btn, index) => {
    btn.addEventListener('click', () => {
      content.forEach((b) => {
        b.classList.add('hidden');
      });
      button.forEach((item) => {
        item.classList.remove('feature__link_active');
      });
      content[index].classList.remove('hidden');
      btn.classList.add('feature__link_active');
    });
  });
});

