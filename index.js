const padlOrel = Boolean(Math.round(Math.random()));
const resultText = document.querySelector('.vysledek');
const coin = document.querySelector('.mince');
if (padlOrel) {
    resultText.textContent = 'Padl orel';
    coin.classList.add('mince--orel');
  } else {
    resultText.textContent = 'Padla panna';
    coin.classList.add('mince--panna');
  }
  