


import SlimSelect from 'slim-select';

// new SlimSelect({
//   select: '#selectElement'
// })
import Notiflix from 'notiflix';
// function fetchBreeds() {

// }

// function fetchCatByBreed(breedId) {

// }

const refs = {
    select: document.querySelector('.js-breed-select'),
    catsInfo: document.querySelector('js-cat-info'),
    loader: document.querySelector('js-loader'),
};

const IS_HIDDEN = 'is-hidden';

new SlimSelect({
    position: 'center-top',
    distance: '70px',
    timeout: '3000',
    fontFamily: 'Arial, sens-serif',
  });


  