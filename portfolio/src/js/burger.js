class BurgerMenu {
  constructor(options) {
    this.options = options;
    this.addListeners();
  }

  addListeners() {
    const NAV_LINKS = this.options.nav.querySelectorAll('.nav__link');
    NAV_LINKS.forEach(link => link.addEventListener('click', () => this.start()));
    this.options.burger.addEventListener('click', () => this.start());
  }

  start() {
    const { nav, burger } = this.options;
    nav.classList.toggle('nav--visible');
    burger.classList.toggle('burger--active');
  }
}

export default BurgerMenu;