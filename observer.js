// Navbar Toggler
const navButton = document.querySelector('.navbar-toggler[aria-expanded]');

function toggleNav({ target }) {
  const expanded = target.getAttribute('aria-expanded') === 'true' || false;
  navButton.setAttribute('aria-expanded', !expanded);
}

navButton.addEventListener('click', toggleNav);

// navbar display on scroll
const nav = document.querySelector('nav');
const headerBg = document.querySelector('.header-bg');

const options = {
  rootMargin: '-50px 0px 0px 0px',
};

const headerBgObserver = new IntersectionObserver(function (
  entries,
  headerBgObserver
) {
  entries.forEach(entry => {
    if (!entry.isIntersecting) {
      nav.classList.add('navbar-fixed');
    } else {
      nav.classList.remove('navbar-fixed');
    }
  });
},
options);

headerBgObserver.observe(headerBg);
