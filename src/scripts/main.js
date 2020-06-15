'use strict';

const list = document.querySelector('.gallery__list');
const largeImage = document.querySelector('.gallery__large-img');

list.addEventListener('click', (e) => {
  e.preventDefault();

  const linkAddress = e.target.parentNode.href;

  largeImage.src = linkAddress;
});
