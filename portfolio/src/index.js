import './scss/style.scss'
import BurgerMenu from './js/burger';
import { changeTheme, loadTheme } from './js/theme';
import changingStateOfGallery from './js/gallery';
import loadLanguage from './js/translate';

const BURGER = document.querySelector('[data-burger]');
const NAV = document.querySelector('.nav');

new BurgerMenu({ nav: NAV, burger: BURGER });
const THEME_BTN = document.querySelector('[data-theme]');
const PORTFOLIO_SWITCHBOARD = document.querySelector('.portfolio__switchboard');
const LANGUAGE_BLOCK = document.querySelector('.language-switch');
const IMAGES = Array.from(document.querySelectorAll('.portfolio__img img'));

loadLanguage();
LANGUAGE_BLOCK.addEventListener('click', (e) => loadLanguage(e.target.dataset.lang));
document.addEventListener('DOMContentLoaded', () => {
  loadTheme();
  document.querySelectorAll('input').forEach(item => item.value = '');
  document.querySelector('textarea').value = '';
});
THEME_BTN.addEventListener('click', changeTheme);
PORTFOLIO_SWITCHBOARD.addEventListener('click', (e) => changingStateOfGallery(e.target, IMAGES));