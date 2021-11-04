const stars = document.querySelectorAll('.fa-star')

stars.forEach((star) => {
  star.addEventListener('click', (event) => {
    event.currentTarget.classList.toggle('yellow-star');
  });
});