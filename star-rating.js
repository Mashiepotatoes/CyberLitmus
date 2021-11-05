const stars = document.querySelectorAll('.fa-star');

stars.forEach((star) => {
  star.addEventListener('click', (e) => {
    const clickedTarget = e.currentTarget;
    stars.forEach(star => star.classList.remove('yellow-star')); // always reset to a blank slate on every click
    const clickedStar = parseInt(clickedTarget.dataset.index, 10); // make dataset string value into number

    stars.forEach((star, index) => {
      if (index <= clickedStar) { star.classList.add('yellow-star') }
    });
  });
});