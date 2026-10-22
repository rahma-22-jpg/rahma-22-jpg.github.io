
const quotes = [
  '"even little stars deserve to shine."',
  '"take your time, you are growing beautifully. ♡"',
  '"you are allowed to bloom at your own pace. 🌷"',
  '"small steps are still progress. ✨"',
  '"make your own magic, little star. 🩵"',
  '"you make the world a little brighter just by being you."'
];

const quote = document.getElementById('quote');
const quoteButton = document.getElementById('quote-btn');

let previousIndex = 0;

quoteButton.addEventListener('click', () => {
  let nextIndex;

  do {
    nextIndex = Math.floor(Math.random() * quotes.length);
  } while (nextIndex === previousIndex);

  previousIndex = nextIndex;

  quote.style.opacity = '0';

  setTimeout(() => {
    quote.textContent = quotes[nextIndex];
    quote.style.opacity = '1';
  }, 200);
});

quote.style.transition = 'opacity 0.2s ease';
