const navToggle = document.querySelector('#nav-toggle');
const navToggleIcons = navToggle.firstChild.nextSibling;
const siteNavigation = document.querySelector('#nav-mobile-list');

navToggle.addEventListener('click', () => {
  const isOpened = navToggle.getAttribute('aria-expanded') === 'true';
  isOpened ? closeMenu() : openMenu();
});

const openMenu = () => {
  navToggle.setAttribute('aria-expanded', 'true');
  navToggleIcons.classList.remove('fa-bars');
  navToggleIcons.classList.add('fa-xmark');
  siteNavigation.setAttribute('data-state', 'opened');
};
const closeMenu = () => {
  navToggle.setAttribute('aria-expanded', 'false');
  siteNavigation.setAttribute('data-state', 'closing');
  navToggleIcons.classList.add('fa-bars');
  navToggleIcons.classList.remove('fa-xmark');

  siteNavigation.addEventListener(
    'animationend',
    () => {
      siteNavigation.setAttribute('data-state', 'closed');
    },
    { once: true }
  );
};
