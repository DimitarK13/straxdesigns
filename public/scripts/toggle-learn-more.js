const toggleLearnMoreBtn = document.getElementById('learn-more');
const heading = document.querySelector('.hero-heading');
const learnMore = document.querySelector('.hero-learn-more');

toggleLearnMoreBtn.addEventListener('click', () => {
  heading.classList.toggle('hide');
  learnMore.classList.toggle('hide');

  if (heading.classList.contains('hide')) {
    toggleLearnMoreBtn.innerHTML = '<i class="fa-solid fa-angle-left"></i>';
  } else {
    toggleLearnMoreBtn.textContent = 'Learn More';
  }
});
