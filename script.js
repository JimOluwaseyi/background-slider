let currentImage = 0;

const images = [
  "resource/image/nature-1.avif",
  "resource/image/nature-2.avif",
  "resource/image/nature-3.avif",
  "resource/image/nature-4.avif",
  "resource/image/nature-5.avif",
];


const container = document.querySelector('.container');
const showImage = (number) => {
  document.body.style.backgroundImage = `url(${images[number]})`;
  container.style.backgroundImage = `url(${images[number]})`;
}

const nextButton = document.querySelector('.next-btn');
const prevButton = document.querySelector('.prev-btn');

prevButton.addEventListener('click', () => {
  currentImage--;
  if (currentImage < 0) {
    currentImage = images.length - 1;
  }
  showImage(currentImage);
});

nextButton.addEventListener('click', () => {
  currentImage++;
  if (currentImage > images.length - 1) {
    currentImage = 0;
  }
  showImage(currentImage);
});

showImage(currentImage);

