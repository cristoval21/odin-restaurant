import './index.css';
import { loadHome } from './home.js';
import { loadMenu } from './menu.js';

const contentDiv = document.querySelector('.content');
loadHome(contentDiv);

document.addEventListener('click', e => {
  if (e.target.matches('.nav__button')) handleNavButtons(e);
});

function handleNavButtons(e) {
  if (e.target.classList.contains('nav__button--active')) return;

  switchActiveNav(e.target.id);
  switch (e.target.id) {
    case 'nav__button-home':
      console.log('home');
      loadHome(contentDiv);
      break;
    default:
      loadMenu(contentDiv);
      break;
  }
}

function switchActiveNav(toBeActiveId) {
  const currentlyActive = document.querySelector('.nav__button--active');
  const toBeActive = document.querySelector('#' + toBeActiveId);

  currentlyActive.classList.toggle('nav__button--active');
  toBeActive.classList.toggle('nav__button--active');
}