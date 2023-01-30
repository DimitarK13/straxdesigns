const carouselContainer = document.querySelector('.carousel-container');
const carousel = carouselContainer.querySelector('.carousel');
const carouselItems = Array.from(carousel.querySelectorAll('.carousel-item'));
const prevButton = carouselContainer.querySelector('#carousel-item-prev');
const nextButton = carouselContainer.querySelector('#carousel-item-next');

let currentIndex = 0;

function updateCarousel() {
  carouselItems.forEach((item) => {
    item.removeAttribute('data-state');
  });
  carouselItems[currentIndex].setAttribute('data-state', 'current');

  let prevIndex = currentIndex - 1;
  if (prevIndex < 0) {
    prevIndex = carouselItems.length - 1;
  }
  carouselItems[prevIndex].setAttribute('data-state', 'previous');

  let nextIndex = currentIndex + 1;
  if (nextIndex >= carouselItems.length) {
    nextIndex = 0;
  }
  carouselItems[nextIndex].setAttribute('data-state', 'next');
}

prevButton.addEventListener('click', () => {
  currentIndex--;
  if (currentIndex < 0) {
    currentIndex = carouselItems.length - 1;
  }
  updateCarousel();
});

nextButton.addEventListener('click', () => {
  currentIndex++;
  if (currentIndex >= carouselItems.length) {
    currentIndex = 0;
  }
  updateCarousel();
});
