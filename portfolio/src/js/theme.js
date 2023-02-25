const setTheme = (theme) => {
  localStorage.setItem('theme', theme);
  document.documentElement.className = theme;
  document.querySelector('[data-theme]').classList.toggle('header__theme--night');
};

const changeTheme = () => localStorage.getItem('theme') === 'dark' ? setTheme('light') : setTheme('dark');
const loadTheme = () => {
  const theme = localStorage.getItem('theme') || 'dark';
  setTheme(theme);
};

export { changeTheme, loadTheme };